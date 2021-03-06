---
title: 'web系エンジニアへのキャリアチェンジについて'
date: '2019-05-30'
category: '読み物'
---

この記事では、私がweb系エンジニアにキャリアチェンジした実体験と、今からweb系エンジニアにキャリアチェンジしたい方への道筋の提案を行う。

## 筆者について

この記事は長文だ。私のキャリアに興味がなければ、私のキャリアにおける実体験も、キャリアチェンジを目指す方に送る私からのアドバイスも何の参考にもならないと思うので少しだけ自慢と自虐をしておくと、私はエンジニアとしてそこそこの成功を収めている方だ。地方でのフルリモート(在宅)勤務で年収1,000万以上、労働時間は一般的な社会人に比べてとても短く、経済的にも時間的にもある程度の自由を有している。ただし、高卒、コミュ障、引きこもり、友人は数人、エンジニアには致命的な疲れ目持ちとスペックは低めだ。この記事では、そんな私がどのようにして収入を増やしていったか、どのようにしてフルリモート勤務の生活を手に入れたか、等についても記述していく。

## 背景

まず、何故このような記事を書こうと思ったかについて伝えたい。私は最近、Twitterでプログラミング初学者の方々を一気に100人程フォローして、初学者の方々がどんな壁にあたり、どんなことにモチベーションを感じて、どんな悩みを持って、どんなキャリアパスを想像しているのかを観察している。これは近々教育系の事業に携わる可能性があるのと、単純に私がエンジニアが幸せに働ける社会を目指すことを1つの人生目標にしていて、労働問題についての関心が高いためだ。その中で初学者の障害になっている業界の問題を3つ感じた。

### 1. プログラミングスクールやオンラインサロンが抱える問題

1つは、有料プログラミングスクールや有料オンラインサロンの大半が初学者を騙して収益を狙う悪徳なビジネスで成り立っていることだ。この辺は完全に無法地帯になっていて、初学者は業界に関する知見がないのでスクールやサロンが悪徳かどうかを判断しにくく、初学者でない人はわざわざお金を払ってスクールやサロンに加入する必要がないので、初学者だけを閉じ込めて外の世界を見せないための檻と化してしまっている。また、月額のスクールやサロンは閉じ込めれば閉じ込める程儲かるビジネスモデルになっているので、就業を遅らせたいスクールと、就業を早めたい初学者のミスマッチが発生している。

勿論、悪徳ではない真っ当なプログラミングスクールも沢山あるし知人が運営しているスクールもいくつかあるが、共通して抱えている問題は優秀な講師が少なすぎることだ。優秀な講師が少ない原因の1つは、スクール講師としてホールドされた瞬間に現役エンジニアではなく講師にクラスチェンジしてしまうため、受講者側の「退任済みの講師専門エンジニアに教わるのは不安だ」という意見とデッドロックを起こしてしまうことだ。もう1つの問題は、エンジニアは講師をやるよりエンジニアリングで稼いだ方が圧倒的に儲かることだ。月収100万のエンジニアをスクールで同額で雇ったとしたら、当然受講料を跳ねあげなければ採算が取れない訳だが、月額数十万のプログラミングスクールに通いたがる人は少ないのでビジネスとして成り立ち辛くなる。誤解無きように言っておくと、私はプログラミングスクールを利用することそのものを否定している訳ではなく、良質なプログラミングスクールに出会える確率が低いことと、良質であるか否かを初学者が判断することは難しいことが、初学者の壁になっていることを問題視している。

さて、この解決策の提案としては現役のエンジニアにお金を払って副業でメンターを務めてもらう方法が1つだ。もう1つは、独学で頑張るかだ。個人的な最適解は前者だが、私は単純に貧乏だったし当時は Twitter もやっていなくて身近にメンターを務めてくれそうなエンジニアもいなかったので、どちらかと言うと後者だった。これについては、この記事の終盤にもう少し詳しく記述する。

### 2. 「何を勉強すれば良いのかわからない」問題

Progate やドットインストール等、初学者が勉学に励むにあたって有効なサービスは増えてきた。ただ、初学者の方々を観察していて感じたのは、就業を目的としているはずなのに Progate での学習に半年以上を費やしているような方が散見されるのだ。Progate は学習を進める度にレベルが上がることや、クリア印が埋まっていくことに快感を感じるような工夫がされており、初学者が挫折しにくいように配慮されている。しかし、これが効きすぎて逆に離れられない初学者の方もいるようだ。離れられない原因は Progate が魅力的だからという理由だけではなく、単純に Progate で一定のカリキュラムを終えた後に何をしたら良いかわからない人が多いのだ。

有識者の人々は「作りたいものを作ることから始めろ」とか「作りたいものがないのに勉強してどうするの？」とか言うのだが、初学者の多くは漠然と「web系エンジニアとしてデビューしたい」という欲望しかなく、作りたいプロダクトなんてない場合がほとんどだ。「ぶっちゃけweb系エンジニアになればどんなものが作れるのかも想像できてないぜ」という人も大勢いるだろう。別にプロダクトを作りたい訳ではなく「これからの時代稼ぎやすい」と言われたから、「web系エンジニアはフルリモートの仕事が多い」と聞いたからといった動機の人々は多い。そういった動機でweb系エンジニアを目指すのは決して間違っていない。私がエンジニアである理由も楽に稼げて家に引きこもっていられるからだ。ただ、作りたいものがなければ勉学の先が見えない問題にぶち当たることは避けられないだろう。

この解決策の提案は「とりあえず働け」である。Indeed 等で年収300万ぐらいで未経験で入れる企業を探したり、クラウドワークス等で時給800円のマークアップのバイトを探したりしてみよう。収入を求めなければ、仕事は沢山転がっている。実際のプロダクト開発メンバーの一員になれば、自分で作るプロダクトの課題を考えなくてもよくなる。何より、実際のプロダクトに関わって他の先輩エンジニアと一緒に働くと成長が早い。記事執筆時点では5月の末だが、4月に未経験で入社して2ヶ月経たないうちに、実際のプロダクト開発の中でメキメキと力を付けて自立しつつある子もいる。有識者に囲まれて実際のプロダクト開発に関わることは大きなアドバンテージがある。この辺りについても記事の終盤に詳しく記述する。

とはいえ、就業に抵抗がある人が大多数だろう。そうであっても **仕事を探すことだけはしてみよう。実際の求人を目にして、どのようなサービスを人々が作っているのか、どのような人材を人々が求めているのか等を観察しているうちに、作りたいものや勉学の方向性が見えてくるかもしれない。** 勿論、今すぐ就業したくない人が目指す選択肢についても記事の終盤に記述する。

### 3. 楽して稼がせたくない人が多い問題

「社会の厳しさの9割は『社会は厳しくなくてはならない』と考えている人々の絶え間ない努力によって作られている」とはよく言ったもので、「エンジニアは数ヶ月でなれるほど甘くない」とか「月80万は夢見すぎ」とか「フルリモートなんて無理」とか「フリーランスは稼げない」とか、様々な "エンジニアは甘くない論" を目にすることが多い。これは仕方のないことで「誰でも未経験で即フリーランスでフルリモート月収100万♪」みたいな広告や書籍が増えてきたことに対して抵抗する声が増えているのだ。ちなみに私も「誰でも」の部分だけは明確に否定しておく。現実問題、エンジニアに求められる要素には地頭や要領の良さ、コンピューターサイエンスへの興味、学生時代の専攻、単純なセンス、両親の職種、余暇の確保可能量、貯蓄、人脈、勉学量等、自分でコントロールできる要素からできない要素まで様々であって、何か秀でていなければ茨の道である。ちなみに私は「要領の良さ」のみをクリアしている。さて、話が逸れてしまったが、エンジニアは甘くない論は、上述とは別に妬みやポジショントーク、視野の狭さといった様々なマイナスな要素から発せられる声が多いのだ。

