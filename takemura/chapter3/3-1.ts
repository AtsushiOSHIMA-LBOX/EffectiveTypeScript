let n = 10;
// NG
n = 'string';

// i?: numberと推論される
const strNum = (i = 100) => i.toString();
strNum(); // 従ってこれはエラーにならない

// NG デフォルト値があると、省略した場合デフォルト値の型で推論される
const strNum2 = (i: number) => i.toString();
strNum2();

// OK
const command = (i = 100) => {
    i++;
    return i;
};
// OK readonlyをつけるには型指定が必要と思ったら！
// i: number
const command2 = (i: Readonly<number> = 100) => {
    i++;
    return i;
};
// OK
const command3 = (i: Readonly<number>) => {
    i++;
    return i;
};
