import { describe, expect, test } from 'vitest';


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

describe('getAughors', () => {
  test('should return authors from database', () => {
    const mockDB: DB = {
      runQuery: (sql: string) => [
        ['John', 'Doe'],
        ['Jane', 'Smith'],
      ],
    };

    const authors = getAughors(mockDB);

    expect(authors).toEqual([
      { first: 'John', last: 'Doe' },
      { first: 'Jane', last: 'Smith' },
    ]);
  });
});
