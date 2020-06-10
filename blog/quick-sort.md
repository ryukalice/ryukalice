---
title: 'クイックソート'
date: '2014-09-07'
category: 'C'
---

## クイックソートとは

今回は”言うは易し、書くは難し”なアルゴリズムです。クイックソートは、ある要素を軸に分割を繰り返しながら整列を行うアルゴリズムで、分割統治法と一種です。

データの要素数を n とすると、平均計算量が O(n log n) で、ランダムなデータに対して最も高速なソートアルゴリズムであるとされています。開発者のアントニー・ホーアは、あまりの早さに ”quick” のワードを付けることにしたそうです。本当かどうか知りませんが。

そんな高速なアルゴリズムを C で組もうとすると、なかなかに複雑になります。そらで書けなかったし。。再起的アルゴリズムなので、フィボナッチ数列ぐらいを理解して組めるようになったら、クイックソートを書いてみると良いかもしれません。

```c
#include <stdio.h>
#define swap(x, y) { (x != y) && (x += y, y = x - y, x -= y); }

void show(int *, int);
void quick_sort(int *, int, int);
int median(int, int, int);

// ソート前のデータを表示後、ソートしてからソート後のデータを表示する
int main(void) {
    // ソートするデータの情報
    const int count = 5;
    int data[] = { 3, 2, 5, 1, 4 };

    // ソート前のデータを表示
    printf("ソート前：");
    show(data, count);

    // ソート実行
    quick_sort(data, 0, (count - 1));
    
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

// クイックソート関数
void quick_sort(int data[], int left, int right) {
    int i = left;
    int j = right;

    // ぶつかったら終了。これ以上再起もしない。
    if (left >= right) return;

    // ピボット(データの総数の中央値)を取得。
    int pivot = median(data[i], data[i + (j - i) / 2], data[j]);

    // ピボットを軸に分割。
    while (1) {
        while (data[i] < pivot) i++;
        while (data[j] > pivot) j--;
        if (i >= j) break;

        swap(data[i], data[j]);
        i++;
        j--;
    }

    // 左右をソート
    quick_sort(data, left, (i - 1));
    quick_sort(data, (j + 1), right);
}

// 3つの値の中間値を返す
int median(int x, int y, int z) {
    if (x < y) {
        if (y < z) return y;
        if (z < x) return x;
        return z;
    }
    else {
        if (z < y) return y;
        if (x < z) return x;
        return z;
    }
}
```

実行結果
> ソート前：3, 2, 5, 1, 4,  
ソート後：1, 2, 3, 4, 5, 

## ソート関数の解説

```c
void quick_sort(int data[], int left, int right) {
    int i = left;
    int j = right;

    // ぶつかったら終了。これ以上再起もしない。
    if (left >= right) return;

    // ピボット(データの総数の中央値)を取得。
    int pivot = median(data[i], data[i + (j - i) / 2], data[j]);

    // ピボットを軸に分割。
    while (1) {
        while (data[i] < pivot) i++;
        while (data[j] > pivot) j--;
        if (i >= j) break;

        swap(data[i], data[j]);
        i++;
        j--;
    }

    // 左右をソート
    quick_sort(data, left, (i - 1));
    quick_sort(data, (j + 1), right);
}
```

やっていることは割りと単純で、ピボットとなる要素を取得して、それを軸に再帰的にこのアルゴリズムを実行するだけです。ピボットの取得が複雑なのは雑なオーバーフロー対策で、 ((left + right) / 2) と思って良いでしょう。

`while` ブロックの中ではピボットの値以上の集まりと、ピボットの値以下の集まりに分割しています。訳が分からなくなったら、ソートの過程を出力してみると良いでしょう。プログラムの見た目ほど複雑な動きはしていません。

冒頭で平均計算量は O(n log n) と述べましたが、対して最悪計算量は O(n²) となります。このパターンは、分割を行った結果、1:(n – 1) になってしまったパターンです。要するにピボットを偏って選びまくってしまった場合ですね。

また、再帰処理であるため、log2(N) に比例するメモリを使用します。ソートアルゴリズムの選び方は “時間と空間のトレードオフ” なんて言いますが、はえーからクイックソート使っとけ、って話にもならないわけですね。
