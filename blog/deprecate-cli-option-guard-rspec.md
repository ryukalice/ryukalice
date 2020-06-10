---
title: 'Guard::RSpec で cli オプションが非推奨'
date: '2015-06-08'
category: 'Ruby on Rails'
---

Spork やら Guard やらで RSpec によるテスト環境を整備していたのですが、Guardfile をチュートリアル通りに下記のように記述していると

```rb
guard 'rspec', after_all_pass: false, cli: '--drb' do
  ...
end
```

下記のような Warning が発生します。

> Guard::RSpec DEPRECATION WARNING: The :cli option is deprecated. Please customize the new :cmd option to fit your need.

:cli オプションが非推奨になったので、:cmd オプションであなたのお好みにカスタマイズしてください、とのことなので、Guardfile を下記のように修正すればOKです。

```rb
guard 'rspec', after_all_pass: false, cmd: 'rspec --drb' do
  ...
end
```
