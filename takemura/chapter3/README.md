# 3章 型推論と制御フロー解析

静的な型付け（型アノテーション、静的型）と明示的な型付け（型推論）を分けること。これまで見てきた通り、人間よりコンパイラやリンターの方が賢い。

## 項目18

- [3-1.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter3/3-1.ts) ちょっと思ってるのと挙動が違ったので。デフォルト値ある場合は型指定はいらなさそう

- [3-2.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter3/3-2.ts) 本の思想的に、オブジェクトの型を使いまわしたいときは理由がないときは `typeof` のような使い方をしなさいと言っているように感じる。

結局typeやinterfaceで型を付けるのは、人間によるアノテーションと変わらないため…


## 項目19

コンパイラの都合や歴史的経緯によって、変数の型は途中で変わらない方が一般に読みやすい。

## 項目20

p112: readonlyは浅くreadonlyを適用するが、`as const`は深くreadonlyを適用する。

`satisfies` や `as const` は関数の戻り値や引数では使えない。

```TypeScript
type Point = [number, number];
function apiCall(params: Record<string, string|number>) : T satisfies Record<string, Point>; // NG
function getSquare(p1: Point as const, p2: Point as const): number; // NG
```

## 項目21

p114

```TypeScript
const pt = {x: 3, y: 4};
const id = {name: 'Pythagoras'};

const namedPoint = {...pt, ...id}; // ここで型アノテーションを付けない(項目18)
```

スプレッド構文は便利だが少し不可解だという例。

```TypeScript
const firstLast = {first: 'Harry', last: 'Truman'};
declare let hasMiddle: boolean;
const president = {...firstLast, ...(hasMiddle && {middle: 'S'})};

const falsySpread = {...false}; // こっちはNG
const middle = (hasMiddle && {middle: 'S'}); // false | {middle: 'S'}
```

JSX, TSXではお馴染みのfalsyとtruthyだが、スプレッド構文でも有効。

## 項目22

プロパティチェックでも型を絞り込めるのは、やはり構造的型付けが活きているからなのだと思う。

タグ付きユニオンはinterfaceやtypeで適切に設計しないと混乱を生み出しそう。

`v is number` のような機能（ユーザー定義の型ガード）はあまり用いるべきではない。p119

## 項目23

[3-3.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter3/3-3.ts)

分割代入を正しく使いましょうという話。できればプロパティ名と変数名を同じにしたい。

オプションプロパティを使うと、undefinedチェックで埋め尽くされることになるので、使いすぎに注意。

readonlyを使うと、プロパティだけの書き換えを防いで、immutableな運用をできる。


## 項目24

p128: const文脈は、文脈が失われた状況での推論に関する問題を上手く解決できますが、残念な欠点があります。変数の宣言時に何らかのミスをした場合、エラーは変数宣言ではなく関数呼び出しの場所で報告されます。特に、深くまでネストされたオブジェクトの中にミスがあり、それが定義された場所から遠く離れた場所で使用されたら、これは混乱を引き起こすかもしれません。

p130: 型アノテーションを減らすのにインラインで値を使うのが実用的な場合、この形式がより好ましい。

## 項目25

[3-4.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter3/3-4.ts)

サンプルコードを推論させたら`never[]`になる…。NoImplicitAnyの有無で変わる模様。なしだと`never[]`になる。

## 項目26

lodashがどういうライブラリか初めて知った。たまに見かけるけどこんなにメジャーだとは思ってなかった。

## 項目27

コールバック地獄。有名。

Promiseのエラーハンドリングをtry-catch文で行うかthen-catch文で行うかは流派がありそう。

## 項目28

本では書いてあるが、TypeScriptでは実際カリー化はそんなにうま味はない。じゃあ関数型ではどういう良さがあるの？　という点は要勉強。メモ化が主な利点かな～という感触。
