---
title: 'C++Builder の UDP 送受信サンプル'
date: '2013-12-15'
category: 'C++Builder'
---

少しお粗末ですが、こんなベースクラスを作ってみました。いつも、ソケット操作の処理は、送受信のスレッドクラスに組み込むのですが、通信先が多いアプリケーションでは、無駄が多いと感じたため、思い切って作りました。これらを継承、包含すれば、そこそこの送受信はできます。

## UDPソケットクラス

後述の送信／受信クラスのベースクラスになります。つまり、送受信スレッド側では意識しなくて良いクラスです。

### TUdpSocket.h

```cpp
/*!
    @file   TUdpSocket.h
    @brief  UDPソケットクラスの宣言
*/

#ifndef TUdpSocketH
#define TUdpSocketH

namespace Common {
namespace Udp {

/*!
    UDPソケットクラス

    UDPソケットの管理を行う。
    TUdpSendクラス、TUdpReceiveクラスに継承してもらうつもり。
*/
class TUdpSocket {
    public:
        /*!
            コンストラクター
        */
        __fastcall TUdpSocket();

        /*!
            仮想デストラクター
        */
        virtual __fastcall ~TUdpSocket() {};


    protected:
        //! ソケットディスクリプター
        __property SOCKET pSocket = {read = m_Socket};


        /*!
            WinSocketを初期化する。

            @return true:成功, false:失敗
        */
        bool __fastcall initialize();

        /*!
            ユニキャストソケットを作成する。

            @return true:成功, false:失敗
        */
        bool __fastcall makeSocket();

        /*!
            ソケットをクローズする。

            @return 0:成功, !0:エラーコード
        */
        int __fastcall close();


    private:
        //! ソケットディスクリプター
        SOCKET m_Socket;
};

}   // namespace Udp
}   // namespace Common

#endif
```

### TUdpSocket.cpp

```cpp
/*!
    @file   TUdpSocket.cpp
    @brief  UDPソケットクラスの実装
*/

#include <winsock2.h>
#include <ws2tcpip.h>
#include "TUdpSocket.h"

#pragma package(smart_init)

namespace Common {
namespace Udp {

//------------------------------------------------------------------------------
// コンストラクター
//------------------------------------------------------------------------------
__fastcall TUdpSocket::TUdpSocket() : m_Socket(INVALID_SOCKET){
    // DO NOTHING
}

//------------------------------------------------------------------------------
// WinSocket初期化
//------------------------------------------------------------------------------
bool __fastcall TUdpSocket::initialize() {
    WSADATA wsaData;
    WORD    versionRequested = MAKEWORD(2, 0);  // バージョン2.0

    // WinSock.dllを初期化する。
    int wsaStartupResult = WSAStartup(versionRequested, &wsaData);
    if (wsaStartupResult != 0) {
        return false;
    }

    // 要求したバージョンを利用できるか確認する。
    if (wsaData.wVersion != versionRequested) {
        return false;
    }

    return true;
}

//------------------------------------------------------------------------------
// ユニキャストソケット作成
//------------------------------------------------------------------------------
bool __fastcall TUdpSocket::makeSocket() {
    m_Socket = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    return ((m_Socket != INVALID_SOCKET) ?  true : false);
}

//------------------------------------------------------------------------------
// ソケットクローズ
//------------------------------------------------------------------------------
int __fastcall TUdpSocket::close() {
    if (m_Socket == INVALID_SOCKET) {
        return 0;
    }
    int closeResult = closesocket(m_Socket);
    m_Socket = INVALID_SOCKET;
    return ((closeResult == 0) ? 0 :WSAGetLastError());
}

}   // namespace Udp
}   // namespace Common
```

## UDP送信ソケットクラス

### TUdpSendSocket.h

