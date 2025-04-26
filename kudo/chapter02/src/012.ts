// 関数式

// 関数文
function rollDice1() {
  return Math.floor(Math.random() * 6) + 1;
}

// 関数式
const rollDice2 = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// アロー関数(式)
const rollDice3 = () => Math.floor(Math.random() * 6) + 1;

type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = sides => {
  return Math.floor(Math.random() * sides) + 1;
}

type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;

const checkedFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response;
}

async function fetchANumber(...args: Parameters<typeof fetch>): Promise<number> {
  const response = await checkedFetch(...args);
  const num = Number(await response.text());
  if (isNaN(num)) {
    throw new Error(`Not a number: ${response.url}`);
  }
  return num;
}
