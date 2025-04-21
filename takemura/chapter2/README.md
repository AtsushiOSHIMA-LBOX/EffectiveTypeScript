## 項目6

TypeScriptはUXをとても大事にするという思想があると感じる。体験の良さが受け入れられた理由なわけで、エンジニアの中にはUI/UX軽視の流れがたまに見られるが、それは全くの誤りであると示している。

Nullチェックしたら下の記述ではNullがなくなるのすごいなぁ。どうやって実装してるのか。

## 項目7

[型理論](https://www.marulabo.net/docs/type-theory-talkie/)

never型があるのは、型に対する演算における理論的な要請があったからというのが強い。一般的な手続き的プログラミング言語ではインターセクション型は存在しない。

- [2-1.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter1/2-1.ts): neverを使うべき場面でvoidを使っても別に怒られない。しかしちゃんと意識するべきそう。

- [2-2.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter1/2-2.ts): p39 これくらいならinterfaceとtypeは等価に書ける。

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

[2-3.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter1/2-3.ts)

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