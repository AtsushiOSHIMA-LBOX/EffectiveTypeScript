let num = 10;

function add(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string | null) {
  if (message) {
    console.log(message); // ここではnullの可能性は除外される
  }
}

const foo = {
  x: [1, 2],
  bar: {
    name: 'Fred',
  }
}

type Bar = {
  x: [number, number], // タプルにしたいなら型を明示する
  bar: {
    name: string,
  }
}

const bar: Bar = {
  x: [1, 2],
  bar: {
    name: 'Fred',
  }
}

// メソッドチェーン中にジェネリック型がどう推論されたか
function restOfPath(path: string) {
  return path.split('/').slice(1).join('/');
}
