---
title: 'IPv4アドレス文字列の区切り文字(.)を除去して0埋め12Byte文字列に変換する'
date: '2013-11-06'
category: 'C++'
---

```cpp
/*!
    IPv4アドレス文字列の区切り文字(.)を除去して0埋め12Byte文字列に変換する。

    例) ["192.168.0.1" → "192168000001"]

    @param  address :変換元のIPアドレス文字列。
    @param  str     :変換結果。12Byte確保しておくこと。入力が不正な場合の値は保証しない。
    @return なし。
*/
void iPv4ToDotDeleteAndZeroFill(const char *address, char *str) {
    unsigned int octetCount = 0;       // 今第何オクテット？
    unsigned int temporaryData = 0;    // そのオクテット内の値を一時保存
    unsigned int intAddress[4] = {0};  // 各オクテット毎の整数値

    // まずは各オクテット毎にint型の配列へ代入する。
    for (int i = 0; i < (int)strlen(address); i++) {
        // '.'でなければ桁上げして１の位に数値を加算。
        if (address[i] != '.') {
            temporaryData *= 10;
            temporaryData += StrToInt(address[i]);
        }
        // '.'であれば
        else {
            intAddress[octetCount] = temporaryData;
            temporaryData = 0;
            octetCount++;
        }
    }
    intAddress[octetCount] = temporaryData;    // これが第４オクテット(なはず)

    // 0埋めの文字列に変換する。無理矢理っ！
    sprintf(str, "%03d%03d%03d%03d", intAddress[0], intAddress[1], intAddress[2], intAddress[3]);
}
```
