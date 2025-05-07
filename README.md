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

- 毎週月曜日の 16:35頃- に実施(第4チームの夕会終了後)
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

## 2章

- PHPでも型としてありえるものを追跡できる おそらくIntelephenseの機能
- neverとvoidの違い 返り値はそもそもポインタを返すが、voidは値が入っていないポインタを返す、neverはポインタを返さない
- 実体があるかないか。JSへのコンパイルでは実体があるもののみが残る
- 実装者がTSより型について詳しいときは型アサーションが許容される
  - そういうケースはかなり少なそう
- new String()はインスタンスを作る、String()は文字列型へのキャスト
- phtmlでPHPからフロントに値を渡すことができて、それをStringにキャストすることはありそう
- ラッパーオブジェクトは他の言語でも使われる概念
- TSはとにかく開発体験をよくしようという意思が感じられる

- 関数型で戻り値の型をまとめて定義できる書き方は有効活用できそう
  - 引数と戻り値の型を一度定義しておき、関数をシンプルに書ける
  - よく見るのは3つの書き方

    ```typescript
    // 1. function宣言形式
    function add(a: number, b: number): number {
      return a + b;
    }
    
    // 2. 変数に関数を代入する形式
    const add = (a: number, b: number): number => {
      return a + b;
    }
    
    // 3. 型定義を先に行う形式
    type MathFunc = (a: number, b: number) => number;
    const add: MathFunc = (a, b) => a + b;
    ```

- interfaceとtypeは基本的にやれることはほぼ同じだが、使い分けるポイントがある
  - interfaceの利点:
    - エラーメッセージに型名が表示されて読みやすい
    - 拡張が容易（declaration merging）
    - ライブラリ開発時に便利（型の追加が容易）
  - typeの利点:
    - ユニオン型やマッピング型などの高度な型操作ができる
    - シンプルで直感的に使える
  - 基本方針としては「基本はinterfaceを使い、それで表現できないものをtypeで」というのが妥当そう
    - ただ統一感を重視するなら「全部typeで」というのもありか
- readonlyはできるだけつけるべき
  - 特に引数への副作用を防ぐのに有効
  - 実装時につけるべき
    - 実装者が一番その関数が何をするべきか知っている
    - 後から調査するのは手間がかかる
  - ESlintである程度縛れる
  - Date.setDate()など、元々破壊的なメソッドを持つオブジェクトの場合は効果が限定的であるため注意
- tsのreadonlyは浅い
  - オブジェクトのトップレベルのプロパティのみ変更できなくなる
  - ネストされたオブジェクトは変更可能
  - 深いreadonlyにするには別途対応が必要（DeepReadonly型など）
- Pick, Omit, Partialなどのユーティリティ型を活用すべき
  - 既存の型から必要な部分だけを抽出したり、オプショナルにしたりできる

    ```typescript
    interface State {
      userId: string;
      pageTitle: string;
      recentFiles: string[];
      currentFile: string;
    }

    // 必要なプロパティだけ取り出す
    type RecentFilesState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

    // 特定のプロパティを除外する
    type StateWithoutCurrentFile = Omit<State, 'currentFile'>;

    // すべてのプロパティをオプショナルにする
    type PartialState = Partial<State>;
    ```

- ReturnTypeも便利
  - 関数の戻り値の型を取得できる

    ```typescript
    function getUserInfo() {
      return { id: 1, name: 'User', email: 'user@example.com' };
    }

    type UserInfo = ReturnType<typeof getUserInfo>;
    // { id: number; name: string; email: string; }
    ```

- DRY原則を意識しつつも、やりすぎには注意
  - 見た目が似ているからという理由だけではなく、意味合いで統一すべき
  - 組織のレベルに合わせた複雑さを選ぶべき
