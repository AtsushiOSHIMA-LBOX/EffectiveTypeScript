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

## 項目7 型を値の集合として考える

## 項目8 型空間のシンボルと値空間のシンボルの見分け方を知る

## 項目9 型アノテーションを型アサーションより優先的に使用する

## 項目10 ラッパーオブジェクト型(String、Number、Boolean、Symbol、BigInt)を使用しない

## 項目11 余剰プロパティチェックと型チェックを区別する

## 項目12 可能なら関数式全だいいっきゅする

- 関数が第一級オブジェクトであることから、関数にも型を持たせられる(ありがたい)
  - 似たような型を持つ関数が複数ある場合、型を共通化しておくと便利

```typescript
type BinaryFn = (a: number, b: number) => number;
```

- `typeof fetch` すでにある関数の型を取得する => 便利!
  - これは `const fn: typeof fetch = ...` の書き方のほうが適用しやすい
- `Parameters<typeof fetch>` で `fetch` の引数の型を取得できる => 便利!
  - これは `function fn(...args: Parameters<typeof fetch>) {}` のように書く際に適用しやすい
- いわば関数のインターフェース定義ヤナ

## 項目13 type（型エイリアス）とinterfaceの違いを知る

## 項目14 readonlyを使用して変更にまつわるエラーを避ける

## 項目15 型演算とジェネリック型を使って重複を避ける
