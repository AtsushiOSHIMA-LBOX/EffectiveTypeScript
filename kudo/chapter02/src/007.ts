const x: never = 10; // 空集合(never): 何も代入できない
const y: 'A' = 'A'; // 文字列リテラル型: 'A'しか代入できない
const z: 'A' | 'B' = 'A'; // 文字列リテラル型のユニオン: 'A'または'B'しか代入できない

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death?: Date;
}

type PersonSpan = Person & Lifespan; // 交差型: PersonとLifespanの両方のプロパティを持つ型
type K = keyof (Person | Lifespan); // 逆ににユニオン取ると被りがないのでnever