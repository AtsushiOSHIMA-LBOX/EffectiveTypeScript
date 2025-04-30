type TState = {
  name: string;
  capital: string;
};

interface IState {
  name: string;
  capital: string;
}

const wyoming: TState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  // population: 578_000,
};

const japan: IState = {
  name: 'Japan',
  capital: 'Tokyo',
  // population: 126_000_000,
};

// インデックスシグネチャ
type TDict = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

// 関数の型
type TFn = (x: number) => string;
type TFnAlt = {
  (x: number): string;
};
interface IFn {
  (x: number): string;
}

const toStrT: TFn = x => '' + x;
const toStrI: IFn = x => '' + x;
const toStrTAlt: TFnAlt = x => '' + x;

// ジェネリクス
type TBox<T> = {
  value: T;
};
interface IBox<T> {
  value: T;
}

// 互いに拡張可能
interface IStateWithPopulation extends TState {
  population: number;
}

type TStateWithPopulation = IState & {
  population: number;
};

// class
class StateT implements TState {
  name: string = '';
  capital: string = '';
}

class StateI implements IState {
  name: string = '';
  capital: string = '';
}

// Union
type AorB = 'a' | 'b';

type Input = {
  value: string;
};
type Output = {
  value: string;
}

interface VariableMap {
  [name: string]: Input | Output;
}

type NamedVariable = (Input | Output) & { name: string };
// name: stringを追加した型をinterfaceでやろうとしてもできない

interface Person {
  name: string;
  age: string;
}

// 重複して型を上書きいるのにも関わらず、エラーにならない
type TPerson = Person & { age: number }; // age: neverになる

// ちゃんとエラーが出る
interface IPerson extends Person {
  age: number;
}

// タプル・配列
type Pair = [a: number, b: number];
type StringList = string[];
type NamedNums = [string, ...number[]];

// オーグメンテーション
// 自動でプロパティが追加される
interface IState {
  population: number;
}

const USA: IState = {
  name: 'USA',
  capital: 'Washington D.C.',
  population: 331_000_000, // OK!
};

const arr: Array<number> = [1, 2, 3];