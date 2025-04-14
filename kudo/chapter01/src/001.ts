function greet(who: string) {
  console.log(`Hello, ${who}`);
}

greet("Shota");

let city = 'new york city';
// タイプミスのため、メソッドが存在しないエラーが表示
console.log(city.toUppercase())

const states = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capital: 'Juneau' },
  { name: 'Arizona', capital: 'Phoenix' },
];

for (const state of states) {
  // state.capitol は存在しないプロパティ
  console.log(state.capitol);
}

interface State {
  name: string;
  capital: string;
}

// インターフェースを定義しているため、タイプミスでちゃんとエラーが表示される
const states2: State[] = [
  { name: 'Alabama', capitol: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  { name: 'Arizona', capitol: 'Phoenix' },
];

// これは問題なし
const x = 2 + '3';
const y = '2' + 3;

// エラー
const a = null + 7;

// 演算子が対応してないため、エラー
const b = [] + 12;

// 引数の個数でエラー
alert('Hello', 'TypeScript');

// 実行時エラーのパターン
const name = ['Alice', 'Bob'];
console.log(name[2].toUpperCase()); // 実行自体は投げてしまえるが、もちろんundefinedに.toUpperCase()は存在しない
