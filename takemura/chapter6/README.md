# 6章 ジェネリックと型レベルプログラミング

TypeScriptの型はチューリング完全。確か型だけで数独作ってた人がいた。

https://zenn.dev/michiharu/articles/6a4dc4f7655668

## 項目50

ジェネリック型。型をコネコネして加工したやつを型とする（名前はつけてもいいしつけなくてもいい）やつ。

ジェネリック型は集合を操作するもの。RDBMSにおけるEXISTS句（高階関数）の概念。1階までしかサポートしていないのもMySQLと同じ。

## 項目51

**型パラメーターは2回登場すべきである。**

ジェネリックの妥当性を見るためには、戻り値の型を省略してはいけない。

p247: ジェネリックの最初のルールは「ジェネリックにしない」ということです。

PHPDocsにもジェネリックがある（PHPにはない）。びっくり。

ジェネリックの一番身近な例は、C++の競プロライブラリ [AC Library](https://github.com/atcoder/ac-library) とかだと思う。

## 項目52

条件型は省略形で書けないっぽい

```TypeScript
declare function double<T extends string|number>(x: T): T extends string ?: number; // NG
```

2つならこれでいいけど、3つ以上だとかなり険しそう。実際別に分けられるなら分けたほうが賢い。これをわざわざ書いているのは、JavaScriptのnumberとstringに関する厄介な仕様があるからにすぎない。

TypeScript5.9はもう出ている。

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html
https://devblogs.microsoft.com/typescript/announcing-typescript-5-9/

## 項目53

ムズイ。黒魔術みをかなり感じる。普遍的というよりは、TypeScript独自の言語仕様に沿った結果というか。

## 項目54

## 項目55

## 項目56

## 項目57

## 項目58
