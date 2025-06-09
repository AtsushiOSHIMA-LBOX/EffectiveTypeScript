const pt = {};
pt.x = 3; // 警告
pt.y = 4; // 警告
console.log(pt); // 後からプロパティ追加

interface Point {
  x: number;
  y: number;
}

const pt2: Point = {}; // ここで警告
pt2.x = 5;
pt2.y = 6;
console.log(pt2);

const pt3 = {} as Point; // 型アサーションでPoint型にする
pt3.x = 7; // 警告なし
pt3.y = 8; // 警告なし
console.log(pt3);

const p4: Point = { // 最良の方法
  x: 9,
  y: 10,
}
console.log(p4);

const p5 = { x: 3, y: 4 };
const id = { name: 'Pythagoras' };
const namedPoint = {};
Object.assign(namedPoint, p5, id);
console.log(namedPoint.name); // 警告

const p6 = {};
const p7 = { ...p6, x: 3 }
const p8 = { ...p7, y: 4 }; // ちゃんと型認識
console.log(p8.y);

const hasMiddle = false; // 中間名があるかどうか
const firstLast = { first: 'Harry', last: 'Truman' };
const president = { ...firstLast, ...(hasMiddle ? { middle: 'S.' } : {}) };
console.log(president); // 中間名がある場合は追加される