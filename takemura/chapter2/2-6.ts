function parseCSV(input: string): {[column: string]: string}[] {
    const lines = input.split('\n');
    const [headerLine, ...rows] = lines;
    const headers = headerLine.split(',');
    return rows.map(
        rowStr => {
            const row: {[column: string]: string} = {};
            rowStr.split(',').forEach((cell, i) => {
                row[headers[i]] = cell;
            });
            return row;
        }
    )
}

interface ProductRow {
    productId: string;
    name: string;
    price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as ProductRow[]; // NG (型が広すぎる？)
const products2 = parseCSV(csvData) as unknown[] as ProductRow[]; // OK (構造的型付け？？)


type numkey = Record<1, string>; // OK ただし望ましくない
type yesno = Map<'yes'|'no', boolean>; // OKらしい だいぶ前から2.1~使える