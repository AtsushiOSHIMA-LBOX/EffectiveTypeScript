// 悪名高いクセ
console.log("0" == 0);
// ===, !==を使う

let x = {};
x[[1, 2, 3]] = 2;
console.log(x); // => { '1,2,3': 2 }
// toStringが呼ばれてそれが文字列のキーになる

console.log({ 1: 2, 2: 3 }); // => { '1': 2, '2': 3 }
console.log(typeof []); // => object

x = [1, 2, 3];
console.log(x[0]); // => 1
// 数値インデックスでアクセスしているように見えて、文字列キーでアクセスしている
console.log(x['0']); // => 1
console.log(Object.keys(x)); // => ['0', '1', '2'] 実行時は数値インデックスは文字列に変換される

const xs = [1, 2, 3];
const x0 = xs[0];
const x1 = xs['1'];
// const inputEl = document.getElementsByTagName('input')[0];
// const xN = xs[inputEl.value]; // numberでないという警告
// const xN2 = xs[inputEl.valueAsNumber]; // numberであることが保証される

function checkedAccess<T>(xs: ArrayLike<T>, i: number): T {
  if (i >= 0 && i < xs.length) {
    return xs[i];
  }
  throw new Error(`Attempt to access ${i} which is past end of array.`);
}

const checkedXs = [1, 2, 3];
console.log(checkedAccess(checkedXs, 2));
// checkedAccess(checkedXs, 3); // => Error: Attempt to access 3 which is past end of array.

const tupleLike: ArrayLike<string> = {
  length: 2,
  0: 'a',
  1: 'b',
};

console.log(checkedAccess(tupleLike, 1));

interface ret {
  value?: number;
  done: boolean;
}
// Iterableの定義
const iterableObject: Iterable<number> = {
  [Symbol.iterator](): Iterator<number> {
    let count = 0;

    const iterator: Iterator<number> = {
      next(): IteratorResult<number> {
        // 三項演算子で返すものを条件づけ
        const iteratorResult: IteratorResult<number> = (count < 3)
          ? { value: ++count, done: false }
          : { value: undefined, done: true };

        // イテレータリザルトを返す
        return iteratorResult;
      }
    };
    // イテレータを返す
    return iterator;
  }
};

for (const value of iterableObject) {
  console.log(value); // => 1, 2, 3
}