```cpp
/*!
    @file   TUdpSendSocket.h
    @brief  UDP送信ソケットクラスの宣言
*/

#ifndef TUdpSendSocketH
#define TUdpSendSocketH

#include <vcl.h>
#include <string>
#include "TUdpSocket.h"

namespace Common {
namespace Udp {

/*!
    UDP送信ソケットクラス

    UDP送信ソケットを用いて、送信処理を行う。包含して使ってもらう。
*/
class TUdpSendSocket : public TUdpSocket {
    public:
        /*!
            コンストラクター

            @param  address  :送信先IPアドレス
            @param  port     :送信先ポート番号
        */
        __fastcall TUdpSendSocket(const UnicodeString address, unsigned int port);

        /*!
            仮想デストラクター
        */
        __fastcall ~TUdpSendSocket() {};

        /*!
            ユニキャストソケット作成(オーバーライド)

            @return true:成功, false:失敗
        */
        bool __fastcall makeSocket();

        /*!
            データを送信する。

            @param  data    :送信データを詰め込むバッファー
            @param  max     :送信するデータのサイズ[Byte]
            @return 送信成功時:送信したデータのサイズ[Byte], 送信失敗時:-1
        */
        int __fastcall send(const std::string &data, unsigned int max);

        /*!
            ソケット使用終了

            @return なし。
        */
        void __fastcall closeSocket();


    private:
        //! 送信アドレス
        const UnicodeString m_Address;

        //! 送信ポート番号
        const unsigned int m_Port;

        //! 送信アドレス情報
        struct sockaddr_in m_SendAddress;
};

}   // namespace Udp
}   // namespace Common

#endif
```

### TUdpSendSocket.cpp

```cpp
/*!
    @file   TUdpSendSocket.cpp
    @brief  UDP送信ソケットクラスの実装
*/

#include <algorithm>
#include "TUdpSendSocket.h"

#pragma package(smart_init)

namespace Common {
namespace Udp {

//------------------------------------------------------------------------------
// コンストラクター
//------------------------------------------------------------------------------
__fastcall TUdpSendSocket::TUdpSendSocket(const UnicodeString address, unsigned int port) : m_Address(address), m_Port(port) {
    // DO NOTHING
}

//------------------------------------------------------------------------------
// ユニキャストソケット作成
//------------------------------------------------------------------------------
bool __fastcall TUdpSendSocket::makeSocket() {
    // ソケット作成
    bool isMakeSuccess = TUdpSocket::makeSocket();  // 基底クラスのメソッド
    if (!isMakeSuccess) {
        return false;
    }

    // アドレス情報セット
    memset((char *)&m_SendAddress, 0, sizeof(m_SendAddress));
    m_SendAddress.sin_family = AF_INET;
    m_SendAddress.sin_addr.s_addr = inet_addr(((AnsiString)m_Address).c_str());
    m_SendAddress.sin_port = htons(m_Port);

    return true;
}

//------------------------------------------------------------------------------
// 送信
//------------------------------------------------------------------------------
int __fastcall TUdpSendSocket::send(const std::string &data, unsigned int max) {
    std::string sendData(data);

    // WSABUF構造体とWSAOVERLAPPED構造体の設定
    WSABUF wsaBuf;
    wsaBuf.buf = (char *)sendData.c_str();
    wsaBuf.len = max;
    WSAOVERLAPPED wsaOverLapped;
    wsaOverLapped.hEvent = WSACreateEvent();

    // 送信
    DWORD sendSize;
    DWORD flags = 0;
    DWORD receiveResult;
    int sendResult = WSASendTo(pSocket, &wsaBuf, 1, &sendSize, flags, (struct sockaddr *)&m_SendAddress, sizeof(m_SendAddress), &wsaOverLapped, NULL);

    if (sendResult != 0) {
        // オーバーラップ操作は後で完了するからねーってエラーじゃなければ失敗
        if (WSAGetLastError() != WSA_IO_PENDING) {
            CloseHandle(wsaOverLapped.hEvent);
            return -1;
        }
    }

    // I/Oが完了していない場合は、終了イベントを待機する。
    DWORD waitResult = WaitForSingleObject(wsaOverLapped.hEvent, 3000); // とりあえず3秒ぐらい待っとくか。
    // タイムアウト
    if (waitResult != WAIT_OBJECT_0) {
        CancelIo(wsaOverLapped.hEvent);
        WSACloseEvent(wsaOverLapped.hEvent);
        return -1;
    }
    // WSASendの結果を受取る。
    bool overLapResult = WSAGetOverlappedResult(pSocket, &wsaOverLapped, &sendSize, false, &flags);
    if (!overLapResult) {
        WSACloseEvent(wsaOverLapped.hEvent);
        return -1;
    }

    // 送信データが無い場合(こんなことありえるのか。。？)
    if (sendSize == 0) {
        return -1;
    }

    // ここまででreturn -1されていなければ、送信に成功している。
    WSACloseEvent(wsaOverLapped.hEvent);
    return sendSize;
}

//------------------------------------------------------------------------------
// ソケット使用終了
//------------------------------------------------------------------------------
void __fastcall TUdpSendSocket::closeSocket() {
    TUdpSocket::close();
}

}   // namespace Udp
}   // namespace Common
```

