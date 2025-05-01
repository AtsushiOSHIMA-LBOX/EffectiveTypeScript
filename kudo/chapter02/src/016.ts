// property: なんでもいい(分かりやすい名前が望ましい)
// キーの型: string, number, symbol, テンプレートリテラル型
// 実際はstringかテンプレートリテラル型がほぼすべて
type Rocket1 = { [property: string]: string };
const rocket: Rocket1 = {
  name: 'Falcon 9',
  variabnt: 'v1.0',
  thrust: '4,940 kN',
};

interface Rocket2 {
  name: string;
  variant: string;
  thrust: number;
}

const falconHeavy: Rocket2 = {
  name: 'Falcon Heavy',
  variant: 'v1.0',
  thrust: 22_819,
};

/**
 * Parses a CSV-formatted string into an array of `Map` objects, where each map represents a row
 * with column headers as keys and corresponding cell values as values.
 *
 * @param input - The CSV-formatted string to parse. The first line is treated as the header row,
 *                and subsequent lines are treated as data rows.
 * @returns An array of `Map<string, string>` objects, where each map corresponds to a row in the CSV.
 *
 * @example
 * ```typescript
 * const csv = `name,age,city
 * John,30,New York
 * Jane,25,Los Angeles`;
 * const result = parseCSVMap(csv);
 * console.log(result[0].get('name')); // Output: "John"
 * console.log(result[1].get('city')); // Output: "Los Angeles"
 * ```
 */
function parseCSVMap(input: string): Map<string, string>[] {
  const lines = input.split('\n');
  const [headerLine, ...rows] = lines;
  const headers = headerLine.split(',');
  return rows.map(rowStr => {
    const row = new Map<string, string>();
    rowStr.split(',').forEach((cell, i) => {
      row.set(headers[i], cell);
    });
    return row;
  })
}

function parseRocket(map: Map<string, string>): Rocket2 {
  const name = map.get('name'); // 型はstring | undefined
  const variant = map.get('variant');
  const thrust_kN = Number(map.get('thrust'));

  if (!name || !variant || isNaN(thrust_kN)) {
    throw new Error('Invalid rocket: ${map}');
  }
  return { name, variant, thrust: thrust_kN };
}

const csv = `name,variant,thrust
Falcon 9,v1.0,4940
Falcon Heavy,v1.0,22819
Starship,v1.0,1200
Starship,v2.0,1200`;
const csvMap = parseCSVMap(csv);
const rockets = csvMap.map(parseRocket);
console.log(rockets); // Falcon 9

interface Row2 { a: number; b?: number; c?: number, d?: number }
type Row3 =
  | { a: number; }
  | { a: number; b: number; }
  | { a: number; b: number; c: number; }
  | { a: number; b: number; c: number; d: number; };

// キーが広すぎるならRecord
type Vec3D = Record<'x' | 'y' | 'z', number>;
const vec3D: Vec3D = { x: 1, y: 2, z: 3 };
const vec3DErr: Vec3D = { x: 1, y: 2, z: 3, w: 4 }; // エラー

// 余剰プロパティチェックを許可する場合
declare function renderAButton(props: ButtonProps): void;
interface ButtonProps {
  title: string;
  onClick: () => void;
  [otherProps: string]: unknown; // 余剰プロパティを許可
}

renderAButton({
  title: 'Click me',
  onClick: () => console.log('Clicked!'),
  theme: 'dark', // 余剰プロパティ
});