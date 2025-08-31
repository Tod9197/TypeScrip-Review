export {};
// 問69. クラスでのジェネリクス**
// 以下の条件を満たす `Box` クラスを作成してください。
// - `T` 型の値を格納できる
// - `getValue` メソッドで格納された値を取得できる
// - `setValue` メソッドで値を設定できる
class Box<T> {
  constructor(private item: T) {}

  getValue(): T {
    return this.item;
  }
  setValue(value: T): void {
    this.item = value;
  }
}
const box = new Box<string>("Next.js");
console.log(box);
console.log("問69. クラスでのジェネリクス ここまで");

// 問70. 制約付きジェネリクス**
// 以下の条件を満たす `printLength` 関数を作成してください。
// - 任意の型 `T` を受け取るが、その型は `length` プロパティを持つ必要がある
// - `T` に適切な制約を加え、`length` を出力する
interface Length {
  length: number;
}
function printLength<T extends Length>(value: T): void {
  console.log(value.length);
}
printLength("React.js");

// 問71. ジェネリクスとインターフェース**
// 以下の条件を満たす `Storage` インターフェースを作成してください。
// - 任意の型 `T` を格納できる
// - `setItem` メソッドでデータを追加できる
// - `getItem` メソッドでデータを取得できる
interface Storage<T> {
  setItem(data: T): void;
  getItem(): T;
}

// 問72. keyof を用いたジェネリクス**
// 以下の条件を満たす `getProperty` 関数を作成してください。
// - 任意のオブジェクト `obj` から指定されたプロパティ `key` の値を取得する
// - `key` の型を `keyof T` としてジェネリクスを使用する
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const student = { name: "Mike", age: 16 };
const studentName = getProperty(student, "name");
const studentAge = getProperty(student, "age");
console.log(studentName);
console.log(studentAge);
