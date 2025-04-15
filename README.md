# EffectiveTypeScript

EffectiveTypeScriptの学習用リポジトリ

## URL

- [GitHub](https://github.com/chaploud/EffectiveTypeScript)
- [GitHub Pages](https://chaploud.github.io/EffectiveTypeScript/)
- [LT](https://chaploud.github.io/EffectiveTypeScript/LT/)
- [大島](https://chaploud.github.io/EffectiveTypeScript/oshima/)
- [大西](https://chaploud.github.io/EffectiveTypeScript/onishi/)
- [工藤](https://chaploud.github.io/EffectiveTypeScript/kudo/)
- [武村](https://chaploud.github.io/EffectiveTypeScript/takemura/)

## 進め方

- 毎週月曜日の 17:00-17:45 に実施
- 予習は必須
- 進行役を毎週交代し、以下の発言を促す
  - 印象に残った部分
  - 分からなかった部分
  - 意気込み etc.
- 進行役は `README.md` にメモを取る
- 開始5分でLTを実施
  - LT後5分ほど質疑応答あり
  - 内容は開発に関することであれば何でもいい
    - 私のVSCodeの設定・拡張機能
    - GitHub Copilotをこんな風に使いました
    - 勉強を継続するためには etc.

## 1章

- 型について意外と厳密ではない
  - Javaなど型に厳しい言語を使ったことがある人からすると物足りないかも
- コンパイルが通らないということはなく、開発体験をよくするためのもの
- tsconfig.jsonの設定内容について見直ししたい
  - 個別のファイル/ディレクトリに関して設定を厳しくするなど
- 歴史的経緯で設定を緩くしたりany型を書いたりせざるを得ない場合も多々ある
- 手続き的記述 <-> 宣言的記述, 命令型言語 <-> 関数型言語
- 「構造的型付けに慣れる」というところの要点
  - 構造的な型付けはIDE支援やテストの用意さ、入出力の契約の担保があるから積極的に使え
  - ただし、JavaScriptの仕様上、「想定してないプロパティ」を入れてしまえることを見据えて設計せよ
    - 動的型付け言語は「ダックタイピング」できてしまう
      - 楽もできるし、リスクも生む
- Rustは他の言語のよいところを集めたような言語
  - Webでも活用しようという流れがあるが、用途によっては「そこまで要らない」
  - 他の言語にはない概念や、ある言語だけを使っていたのでは馴染みのない概念が多い
    - 学習コストが高い => Webアプリ開発においてはパフォーマンスを求める処理以外では選択の必要はない
- Goは学習しやすい・並列実行に強い・安全に書ける
  - RustもGoも開発ツールやIDE支援が充実していて、開発者体験が良い
- オーバーロードをはじめとするオブジェクト指向について勉強したい
  - [スッキリわかるJava入門](https://amzn.asia/d/hUTJf7x)がおすすめ