## UDP受信ソケットクラス

### TUdpReceiveSocket.h

```cpp
/*!
    @file   TUdpReceiveSocket.h
    @brief  UDP受信ソケットクラスの宣言
*/


#ifndef TUdpReceiveSocketH
#define TUdpReceiveSocketH

#include <vcl.h>
#include "TUdpSocket.h"

namespace Common {
namespace Udp {

/*!
    UDP受信ソケットクラス

    UDPソケットを用いて、受信処理を行う。包含して使ってもらう。
*/
class TUdpReceiveSocket : public TUdpSocket {
    public:
        /*!
            コンストラクター

            @param  address  :受信IPアドレス
            @param  port     :待ち受けポート番号
        */
        __fastcall TUdpReceiveSocket(const UnicodeString address, unsigned int port, unsigned int timeout);

        /*!
            仮想デストラクター
        */
        virtual __fastcall ~TUdpReceiveSocket() {};

        /*!
            ユニキャスト受信ソケット作成(オーバーライド)

            @return true:成功, false:失敗
        */
        bool __fastcall makeSocket();

        /*!
            マルチキャスト受信ソケット作成

            @return true:成功, false:失敗
        */
        bool __fastcall makeMulticastSocket();

        /*!
            データを受信する。

            @param  data    :受信データを詰め込むバッファー
            @param  max     :受信の許容サイズ
            @return 受信成功時:受信したデータサイズ[Byte], 受信失敗時:-1
        */
        int __fastcall receive(char *data, unsigned int max);

        /*!
            ソケット使用終了

            @return なし。
        */
        void __fastcall closeSocket();

    private:
        //! 受信アドレス
        const UnicodeString m_Address;

        //! 受信ポート番号
        const unsigned int m_Port;

        //! 受信タイムアウト時間[ms]
        const unsigned int m_Timeout;
};

}   // namespace Udp
}   // namespace Common

#endif
```

### TUdpReceiveSocket.cpp

