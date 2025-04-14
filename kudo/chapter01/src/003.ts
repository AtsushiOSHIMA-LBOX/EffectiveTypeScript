interface Square {
  kind: 'square'; // タグ付きユニオン(判別可能ユニオン)
  width: number;
}

interface Rectangle extends Square {
  kind: 'rectangle';
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) { // TypeScriptのinterface/typeは実行時には消える
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

function calculateArea2(shape: Shape) {
  switch (shape.kind) {
    case 'rectangle':
      return shape.width * shape.height;
    case 'square':
      return shape.width * shape.width;
  }
}

// classは型と値を同時に作る
class Square2 {
  width: number;
  constructor(width: number) {
    this.width = width;
  }
}

class Rectangle2 extends Square2 {
  height: number;
  constructor(width: number, height: number) {
    super(width);
    this.height = height;
  }
}

type Shape2 = Square2 | Rectangle2;

function calculateArea3(shape: Shape2) {
  if (shape instanceof Rectangle2) {
    return shape.width * shape.height;
  } else {
    return shape.width * shape.width;
  }
}

// 型演算(型アサーション) !キャストではない! => 実行時に実際に値を変換するわけではない
function asNumber(val: number | string): number {
  return val as number;
} // ビルド後は単に値を返すだけの関数になる

asNumber(10); // number
asNumber('10'); // string

function setLightSwitch(value: boolean) {
  switch (value) {
    case true:
      console.log('on');
      break;
    case false:
      console.log('off');
      break;
    default:
      const _exhaustiveCheck: never = value; // どんな値が来てもエラーになる
      throw new Error(`Unexpected value: ${_exhaustiveCheck}`);
  }
}

interface LightApiResponse {
  lightSwitchValue: boolean;
}

async function setLight() {
  const response = await fetch('/api/light');
  const result: LightApiResponse = await response.json();
  setLightSwitch(result.lightSwitchValue); // 実際には文字列である可能性だってある
}
