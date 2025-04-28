import { DeepReadonly } from "ts-essentials";

function printTriangles(n: number) {
  const nums: number[] = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums as readonly number[]));
  }
}

// function arraySum(arr: readonly number[]) {
//   let sum = 0, num;
//   // arr.popでarrの中身に破壊的変更
//   while ((num = arr.pop()) !== undefined) {
//     sum += num;
//   }
//   return sum;
// }

function arraySum(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

printTriangles(5);

interface PartlyMutableName {
  readonly first: string;
  last: string;
}

const jackie: PartlyMutableName = {
  first: 'Jackie',
  last: 'Chan',
};

jackie.last = 'Chun'; // OK
jackie.first = 'Jack'; // NG (実行はできてしまうが)

interface FullyMutableName {
  first: string;
  last: string;
}

// 全てのプロパティをreadonlyにする
type FullyImmutableName = Readonly<FullyMutableName>;

// shallow
interface Outer {
  inner: {
    x: number;
  }
}
const obj: Readonly<Outer> = { inner: { x: 0 } };
obj.inner = { x: 1 }; // NG
obj.inner.x = 1; // OK (innerはreadonlyではないので)

type T = Readonly<Outer>; // { readonly inner: { x: number } }

// ts-essentialsのDeepReadonlyを使うと、全てのプロパティをreadonlyにできる
type DeepReadonlyOuter = DeepReadonly<Outer>;
const obj3: DeepReadonlyOuter = { inner: { x: 0 } };

const date: Readonly<Date> = new Date();
date.setDate(28); // できてしまう
console.log(date.getDate()); // 1

// ミュータブルバージョン
const arr2: Array<number> = Array.from({ length: 5 }, (_, i) => i);
arr2.push(5); // OK
// イミュータブルバージョン
const arr3: ReadonlyArray<number> = Array.from({ length: 5 }, (_, i) => i);
arr3.push(5); // そもそもpushがないのでNG(実行自体はできてしまう)

const a: number[] = [1, 2, 3];
const b: readonly number[] = a; // OK
const c: number[] = b; // NG