# 1章 TypeScriptとは何か

## 項目1 TypeScriptとJavaScriptの関係を理解する

[001.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter01/src/001.ts)

- TypeScript ⊇ JavaScript
- TypeScriptは、実行時に例外を投げるであろうコードを検出しようとする
- TypeScriptが理解した値の型(静的型)と、実行時の実際の型との乖離をなるべく少なくする
- 型アノテーションは、プログラマーの意図を伝える

## 項目2 どのTypeScriptオプションが使われているか把握する

[002.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter01/src/002.ts)

- `10 + null = 10` なのか...
- `tsconfig.json`: TypeScriptを使う際はほぼ必ず必要(`bun`・`deno`でも)
- いまはまだ、`Node.js` + `tsc` の組み合わせが主流

```jsonc
{
  "compilerOptions": {
    "noImplicitAny": true, // (必須級) 暗黙のanyを禁止
    "strictNullChecks": true, // (必須級) 型でnullをちゃんと付与してないものにnullを入れるとエラー
  }
}
```

- `!.` 非nullアサーション演算子(Non-null Assertion Operator)
  - これ知らんかった...

```typescript
// 非nullアサーション演算子(Non-null Assertion Operator)
// この値は絶対にnull/undefinedではないとTypeScriptに伝える
statusEl!.textContent = 'Ready'; // !をつけることでnullチェックを通過させる
```

### `"strict": true` のオプション

以下のオプションがまとめて有効になる。その後個別に無効化することもできる。`tsc --init` で生成された `tsconfig.json` には、`"strict": true` がデフォルトで設定されている。

- `strictNullChecks`
  - (例) `string` 型の変数に`null`や`undefined`を代入するとエラーになります。
- `strictFunctionTypes`
  - (例) 関数の引数や戻り値の型が互換性のない場合にエラーになります。
- `strictBindCallApply`
  - (例) 引数の型が一致しない場合にエラーになります。
- `strictPropertyInitialization`
  - (例) コンストラクタで初期化されていないプロパティがあるとエラーになります。
- `noImplicitAny`
  - (例) 暗黙的に `any` 型を割り当てることを禁止します。
- `noImplicitThis`
  - (例) `this` の型が暗黙的に `any` になることを禁止します。
- `alwaysStrict`
  - (例) すべてのファイルで `"use strict";` を自動的に挿入します。
- `useUnknownInCatchVariables`
  - (例) `catch (e)` 内で型を明示的にチェックしないとエラーになります。
- `noImplicitOverride`
  - (例) オーバーライド時に `override` を付けないとエラーになります。
- `exactOptionalPropertyTypes`
  - (例) オプショナルプロパティに `undefined` を明示的に許可しない限り、オプショナルプロパティに `undefined` を代入するとエラーになります。

### その他のオプション

- `noUncheckedIndexedAccess`
  - (例) インデックス型のアクセスが不正な場合にエラーになります。

### まとめ

- `tsconfig.json` の設定項目は時間を見つけて頭に入れておこう
- `"strict": true` を設定しておくことを基本にしよう

## 項目3 コード生成は型に依存しないことを理解する

[003.ts](https://github.com/chaploud/EffectiveTypeScript/blob/main/kudo/chapter01/src/003.ts)

- `tsc`
  - JavaScriptへのトランスパイル
  - 型エラーがないかどうかをチェック
- TypeScript側にしかない `type` や `interface` は、JavaScriptにトランスパイルされないので、実行時には参照できない
  - TypeScriptのコードばかり見ていると、JavaScriptにもあるものだと錯覚し始めるが、違いは理解しておかないと
  - ソリューション
    - `kind`プロパティをもたせて、タグ付きユニオン型(判別可能ユニオン)で、型を判別する
    - `class` を使う
- 型エラーがあっても、コードは生成される!
  - 型エラーとJavaScriptの論理エラーは脳内で分けて考えよう
- `hoge as number` は実際に型変換を行うわけではない
- いくら型を厳密にしても、実行時に型が異なることはゼロにはならないことに注意
- 型による関数オーバーロードはできない
- 型は実行時のパフォーマンスに影響しない
  - ビルド時のオーバーヘッドはある
    - ただ、Microsoftが頑張ってGo言語で公式の高速ビルドツール開発中らしい
