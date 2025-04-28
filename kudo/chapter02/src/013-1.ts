export function getHummer() {
  type Hummingbird = { name: string; age: number };
  const ruby: Hummingbird = { name: 'ruby', age: 1 };
  return ruby;
}

// スコープ外なのに、型がわかる
const rubyThroat = getHummer();