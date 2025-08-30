export {};
// 問65. ファクトリメソッド**
// 以下の条件を満たす `UserFactory` クラスを作成してください。
// - `User` クラスを作成し、`name`（文字列型）を持つ
// - `UserFactory.createUser(name: string)` メソッドで `User` インスタンスを作成する
class User {
  constructor(public name: string) {}
}
class UserFactory {
  static createUser(name: string) {
    return new User(name);
  }
}

const user = UserFactory.createUser("Karen");
console.log(user);
console.log("問65. ファクトリメソッド ここまで");

// 問66. ジェネリクスの基本**
// 以下の条件を満たす `identity` 関数を作成してください。
// - 任意の型 `T` を受け取り、そのまま返す
// - `T` は関数を呼び出したときに決定される
function identity<T>(a: T): T {
  return a;
}
const result1 = identity(768);
const result2 = identity("TypeScript");
console.log(result1);
console.log(result2);
console.log("問66. ジェネリクスの基本 ここまで");

// ### 問67. 配列のジェネリクス**
// 以下の条件を満たす `getFirstElement` 関数を作成してください。
// - 配列の最初の要素を返す
// - 配列の型を `T` としてジェネリクスを使用する
// ---
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.at(0);
}
const phoneCompanies = ["docomo", "au", "SoftBank"];
const firstCompany = getFirstElement(phoneCompanies);
console.log(firstCompany);
console.log("問67. 配列のジェネリクス ここまで");

// ### 問68. 複数のジェネリクス型**
// 以下の条件を満たす `pair` 関数を作成してください。
// - 2つの異なる型 `T` と `U` を受け取り、それらをタプルとして返す
// - ジェネリクス (`T` と `U`) を使用する
function createPair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
const userNameAndAge = createPair("Robin", 33);
console.log(userNameAndAge);
