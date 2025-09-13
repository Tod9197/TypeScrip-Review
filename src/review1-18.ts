export {};
// 問73. 既存の型を拡張するジェネリクス**
// 以下の条件を満たす `mergeObjects` 関数を作成してください。
// - 2つのオブジェクトを受け取り、それらをマージした新しいオブジェクトを返す
// - ジェネリクス (`T` と `U`) を使用する
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const userIdAndName = { id: 1, name: "Lilly" };
const userAgeAndAddress = { age: 23, address: "New York" };
const userInfo = mergeObjects(userIdAndName, userAgeAndAddress);
console.log(userInfo);
// 問74. デフォルト型のジェネリクス**
// 以下の条件を満たす `Wrapper` クラスを作成してください。
// - `T` 型の値を持つ
// - `T` のデフォルト型を `string` にする
class Wrapper<T = string> {
  constructor(public value: T) {}
}
const greet = new Wrapper("Good Morning!!");
const num = new Wrapper<number>(123);
console.log(greet);
console.log(num);

// 問75. 部分適用可能なジェネリクス**
// 以下の条件を満たす `PartialUser` 型を作成してください。
// - `User` 型のすべてのプロパティをオプショナルにする
// - `Partial<T>` を使用する
interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface PartialUser extends Partial<User> {}

const user1: PartialUser = { name: "Anne", age: 28, address: "Chicago" };
const user2: PartialUser = { name: "Max", age: 35 };
const user3: PartialUser = { name: "Ellen" };
console.log(user1);
console.log(user2);
console.log(user3);

// 問76. 条件付き型：型の絞り込み**
// 以下の条件を満たす `IsString<T>` 型を定義してください。
// - `T` が `string` 型であれば `true` を、そうでなければ `false` を返す
// type IsString<T> = // ここを実装
type IsString<T> = T extends string ? true : false;
const str: IsString<string> = true;
console.log(str);