```cpp
/*!
    @file   TUdpReceiveSocket.cpp
    @brief  UDP受信ソケットクラスの実装
*/

#include <ws2tcpip.h>
#include <algorithm>
#include "TUdpReceiveSocket.h"

#pragma package(smart_init)

namespace Common {
namespace Udp {

//------------------------------------------------------------------------------
// コンストラクター
//------------------------------------------------------------------------------
__fastcall TUdpReceiveSocket::TUdpReceiveSocket(const UnicodeString address, unsigned int port, unsigned int timeout) :
    m_Address(address), m_Port(port), m_Timeout(timeout) {
    // DO NOTHING
}

//------------------------------------------------------------------------------
// ユニキャストソケット作成
//------------------------------------------------------------------------------
bool __fastcall TUdpReceiveSocket::makeSocket() {
    // ソケット作成
    bool isMakeSuccess = TUdpSocket::makeSocket();  // 基底クラスのメソッド
    if (!isMakeSuccess) {
        return false;
    }

    // アドレス情報セット
    struct sockaddr_in address;
    memset((char *)&address, 0, sizeof(address));
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = inet_addr(((AnsiString)m_Address).c_str());
    address.sin_port = htons(m_Port);

    // バインド
    int bindResult = bind(pSocket, (struct sockaddr *)&address, sizeof(address));
    if (bindResult != 0) {
        TUdpSocket::close();
        return false;
    }

    return true;
}

//------------------------------------------------------------------------------
// マルチキャストソケット作成
//------------------------------------------------------------------------------
bool __fastcall TUdpReceiveSocket::makeMulticastSocket() {
    // ソケット作成
    bool isMakeSuccess = TUdpSocket::makeSocket();  // 基底クラスのメソッド
    if (!isMakeSuccess) {
        return false;
    }

    // アドレス情報セット
    struct sockaddr_in address;
    memset((char *)&address, 0, sizeof(address));
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(m_Port);

    // バインド
    int bindResult = bind(pSocket, (struct sockaddr *)&address, sizeof(address));
    if (bindResult != 0) {
        TUdpSocket::close();
        return false;
    }

    // マルチキャストグループへ参加
    struct ip_mreq multicastRequest;
    memset((char *)&multicastRequest, 0, sizeof(multicastRequest));
    multicastRequest.imr_interface.s_addr = INADDR_ANY;
    multicastRequest.imr_multiaddr.s_addr = inet_addr(((AnsiString)m_Address).c_str());
    int setOptionResult = setsockopt(pSocket, IPPROTO_IP, IP_ADD_MEMBERSHIP, (char *)&multicastRequest, sizeof(multicastRequest));
    if (setOptionResult == SOCKET_ERROR) {
        TUdpSocket::close();
        return false;
    }

    return true;
}

//------------------------------------------------------------------------------
// 受信
//------------------------------------------------------------------------------
int __fastcall TUdpReceiveSocket::receive(char *data, unsigned int max) {
    // NULLで終わる文字列を返却できるように、予め初期化しておく。
    std::fill(data, (data + max), 0);

    // WSABUF構造体とWSAOVERLAPPED構造体の設定
    WSABUF wsaBuf;
    wsaBuf.buf = data;
    wsaBuf.len = max;
    WSAOVERLAPPED wsaOverLapped;
    wsaOverLapped.hEvent = WSACreateEvent();

    // 受信
    socklen_t sockLen;
    struct sockaddr_in address;
    sockLen = sizeof(struct sockaddr_in);
    DWORD receiveSize;
    DWORD flags = 0;
    DWORD receiveResult;
    int recvResult = WSARecvFrom(pSocket, &wsaBuf, 1, &receiveSize, &flags, (struct sockaddr *)&address, &sockLen, &wsaOverLapped, NULL);

    if (recvResult != 0) {
        // オーバーラップ操作は後で完了するからねーってエラーじゃなければ失敗
        if (WSAGetLastError() != WSA_IO_PENDING) {
            CloseHandle(wsaOverLapped.hEvent);
            return -1;
        }
    }

    // I/Oが完了していない場合は、終了イベントを待機する。
    DWORD waitResult = WaitForSingleObject(wsaOverLapped.hEvent, m_Timeout);
    // タイムアウト
    if (waitResult != WAIT_OBJECT_0) {
        closeSocket();
        CancelIo(wsaOverLapped.hEvent);
        WSACloseEvent(wsaOverLapped.hEvent);
        return -1;
    }
    // WSARecvFromの結果を受取る。
    bool overLapResult = WSAGetOverlappedResult(pSocket, &wsaOverLapped, &receiveSize, false, &flags);
    if (!overLapResult) {
        closeSocket();
        WSACloseEvent(wsaOverLapped.hEvent);
        return -1;
    }

    // 受信データが無い場合(こんなこと有り得るのか。。？)
    if (receiveSize == 0) {
        return -1;
    }

    // ここまででreturn -1されていなければ、受信に成功している。
    WSACloseEvent(wsaOverLapped.hEvent);
    return receiveSize;
}

//------------------------------------------------------------------------------
// ソケット使用終了
//------------------------------------------------------------------------------
void __fastcall TUdpReceiveSocket::closeSocket() {
    TUdpSocket::close();
}

}   // namespace Udp
}   // namespace Common
```
