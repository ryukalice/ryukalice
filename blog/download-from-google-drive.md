---
title: '[Ruby on Rails] View から Google Drive 上のファイルをダウンロードする'
date: '2018-05-31'
category: 'Ruby on Rails'
---

## ゴール

```rb
link_to ファイル名, ダウンロードパス
```

手順は以下の通り

- Google認証を rails 上で突破
- Google Drive API で任意のディレクトリのファイルオブジェクトを取得
- ダウンロードURLを組み立てる

本記事は2018年5月に執筆したもので、API や認証関連の仕様は頻繁に変更されるので適時リファレンスの参照URLと内容は置き換える必要があるかもしれない。全手順でハマる覚悟で挑むこと。(全手順でハマった)

## 認証の準備

### クライアントIDとクライアントシークレットの取得

コードを書き始める前に、まずはアプリケーション外の作業を終わらせる。この記事では(面倒なので)詳しく手順を書かない。Google Developers Console 画面や URL は頻繁に変更されるので、 [http://console.developers.google.com](http://console.developers.google.com) でうまくやってきてほしい。アプリケーションのプロジェクトを新規作成し、Drive API を有効にし、認証情報を追加してクライアントIDとクライアントシークレットを取得する。

### リフレッシュトークンの取得

この方法も適時変わるので、気合いで取得してきてほしい。ググってヒットした内容は軒並み古かったので、Qiita や StackOverflow に頼らず、大人しく公式のリファレンスを読んだ方が早い。一応、2018年5月に私が取得した方法は下記の通り。

#### 認証コードの取得

ブラウザーから下記にアクセスし、アクセスしたい Google Drive のユーザーで認証して Drive へのアクセスを許可する。 `client_id` は上記で取得したものに置き換えること。とりあえずリダイレクトで自分のアプリケーションに戻してもらいたいので、rails server を起動しておき、 `redirect_url` にはサーバーのURLを指定する(http://localhost:3000 等)。  
https://accounts.google.com/o/oauth2/auth?client_id=取得したクライアントID&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/drive&response_type=code&approval_prompt=force&access_type=offline

うまくいくと `redirect_uri` で指定した URL に返ってくるが、下記のようにURLの GET パラメーターに `code` というキーがあるので、その値を控えておく。  
http://localhost:3000/?code=xxxxxxxxxxxxxxxxxxxxxxx#


#### リフレッシュトークンの取得

ターミナルから curl で [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token) にアクセスする。 `client_id` , `client_secret` , `redirect_uri` , `code` のパラメータを指定する。 `code` が上記で取得した認証コードだ。

```zsh
curl -d client_id=クライアントID -d client_secret=クライアントシークレット -d redirect_uri=http://localhost:3000 -d grant_type=authorization_code -d code=認証コード https://accounts.google.com/o/oauth2/token
```

うまくいけば、下記のような json が返ってくるので、リフレッシュトークンの値を控える。

```json
{
  "access_token" : "xxxxxxxx",
  "expires_in" : 3600,
  "refresh_token" : "xxxxxxxx",
  "token_type" : "Bearer"
}
```

### アプリケーションに必要な情報を環境変数に追加

アプリケーションから参照できる方法であれば何でも良いが、本記事では環境変数に追加したものとして `ENV` でアクセスする。

```ruby
GOOGLE_DRIVE_CLIENT_ID='xxxxxxxxxxxxxxxx.apps.googleusercontent.com'
GOOGLE_DRIVE_CLIENT_SECRET='xxxxxxxx_xxxxxxxx'
GOOGLE_DRIVE_REFRESH_TOKEN='xxxxxxxx'
```

## gem の追加

いよいよ Ruby on Rails アプリケーションのコードを書き始めることができる。 [https://github.com/gimite/google-drive-ruby](https://github.com/gimite/google-drive-ruby) を Gemfile に追加すると、必要な gem は一気にインストールされる。

```ruby
gem 'google_drive'
```

## Rails アプリケーションから Google 認証

Controller に下記を追加することで、ダウンロードURLのパラメータで指定するアクセストークン(`@token`)と、Google Drive API を使ってファイルオブジェクトを取得するための `GoogleDrive::Session` のインスタンス(`@drive`)を取得できる。

```ruby
require 'google_drive'

class ExampleController < ApplicationController
  require 'google_drive'

  def index
    auth_google_drive
    ...
  end

  private

  def auth_google_drive
    client = OAuth2::Client.new(
      ENV['GOOGLE_DRIVE_CLIENT_ID'], ENV['GOOGLE_DRIVE_CLIENT_SECRET'],
      site: 'https://accounts.google.com',
      token_url: '/o/oauth2/token',
      authorize_url: '/o/oauth2/auth'
    )

    @token = OAuth2::AccessToken.from_hash(
      client, { refresh_token: ENV['GOOGLE_DRIVE_REFRESH_TOKEN'], expires_at: 3600 }
    ).refresh!.token

    @drive = GoogleDrive.login_with_oauth(@token)
  end
end
```

## Google Drive API で任意のファイルを取得

API と言っても `google_drive` gem がラップしてくれているので、こちらは用意されたメソッドをコールすれば良い。ただ、そのインターフェースに大きな癖がある。

サブディレクトリまで掘っていきたい場合は、 `folders_by_name` メソッドと、 `subfolder_by_name` メソッドで潜る。例えば `/path/to` のファイル一覧を取得したい場合は下記のように書く。

```ruby
@drive.folders_by_name('path').subfolder_by_name('to').files
```

上記のコードは `files` で終わっているが、戻ってくる配列にはディレクトリの情報も含まれているので少々手荒だが `instance_of?` でファイルのみの配列を取得する。ちなみにディレクトリオブジェクトは `GoogleDrive::Collection` クラス、ファイルオブジェクトは `GoogleDrive::File` だ。ここまでインスタンス変数に保存しておこう。

```ruby
def index
  auth_google_drive
  @files = @drive.folders_by_name('path').subfolder_by_name('to').files.select { |file| file.instance_of?(GoogleDrive::File) }
end
```

## View にダウンロードURLを配置

`link_to` ヘルパーでダウンロードリンクを作成する。Google Drive からダウンロードするためには、下記のURLとパラメータを組み立ててやればいい。ファイルIDは  `GoogleDrive::File#id` を、 `oauth_token` パラメータにアクセストークン(`@token`)を、そして `alt=media` パラメータを与えるのがポイント。  
https://www.googleapis.com/drive/v3/files/ファイルID?oauth_token=アクセストークン&alt=media


最後に、先ほど Controller で作った `@files` (`GoogleDrive::File` の配列)からダウンロードリンクのリストを埋め込む。slim だと下記のようなコードになる。

```erb
ul
  - @files.each do |file|
    li = link_to file.name, "https://www.googleapis.com/drive/v3/files/#{file.id}?oauth_token=#{@token}&alt=media"
```
