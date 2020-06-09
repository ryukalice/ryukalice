---
title: 'Windows/C++による処理時間計測とtimeBeginPeriod'
date: '2013-10-22'
---

2013年に書いた過去記事のサルベージ記事です。

## 計測

今改修しようとしているアプリケーションで、様子のおかしなスレッドに出会いました。100msec周期で実行されることを期待しているスレッドが、どう考えても1秒に8回ぐらいしか実行されていない、といった状態です。


処理時間を計測してみたので、計測のサンプルコードを記録しておきます。

```cpp
#include <time.h>

void Thread::Execute() {
    clock_t startTime, endTime;

    while (!Terminated) {
        startTime = clock();
        
	// 時間のかかる処理

        endTime = clock();
        double margin = (double)(endTime - startTime) / CLOCKS_PER_SEC;
        Sleep(100);
    }
}
```

ポイントは以下の通りです。

- time.hをインクルードする
- [clock()](http://www9.plala.or.jp/sgwr-t/lib/clock.html)を使い、clock_t型の変数に、スレッド処理の開始時間と終了時間を代入
- double型の変数に、終了時間から開始時間を減算した値を代入
- 秒単位で取得するためには、CLOCKS_PER_SECで除算する必要がある

## msec単位で計測したい

しかし、上記のコードでは、綺麗にmsec単位で計測できておりません。これは、Windowsのタイマーの精度が、あまり良くないからです。具体的には、Windowsデフォルトのタイマー最小精度は15msecとなっています。


つまり、Sleep(1)とか、Sleep(2)とかコールしても、15msec返ってこなかったりするわけです。そこで、[timeBeginPeriod()](https://docs.microsoft.com/en-us/previous-versions/windows/?redirectedfrom=MSDN)という関数を使用します。

そうすることで、Sleep(1)で1msecウエイトなんてことも可能になります。必要なくなったら、timeEndPeriod()するのはマナーです。

```cpp
// タイマーの最小精度を1msecにする
timeBeginPeriod(1)

Sleep(1)

// タイマーの最小精度を戻す
timeEndPeriod(1)
```

## timeBeginPeriodの注意点

なんて素敵なAPIなのでしょうか！と言いたいところですが、この関数は、全プロセスに対して影響するという、とんでもない爆弾を抱えています。まあ、当たり前なのですが。まず、Windowsのスレッドスケジューラの割り込み間隔が変わります。


つまり、スレッドの切り替えを頻繁に行わなければならなくなるということです。シングルプロセッサ環境で、冒頭に書いたように数msec処理を戻さないスレッド等が存在すると、間に合わなくなります。そうすると、プロセス全体としてはパフォーマンスが低下することになります。

> 当然の如く、これらの設定はグローバルなもので、システム全体に影響を及ぼす。だから、よく言われるおまじないのようなものがある。曰く、「このソフトは、Windows Media Playerと一緒に起動していると、キビキビ動くようになるぜ」といった類のおまじないだ。Windows Media Playerは、音声や動画を再生するソフトウェアなので、当然の如く時間にシビアである。さもなければ、音とびやコマ落ちが発生する。それではメディアプレイヤーの役割を果たさないわけだから、WMPはtimeBeginPeriodを使う理由がある。

参考: [本の虫: Google Chromeを使うとファンの回転数が上がる理由](https://cpplover.blogspot.com/2008/09/google-chrome_10.html)

すると、さらに「エコじゃない」という問題も出てきますね。スレッドの切り替えが頻繁に行われるということは、アイドル状態でいることができなくなるということで、消費電力も当然増えてしまうわけです。

> たとえば、timeBeginPeriod API を使用してプラットフォームのタイマーの精度を向上させるアプリケーションについて考えてみましょう。その場合、プラットフォームのタイマー チックの精度が向上し、プロセッサが低消費電力のアイドル モードを効率的に使用できなくなります。1 つのアプリケーションでタイマー精度が 1ms まで向上した状態が保たれると、一般的なノートブック PC の場合は、バッテリの寿命に最大 10% の影響が及ぶことが観察されました。

参考: [Windows 7 のエネルギー効率 - マイクロソフトのEngineering Windows 7 ブログ - Site Home - MSDN Blogs](https://docs.microsoft.com/ja-jp/archive/blogs/)

今回は処理時間計測の目的でしたが、「Sleepの精度が上がるからやっとけ」みたいな感じで気軽に使うことは注意した方が良いかもしれません。