この解決策の提案は、勿論無視することだ。唯一真に受けても良い声は、実際にやってみて失敗した人、あるいは実際にやってみて失敗した人に囲まれている人の声だけだ。多くの否定的な意見は経験のない人から発せられる。転職経験がなく自社しか知らない人々が「エンジニアは稼げない」と言うが現実は月80万以上稼いでいるエンジニアは山ほどいて、稼げるかどうかは仕事の数や関わっているプロダクトが稼げているかに寄るのだ。周りにフルリモート勤務の人がいない人が「フルリモートは無理」と言うが私が今携わっているプロダクトは私もディレクターもデザイナーも皆リモートだ。つまりプロダクトによるのだ。即日フリーランスはリスクが高すぎるにしても、数年でフリーランスになることも月収100万を達成することも当然可能でそういった人々は沢山いる。私はフルリモート勤務になるまで半年で済んだし、経験年数2年でフリーランスになって初年度で最高月収100万円を大きく上回った。それまでにどのようなキャリアパスを歩んできたのかについて話していこう。

## 私のキャリアパス

ここまでで初学者がweb系エンジニアを目指すにあたって存在する障壁について書いたが、ここからは私がどのようにしてweb系エンジニアとしてのキャリアを積み上げていったのかを紹介する。

### ブラック企業に5年間

母子家庭で大学に行く余裕や時間がなかった私は、高校を卒業してすぐに就職した。私が在籍していた工業高校は成績の良い人から順に求人票を抜いていくシステムだった。私の成績は毎回40位中20位前後と平凡な上に帰宅部だったため、第一志望の企業を成績上位の運動部に取られてしまい、余った求人の中から雑に決めた。「労働組合」の欄に○がついていないこと以外は条件の良さそうな企業に見えた覚えがある。定員1人の枠に同成績ぐらいの友人と2人で受験したが何故か2人とも受かった。

入社した企業は地元の中小企業の工場だった。工場の中に技術部があり、その中に10人弱のソフトウェア開発チームがあり、そこに配属された。ただ、その企業は絵に書いたようなブラック企業だった。毎日深夜残業が当たり前で休日はなく、同期は毎日2時間ぐらい立たせて説教をするような上司にぶち当たっていた。私は良い上司に恵まれたのでハラスメント的な被害は受けなかったが、単純に労働量が凄まじかった。車通勤なので終電の概念は存在せず、始業は8時だったため睡眠時間は2,3時間取れれば良い方で、ひと昔前に流行った地獄のミサワの「昨日4時間も寝ちゃいましたー！」みたいな画像をまさに体現していた。残業自慢でマウントを取られることは生涯ないだろう。勿論残業手当はなかった。当時は「みなし残業手当をもらっていたら、みなし分以上残業しても残業手当が出ることはない」という暴論を何故か信じていた。労働基準法、絶対に自分で読んだ方がいい。そのため、年収は250万弱でスタートした。月の手取りは16万ぐらいで、少なく見えると思うが高卒の新卒で田舎の工場務めにしては、これでも割と良い方だった。最終的には5年務めて250万強ぐらいまで上がった。

その他、技術職でも作業服の着用必須、始業時間前のラジオ体操強制参加、新人研修で大声を出させられる、毎朝社訓の唱和がある、労働組合がない、有給取得に理由が必須、若手と40代ばかりで中堅社員がいないといったブラック企業の特徴を網羅していたが、今思い返して一番辛かったのは、今後のキャリアに何一つとして良い影響を与えなかったことだ。むしろ、5年間をほとんど棒に振ったのだ。この5年間で自己成長できる企業に務めていられたら今頃どうなっていただろう、と思いを馳せたくなることもあるが基本的に考えないようにしている。ただ、どうしても毎年成人の日には成人式に休日出勤命令で行けなかったことを思い出して辛い気持ちになる。まあそんな話はいい。

**「web系ではないとはいえ、プログラマーとしての経験は積めたでしょ？ハードワークだし」みたいなことをよく言われるが、そんなことは断固としてない。**組み込み系や Windows アプリケーションの開発を行なっていたが、本当にゴミにようなコードしか書いていないし、生産性もクソもなかった。git なんて高級なものはない。全ての修正履歴はコードの中にコメントとして残る。数千行のうち9割がコメントで、残り1割の生きているコードが数千行のうちのどこかに散らばっているようなファイルと格闘したこともある。1,000行を超える関数なんて都市伝説だと思っている人もいると思うが、残念ながら実在している。大袈裟ではなく、今やれば2分で終わるような仕事に丸一日使っていた。エンジニアの生産性には100倍の差があるなんて言葉を聞くが、それは事実だ。自動テストなんて書いたこともなく、1行の改修をする度に何百何千とあるテスト項目表に従って全てのテストを手動で数日かけて通す決まりがあった。c++ を使っていたがオブジェクト指向のオの字もなく、なんちゃって俺俺オブジェクト指向でクソコードを量産しまくった。カプセル化、継承、ポリモーフィズムの全てを知らないのにオブジェクト指向で書いているつもりだった。それでどこにオブジェクト指向の要素を見出していたかって？私もよくわからない。自分で作ったソフトウェアは自分で納入しに行くので出張がとても多かったことと、ドキュメント関連の仕事や無駄な会議も多かったことで、プログラミングや設計に関わる時間は少なかったし、知見が溜まるスピードも遅かった。そもそも教えを請える有識者がいなかったので成長できるはずもなかった。

「ハードワークで経験を積んだから今の成功があるんだね！」みたいなことをよく言われるが、それは大きな誤りだ。残業が常態化するような時間意識の低い会社の業務なんて大抵非効率なので、無駄なバッドノウハウが積み重なり、時間に対する価値を見失い、堕落していくのがほとんどだ。**時間意識の低い企業で時間意識の低い人々に囲まれて働いて生産性が上がるはずはない。**私がエンジニアとして急速に伸び始めたのは、労働時間は圧倒的に少ないのに圧倒的に生産性が高く、とても美しいコードを書くお客さんと出会った時だ。初学者の皆様には **「短い労働時間の追求こそが技術力を高める」**ということを覚えていて頂けると嬉しい。誤った方法を何度反復したところで一生上達することはない。自分の名前なんて何万回と書いたはずなのに字が上手くならないのと同じだ。ガムシャラに時間を費やしたところで上達することはないのだ。**そもそも法律に違反している企業に加担していた過去の実績なんて汚点でしかないので恥じることはあっても誇ることはありえないだろう。**

今ブラック企業に務めている人は絶対に辞めた方がいい。ブラック勤めが続くと本当に頭がおかしくなるのだ。残業をしてない人が許せなくなるし、ブラックで頑張ってる自分が誇らしくなるし、ブラック企業に加担しているという自覚もなくなる。そんな自分を救おうとする声すら鬱陶しくなってくる。別に疲れていたり病んでいたりする自覚はないのに、階段を降りる時にふと「このまま落ちて大怪我して大ごとにしてみようかな」と思ったり、電車を待っている時にふと「飛び込んでみるのもありかもな」とか普通に思うようになる。自傷癖や自殺願望が全くないにも関わらずだ。このような信じられない精神状態に平気でなってしまうのが過労だ。どうか気をつけてほしい。

