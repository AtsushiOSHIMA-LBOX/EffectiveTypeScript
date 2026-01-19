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

[応用例のPrismaの説明](https://zenn.dev/tockn/articles/0e6eac6220e072) ←スキーマを定義すれば、自動でSQLをリントしてくれるバックエンド向けライブラリ。使っているものとしてはおそらくテンプレートリテラル。

ここまで豪華だと、ブラウザの一機能を担うというよりは、もっと適切な活躍の場がありそうな気がする。コンパイラ作成とか。逆にここまで自由度が高くなっても対応できるJavaScriptとtscもすごい。

## 項目55

## 項目56

`Resolve`はめちゃ便利だし、コーディングルールに取り入れてもいいと思うが、どちらかというと拡張機能とかでサポートしてほしそうな機能ではある。

## 項目57

[末尾再帰 - Wikipedia](https://ja.wikipedia.org/wiki/%E6%9C%AB%E5%B0%BE%E5%86%8D%E5%B8%B0)

競プロなどの文脈で「末尾再帰にしなさい」とはよく言われるが、なぜなのかは理解してなかった。こんな力技だったのか。。

```TypeScript
type ToSnake<T extends string> =
    string extends T
        ? string
        : T extends `${infer First}${infer Rest}`
            ? (First extends Uppercase<First>
                ? `_${Lowercase<First>}${ToSnake<Rest>}`
                : `${First}${ToSnake<Rest>}`
            )
            : T;

// 言い換え
function toSnake(str: string): string {
    if (str.length === 0) {
        return str; // 空文字列の場合はそのまま返す
    }

    const first = str[0];
    const rest = str.slice(1);

    if (first === first.toUpperCase()) {
        // toSnakeの戻り値がこの関数の戻り値でない→末尾再帰ではない
        return `_${first.toLowerCase()}${toSnake(rest)}`;
    } else {
        return `${first}${toSnake(rest)}`;
    }
}
```

Safariしかサポートしてない。Chromeはダメらしい。

## 項目58
