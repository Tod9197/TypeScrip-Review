export {};

// 問53. メソッドを持つオブジェクト**
// 以下の条件を満たす `Calculator` 型を定義し、それを使ってオブジェクトを作成してください。
// - num1（数値型）
// - num2（数値型）
// - `add` メソッド（`num1 + num2` の計算結果を返す）
interface Calculator {
  num1: number;
  num2: number;
  add: () => number;
}
const calculator: Calculator = {
  num1: 17,
  num2: 34,
  add: function () {
    return this.num1 + this.num2;
  },
};
console.log(calculator.add());
console.log("問53. メソッドを持つオブジェクト ここまで");

// 問54. オブジェクトの配列**
// 以下の条件を満たす `User` 型を作成し、その配列 `users` を作成してください。
// - `id`（数値型）
// - `name`（文字列型）
interface User {
  id: number;
  name: string;
}
const users: User[] = [
  { id: 1, name: "Taro" },
  { id: 2, name: "Jiro" },
  { id: 3, name: "Saburo" },
];
console.log(users);
console.log("問54. オブジェクトの配列 ここまで");

// 問55 オブジェクトの入れ子**
// 以下の条件を満たす `Company` 型を作成し、オブジェクトを作成してください。
// - `name`（文字列型）
// - `location`（文字列型）
// - `employees`（`User` 型の配列）
interface Company {
  name: string;
  location: string;
  employees: User[];
}
const company: Company = {
  name: "Apple",
  location: "Chicago",
  employees: [
    { id: 1, name: "Jobs" },
    { id: 2, name: "Steve" },
  ],
};
console.log(company);
console.log("問55 オブジェクトの入れ子 ここまで");

// 問56. クラスの基本
// 以下の条件を満たす `Person` クラスを作成してください。
// - `name`（文字列型）
// - `age`（数値型）
// - コンストラクタを使って `name` と `age` を初期化する
class Person {
  constructor(public name: string, public age: number) {}
}
const person = new Person("Maria", 28);
console.log(person);
console.log("問56 クラスの基本 ここまで");
