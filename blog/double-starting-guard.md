---
title: 'C++Builder で二重起動を防止する'
date: '2013-11-05'
category: 'C++Builder'
---

## TDoubleStartingGuard.h

```cpp
/**
 * @file    TDoubleStartingGuard.h
 * @brief   二重起動防止クラス定義
 */

#ifndef TDoubleStartingGuardH
#define TDoubleStartingGuardH

#include <vcl.h>
#pragma hdrstop


namespace Common {


/**
 *  二重起動防止クラス
 *
 *  エントリーポイント(_tWinMain)で初期化処理を開始する前にguard()メソッドをコールする。
 *  この時の戻り値で、今回の起動が二重起動か否かを確認できる。
 */
class TDoubleStartingGuard {
    public:
        /**
         *  @brief    デフォルトコンストラクター
         */
        __fastcall TDoubleStartingGuard();

        /**
         *  @brief    デフォルトデストラクター
         */
        virtual __fastcall ~TDoubleStartingGuard();

        /**
         *  @brief    二重起動防止開始
         *  @return   正常時true。今回の起動が二重起動であればfalse。
         */
        bool __fastcall guard();

        /**
         *  @brief    二重起動防止用のミューテックスを破棄。
         *  @return    なし。
         */
        void __fastcall release();

    private:
        //! ミューテックスのハンドル
        HANDLE mMutexHandle;
};

}    // Common

#endif
```

## TDoubleStartingGuard.cpp

```cpp
/**
 * @file    TDoubleStartingGuard.cpp
 * @brief   二重起動防止クラスの実装
 */

#include "TDoubleStartingGuard.h"

#pragma package(smart_init)

namespace Common {


//------------------------------------------------------------------------------
// デフォルトコンストラクター
//------------------------------------------------------------------------------
__fastcall TDoubleStartingGuard::TDoubleStartingGuard() : mMutexHandle(NULL) {
    // DO NOTHING
}

//------------------------------------------------------------------------------
// デフォルトデストラクター
//------------------------------------------------------------------------------
__fastcall TDoubleStartingGuard::~TDoubleStartingGuard() {
    release();
}

//------------------------------------------------------------------------------
// 二重起動防止開始
//    実行ファイル名でミューテックスを作成しておく。
//    そのため、まずミューテックスをオープンしようとして成功した場合は、二重起動である。
//------------------------------------------------------------------------------
bool __fastcall TDoubleStartingGuard::guard() {
    const UnicodeString mutexName = ExtractFileName(ChangeFileExt(Application->ExeName, ""));

    mMutexHandle = OpenMutex(MUTEX_ALL_ACCESS, false, mutexName.c_str());
    if (mMutexHandle) {
        return false;
    }

    CreateMutexW(NULL, true, mutexName.c_str());

    return true;
}

//------------------------------------------------------------------------------
// 二重起動防止解除
//    gurad()で作成したミューテックスを破棄。
//------------------------------------------------------------------------------
void __fastcall TDoubleStartingGuard::release() {
    if (!mMutexHandle) {
        return;
    }

    CloseHandle(mMutexHandle);
    mMutexHandle = NULL;
}


}    // namespace Common
```

## エントリーポイント

```cpp
#include <vcl.h>
#pragma hdrstop

#include <tchar.h>
#include "TDoubleStartingGuard.h"

static Common::TDoubleStartingGuard DoubleStartingGuard;

//---------------------------------------------------------------------------
WINAPI _tWinMain(HINSTANCE, HINSTANCE, LPTSTR, int) {
    try {
        // 二重起動防止
        if (!DoubleStartingGuard.guard()) {
            MessageBox(Application->Handle, L"アプリケーションは既に起動しています。", L"エラー", (MB_OK | MB_ICONERROR));
            return 0;
        }

        Application->Initialize();
        Application->CreateForm(__classid(TForm_Main), &Form_Main);
        Application->Run();

        // 二重起動防止解除
        DoubleStartingGuard.release();
    }
    catch (Exception &exception) {
        Application->ShowException(&exception);
    }
    catch (...) {
        try {
            throw Exception("");
        }
        catch (Exception &exception) {
            Application->ShowException(&exception);
        }
    }
    return 0;
}
```