### 1年間の無職時代

労働問題の話をするとつい熱くなってしまうが、次の話に移ろう。上述のブラック企業は5年で辞めた。辞めた理由は奇なるもので、ネットワークビジネス(MLM)の勧誘を受ける過程で視野が広がり、将来について考えたり、時間価値について考えたりする機会ができて、退職に踏み切ることができたのだ。MLMの勧誘は常套手段として自己啓発とメンタリングから始まるようで、その自己啓発とメンタリングが当時の私にハマったことでブラック企業に務め続けることのリスクを認識できたのだ。この出来事については強烈な思い出であるため、10記事前ぐらいのブログに "ネットワークビジネスの勧誘で人生が変わった話" というタイトルで詳細に記録している。これも私のキャリアパスに大きな影響を与えた人生のターニングポイントの話なので、興味があったら読んでみて頂けると嬉しい。脱線させたくないのでリンクは貼らない。MLMは始めてない。

ただ、この出来事から私は自己啓発病にかかった。会社を辞めてからすぐに就職せずに、自己啓発系の記事を毎日投稿するwebサイトの運営を始めた。webの知識は全くなかったので書店で WordPress の本を買って何とかページを作り上げた。サイトの構築だけで半年近くかかって、半年運用した成果は広告とアフィリエイトで月に1万円程度の不労所得が得られるようになっただけだった。.com ドメインやサーバー代を差し引くと(差し引かなくても)、当然暮らしていけるはずもなく貯金が底を尽きた。

この頃は無職で時間が有り余っていたので、自己啓発書を読みまくった。1000冊近くは読んだと思う。自己啓発に関する tips は300記事程書いた。側から見れば完全に無駄な1年間ではあるが、自己啓発にハマったことでの学びは割とあった。今も大事にしていることは1つだけで、とにかく**「自分と人の時間を大切にする」**ということだ。これを当時徹底的に叩き込んだことが今も良い行動指針になっている。時間の大切さについて語り出すとまた1記事できてしまうので話を戻そう。

### web系へのキャリアチェンジ

そんなこんなで貯金が尽きた私は、当時書いていた自分のブログに "貯金が尽きたので誰か仕事をください" みたいなタイトルで投稿した。前職でやっていたことや、自分の適正、長所/短所等を書いた雑な投稿だ。これが何故かとあるweb系企業の社長の目に届いたらしく、facebook メッセージで「うちにエントリーしてみませんか？」と連絡をくれたのだ。これが二度目の人生のターニングポイントである。未経験でも良いと言ってくれたので面接を受けに行って採用され、web系エンジニアとしてのキャリアが始まった。

前職で c, c++ を少しだけ触れていたとはいえ、役に立つ知識はほとんどなかった。webに関する知識は GET も POST も知らないし、インターネットの仕組みすら知らない。開発に関する知識は git は知らないし、テストも知らない。事前知識があったとすれば、int といえば整数、string といえば文字列、cd といえば change directory、ls といえばカレントディレクトリの中が見える、本当にそれぐらいのものだった。間違いなくこの記事を読んでいる初学者の方より知識がなかっただろう。さあ、ここから初学者の方にとって興味深い話になってくるはずだ。

#### アルバイト期間

入社は4月だったのだが、内定をもらったのは3月の上旬で、入社までの3週間はアルバイトをさせて頂けることになった。そして主な業務内容は本を読むだけである。「Ruby on Rails の案件に入ってもらうから勉強しておいてね」と言われた。まさか、お金を貰いながら勉強させて貰えるとは至れり尽くせりである。この3週間で、Ruby on Rails の教本に従ってサンプルアプリケーションを1回作って、rails チュートリアルを1周した。rails チュートリアルは git でアントラッキングファイルが消えなくなったり、ググってもわからない環境依存のエラーに出くわしたりして最初からやり直したので1.5周ぐらいか。そして勉強の合間で、少しだけ軽い雑用も任せてもらえた。「この URL のリストにアクセスして表示される json をこのサイトに貼り付けて整形して、値が正しいかどうか目視して」みたいな謎の仕事だった覚えがある。

後半は実務にも携わらせてもらった。最初はお客さんの元に1人で出されて、新人エンジニアでもできるレベルの仕事を振ってもらった。Ruby on Rails で作られたシステムの簡易的な修正作業だ。作業内容は、文言の修正、数行程度のメソッド内に絞られるの小さなバグの修正といった簡単な仕事だけを任せてもらえた。Ruby on Rails の知識がほとんどなくても、「model は app/models の中にある」程度のディレクトリ構造を知っていて、エディターの検索/置換機能が使えれば充分にこなすことができる仕事だった。ここでトピックブランチを作って GitHub (bitbucket だったかも) で pull request を出して merge してもらう初めての体験をした。プルリク童貞卒業である。誤字修正レベルの仕事しかしていないのに「ありがとうございます！」とか「早い！」とか優しい言葉をお客さんがかけてくれるのがブラック卒の自分には衝撃的な出来事だった。これはどうでもいい話だが、この時にチャットで「xxx の件について下記にて pull request を発行しておりますので、ご確認の程よろしくお願いいたします。 https...」みたいな確認依頼を出したら「かたいですよ！」と言われ、次の pull request を出した後に思い切って「ご確認お願いします！https...」と言ったら「そんな感じです！」と言われたことで、お客様は神様といった考えではなく対等なチームメンバーとして扱う文化の存在を知った。

