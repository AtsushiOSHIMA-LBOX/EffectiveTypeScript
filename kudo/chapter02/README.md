# 2章 TypeScriptの型システム

## 項目6 エディターを使って型システムを調査、探求する

[006.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter02/src/006.ts)

- `tsc`: TypeScriptコンパイラ
- `tsserver`: TypeScriptスタンドアローンサーバー
  - オートコンプリート
  - インスペクション
  - ナビゲーション
  - リファクタリング
- 型の確認(マウスホバー または `Ctrl + K` + `Ctrl + I`)
  - 特に関数の返り値の型が期待通りになっているか意識する
- javascriptでは、`typeof null === 'object'` ←つらい
- `F2` でシンボルのスコープに応じたリネーム
- エディタの支援機能は惜しみなく使おう!

## 項目7 型を値の集合として考える

[007.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter02/src/007.ts)

- `never`: 空集合(ボトム型)
- `type A = 'A'`: 単一の値を持つ型(リテラル型、ユニット型)
- `type A = 'A' | 'B'`: 和集合, 複数の値を持つ型(リテラル型、ユニオン型)
- `type A = 'A' & 'B'`: 積集合(交差型)
- 「オブジェクトのプロパティが多くなっていくほど条件がきつくなっていく」という感覚を持つ
- 2025-04-28 p.38の中ほど

## 項目8 型空間のシンボルと値空間のシンボルの見分け方を知る

## 項目9 型アノテーションを型アサーションより優先的に使用する

## 項目10 ラッパーオブジェクト型(String、Number、Boolean、Symbol、BigInt)を使用しない

## 項目11 余剰プロパティチェックと型チェックを区別する

## 項目12 可能なら関数式全体に型を適用する

[012.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter02/src/012.ts)

- 関数が第一級オブジェクトであることから、関数にも型を持たせられる(ありがたい)
  - 似たような型を持つ関数が複数ある場合、型を共通化しておくと便利

```typescript
type BinaryFn = (a: number, b: number) => number;
```

- `typeof fetch` すでにある関数の型を取得する => 便利!
  - これは `const fn: typeof fetch = ...` の書き方のほうが適用しやすい
- `Parameters<typeof fetch>` で `fetch` の引数の型を取得できる => 便利!
  - これは `function fn(...args: Parameters<typeof fetch>): Promise<number> {}` のように書く際に適用しやすい
- いわば関数のインターフェース定義ヤナ

## 項目13 type（型エイリアス）とinterfaceの違いを知る

[013.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter02/src/013.ts)

- どっち使ってもいいが、使い分けのポリシーは自分たちの中で決めておく
- 関数の型の書き方、もっぱら1つ目ばかりで、下2つの書き方したことがなかったな

```typescript
type TFn = (x: number) => string;
type TFnAlt = {
  (x: number): string;
};
interface IFn {
  (x: number): string;
}
```

- `interface` で表現できないもの
  - ユニオン型
  - マップ型
  - 条件型
- 同じ名前でinterfaceを定義すると、マージされる(オーグメンテーション)
  - 型宣言ファイルを提供する際は、`interface` を使おう
  - バージョン違いで機能が追加されていくときなど便利
  - ユーザーのコードでも宣言のマージは起こりえるが、同じ`.ts`ファイル内でのみ(偶発的な衝突を避けられる)
- `type` だと、宣言(`.d.ts`)でインライン化されてしまう
- パブリックなAPIで使われるすべての型をエクスポートする
- スタイルが確立されているプロジェクトでなければ、基本は`interface`を使い、`interface`で表現できないものは`type`を使う

## 項目14 readonlyを使用して変更にまつわるエラーを避ける

[014.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter02/src/014.ts)

- `readonly` 開発時にプロパティを変更しようとしたら警告表示
- `Readonly<SomeType>` で全てのプロパティを`readonly`にする
- 関数がオブジェクトをパラメータとして受け取り、それを変更しないのであれば、`Readonly`でラップするのは良いアイデア
- **注意1**: `readonly`は浅いコピーであるため、ネストされたオブジェクトのプロパティは変更可能
- **注意2**: すでに変更メソッドを持っている場合、`readonly`をつけても変更できてしまう
- ミュータブルな配列はreadonlyな配列に代入できるが、逆はできない
- よく使われるので、`ReadonlyArray<T> => readonly T[]` が同じ意味
- `Array<T> => T[]` も同じ意味

### 総括

**`Readonly/readonly` 使おう!**

## 項目15 型演算とジェネリック型を使って重複を避ける

[015.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter02/src/015.ts)

- 型に関してもDRY(Don't Repeat Yourself)を意識する
- 拡張: `interface` => `extends`を使う
- 抜き出す: `interface` => `XXX['yyy']`を使う
  - `[K in 'key1' | 'key2']: XXX[K]` でマップ型を使う
  - `[k in keyof XXX]: XXX[k]` でマップ型を使う
  - `Pick<XXX, 'key1' | 'key2'>` でマップ型を使う
- プロパティの型を共有しつつオプショナルにする
  - `Partial<XXX>` でプロパティをオプショナルにする
- **ホモモーフィック**: `readonly`や`?`は引き継がれる
- オブジェクトから型を作る `typeof`
  - JavaScriptの実行時に使える `typeof`とは別物!
- `ReturnType`で関数の返り値の型を取得する

> 重複は間違った抽象化よりはるかに無害である

- 単に名前が一致しているからマージしてしまっては意味がない

## 項目16 インデックスシグネチャよりも適切な代替手段を使う

[016.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter02/src/016.ts)

- `{ [key: string]: number }`: インデックスシグネチャ
  - キーの型はほぼ`string`かテンプレートリテラル型
  - ただしキーを限定したい場合は型を細かく定義したほうがいい
- csvパースのような何が入ってくるか分からない場合に使われていた
- このような場合でも、`Map<string, T>[]`を用いて読んだあと、オブジェクトに変換するイディオムを使う => `Record<string, T>`でもよくね？
  - ただ、メソッドが使えない

## 項目17 数値型のインデックスシグネチャを避ける

## 項目18 推論可能な型でコードを乱雑にしない

## 項目19 異なる型には異なる変数を使う

## 項目20 変数の型がどのように決まるか理解する
