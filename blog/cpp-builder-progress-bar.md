---
title: 'C++Builder の TProgressBar のバグを誤魔化す'
date: '2013-11-27'
category: 'C++Builder'
---

アプリケーションの起動に時間を要する場合は、スプラッシュスクリーンを準備します。設ける目的は、アプリケーションが起動していることをユーザーに通知することです。起動時、しばらく何も出てこなかったら、「本当に起動しようとしているの？」とユーザーが不安になってしまいますから。そのついでにシステム名称や社名をコマーシャルしたり、アプリケーションのバージョンを表示したりするわけですが、スクリーン内にプログレスバーを設けて、起動の進捗状況を報告することがあります。

で、今回 C++Builder で開発するアプリケーションに、VCL の `TProgressBar` を使って実装しようと思ったのですが、`TProgressBar` を Windows 7(XPの頃からかもしれないけど) で動かそうとすると、どうも更新したステップ数と、表示されているステップ数が合いません。いろいろ考えたのですが、結局解決することができず、以下のような小細工をしました。小細工の内容は、`setProgressMax()` の長ったらしいコメントを参照してください。

## TForm_Splash.cpp

```cpp
/*!
    プログレスバーの最大値設定

    @param  max :全ステップ数(progressUpdate()をコールする回数)
    @return なし。
*/
void __fastcall TForm_Splash::setProgressMax(int max) {
    /*
        TProgressBarに対してStepIt()すると、遅延して描画されるためか
        １ステップ遅れたり、一気に２ステップ進んだり等して、綺麗に進捗を表示できない。
        ずれは１ステップ程度のため、誤魔化し処理として指定された最大値に
        16を乗算し、１ステップでpositionプロパティを16進めるようにすることで、
        見た目上のずれを軽減している。

        また、本クラスを利用するクラスの方で、最後にApplication->ProcessMessages()をコールして
        Windowsのメッセージキューを処理させないと、最終ステップが描画されない。
        何故か、progressUpdate()でやってもダメで、利用元クラスでやる必要がある。訳が分からない。
        そして、100%になった時に微量に100%にならないのは、どうにもならなかった。ギブアップ。

        こんな小細工ばかりを組み込みたくなければ、TCGuageコンポーネントで代用できる。
        しかし、ランタイムの関係かビジュアルが美しくない(Windows7っぽくない)ので今回はパスする。
    */
    ProgressBar->Max = (max * 16);  // 最大値を16倍にしておいて
    ProgressBar->Step = 16;         // １ステップ[ 一度のStepIt() ]でPositionが16進むようにする。

    ProgressBar->Position = 0;
}

/*!
    ユーザー向けに表示しているメッセージを更新し、プログレスバーを１段階進める。

    @param  userMessage :フォームに表示するユーザー向けメッセージ
    @return なし。
*/
void __fastcall TForm_Splash::progressUpdate(const UnicodeString &userMessage) {
    if (!userMessage.IsEmpty()) {
        Label_UserMessage->Caption = userMessage;
    }

    ProgressBar->StepIt();
    Application->ProcessMessages();
}
```

## 利用元クラス

```cpp
// スプラッシュフォームクラスに、初期化の全ステップ数を通知
Form_Splash->setProgressMax(10);

Form_Splash->progressUpdate(L"データベースへ接続中");
connectDatabase();
・
・
・
Form_Splash->progressUpdate(L"システム設定データのロード中...");
systemDataLoad();

Form_Splash->progressUpdate(L"初期化完了!!");
Application->ProcessMessages();	// 大事なおまじない。理由はTForm_Splash.cppを参照
```

