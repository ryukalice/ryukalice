---
title: '終わらないスレッドを確殺する'
date: '2013-12-05'
category: 'C++Builder'
---

物騒なタイトルでございます。社内で開発されたアプリケーションを終了する時、物凄く時間がかかることがあります。もしくは、終了されずにフリーズしてしまったりなど。コードを追いかけていくと、原因は各種スレッドの終了処理にありました。以下のような感じです。

```cpp
sampleThread->Terminate();
WaitForSingleObject((void *)sampleThread->Handle, INIFINITY);
delete sampleThread;
```

スレッドは、`while (!Terminated)` と、ベースクラス `TThread` のプロパティである `Terminated` が `true` になるまで無限ループしています。終了する際は、`Terminate()` メソッドをコールし、`WaitForSingleObject()` 関数でスレッドが終了するのを待ちます。問題は、ここで第2引数に `INFINITY` を指定していることです。つまり、永久に待ち続けるということです。

この場合、何かしらの原因で `Terminate()` してもうまくスレッドが終了しなかった場合、完全に固まってしまいます。こうなると、タスクマネージャーから終了させたりしなければならないのですが、ユーザーがそんな技術を持ち合わせているとも考えられません。そんなことになるぐらいであれば、しばらく待っても終了できなかったスレッドは、強制的に殺してしまえば良いじゃないかと。

こういう場合、`TerminateThread()` 関数を使います。しかし、この関数、MSDNのリファレンスに書いてあるように、非常に危険です。引用するのが億劫なほど、危険だという解説が並べられております。どんな危険性があるかは、リファレンスを見て頂くとして、つまるところ危険すぎるのです。

> TerminateThread 関数は、スレッドを無条件に終了させる危険な関数であり、非常に特別な場合にのみ使うべきです。対象とするスレッドが何を実行しているのか正確に把握していて、指定したスレッドが終了の時点で実行している可能性のあるすべてのコードを制御できる場合にのみ呼び出すべきです。
<cite>引用元: [System.Classes.TThread.Terminate](http://docwiki.embarcadero.com/Libraries/XE2/ja/System.Classes.TThread.Terminate)</cite>

「これはありえないだろう」という時間 `WaitForSingleObject()` から返ってこなければ殺すコードに変更したものがこれです。

```cpp
sampleThread->Terminate();
DWORD waitResult = WaitForSingleObject((void *)sampleThread->Handle, 5000);
if (waitResult == WAIT_TIMEOUT) {
    TerminateThread((void *)sampleThread->Handle, false);
}
delete sampleThread;
```

`WaitForSingleObject()` の第２引数には、`INFINITY` ではなく、待ち時間(msec)を与えます。上記の例では5秒です。「これだけ待っても終了しないのなら、このスレッドもうなんかおかしいだろ！」って時間を設定します。`WaitForSingleObject()` は、この時間待っても終了されなかった場合、`WAIT_TIMEOUT` を返します。そこで迷わず `TerminateThread()` です。非推奨の関数を使って殺すか、ユーザーに何故か死なないゾンビアプリケーションを目の当たりにさせるかは、一種のトレードオフです。私は殺すことを選びました。
