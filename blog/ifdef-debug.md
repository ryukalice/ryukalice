---
title: 'C++Builder でデバッグ／リリースモード時のみコンパイルする'
date: '2013-11-26'
category: 'C++Builder'
---

例えば、デバッグモードの時だけ特定のログを出力したい時、例えば、デバッグモード時はアプリケーション終了確認ダイアログは、うざったいから表示させたくない時、マクロ定義"_DEBUG"の判定でその夢を叶えることができます。

```cpp
#ifdef _DEBUG
ShowMessage("このコードはデバッグモード時のみコンパイルされます。");
#endif

#ifndef _DEBUG
ShowMessage("このコードはリリースモード時のみコンパイルされます。");
#endif
```

先ほどの、「デバッグモード時はアプリケーション終了確認ダイアログは、うざったいから表示させたくない時」は、こう書けば良いのです。意外と便利です。

```cpp
//------------------------------------------------------------------------------
// フォームクローズ問い合わせイベント
//------------------------------------------------------------------------------
void __fastcall TForm_Main::FormCloseQuery(TObject *Sender, bool &CanClose) {
#ifndef _DEBUG
    int userAnswer = MessageBox(
        Form_Main->Handle,
        L"アプリケーションを終了してもよろしいですか？\n",
        L"確認",
        (MB_YESNO | MB_DEFBUTTON2 | MB_ICONINFORMATION));

    if (userAnswer == mrNo) {
        CanClose = false;
    }
#endif
}
```
