interface Vector2D {
  x: number;
  y: number;
}

function calculateLength(vector: Vector2D) {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const v: NamedVector = { name: 'v', x: 1, y: 2 };
console.log(calculateLength(v)); // NamedVectorはVector2Dを満たしているのでOK

interface Vector3D {
  x: number;
  y: number;
  z: number;
}

function normalize(v: Vector3D) {
  const length = calculateLength(v);
  return { x: v.x / length, y: v.y / length, z: v.z / length };
}

console.log(normalize({x: 3, y: 4, z: 5}));
// => {x: 0.6, y: 0.8, z: 1.0} => 長さ1.414... ファッ!?
// エラーは出ないけど実行時の結果がおかしいパターン、やめちくり〜
// 余計なプロパティがあってもエラーにはならないよ

interface Author {
  first: string;
  last: string;
}

interface DB {
  runQuery: (sql: string) => any[];
}

function getAughors(database: DB): Author[] {
  const authorRows: [string, string][] = database.runQuery('SELECT first, last FROM authors');
  return authorRows.map(row => ({
    first: row[0],
    last: row[1],
  }));
}

// 004.test.ts参照

