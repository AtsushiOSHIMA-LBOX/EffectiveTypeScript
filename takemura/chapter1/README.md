# 1章 TypeScriptとは何か

[TypeScriptのトランスコンパイラの実装](https://github.com/microsoft/TypeScript/tree/main/src/compiler)

新規で開発するときは
strict, noImplicitAny, strictNullChecks, noUnusedLocals / noUnusedParametersあたりはしっかりつけて開発したい。

→strict以外は不要らしい（strictに含まれるため）<br/>
→noUnusedLocals / noUnusedParametersはstrictに含まれない

JavaScriptは動的型付け言語なので、実行時の振る舞いはPHPやPythonに似ている。すなわち、型チェッカーは型チェッカーが確認できる限りの変数のエラーを検出するが、実際に実行すると型を指定した変数には「どんな型の値」も代入されうる。

> [!NOTE]
> TSだけでWebアプリやるなら今はNext.jsかな～本当に選ばせてくれるならGo+Reactとかでやりたいけど

[p22のオーバーロード版を作る試み。失敗。](https://github.com/chaploud/EffectiveTypeScript/blob/main/takemura/chapter1/1-1.ts)

オーバーロードのような複雑なことをやろうとするとTSは不便だ。

any型のつらさはJavaScriptを触ったことがあればよく分かる。

参考: [Rustのunsafe](https://doc.rust-jp.rs/book-ja/ch19-01-unsafe-rust.html)