また、別のお客さんとの仕事で OSS の改修を行う仕事があった。Redmine というタスクトラッキングシステムのプラグインの改修である。私の commit を履歴から探すと2015年に6件のとても軽微な修正が行われていた。ちょっとした CRUD を修正するとか、動いてないコードを削除するとか、マークアップのバグを修正するとか、その程度だ。当時はテストコードを書く技量がなかったので、私が実装を書いて上司がテストコードを書いてくれていたようだ(Commit 履歴から察するに)。この仕事で、OSS に contribute するという概念を知ることができた。  
[https://github.com/agileware-jp/redmine_work_days](https://github.com/agileware-jp/redmine_work_days)


#### 入社一発目に炎上

晴れて4月に入社して最初の仕事は、プロジェクトリーダーとして新規システムのディレクションと開発を行うことだった。リーダーとは名ばかりで、難しい業務はマネージャーのサポートの元で行っていた。最初の業務は開発前のディレクションだ。ディレクションを語弊を恐れず凄く雑に説明すると、エンドユーザーに「どんなものが欲しいですか？こんなのどうですか？」とヒアリングと提案を繰り返しながら仕様を決める工程のことだ。勿論素人ではあるし、お客さんもそのことを承知の上だったので "web ディレクションの教科書" みたいな名前の書籍を紹介してもらって勉強しながら対応した。外注のデザイナーさんやマネージャーと一緒に何度もエンドユーザーさんの元に訪問して会議を繰り返したが、何から何までうまくいかずにディレクションだけで数ヶ月の遅れが発生した。最終的に、お客さんのコンサルティング部隊にディレクション業務を代わってもらうことになった。無念である。ただ、このコンサルタントの方の知識量や、トークとプレゼンテーションのテクニックが凄まじく「コンサル」という単語に胡散臭さを覚えていた私の偏見が一変した。このコンサルタントの方は、プライベートで飲みに誘って頂き、キャリアの相談に乗ってもらった上に奢ってもらう等、外注-顧客の関係では今まで考えられなかったようなお世話をしてもらって大変感謝している。「凄い人は凄い」という当たり前の事実を身を以て体験した出来事である。

さて、このコンサルタントの方々のお陰で開発業務に入れるようになった訳だが、私の Ruby on Rails の知識は上述の通り、書籍のサンプルアプリ1本、railsチュートリアルのサンプルアプリ1本、軽微な修正を何度か、というレベルであった。この頃は恐らく7月か8月あたりだったと思うが、4月からここまでディレクションしかしてこなかったので不安だらけのスタートだった。開発体制は、お客さんの元にいるフリーランスエンジニアが2人と、自社のエンジニアが基本的に私1人とたまにヘルプで誰かが来る、といった状況だった。結果としては、フリーランスエンジニアのお二人がガリガリと開発を進めていき、ものの数日で Bootstrap でのプロトタイプがほぼほぼ完成してしまった。Salesforce との通信等といった複雑な機能も全て仕上げてくださり、私は残った小さな機能や後から出てきた機能を実装したり、デザイナーさんから上がってきた静的な HTML と CSS を rails に組み込んだり等の単純作業を行っていた。この作業の中で、私の pull request をフリーランスのお二人がレビューしてくださり、素っ頓狂なコードや発言を投げつける私の面倒を見てくれた。*(フォロワーさんにそのお一人がいるのでお名前を出そうか迷ったものの控えますが、その節は本当にありがとうございました。)*

問題は、このお二人の契約が終了してからである。途中から自社とエンドユーザーが直で契約を結ぶことになり、コンサルタントの方々は残ったものの、開発(実装)要員は自社だけになった。ここで初めてプロジェクトリーダーの名が付いていた意味を知ることになる。コアな機能は全て作り終えているとはいえ、軽微な残作業が多数残存していた上、追加仕様も増え続けていたので相変わらず炎上中である。社内の手が空いた人や中途採用した人に部分部分で参画してもらいながら、タスクを消化していった。幸いにして、Ruby on Rails 経験2ヶ月程度とはいえ、技術的に手が止まることはなかった。炎上しながらも無事(?)にこの案件は終了し、いろんな意味で成長を感じた数ヶ月(多分5ヶ月ぐらい)であった。なんと、この会社は残業手当が支給されていたので、この炎上期間中は月の手取りが30万ぐらいあった。ちなみに残業手当を除いた契約上の年収は300万弱だ。未経験の当時20代中盤としては少なくはない金額だと思う。

さて、ここまで読んで頂きありがとうございます。ここからリモートワークや独立等に向けたサクセスストーリーを語り始めるので、まだまだ長文が続きますが一旦小休憩を挟みましょう。こうして私がweb系エンジニアとしてのデビューを果たした訳ですが、間にディレクション業務が入ったのを除くと、ここまでで Ruby on Rails の経験は勉強時間を含めて2,3ヶ月といったところです。ご覧の通り、自社と顧客に恵まれているとはいえ、Ruby on Rails のシステム保守をリーダーとして務めるまでには成長しました。これが初学者の方々に伝えたいことの1つです。エンジニアになるために半年かかるとか、1000時間勉強が要るとか、そういった言葉に私が否定的なのは自身の体験からです。これは私だけの稀有なケースではありません。**今年の4月に未経験で入社して5月末の現時点で、もうエンジニアとしてガリガリ働いている人は沢山存在します。**有識者と共に実際のプロダクトに触れながら業務を行うことが重要で、正しいスクールやメンターの元で教育のプロに直接教えを請えるのであれば更に短い期間で成長できるはずです。勉強時間や期間に捉われず、世のエンジニアの中には未経験から1,2ヶ月で一線で働いている人が沢山いることを覚えておいて頂けると嬉しいです。小休憩終わり。

#### 急成長

さて、ここから小さな案件や社内のヘルプ等を挟んで9月か10月頃、これから退職までの1年半、1社の顧客の元で開発業務を行うことになる。業務内容はアルバイト時代に少しかじった Redmine のプラグイン開発だ。この企業さんの技術レベルはとても高く、コードレビューがとても厳しかった。最初の頃はたった5行の改修を pull request したら全行に指摘のコメントが返ってくるような状態であった。前回のプロジェクトでは、大半の期間を一人で開発していたので、最高に優秀な技術者に自分の書く全てのコードをレビューしてもらえるのは最高の体験だった。メンタルに深刻な脆弱性を抱えている私は終わらない requests changes に何度も心が折れそうになりつつも、急成長している実感は感じていた。Ruby や Ruby on Rails の慣習から良い設計悪い設計等について大量に教わった。**美しいコードを書かなければ仕事の成果として認められない、適切なテストコードが足りていなければレビューすら始まらない、といった環境で育った経験がなければ独立に踏み込めてはいなかっただろう。**就業せずに急成長したければメンターを雇うように私が勧めるのは、この経験があったからだ。有識者に日常的にコードレビューしてもらう成長速度は、是非体感してみてほしい。

また、この企業さんの中に労働時間が誰よりも短いのに誰よりも早く成果を上げて、皆に強く評価されている人がいた。コードレビューと別に、もう1つ学ばせて頂いたのは労働時間は少なければ少ないほど生産性が上がるということだ。何かのイベントでオフィスにお邪魔させて頂いた時に、そのことについて誰かと話しているのを聞いて、「あの圧倒的な生産性と技術力の秘密は労働時間の短縮にあるのか...」と感じた。私はその人を勝手に心のメンターとして定めて目標にしていたので、労働時間を減らすことに尽力した。すると、目に見えて生産性がメキメキと上がった。これは独立して8時間勤務から解放された時に更に強く感じた体験だ。

そして、この企業さんには業務外でも社内イベントに何度もお招き頂いたり、誕生日には自社オフィスにケーキを送って頂いたり、何度も奢って頂いたり等、公私共にお世話になりまくっていて感謝を言葉では言い表せない。ここの社長さんとは退職した今も妻共々(仕事ではなくプライベートで)お付き合いさせて頂いており、食事をご一緒したり、今度新居に泊まりに来て頂く約束をしたりしている。関係ないが、参画したての頃に私が slack で「かしこまりました」と言っただけで「かしこまらんでいい。対等なチームメンバーやで。」と言われたことを強く覚えている。別の顧客元で似たような体験を上述したが「やっぱり web 系企業ってそういう文化が多いのか...」と改めて感じた。

#### 社内政治

さて、上述の企業に1年半に渡ってお世話になり、そのまま退職をするわけだが、ここまでの話だけだと「顧客に恵まれてただけやんけ！」と言われてしまいそうなので、この期間中に個人として主体的に行動を起こした社内政治についてもお話しておきたい。

最初に社内政治を頑張ったのはリモートワークの解禁だ。当時博多(移転後天神)の本社オフィスまでの移動時間が2時間弱、北九州拠点のオフィスまでの移動時間に1時間半弱かかっていた。田舎暮らしで自宅から駅まで早歩きで20分かかるような状態だったので、一日のスタミナはほぼ通勤で使い切っていたのだ。契約していた企業さんではリモートワークが許可されていて、外注先の私も家で働いて良いと言ってもらえたので、社長に掛け合ってみることにした。結果、誰も利用していない在宅勤務規定とやらが就業規則上は存在していることがわかった。ただ、その規定には在宅勤務を行う条件として「勤続年数3年以上」といった内容が記述されていて、入社半年の私には該当しなかった。社長が話のわかる人で助かったのだが、この規定に「ただし、上長の推薦がある場合はok」のような但し書きを追加すればワンチャンあるとの情報を頂いた。社長としてはリモートワークをもっと推進して外部にアピールしたい思いもあるとのことで、ワンチャンどころではないなと思った。しかし、社内規定を変えるには、幹部陣を除いた従業員全員のアンケートを取って過半数以上が賛成した場合のみ、従業員代表者を通して会社に対して規定の改定を要求できることが分かった。結構大変だなーと思いつつもリターンは大きかったので、早速従業員代表に掛け合ってアンケートを取ってもらって会社に要望を提出してもらった(大変なのは私ではなく従業員代表なのだけれど)。その結果として、私は在宅でリモートワークを始めるに至ったのだ。この体験から、**労働環境は与えられるものではなく能動的に手に入れるもの**であることを学んだ。

リモートワーク解禁のために動いたことは、副次的な効果を生んだ。従業員代表の推薦アンケートで一位を獲得してしまったのだ。前任の従業員代表は役員一歩手前の役職だったし、まさか入社半年の新入社員な上、半数以上の社員とは喋ったこともない上、そもそも家に引きこもっている私に投票する人がいるなんて夢にも思わず楽観していたのだが、在宅勤務規定の改定に向けて動いたことで「行動的で会社に堂々と意見できる奴」だと認識されていたらしい。拒否権はあったのだが、なんか悪かったので受け入れた。結構面倒な業務は増えてしまったが、新入社員なのに従業員代表に抜擢されたヤベー奴みたいな印象は獲得した。今思えば、1社目でも気が付いたら安全衛生委員会だの広報委員だの職場委員だのその他様々な委員会に属していたので、そういった適正があるのかもしれない。

他にも在宅勤務である分、存在感を出せるように意識していた。社内 slack の質問チャンネルへの技術的質問に積極的に答えたり、当時流行り始めていた slack の times を開設するように会社に提案してみたり、その times で積極的に発言したり、たまに出社するときに新入社員向けにオブジェクト指向の勉強会を開いたり(勿論この頃は俺俺オブジェクト指向は流石に卒業していた)、様々な場面で自分という人間を評価してもらえるように政治していた。会社が Python と人工知能開発の教本を書くというので協力者として手を上げ、Python と人工知能を勉強しまくって教本で作るサンプルプログラムの要素技術を提供したりもした。RubyWorld Conference 等のイベントに積極参加したり、Rails Girls Kitakyushu のコーチ代表を行ったりもした。また、退職する数ヶ月前には副業規定を定めてもらうように動き、その結果、退職前に個人事業主として開業して独立の準備を進めることができた(ちなみに副業は Cake PHP で作られたシステムの改修だった)。こうして書き上げてみると、たった2年間の間に様々な活動を行ったものだ。結果として、聞いている限りでは後輩からの憧れや従業員からの信頼は得られていたようで、2年目で昇格して年収は350万弱まで上がった。

### 独立

こうして丸2年間、web系エンジニアとしての経験を積んだ後に個人事業一本の生活を始めた。幸いにして仕事は沢山あった。多くの仕事は、先に前職を退職した人から流してもらった(この方は前職の上司で、独立してからも仕事を流してくれて、そして現在の上司でもあり、恐ろしい程お世話になっている)。その他、facebook で声をかけてもらったり、在職中に副業としてお手伝いしていた企業さんから大きな仕事をもらったりした。その他、Twitter や facebook で細かな仕事の話を頂いたが仕事が詰まっていて請けられないこともあった。仕事の発注とは別に、東京の上場する企業さんからストックオプション付きで夫婦で東京で働いてみないか、あるいは在宅フルフレックス勤務でも、という魅力的なオファーも頂いた。当時はまだ個人事業主を続けたい思いが強かったのでお断りさせて頂いたが、携わるプロダクトも大変魅力的なもので凄く迷ったことを覚えている。

これらの仕事の人脈をどこで手に入れたかについても可能な範囲で記述すると、1つは上述した前職時代に私より先に独立した上司からだ。あとは在職中に参加したセミナーの講師に facebook で一方的に友達申請と「大変参考になりました！」とメッセージを送り付けたことでお付き合いが始まった方、カンファレンス等の打ち上げに参加した際にたまたま一緒に飲んだ方、Rails Girls の講師を務めた際に繋がった方もいる。ブログを facebook や twitter で不定期に公開していることで「この人になら頼めるかな」と思ってくれる場合が多いようだ。技術者はブログをやるべきという意見には基本的には反対したいところだが(書きたい人だけ書けば良い派)、実体験としてブログが仕事に繋がったり、初対面の方に「ブログ見てますよ」と言われることも何度かあったので、書くことで大きな効果が見込めることは事実だ。1つだけ言えることは、契約する前にとりあえず facebook や twitter で繋がってから話が始まることが多く、その過程で日々の姿を見られることがあるので、良質なアウトプットがあれば印象が良いことは間違いないだろう。

人脈の次はお金の話もしよう。当時はまだ rails 歴2年で、Redmine のプラグイン開発ばかりで1から rails new して実際のプロダクトを構築した経験がないというコンプレックスもあったため、月単価60万をベースとして仕事を請けていた。これは一般的な市場価格に対してかなり少ない方だ。上述したように労働時間を減らすと心に決めていたので月契約でよくある "160h〜180h" みたいな稼働幅は設定しないようにお願いさせてもらって、月に2から3本の仕事を同時に行っていた。月に請けている仕事の本数が違うため月収は安定しなかったが、最低が一本で60万、最高が30,60,90万の3本の仕事で180万まで上がった。180万を達成した月は2度あったため、正直収入は今まで想像もしていなかった額になったので踊り狂いたくもなった。しかし、このまま働き続けると12月時点で個人事業の収入が1,000万を超えてしまうことがわかった。個人事業の売り上げが1,000万円を超えると、2年後から消費税を払う必要が出てくるのだ。2年後に安定した収入があるかも分からないのに支払いが2年後というのは怖すぎるので、稼働を抑えて12月末時点での売り上げは980万程となった。まあこの年の12月は尿管結石に罹ってしまったので結果論としては丁度よかったと言えば丁度よかった。

最後に仕事内容の話をしよう。上述した新規開発を行ったことがないコンプレックスについては、この期間中に解消した。そこそこ規模のある Ruby on Rails の新規開発案件は4件ほどあったし、WordPress や Python や Cake PHP といった別分野の開発を少しかじって、経験技術の幅も上がってきた1年となった。周りの情報を見ていると、特に Ruby on Rails の中規模新規開発に関しては1年で4件はかなり優秀な数字であることが分かり、大きな自信に繋がった。また、在職時代と比べて優秀なレビュアーからの指導がなくなった大きなデメリットと引き換えに、自分の独裁状態でプロダクトが一気に出来上がっていき、業務が止まることが一切なかったため、これはこれで大きな成長を感じながら毎日を過ごすことができた。

### 就職

4月から12月までの9ヶ月で1000万弱の収入を得て、上述のコンプレックスも解消して、エンジニアとして食べていくための自信が身に付いたため、そろそろ家を建てることにした。ただ、収入が跳ね上がったのは極最近なので一戸建てをキャッシュで買い上げるような貯金があるはずもない。そのため、ローンを組む必要があった。ただ、低金利でローンを組むためには開業したての個人事業主だと厳しいという勝手なイメージがあったので、年末ぐらいから再就職を考えるようになり、個人事業主一本の生活は丁度1年で終了となった。ちなみに、社会人だろうと1年目では社会的信用度は低いため、結局好条件でローンを組むことはできなかった。

就職先は、個人事業主としてほぼ1年間に渡って開発をお手伝いしてきた企業にした。年俸500万円の在宅勤務で、年俸分以上の仕事はしないことと、副業として個人事業を続けることに了解をもらっているので、とんでもなく好条件だ。実際にどんな仕事をしているかは、少し前に [社内ブログ](https://hitotomirai.co.jp/?blog=a140) に書いたので、実際のweb系エンジニアの業務やリモートワーカーだらけのプロダクトの様子に興味のある方は読んでみてほしい。

個人事業主としての副業は続けていて、主な収入はこちらから得ている。現在月30〜50万程度の開発案件と、月10〜20万程度のコードレビューや slack 常駐の技術相談役の仕事があり、副業収入が月に40万から60万程度となっている。会社員としての年俸が500万であっても、消費税が課税されるのは個人事業単体での売り上げが1,000万円を超えた場合なので、年収1,000万円の壁を破りやすくなっている。副業だけで1,000万売り上げることは今の私には難しいので、とりあえず消費税に限っては考える必要がなくなっている。

さて、この企業には現在も勤めているので私のキャリアパスについての紹介はここまでだ。参考になる話はあっただろうか？web系エンジニアを目指している方向けには、もう一つ面白い話を紹介できる。私の妻のキャリアパスについてだ。

### 番外編: 妻のキャリアパス

妻とは1社目で出会い(妻はプログラマーではなく回路設計者だったので別部署)、同時に退職して一緒に一年間無職の期間を過ごした。私が2社目でwebエンジニアデビューした後にしばらくして、妻(当時はまだ彼女)は和菓子屋で製造販売のアルバイトを始めた。そして私が2社目を退職する少し前に、社長が「Rails Girls Kitakyushu やりたくてオーガナイザー(計画や準備、取りまとめを行うイベントの代表)になれる女性を探してるんだけど彼女さんどう？」みたいな提案をしてくれた。多分断るだろうなーと思って一応その場で妻に話をしたら「やってみたい！」とのことで、妻の Rails エンジニアとしてのキャリアが始まった。ちなみに妻とはこの Rails Girls のイベント準備期間中に結婚した。

Rails Girls とは講師と一緒に Ruby on Rails のサンプルアプリケーションを作ってみるワークショップだ。ノートパソコンさえ持っていれば未経験でも無料で参加できるので、お住まいの地域で開催されていたら是非足を運んでみてほしい。結果として、妻は Rails Girls のオーガナイザーを立派にやり遂げ、多くの人に評価された。Rails Girl の開催は私の退職とほぼ同時で、私が個人事業主として働き始めるのと同時に、妻も私の個人事業の家庭内従事者として本格的にエンジニアのキャリアを歩み始めた。現在は、私の入社した企業に時間短縮勤務で在籍している。まだエンジニア歴は2年で、家事や個人事業の財務処理等といった様々な仕事と平行しながらではあるが、立派に自立した Rails エンジニアとして仕事をこなしている。

今思い出したが、そういえば妻も社内ブログにweb系エンジニアを目指す女性向けの記事を書いていたので、興味があれば是非読んでみてほしい。上述までのキャリアの話が、本人目線で書かれている。  
[女性にこそ知ってほしい！リモートワークとエンジニアは最高のタッグ！](https://hitotomirai.co.jp/?blog=a154)

## 今からキャリアチェンジする人々へ

ここまで読んで「意外とエンジニアになるのは簡単そうだな」と思った人も「やっぱり行動力がないと厳しいんだな」と思った人も「人脈の運ゲーに勝っただけじゃん」と思った人もいるだろう。私の人生は一度きりで「ここの人脈がなかったらどうなっていたか」といった if の体験談を話すことはできないため、説得力を持たせることはできないが1つだけ自信を持って言えることがある。**web系エンジニアの世界は甘い**ということだ。web系エンジニアとしての選択肢を意識し始めてから、どのようなキャリアパスを歩もうと少なくとも失敗はなかったと思う。仮に技術に関する知見や人脈が全て吹き飛んで、漠然と「絶対にweb系エンジニアになりたい」という思いだけを植えつけられたとしても、3ヶ月以内にweb系エンジニアになることができるだろう。それだけにこの界隈が良い意味で甘いことを私は何度も体感してきた。

甘さの理由は沢山あって1つは単純に今現在仕事が多いことだ。エンジニアが余るとか仕事が減るとか、様々な話を目にするかもしれないが、実際には現状多くの企業が人手不足だ。会う人会う人皆「いい人がいればねぇ...」と言っている。私も言っている。未経験からでもエンジニアを安月給で育てたいという企業は沢山ある。求人サイトで「未経験 エンジニア」等で調べれば無数にヒットする。他の理由は業界の文化として努力している人を好む傾向にあることだ。基本的に成果主義の世界ではあるが、未経験で勉学に励んでいて定期的に発信している初学者は必ず多くの人に好まれる。そしてもう1つの界隈の傾向は、教え好きが多いということだ。何かエラーで詰まったら適切なハッシュタグでも付けて助けを求めてみると良い(困っている内容を詳細かつ簡潔に説明できてスクリーンショット等があると尚良いだろう)。結構な確率で答えが返ってくるはずだ。教え好きが多い理由は沢山あって、単に人助けが好きな親切な人が多いこと、公の場で質問に答えることでアピールを狙えること、エンジニア全体の知識レベルが上がると業界が潤って間接的に自分の業務が楽になること、教えること自体が勉強になること、単純に技術自慢が気持ち良いこと等がある。ちなみに私は全て当てはまる。直接的な収益にならないのに Qiita に技術情報を投稿したり、Stack Overflow 等の質問サイトで回答をする人がこれほどにも沢山いるのは、こういった理由が少なからず作用している。

これから、こういった業界の甘さを利用したキャリアパスの提案を3つする。こういった話をすると、よく「それで失敗した子の責任を取れるの？」と言われるが、答えは「取れるわけねーだろ」である。自己責任で参考程度に受け取ってほしい。提案の順番はオススメ順ではないので、自分の背景に合うものから考えてみてほしい。

### 1. 就職する

私のキャリアパスと同じパターンだ。未経験でも受け入れている企業を Indeed 等の求人サイトで探してみて、希望の就業場所で良さそうな企業があれば就職する。

下記の人々におすすめだ
- 現在無職
- 転職を検討している
- 収入額にこだわりがない
- 合わなければすぐ辞められる自信がある

下記の人々には難しい
- エンジニアは副業として考えている
- 地方在住で近所に企業が少ない

どの企業でも基本的に履歴書の提出と面接があるはずなので、自分が勉強したことや作ってみたものは小さなことでもアピールしよう。「Progate レベル xx です」とか「xx の書籍を読みました」といった本当に小さなことで良い。もし作ってみたアプリケーションがあれば、それを見せられると尚良い。書籍通りに作ったサンプルアプリケーションでも無いよりは良いだろう。とにかく「未経験でもエンジニアとして働けるように頑張りました！」というアピールはできた方がいい。私も自分を未経験で受け入れてくれた企業で面接官をしたことがあるが、未経験受け入れ企業にはとんでもない数の応募者がいる。そのうち、大半は何もしていない。「弊社を受ける前に何か勉強したことがあれば教えてください」と言うと黙り込む人は多い。「何故エンジニアになりたいと思ったのですか？」と聞いても答えられない人までいる。こんなに長い記事をここまで読み進める程真剣にキャリアについて考えている方であれば要らぬ心配ではあると思うが、受かるための対策はしておこう。

就職後に合わないと感じた場合は辞めてしまおう。未経験受け入れ企業の中にはブラック企業も沢山潜んでいる。安く雇って奴隷のように使おうと考えている企業もあるかもしれない。面接は合わない人材を見抜く場であって、合わない人材を見抜くのが人事の仕事なので、ミスマッチであったのであれば、あなたと人事の見る目がお互いになかっただけだ。あなただけが悪いわけじゃない。よく「3年務めてみないと分からない」と言うが、合わない企業で3年も棒に振るのは勿体なさすぎる。1ヶ月もあれば充分だ。労基法違反に関しては初日にわかったら即日辞めても良いレベルだ。次の面接で職歴について突っ込まれたら「労働基準法 xx 条を yy のように違反していたので辞めました」とハッキリ説明すれば良い。それが原因で落とされたらその企業も労基法違反しているのだろうから落ちて正解だ。

### 2. メンターを雇う

次のキャリアパスはメンターを雇って急成長を狙うパターンだ。私が未経験時代にそこそこの貯蓄があれば、このパターンを選択しただろう。メンターとは、技術やキャリアの相談に乗ってくれる技術講師やカウンセラーのような助言者のことだ。

下記の人々におすすめだ
- 現在就業中で空いた時間で勉強したい
- 貯蓄がある
- 有識者の元でとにかく早く成長したい

下記の人々には難しい
- 貯蓄がない

これは言うまでもなく最強のパターンで、有識者とのマンツーマンで技術相談、キャリア相談ができるのだから、ほとんどの悩みが解決するだろう。勉学中に躓くたびに有識者に質問ができ、勉学そのものを一緒に進めていくこともできるかもしれない。キャリアについての相談は勿論、センスや努力を認められればそのまま企業を紹介してくれたり自社にスカウトしてくれたりするかもしれない。

問題は、自分に合うメンターが見つけられるかだ。Twitter でいつも助言をくれる人は自分に目をかけてくれているかもしれない、いつも誰かに助言しているのを見かける人はそれを仕事にしたいと考えているかもしれない。ダメ元で思い切って声をかけてみると良いかもしれない。価格感が気になるところだとは思うが、これは人に寄るとしか言えない。頼る時間帯が平日か休日か、拘束したい時間量がどれぐらいか、相談したい技術等にも寄るだろう。決してオススメはしないが無料でメンターになってくれる人もいるだろう。逆に付きっ切りで何から何まで面倒を見てくれて月額数十万の人もいるだろう。

ちなみに私の営業をしておくと、現在企業向けでメンターに近い仕事をしていて、slack (チャットツール) に常駐して技術相談を受けたり、pull request のコードレビューをしたりしている。こういった仕事を個人向けにも行いたいとは思っている。平日休日問わず slack 常駐で相談に乗ったり、rails チュートリアルを(オンラインで)一緒に周回したり、目指したい方向を踏まえて何から始めれば良いかの道を示すことはできる。ただし、価格帯は拘束時間にも寄るが月額10万円程度になるので個人で払うには絶対に高い。営業トークで言っておくと、私が私にメンターを頼むなら20万でも払うだろう。まあ冗談だが、興味があれば是非 twitter 等でメッセージを貰えればと思う。

### 3. 独学

さて、ここまで2パターンのキャリアパスを提案してきたが、多くの方は独学で技術に慣れて、自信がついてから就職活動を始める選択肢を取るだろう。わかるぞ、いきなり就職するのは怖すぎるし、メンター雇うにも金払ってハズレ引いたら最悪だ。無理にリスクを背負って近道しなくても、時間的に余裕があればじっくり勉強しながらゆっくりと途中の景色を楽しみながら経験を積んでいくのも悪くない。個人で勉学に励むことそのものが喜びだと感じる人もいるだろう。ただし、独学は基本的に茨の道であることを覚悟する必要がある。独学で誰もが簡単にエンジニアになれるのであれば高給を取れる職種であるはずがない。Stack Overflow や twitter で質問しながらであっても、言葉では言い表しにくい壁や障害にぶつかるものだ。「そもそも今の自分は何を勉強すればいいのか」みたいな漠然とした悩みの回答を得ることはマンツーマンでじっくり話し合わなければ難しいだろう。

そこで、1つだけ未経験からweb系エンジニアとして力をつけるための独学の筋道を提案する。これは多くの初学者が成長するための最適解となるために熟考したもので、私がメンターを勤めるにしても高い確率でこの方法に従って勉学を一緒に行うと思う。ただし、独学の方向性は個人の適正によって決まるべきなので、提案する独学方法は全ての人にマッチする訳ではない。むしろ難易度が少し高いため選別のように見える可能性すらある。更に保険をかけておくと、仮にこの記事が多くの有識者の目に止まったらこの提案は間違いなく大量の批判を受けるだろう。そのことを理解した上で、ここまで読んで私を信じるに値すると感じた人や、もう本当に何をすれば分からないという人はチャレンジしてみてほしい。

まず、最初に覚える技術は Ruby on Rails だ(ここで早くも多くのバッシングを浴びる)。オワコンだろうが飛び級すぎだろうが知ったことか、黙って従うのだ。ただ、オワコンであることは間違いない。それだけはハッキリ言っておく。近年の開発トレンドに合わなくなってきていて、このままでは廃れていくだろう。しかし、今現在の話をすれば Ruby on Rails の仕事はまだ山ほど存在する。対して、他のwebアプリケーション開発フレームワークは未だにデファクトとして言い切れるものが定まっていない。定まってきたら定まってきたで、既存の Ruby on Rails アプリケーションをその技術で置き換えて同じものを作る通称 "replace 案件" が山のように市場に流れてくるので、そっちの技術も覚えて replace 案件で食えばいい。

**あなたが勉強するのは「今すぐに」web系エンジニアとしてデビューするためだ。将来のためではない。将来のための勉強は優秀なエンジニアになってからすればいい。優秀なエンジニアは新しい技術を覚えるのに何週間もかかったりしないから気にしなくていい。それよりも、「今」ググった時に日本語の情報が大量に出てくることが重要だ。独学力はググり力だ。**どんなにマイナーなエラーが出ても、ググれば誰かが同じエラーにぶち当たっている可能性が高い技術、それが Ruby on Rails だ。流行り始めの技術で独学を始めて壁にぶち当たると、ググっても情報が出てこなかったり、英語のドキュメントやフォーラムを読み込む必要が出てきたりする。**日本人エンジニアの母数が多い(多かった)ということは、インターネット上であなたが使える資産が多いということだ。**

さあ、Ruby on Rails を学ぶことを決めたとして、まず何から始めれば良いか。それは [Ruby on Rails チュートリアル](https://railstutorial.jp/) だ(再び激しいバッシングを浴びる)。Ruby どころか HTML も css も必要ない。rails チュートリアルをいきなり始めるのだ。無料かつ日本語で、本格的な業務でも使える技術が身に付き、gitや自動テスト等の周辺必須技術にも触れながら学習でき、継続的にメンテナンスされている教材は私の知る限り rails チュートリアルだけだ。ちなみに最初から読み始めると、早い段階で一旦 Progate へ案内される。私のオススメはその声を無視してチュートリアルの本編にいきなり進むことだが、これは好きにしてほしい。チュートリアル中に詰まってから Progate に寄り道してみるのも良いだろう。

チュートリアルが始まったら、とにかく読み飛ばせ。お気に入りの小説を読み直すかのように、スラスラと目を動かすのだ。よほど気になることはググったりしながら進めても良いが、出来るだけ気にするな。何も理解できなくて良いから、とりあえず文字を目に入れて、サンプルアプリケーションを完成させることだけを考えるのだ。コードもコピペで良い。本当は手打ちで写経した方が良いのだが、目標は1週間だ。勉学に費やせる時間に関わらず1週間だ。丸一日勉強できて、かつスピードが早い人は写経しても2日で終わるだろう。仕事終わりに一日1時間だけ勉強するような人は、迷うことなくコピペから始めよう。1週間を超えて1つの教材を読み進めるのは無理だと思ってほしい。モチベーションも維持しにくいし、記憶も薄れていく。それを理解していても、恐らく1週間で終わらない人が大多数だと思う。でも、出来るだけ頑張ってみてほしい。

予言しよう、あなたは必ず挫折する。初学者にとって rails チュートリアルはそれほどに難しい。多くの初学者の心をへし折ってきた無慈悲な教材、それが rails チュートリアルだ。前置きの時点で何を言っているか分からない状態で読み進め、コピペで理解しないままサンプルアプリケーションを作っていき、よく分からないエラーが出てググり方や正しい解決策のページの判断方法も分からず、もう何も分からず詰むだろう。場合によっては環境構築の時点で一行もコードを書かないまま詰むかもしれない。OK、Ruby のアンインストールの仕方をググって、何もかも最初からやり直しだ。これが同じ箇所で3度続いたら、一旦諦めて Progate 等で修行し直してからチャレンジしよう。ちなみに3章以降で詰んだ場合は3章からやり直して良い。本格的なサンプルアプリケーションの開発は3章から始まるからだ。ただし、10章までクリアしていれば、基本は充分なので最後までクリアしたことにして良い。できれば最終章まで進むことが望ましいのは勿論だ。

さて、ヒイヒイ言いながら rails チュートリアルを何とかクリアしたあなたには、サンプルアプリケーションが完成した達成感や長い教材を読み終えた解放感はあるだろうが、恐らく何も身に付いた実感がないだろう。それで良い。rails チュートリアルが終わったら次のステップに何をすれば良いか。それは rails チュートリアルだ。2周目を3章から開始しよう。2周目は1周目のクリアから期間を空けずにスタートできることが望ましい。今度は、1周目よりもう少しだけで良いので文章を理解しようとして読んでみてほしい。重要なのは気にしすぎないことだ。ちょっと考えて分からなかったら今回も読み飛ばしていい。エラーが出た場合はそのままググるのではなく、一旦自分の目で読んでみて Ruby on Rails が何を自分に伝えようとしているかを気にしてみてほしい。

2周目をクリアすると、今度は少しだけ理解が深まった気分を味わえるだろう。気のせいだ。3周目を始めよう。これで最後だ。3周目は2周目よりも更に文章を理解しようとして読んでほしい。それでも理解できないことばかりだろう。そんなものだ。ただ、3周目ともなると「次の工程で何をするか」ぐらいは思い出せるようになってくる。文章の読み始めで、次に書かされるコードがどんなものだったか何となく想像できるようになる。これが重要なのだ。見出しで「有効性を検証する」と言われたら「ここは validates とか言うのを書かされた覚えがあるな...」と何となく思い出すようなレベルで大丈夫だ。**この知識の断片だけを掻き集めていけば、知識の引き出しが増え、ググる時の語彙力が上がり、基礎的なアプリケーションがゼロから作れるようになってくる。**

3周目が終わっても全体の半分も理解できていないはずだが、安心してほしい。2,3年生の現役エンジニアでも、rails チュートリアルの全てを理解できている人は意外と少ないのだ。テストが全く書けないエンジニアもいるし、ログイン認証を書けないエンジニアも沢山いる。それでも、彼らは**知識の断片からググるための語彙を引き出し、毎日何度もググりながら業務をこなしている。**私もそうだ。rails チュートリアルに書いてある内容はほとんど理解しているが、それでも一日に100回以上ググることはある。メソッドに渡すパラメーターの順番や型、そもそものメソッド名といった小さなことから、「こういうときの正しい設計」のような漠然とした情報を探しにインターネットの海を漂流することもある。もう何百回と書いたであろう form ビルダーの select のパラメーター順もほとんど毎回ググっている。**ググれば一瞬で済むことに貴重な脳内リソースを使うことはない。重要なのはググるための語彙力と、ググった上での問題解決能力だ。現役のエンジニアも毎日調べ物を繰り返しながら開発をしているので、完全に理解できていないことに焦りを感じる必要はない。**

さあ、ここからは自由だ。ポートフォリオを作って志望企業に送り付けても良いし、Laravel や Django 等の別のフレームワークに興味が湧いたのなら、そちらのチュートリアルに手を出してみても良いだろう。react や vue 等のフロント周りの技術に手を出してみても良いだろう。web周りのことなら何をするにも rails チュートリアルを3周した経験が少なからず役に立つだろう。私からの提案は以上だ。

### 終わりに

恐ろしく長い文章であったが、もしここまで読み飛ばさずに目を通した人がいたらこっそり教えてほしい。さて、私や妻のキャリアは参考になっただろうか。できれば、社会に対して甘い印象を感じてくれていたら嬉しい。学歴も教養も経験も人脈もなかった私が、半年でリモートワークを始め、2年で独立するに至れたのがweb系エンジニアの戦場だ。この記事を書くにあたって自分のキャリアを思い返していると、本当に多くの方々にお世話になっていて感謝の念を抑えきれなかった。初学者の皆様のキャリアにも素晴らしい出会いがあることを祈る。きっとあるだろう。この界隈には聖人が多すぎる。

私が提案したweb系エンジニアを目指すキャリアパスの提案は少しでも参考になっただろうか。人生設計のことなので簡単には決められないと思う。私個人としては「とりあえず行動してみなよ」と言いたいところではあるが、じっくりと考えてから事を進めたいのは当然の心情だ。この記事を読んだ上では、私が高速で意思決定をしてトントン拍子で進んでいったように見えてしまうと思うが、実際には悩み事が一日中頭から離れず眠れなくなるような日々は何度もあった。私は超慎重派で、政治のために行動的であることを装うことがあるだけで本来は行動派ではない。だから今後のキャリアに不安を抱えて悩み続ける気持ちは痛いほどよくわかる。足踏みしてては何も変わらないと焦っているにも関わらず何故か足踏みを続けてしまう気持ちもわかる。わかるからこそ、この記事をweb系エンジニアを目指す初学者に向けて書いたのだ。エンジニアを目指す人の障壁が1つでも少ない社会になっていくことを祈る。
