---
title: '10連休と令和に向けて'
date: '2019-04-27'
category: '読み物'
---

今日から10連休である。私は会社員であると同時に個人事業主の側面が強いので働くか否かは自由であり、連休と呼ぶべきかは怪しいが、とりあえず毎日出退勤の打刻をする必要がなく、チャットサービスに常駐する必要がないという意味では大型の連休である。この連休中に平成が終わり令和を迎える。物事の節目が連休中に行われるのは新しい時代へのモチベーションを高める絶好の機会である。また、先日 RubyKaigi に参加して勉学意欲や技術的好奇心も高まりつつあるタイミングだ。宣言とメモを兼ねて今日から毎日やりたいことをまとめる。

## チャットシステム開発

仕事の関係で、割と高級なチャットシステムを Ruby on Rails で構築する必要が出てきた。ルーム制、招待制、既読管理、通知、認証等々の機能を持ったちょっとした Chatwork みたいなシステムの開発だ。納期は7月だが、趣味として「一丁気合い入れて作ってみるか」という気になっていて、ベースは連休中に作り上げるつもりだ。ActionCable は Rails に乗った当初にチュートリアルを流した程度にしか触ったことがないので技術的な知見が少なく、楽しみにしている。その他、連休明けから着手する仕事のうち、少し面倒なものをスタートダッシュで片付けておく心算でいる。

## 触っておきたい技術

いくつか軽く触っておこうと思っている技術がある。

### web アプリケーションフレームワーク

Ruby と Rails が言うほど死ぬ気配が見えないとはいえ、web アプリケーション開発のフレームワークは改めていくつか最新のチュートリアルを通しておきたい。Golang/gin、Elixir/Phoenix、Julia/Genie を計画している。

### フロントエンド

正直ここ半年ぐらいの動きはまるで追えていない。特に現状の業務で必要とはしていないが、久々に新しいものを触っておこうと思っている。mizchi 氏の発信あたりから最近のフロントエンド事情を探って、それっぽいチュートリアルをいくつかこなしておこうと思っている。

### xonsh

bash から zsh に移って、また bash に戻ってきている。最近 Pythonista の間で xonsh が流行っていて気になっている。私は宗教上の問題で Python を使う予定はないので恩恵がどのぐらい受けられるかは分からないが、私の観察範囲ではあまりに絶賛されているので乗り換えてみようと思っている。

### Atom -> VSCode

RubyKaigi で Drecom さんが[使用しているエディターの利用調査](https://twitter.com/DRECOM_TECH/status/1119505630845255680)をしていて、何と1位が VisualStudio Code であった。伸びているのは感じていたが、まさか vim を上回るとは想定外である。そして、私が現在使っている Atom は4位であった。GitHub も Microsoft に買収され、Atom の開発は継続すると公言はされているものの、やはり VSCode の気合いの入れようは違うのだろうか。少なくとも、世間では圧倒的に VSCode のシェアが増えていたようだ。Dvorak 配列との親和性の関係で vim は人気と知りつつ使っていなかったのだが、VSCode がここまでシェアを広げているとは思わなかった。せっかくなので今週の頭ぐらいから私も乗り換えてみている。初めて VSCode が世に出てきた時に触って以来だが、確かに手触りが良いので乗り換えを目指して今後も触っていく。

### TensorFlow

あまり機械学習畑には寄らないようにしているのだが、先日 mattn 氏が [TensorFlow を使ってブラックホールとポンデリングを見分ける](https://qiita.com/mattn/items/429fca1c72bcb99adbc3) という記事で、コードを書かずして機械学習による画像判別を行なっているのを見て興味を持った。作る側でなく利用する側であれば、教養のない私でも機械学習を習得した気分に浸れるかもしれないので触ってみようと思っている。

そして、今上記の記事を見ると追記されていて、mruby の TensorFlow Lite バインディングを mrbgems に上げてくれたらしい。先日、妻の希望で mruby のワークショップに行ったばかりで少し mruby と縁が出てきているので、こちらも少し触ってみようと思っている。 

### 英語

RubyKaigi 行きの移動中に英語を学習しようと iOS アプリを山のように落とした。せっかくだからゲーム感覚でできる英語のクイズで戦う RPG でもやろうと思ったのだが、どのゲームもスタミナ制が採用されており、まとまった時間で一気に勉強するような使い方ができなかったので全てアンインストールした。最終的に一番良かったのが [Duolingo](https://ja.duolingo.com) だった。

英語に関しては本当にコンプレックスを抱えていて、RubyKaigi の英語のセッションもほとんど聞き取れなかった。スピーカーが話した言葉がそのままリアルタイムでスクリーンに表示されていたので理解はできたが、別に英語が読める訳ではない。ただ、技術的なカンファレンスなので知っている単語ばかりが頻出するため、スライドと見比べれば言わんとしていることは何となく察せただけである。聞きは論外として、読みに関しても日常生活でリファレンスや技術的な論文を読んだり、英語でやり取りすることは多いが、これも技術方面の単語と例題のコードがあるから何となく察せているだけで、技術に全く関係のない普通のニュースを英語で読もうとすると、さっぱり読めないのだ。恐らく中学英語の域にも達していない。そもそも日本語すら怪しい。

そんな課題を感じていると、今日タイムリーなことに facebook で udzura 氏が「Duolingo はじめました。」とか言っているではないか。先日の RubyKaigi で英語で登壇した彼がである。これは私も Duolingo でちゃんと学ぶチャンスだと感じ、毎日一定の exp を稼ぐことを決意した訳である。

## 令和に向けて

今日から始めることは以上だ。引っ越しが終わり、ある程度生活も落ち着いてきた。新居は調光可能なダウンライトであることと、電子ドラムで定期的に運動できること、椅子やベッド等の家具にとことん拘ったことにより、目や体の調子が引っ越し前に比べて格段に良い。個人事業の方も今年稼ぎたかった分は7月には稼ぎ終える見込みで大変順調だ。心理的な障害は限りなく少なく、勉学に励むには絶好の環境になりつつあり、新しい時代を迎えるには最高の状態だ。そして、来年あたりには子供も考えているので、ここまで自由な年はしばらくないかもしれない。残り数日の平成、そして令和の走り始めも、日々を大切に過ごしていきたい。
