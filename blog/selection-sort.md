---
title: '選択ソート'
date: '2014-09-05'
category: 'C'
---

## 挿入ソートとは

前回のバブルソートに続いて単純なソートアルゴリズムです。配列された要素から、最大値／最小値を探索し、ソートされていない最後の要素とスワップするだけです。

```c
#include <stdio.h>
#define swap(x, y) { (x != y) && (x += y, y = x - y, x -= y); }

void selection_sort(int *, int);
void show(int *, int);

// ソート前のデータを表示後、ソートしてからソート後のデータを表示する
int main(void) {
    // ソートするデータの情報
    const int count = 5;
    int data[] = { 3, 2, 5, 1, 4 };

    // ソート前のデータを表示
    printf("ソート前：");
    show(data, count);

    // ソート実行
    selection_sort(data, count);
    
    // ソート後のデータを表示
    printf("ソート後：");
    show(data, count);

    return (0);
}

// data[] を順に表示する
void show(int data[], int count) {
    int i;
    for (i = 0; i < count; i++) printf("%d, ", data[i]);
    printf("\n");
}

// 選択ソート関数
void selection_sort(int data[], int count) {
    int i, j, min;
    int temp;

    for (i = 0; i < (count - 1); i++) {
        min = i;
        for (j = (i + 1); j < count; j++) {
            if (data[j] < data[min]) {
                min = j;
            }
        }

        swap(data[i], data[min])
    }
}
```

実行結果
> ソート前：3, 2, 5, 1, 4,  
ソート後：1, 2, 3, 4, 5, 

## ソート関数の解説

```c
void selection_sort(int data[], int count) {
    int i, j, min;

    for (i = 0; i < (count - 1); i++) {
        min = i;
        for (j = (i + 1); j < count; j++) {
            if (data[j] < data[min]) {
                min = j;
            }
        }

        swap(data[i], data[min])
    }
}
```

バブルソートと同様、変数 i のループ毎に端っこの要素の値が順に決定していきます。しかし、値が決定するまでの過程がバブルソートと異なります。変数 j のループで決定していない値を順番に舐めていき、昇順であれば最小値、降順であれば最大値を探索します。

配列の最後まで探索し終わったら、その値とソートしていない端っこの要素をスワップ(値の交換)します。これを(要素数 – 1)回繰り返すだけです。つまり、データ数を n とすると、比較回数はバブルソートと同様 (n(n – 1) / 2) になり、計算量は O(n²) です。

ただし、交換回数は毎周の最後に必要であれば最小値／最大値と交換するだけなので、最大(n – 1)回 で済みます。そのため、バブルソートと比べると基本的に高速になります。しかし、安定ソートではありません(同じ値の順序は保証されない)。

まとめると、最小値／最大値のインデックスを保持しておき、ループの最後に1度交換するだけなので、バブルソートに比べると少し高速なのです。
