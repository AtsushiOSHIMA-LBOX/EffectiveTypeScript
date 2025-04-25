// NG
const numF = (num: readonly number): number => num;
// NG
type strBool = 'true'|'false';
const boolF = (bool: readonly strBool): boolean => bool === 'true' ? true : false;
