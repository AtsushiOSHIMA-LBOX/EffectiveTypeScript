interface Vertebrate {
  weightGrams: number;
  color: string;
  isNocturnal: boolean;
}

interface Bird extends Vertebrate {
  wingspanCm: number;
}

interface Mammal extends Vertebrate {
  fins: number;
}

type PersonWithBirthDate = Vertebrate & { birthDate: Date };

// 型の配列アクセスのような
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

// interface TopNavState {
//   userId: State['userId']; // 単に重複させるのではなく、共通化する
//   pageTitle: State['pageTitle'];
//   recentFiles: State['recentFiles'];
// }

// さらに
// type TopNavState = {
//   [K in 'userId' | 'pageTitle' | 'recentFiles']: State[K];
// }
// よく使われるので以下のようにPickが使える
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

// 型の取り出しと、インターフェース作成と違うからね!
interface SaveAction {
  type: 'save';
}

interface LoadAction {
  type: 'load';
}

type Action = SaveAction | LoadAction;
type ActionType = Action['type']; // 'save' | 'load'
// 注: こうではない
// type ActionType2 = Pick<Action, 'type'>;

// ?をつけただけのものを用意したいこともあるよね
interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

// interface OptionsUpdate {
//   width?: number;
//   height?: number;
//   color?: string;
//   label?: string;
// }

// type OptionsUpdate = {[k in keyof Options]?: Options[k]};
type OptionsUpdate = Partial<Options>;

class UIWidget {
  constructor(
    public options: Options,
  ) {}

  updateOptions(options: OptionsUpdate) {
    this.options = { ...this.options, ...options };
  }
}

interface ShortToLong {
  q: 'search';
  n: 'numberOfResults';
}

type LongToShort = { [k in keyof ShortToLong as ShortToLong[k]]: k };

interface Customer {
  title?: string;
  readonly name: string;
}

// ホモモーフィックなマップ型(keyofに相当する処理なら引き継ぐ)
type PickTitle = Pick<Customer, 'title'>; // ?が引き継がれる
type PickName = Pick<Customer, 'name'>; // readonlyが引き継がれる
type ManualName1 = { [K in keyof Customer]: Customer[K] }; // readonlyが引き継がれる
// keyofでないので引き継がない
type ManualName2 = { [K in 'name']: Customer[K] };

const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#00ff00',
  label: 'VGA',
};
// interface Options1 {
//   width: number;
//   height: number;
//   color: string;
//   label: string;
// }
type Options2 = typeof INIT_OPTIONS;

// 関数の戻り値の型
function getUserInfo(userId: string) {
  return {
    userId,
    name: 'Jackie',
    age: 30,
  };
}

// 注: <>内はtypeofが必要
type UserInfo = ReturnType<typeof getUserInfo>;