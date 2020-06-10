---
title: 'TDateTimePicker の Time プロパティは日付も返す'
date: '2014-01-16'
category: 'C++Builder'
---

C++Builderで、日時関連の処理を書く時、`System.TDateTime` クラスを使用します。この、`TDateTime` クラスの仕様については以下の通りです。
> TDateTime クラスは、日付/時刻値を格納する double 型データ メンバ val を継承します。 TDateTime 値の整数部分は、1899年12月30日からの経過日数です。 TDateTime 値の少数部分は、時刻です。
<cite>引用元: [System.TDateTime - XE2 API Documentation](http://docwiki.embarcadero.com/Libraries/XE2/ja/System.TDateTime)</cite>

で、時間を表現したい場合は、`System.TTime` クラスを使用します。

> TTime は、時間を表すために使用されます。TTime は、TDateTime 型です。
<cite>引用元: [System.TTime - XE3 API Documentation](http://docwiki.embarcadero.com/Libraries/XE3/ja/System.TTime)</cite>

ここで注意が必要なのは、`TTime` は時間を「表す」ための名前なだけであって、結局は `TDateTime` なのです。つまり、日付の値が入っていないことを保障するわけではないのです。そして、VCL のコンポーネント、`Vcl.ComCtrls.TDateTimePicker` が更に私を痛めつけます。

> TDateTimePicker は日付または時刻を入力するリストボックスを表示します。
TDateTimePicker は，特に日付と時刻を入力するために設計されたビジュアルコンポーネントです。
<cite>引用元: [Vcl.ComCtrls.TDateTimePicker - RAD Studio API Documentation](http://docwiki.embarcadero.com/Libraries/XE5/ja/Vcl.ComCtrls.TDateTimePicker)</cite>

つまり、GUI で日付または時刻を入力するためのコンポーネントです。日時の入力範囲チェック等をしなくて良いので、なかなか便利なコンポーネントです。時刻を入力するのであれば、`Time` プロパティより時刻情報を取り出します。`Time` プロパティの仕様は以下の通りです。

> ユーザーが入力した時刻を示します。Time はユーザーが入力した時刻を表します。
<cite>引用元: [Vcl.ComCtrls.TDateTimePicker.Time - RAD Studio API Documentation](http://docwiki.embarcadero.com/Libraries/XE4/ja/Vcl.ComCtrls.TDateTimePicker.Time)</cite>

そんな `Time` プロパティには罠が2つあります。

- 型が `TTime` ではなく `TDateTime`
- 日付値も返す

つまり、時刻情報だけでなく日付情報も返ってくるので、小数点以下の値になると保障されているわけではないということです。ここで、どんな弊害があるかというと、私のように横着して `CompareTime()` を使わずに比較演算子で時刻の比較をしようとした時に問題が出てきます。

例えば `System.TDateTime.CurrentTime()` 等の現在時刻(これは本当に時刻情報だけで日付値は0)と比較する場合です。比較演算子を使うと、日付情報も比較されてしまうので、期待の時刻比較ができなくなってしまうのです。`System.DateUtils.CompareTime()` を使いましょう。  
[System.DateUtils.CompareTime - XE2 API Documentation](http://docwiki.embarcadero.com/Libraries/XE2/ja/System.DateUtils.CompareTime)

