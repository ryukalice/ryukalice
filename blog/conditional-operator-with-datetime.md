---
title: '条件演算子は真式と偽式で同じ型の値を返さなければならない'
date: '2013-12-16'
category: 'C++Builder'
---

## TDateTime クラス

条件演算子と VCL の `TDateTime` クラスの罠に引っかかりました。今回起こった問題は、とある `TDateTime` 変数の `hh:nn:ss` 情報が消えてしまうというもの。

まず、`TDateTime` クラスの仕様についてです。
> TDateTime クラスは、日付/時刻値を格納する double 型データ メンバ val を継承します。 TDateTime 値の整数部分は、1899年12月30日からの経過日数です。 TDateTime 値の少数部分は、時刻です。
<cite>引用元: [System.TDateTime - XE2 API Documentation](http://docwiki.embarcadero.com/Libraries/XE2/ja/System.TDateTime)</cite>

先ほど書いた、`hh:nn:ss` 情報(つまり時刻)が消えてしまうというのは、小数部分が消えてしまうということです。`TDateTime` が整数部が日付で、小数部が時刻というのはあまり考えておりませんでした。IDE(C++Builder XE2) でデバッグ中に変数にマウスオーバーした時に表示される日時情報に、時刻が書いていないことに気付いたわけです。

## 時刻情報が消えた原因

結論から言うと、条件演算子が犯人でした。問題のコードはこんな感じです。

```cpp
TDateTime __fastcall TSampleClass::getDateTime(unsigned int index) {
    return (index < m_Array.size()) ? m_Array.at(index).dateTime : 0;
}
```

引数で渡された `index` の範囲チェックをして、問題がなければ `TDateTime` 型の値を返して、もし範囲チェックが受からなければ0(1899/12/30 00:00:00)を返しているつもりで組んでおりました。しかし、条件演算子の特性上、これでは駄目だったのです。

## 条件演算子の仕様

条件演算子について Wikipedia 大先生に聞くと以下のような一文があります。
> 真式と偽式は同じ型の値を返さなければならない（暗黙に型変換可能なら許されることもある）。
<cite>引用元: [条件演算子 - Wikipedia](http://ja.wikipedia.org/wiki/%E6%9D%A1%E4%BB%B6%E6%BC%94%E7%AE%97%E5%AD%90)</cite>

許されちゃったわけです。`TDateTime` を期待している `m_Array.at(index).dateTime` は `int` 型に暗黙に変換することが許されちゃったわけです。型は偽式の方に合わせられるため、真式が暗黙に `int` に型変換されてしまったわけです。

## とりあえずの解決法

安直にやるなら0を `TDateTime` でキャストすれば良いです。

```cpp
TDateTime __fastcall TSampleClass::getDateTime(unsigned int index) {
    return (index < m_Array.size()) ? m_Array.at(index).dateTime : (TDateTime)0;
}
```

ただ、そんな罠があるのであればこの場面で条件演算子を使うべきではないかもしれませんね。

```cpp
TDateTime __fastcall TSampleClass::getDateTime(unsigned int index) {
    // 引数の値範囲チェック
    if (index >= m_Array.size()) {
        return 0;
    }

    return m_Array.at(index).dateTime;
}
```
