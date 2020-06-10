---
title: '優先度キューに抱いていた勝手な幻想'
date: '2013-12-17'
category: 'C++'
---

STL の `priority_queue`、つまり優先度キューのお話です。  
[priority_queue - C++ Reference](http://www.cplusplus.com/reference/queue/priority_queue/)

今作っているアプリケーションで、`priority_queue` のコンテナをクラスにして、それらを優先度順にプッシュできれば、いい感じに作れそうなモジュールがあります。`priority_queue` は使ったことがないのですが、何となく以下のような感じでいけると思っていました。勝手な幻想を抱いていたものです。

```cpp
// 優先度キューで管理するコンテナ
class TContainer {
    public:
        // コンストラクター
        TContainer(string message) : m_Message(message) {}

        // メッセージを返すアクセサメソッド
        string getMessage() {
            return m_Message;
        }

    private:
        const string m_Message;
}

// メイン
void main() {
    priority_queue<TContainer> priorityQueue;
    
    // 中・低・高の順でプッシュするけど第二引数で優先度を指定する。
    priorityQueue.push(TContainer("優先度：中"), 2);
    priorityQueue.push(TContainer("優先度：低"), 1);
    priorityQueue.push(TContainer("優先度：高"), 3);
    
    // すると、高・中・低の順に並び変わっている、という勝手な幻想。
    while (!priorityQueue.empty()) {
        cout << priorityQueue.top().getMessage() << endl;
        priorityQueue.pop();
    }
}
```
## 現実

まあ、結論から言うと、こんなことはできないのです。私の手元の入門書籍や、WEBサイトを見て回ったところ、int型のコンテナを管理するqueueがに、そのint型の値順にソートするサンプルしか見つからないのです。こんな感じです。

```cpp
void main() {
    priority_queue<int> priorityQueue;
    
    priorityQueue.push(2);
    priorityQueue.push(1);
    priorityQueue.push(3);
    
    while (!priorityQueue.empty()) {
        cout << priorityQueue.top() << endl;
        priorityQueue.pop();
    }
}
```

## 対策

自分の思っている優先度キューを実現するために無理矢理書きました。

```cpp
#include <iostream>
#include <queue>
#include <string>

using namespace std;

// 優先度キューで管理するコンテナ
class TContainer {
    public:
        // コンストラクター
        TContainer(string message, unsigned int priority) :
            m_Message(message), m_Priority(priority) {}
        
        // 比較演算子のオーバーロード
        bool operator < (const TContainer &container) const {
            return (m_Priority <  container.m_Priority);
        }
        
        // メッセージを返すアクセサメソッド
        string getMessage() {
            return m_Message;
        }

    private:
        // メッセージ
        const string m_Message;

        // 優先度(数値が大きいほど高い)
        const unsigned int m_Priority;
};

// メイン
void main() {
    priority_queue<TContainer, vector<TContainer>, less<TContainer> > priorityQueue;
    
    // 中・低・高の順でプッシュするけど
    priorityQueue.push(TContainer("優先度：中", 2));
    priorityQueue.push(TContainer("優先度：低", 1));
    priorityQueue.push(TContainer("優先度：高", 3));
    
    // 高・中・低の順に並び変わっているのだ。
    while (!priorityQueue.empty()) {
        cout << priorityQueue.top().getMessage() << endl;
        priorityQueue.pop();
    }
}
```

## 解説

要はソートの条件があれば良いわけです。まず、コンテナのクラスに優先度のメンバーを作ります。メンバーはコンストラクターで与えられます。

```cpp
private:
    // 優先度(数値が大きいほど高い)
    unsigned int m_Priority;
```

そして、ソートするために比較演算子をオーバーロードします。

```cpp
// 比較演算子のオーバーロード
bool operator < (const TContainer &container) const {
    return (m_Priority <  container.m_Priority);
}
```

これだけです。簡単ですね。あとは、プッシュする時はこんな感じです。

```cpp
priorityQueue.push(TContainer("優先度：中", 2));
```
