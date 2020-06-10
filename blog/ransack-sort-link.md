---
title: 'ransack の sort_link メソッドから Javascript を実行する'
date: '2015-05-30'
category: 'Ruby on Rails'
---

`sort_link` メソッドに、JavaScript のファイルを渡しても、コードが `pre` 要素で表示されるだけで、スクリプトとして実行されない問題に出くわしました。じゃあ、`sort_link` メソッドの実装を見てみよう、ということで、コードがこちらです。

```rb
# +sort_link+
#
#   <%= sort_link(@q, :name, [:name, 'kind ASC'], 'Player Name') %>
#
def sort_link(search_object, attribute, *args)
    search, routing_proxy = extract_search_and_routing_proxy(search_object)
    unless Search === search
      raise TypeError, 'First argument must be a Ransack::Search!'
    end
    s = SortLink.new(search, attribute, args, params)
    link_to(s.name, url(routing_proxy, s.url_options), s.html_options(args))
end
```

これ、最終的に link_to メソッドをコールしているだけなんですね。そのため、JavaScript として実行させるためには、”remort: true (Ajaxでリンクを処理)” のオプションを、渡してやる必要があります。このオプションは、sort_link メソッドの第4引数で与えることができます。

```rb
sort_link(@q, :name, {}, remote: true)
```
