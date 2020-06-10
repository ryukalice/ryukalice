---
title: 'C++Builder のフォームの移動を禁止する'
date: '2013-11-27'
category: 'C++Builder'
---

フォームの移動を抑止したい場合って結構あります。私がよく出くわすのは、XGA で画面いっぱいに広がるフォームを作りたい場合です。`TForm` の `Align` プロパティを `alClient` にすれば簡単に実現可能なのですが、こうするとSXGA、フルHDなどの大きな解像度で実行したい時(開発中など)にウザいです。

そこで、`Align` プロパティを `alNone` にした上で、フォームのサイズを固定にする必要があるわけですね。やり方は簡単です。`WM_MOVING` メッセージをフックします。つまり、ウィンドウプロシージャに送られるはずのメッセージを、アプリケーションが横取りするわけです。この例では、`WM_MOVING` メッセージが飛んできた時に、自前のメソッドをコールするようにマッピングしています。

```cpp
private:
    /*!
        フォームの移動を抑止する。

        @param  message :フックしたメッセージの中身
        @return なし。
    */
    void __fastcall windowMovingBlock(TMessage &message);

protected:
    BEGIN_MESSAGE_MAP
        VCL_MESSAGE_HANDLER(WM_MOVING, TMessage, windowMovingBlock);
    END_MESSAGE_MAP(TForm);
```

そして、自前のメソッドの実装は、こんな感じです。移動されたのを戻すような感じでしょうか。もっとスマートにメッセージをウィンドウプロシージャへ届かなくする方法があれば良いのですが。。

```cpp
//------------------------------------------------------------------------------
// フォームの移動を抑止する。
//------------------------------------------------------------------------------
void __fastcall TForm_Main::windowMovingBlock(TMessage &message) {
#ifndef _DEBUG
    TRect *rect = (TRect *)message.LParam;
    OffsetRect((RECT *)rect, (Left - rect->Left), (Top - rect->Top));
#endif
}
```
