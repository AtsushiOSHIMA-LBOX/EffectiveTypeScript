## 項目6

TypeScriptはUXをとても大事にするという思想があると感じる。体験の良さが受け入れられた理由なわけで、エンジニアの中にはUI/UX軽視の流れがたまに見られるが、それは全くの誤りであると示している。

Nullチェックしたら下の記述ではNullがなくなるのすごいなぁ。どうやって実装してるのか。

## 項目7

[型理論](https://www.marulabo.net/docs/type-theory-talkie/)

never型があるのは、型に対する演算における理論的な要請があったからというのが強い。一般的な手続き的プログラミング言語ではインターセクション型は存在しない。

- [2-1.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter2/2-1.ts): neverを使うべき場面でvoidを使っても別に怒られない。しかしちゃんと意識するべきそう。

- [2-2.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter2/2-2.ts): p39 これくらいならinterfaceとtypeは等価に書ける。

## 項目8

instance(実体)の世界と、interface(型)の世界。`instanceof`は実体に対する判定なので型には使えない。

```TypeScript
const first: Person['first'] = jane['first'];
```

p46 こんな書き方できるのか・・

## 項目9

## 項目10

JavaScriptのラッパーオブジェクトはJavaのそれを彷彿とさせる。~~JavaとJavaScriptの唯一似ている要素~~

Javaではラッパーオブジェクトとプリミティブ型は使い分けるべし（むしろラッパーオブジェクトを使うべき）という空気感なのだが、JavaScriptでは暗黙に変換がされるので逆にプリミティブ型を使うことが奨励される。

## 項目11

[2-3.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter2/2-3.ts)

非自明ではあるが、便利かな～という感じ。

```TypeScript
type Props = {
    title: string;
    darkMode?: boolean;
}

const App = ({title, darkMode}: Props) => {
    // 省略
}

// 呼び出し側
// OK
App({title: 'title', darkMode: true});
App({title: 'title'});
(
    <App title="title" darkMode={true}/>
);

const mock = {title: 'title', dummy: 'dummy'};
App(mock);
// NG
App({title: 'title', dummy: true});
```

こういう記法もこの部分の性質に由来か。

## 項目12

classがまとめられるのと同じように、関数の型もまとめられる。これは意識したことがなかった。

`declare` ... 実装を定義せずに関数や変数を定義できる。オブジェクト指向のインターフェースのグローバル版？　クラスには使えないみたい。

- [2-4](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter2/2-4/) ... xx.d.tsの正しい使い方を初めて知った。これでJavaScriptの世界とTypeScriptの世界を繋げているのね。

`typeof 関数` で関数式の型定義をサボる

## 項目13

```TypeScript
// NG
interface A {
    'A';
};
```

そもそもinterfaceはオブジェクトみたいな形か関数式しかサポートしていない。

p67: 「interfaceとextendsによる拡張は、typeと&による拡張より少し多くエラーチェックを行います。」　

interfaceは上書き（オーバーライド）ができる。typeはオブジェクトに対する複雑な操作ができる。正直ややこしい。

## 項目14

PHPは上位の構造にreadonly属性を付けると下位属性までreadonlyになる。一方JavaScriptのreadonlyはオブジェクトのような構造であれば変更ができる。

```PHP
<?php
readonly class test {
    public array $a;
    public function __construct() {
        $this->a = [
            'a' => 'hello',
        ];
    }
};

$i = new test();
$i->a['a'] = 'hello2'; // NG
?>
```

あんまり関係ないけど設計思想として、ドメインオブジェクトはミュータブルに、dtoはイミュータブルに、という理解を今のところはしている。

`readonly T[]` はあくまでも `ReadonlyArray<T>` のエイリアスでしかないため、関数の引数になんでもかんでも `readonly` をつけて同じように動かせるというわけではない。

[サバイバルTypeScript タプル (tuple)](https://typescriptbook.jp/reference/values-types-variables/tuple)

[2-5](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter2/2-5.ts) NG例

## 項目15


[【TypeScript】Generics(ジェネリックス)を理解する](https://qiita.com/k-penguin-sato/items/9baa959e8919157afcd4)

```TypeScript
interface argTypes {
  name: string;
}

function getName<T extends argTypes>(arg: T): string {
  return arg.name;
}

getName({ name: "鈴木一郎" });
```

この場合typeでは記述できないらしい。

[TypeScriptの型の省略と抜粋　OmitとPickを使ったまとめ](https://qiita.com/YSasago/items/318c0cbb95a764c6c317) Pickの逆、Omit

[マップ型(Mapped Types) step by stepの説明](https://qiita.com/u83unlimited/items/b283264bcee3c643b2b9)

```JavaScript
// OK
const type = '実行時エラー';
const error = '不明なエラー';
const response = {
    [type]: error,
};
// {'実行時エラー': '不明なエラー'}
```

JavaScriptでも変数名をキーにできる。

```PHP
$key = '名前';
const RESPONSE = [
    $key => 'John Doe',
];
// ['名前' => 'John Doe']
```

こっち（PHP版）も実はあまり知られていないかもしれない。
