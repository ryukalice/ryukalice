---
title: 'const, enumによる定数名は大文字にしない'
date: '2013-11-12'
category: 'C++'
---

今まで、「名前付き定数は大文字にする」って勝手に思い込んでいました。事実、そういうプログラムをずっと書いてきました。CODE COMPLETEでもそう言っていました。

```cpp
// マクロ
#define MACRO 10;

// const修飾子
static const int CONSTANT = 10;

// 列挙型
enum ENUMERATED_TYPES {
    ENUMRATED_ONE,
    ENUMRATED_TWO,
};
```


この慣習はC言語で　`#define` によって定数を定義していた時のものです。つまり、プリプロセッサで定義していた時のものです。目的は、プリプロセッサと変数、関数名で、名前の衝突を起こさないためであったようです。つまり、`const` や `enum` による定数名を大文字にすべきではないのでは？と感じた話です。

問題は、プリプロセッサで定義された名前が、変数名、関数名を上書きしてしまうことにあるのです。この時、コンパイラ、リンカは何も教えてくれません。じゃあ、定数名を大文字でconstやenumを定義する場合は、その問題が逆に襲い掛かってくるんじゃないの？ということです。

プロプロセッサー定義の名前が衝突した場合、または同じスコープの変数名等が衝突した場合は、警告が発生します。危ないのは、プリプロセッサー定義の名前と、`const`, `enum` の定数名が衝突した時に、プログラマーに何も通知されないということです。

例えば

```cpp
#include "MyConstEnum.h"
#include "ThirdPartyMacro.h"

int main(void) {
    char array[ARRAY_SIZE];
    ・・・
}
```

この場合、MyConstEnum.h で

```cpp
static const int ARRAY_SIZE = 320;
```

ThirdPatyMacro.h で

```cpp
#define ARRAY_SIZE 32
```

となっていた場合に問題が起きます。main処理では `ARRAY_SIZE` が MyConstEnum.h で定義された 320 であることを期待しているのですが、実際は ThirdPartyMacro.h で定義された 32 に上書きされてしまいます。こんなことがあるのなら、プリプロセッサ定義の名前の衝突で警告が出た方がマシです。

そのため、`const`, `enum` での定数名は、全て大文字にしない方が良いと思いました。

```cpp
// マクロ
#define MACRO 10;

// const修飾子
static const int Constant = 10;

// 列挙型
enum Enumrated_Types {
    Enumrated_One,
    Enumrated_Two,
};
```
