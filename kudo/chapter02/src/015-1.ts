// OK
// const type = '実行時エラー';
const type = undefined;
const error = '不明なエラー';
const response = {
    [type]: error,
};
// {'実行時エラー': '不明なエラー'}
console.log(response.undefined);

const hoge = {
  if: 'hoge',
}
console.log(typeof hoge.if); // string