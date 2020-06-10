---
title: 'C++で16進数ASCIIコードをint型の16進数に変換'
date: '2013-11-06'
category: 'C++'
---

```cpp
/*!
    16進数ASCIIコードをint型の16進数に変換する。

    例) ['0' → 0x00], ['a' → 0x0a], ['F' → 0x0f]

    @param  character :変換元の16進数文字(ASCII)
    @return 変換結果。16進数文字でなければ0を返す
*/
int characterToHex(char character) {
    // 16進数文字でなければ0を返す。
    if (!isxdigit(character)) return 0;

    // '0'～'9'
    if (isdigit(character)) return (character - 0x30);

    // 'A'～'F'
    if (isupper(character)) return (character - 0x37);

    // 'a'～'f'
    if (islower(character)) return (character - 0x57);

    return 0;
}
```
