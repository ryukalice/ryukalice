---
title: 'raise で例外クラスにパラメーターを与える'
date: '2016-09-27'
category: 'Ruby on Rails'
---

## 解決したいコード

例えば、CSV ファイルから何かしらのデータを `transaction` でインポートする時に「23行目の2列目でエラーが発生しました。」といったエラーメッセージを発行したいとする。

```ruby
class CsvImportError < StandardError; end

raise CsvImportError, I18n.t('error_csv_import', row: row, col: col)
```

こうすると、エラーメッセージの内容まで CSV のインポートクラスが背負う羽目になり、エラーの種類やメッセージの複雑度が増えてきた時に、プログラマーが辛みを背負うことになる。

## 1つの解決策

`raise` の第一引数には例外クラスのインスタンスを渡すことができるので、以下のように書くことができる。

```ruby
class CsvImportError < StandardError
  def initialize(row, col)
    super I18n.t('error_csv_import', row: row, col: col)
  end
end

raise CsvImportError.new(row, col)
```

ただ、利用側のコードで明示的に例外クラスのインスタンス化を見せられるのは少し辛い。

## もう1つの解決策

`raise` の第二引数は例外クラスのイニシャライザーに渡されるのを利用して、下記のように書くことができる。

```ruby
class CsvImportError < StandardError
  def initialize(row:, col:)
    super I18n.t('error_csv_import', row: row, col: col)
  end

  # あるいは呼び出し側にパラメーターを託しても良い
  # def initialize(params)
  #   super I18n.t('error_csv_import', params)
  # end
end

raise CsvImportError, row: row, col: col
```

Ruby は第二引数に `String` のメッセージを期待していると思うが、 `{ row: row, col: col }` という `Hash` を渡している。動的型付けとキーワード引数の特性を利用した、少しハックじみたアプローチではあるが、 `raise 例外クラス, パラメータのHash` という文法で書けるのは少し嬉しい。
