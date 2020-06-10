---
title: 'TStrings::CommaTextは 半角スペースも区切り文字とみなす'
date: '2013-11-25'
category: 'C++Builder'
---

エントリのタイトルがすべてです。VCL の `TStrings::CommaText` プロパティが、Comma だけでなく、Space も区切り文字とみなすことが分かりました。`CommaText` のリファレンスを読むと、しれっとこんなこと書いてあります。

> CommaText を割り当てる場合，値は SDF 書式付きテキストとして解析されます。SDF 形式の場合，文字列はスペースまたはカンマで区切られ，任意で二重引用符で囲まれます。
<cite>引用元: [TStrings.CommaText プロパティ](http://docs.embarcadero.com/products/rad_studio/radstudio2007/RS2007_helpupdates/HUpdate4/JA/html/delphivclwin32/Classes_TStrings_CommaText.html)</cite>

別の方法を探していたのですが、`TStrings` には、`Delimiter` という心強いプロパティがおりました。こうやって取ると、半角スペースが区切り文字とみなされてしまうので、

```cpp
TStringList *file = new TStringList;    // ファイル全体分のデータ。
TStringList *line = new TStringList;    // 一行分のデータ。

file->LoadFromFile(m_FilePath);

line->CommaText = file->Strings[0];
```

`Delimiter` プロパティにコンマを指定し、`StrictDelimiter` を `true` にしておきます。値の取り出しは、`CommaText` でなく、`DelimitedText` で行います。

```cpp
TStringList *file = new TStringList;    // ファイル全体分のデータ。
TStringList *line = new TStringList;    // 一行分のデータ。

file->LoadFromFile(m_FilePath);

// 区切り文字を明示的に指定。(カンマ)
line->Delimiter = ',';

// Delimiterプロパティに指定した区切り文字だけを区切り文字とみなす。
line->StrictDelimiter = true;

// CommaTextでなく、DelimitedTextで取り出す。
line->DelimitedText = file->Strings[0];
```

以上を踏まえると、以前の TCsvFileAccess.cpp は、以下のようになります。

```cpp
/*!
    @file   TCsvFileAccess.cpp
    @brief  CSVファイルアクセスクラスの実装
*/

#include <vcl.h>
#pragma hdrstop

#include <IOUtils.hpp>
#include <vector>
#include "TCsvFileAccess.h"

#pragma package(smart_init)

namespace Common {
namespace FileAccess {

//------------------------------------------------------------------------------
// コンストラクター
//------------------------------------------------------------------------------
__fastcall TCsvFileAccess::TCsvFileAccess(const UnicodeString &filePath) : m_FilePath(filePath) {
    // フォルダーを作成しておく。
    try {
        ForceDirectories(TPath::GetDirectoryName(m_FilePath));
    }
    catch (...) {
        // 例外もぐもぐ。。
    }
}

//------------------------------------------------------------------------------
// ファイルがあればtrueを返す
//------------------------------------------------------------------------------
bool __fastcall TCsvFileAccess::isFileExist() {
    return FileExists(m_FilePath);
}

//------------------------------------------------------------------------------
// 読み込み。
//------------------------------------------------------------------------------
bool __fastcall TCsvFileAccess::read(CSV_VECTOR &array) {
    // 読込むファイルが無ければ異常
    if (!FileExists(m_FilePath)) {
         return false;
    }

    TStringList *line = new TStringList;    // 一行分のデータ。
    TStringList *file = new TStringList;    // ファイル全体分のデータ。

    try {   // 項目数エラーや、異常値等で簡単に例外が発生する。
        file->LoadFromFile(m_FilePath);
        line->Delimiter = ',';
        line->StrictDelimiter = true;
        for (unsigned int i = 0; i < array.size(); i++) {
            line->DelimitedText = file->Strings[i];
            for (unsigned int j = 0; j < array.at(i).size(); j++) {
                array.at(i).at(j) = line->Strings[j];
            }
        }
    }
    catch (...) {
        delete line; delete file;
        return false;
    }

    delete line; delete file;
    return true;
}

//------------------------------------------------------------------------------
// 書き込み。
//------------------------------------------------------------------------------
void __fastcall TCsvFileAccess::write(const CSV_VECTOR &array) {
    TStringList *line = new TStringList;    // 一行分のデータ。
    TStringList *file = new TStringList;    // ファイル全体分のデータ。

    file->Clear();
    for (unsigned int row = 0; row < array.size(); row++) {
        line->Clear();
        for (unsigned int col = 0; col < array.at(row).size(); col++) {
            line->Add(array.at(row).at(col));
        }
        file->Add(line->CommaText);
    }
    file->SaveToFile(m_FilePath);

    delete line; delete file;
}

}   // namespace FileAccess
}   // namespace Common
```
