---
title: 'ActiveAdmin のフィルターで optgroup 要素を使用する'
date: '2018-10-29'
category: 'Ruby on Rails'
---

## 課題

ActiveAdmin の index ページの filter で optgroup を使った select 要素を配置したい。ActiveAdmin の DSL に従いつつ、直感的に optgroup を用いた select 要素を生成しようと思うと、下記のようなコードを書きたくなるが、 `ActiveAdmin::DSL` の世界(app/admin/model_name.rb の世界)では `ActionView::Helpers` が存在しないため、 `option_groups_from_collection_for_select` が見えない。

```ruby
filter :item, as: :select, collection: option_groups_from_collection_for_select(Parent.all, :children, :name, :id, :name)
```

## 解決策

親子関係にあるリソースでの検索は皆が求めていそうな用途だが、[本家のマニュアル](https://activeadmin.info/3-index-pages.html)にも載っていないし、Google 先生に相談しても解決はしなかったので、本家のコードを読みに行くと `collection` オプションは `[optgroup要素 のテキスト, [option 要素のテキスト, option 要素の value 属性]]` というフォーマットを渡せることが分かった。実例を以下に示す。

```ruby
filter :item, collection: -> {
  Parent.all.map { |parent| [parent.name, parent.children.map { |child| [child.name, child.id] } ] }
}
```
