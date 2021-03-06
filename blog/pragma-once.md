---
title: 'インクルードガード #pragma once'
date: '2013-12-05'
category: 'C++Builder'
---

C++Builder 2010から、インクルードガード(ワンタイムインクルード)が、プリプロセッサ指令、つまり `#pragma` によりできるようになりました。今まで、以下のようにマクロを使っていたのが

```cpp
#ifndef TSampleH
#define TSampleH

・・・

#endif
```

以下の１文で済むようになったということです。

```cpp
#pragma once
```

これは素晴らしいです。テキストエディタの設定次第では、`#ifndef` がかかっている部分が全てシンタックス・ハイライトされたりしましたが、もう心配はありません。そう、`#pragma once` ならね。元々 Microsoft の VC++ 等ではできていたのですが、C++Builder でも2010以降ではできるようになったのです。

しかし、この喜びは簡単に踏み潰されてしまいます。C++Builder の場合、.cpp ファイルと .h ファイルの自動結び付け(ユニット化)を、インクルードガードのマクロ名称を使って行っているようなのです。つまり、従来のインクルードガードを用いなければ、逆に不便になるということです。プロジェクトファイル(.cbproj)を直接編集して、ユニット化させることもできますが、IDEが自動編集するファイルを手書きで弄るのは、どうも気が引けます。そして面倒臭いです。残念。

