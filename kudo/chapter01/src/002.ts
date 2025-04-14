function add(a, b) { // noImplicitAnyがtrueだと、暗黙的なanyへの警告が出る
  return a + b;
}

// エラーは出ない
add(10, null); // numberのnull

function add2(a: number, b: number) {
  return a + b;
}

add2(10, null); // 引数の型がnumberなので、nullはエラーになる

const x: number = null; // strictNullChecksがtrueだと、nullはnumberに代入できない
const y: number | null = null; // これはOK

const statusEl = document.getElementById('status');
statusEl.textContent = 'Ready'; // statusElはnullの可能性があります

// nullチェックを通過させるならOK
if (statusEl) {
  statusEl.textContent = 'Ready'; // statusElはnullの可能性があります
}
// 非nullアサーション演算子(Non-null Assertion Operator)
// この値は絶対にnull/undefinedではないとTypeScriptに伝える
statusEl!.textContent = 'Ready'; // !をつけることでnullチェックを通過させる
