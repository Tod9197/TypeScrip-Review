export {};

// 問49. 基本的なオブジェクトの作成**
// 以下の条件に合うように、オブジェクトを作成してください。
// - `user` というオブジェクトを作成する。
// - `name` プロパティ（文字列型）を `"Mika"` に設定する。
// - `age` プロパティ（数値型）を `25` に設定する。
type User = {
  name: string;
  age: number;
};
const user: User = {
  name: "Mika",
  age: 25,
};
function usersNameAndAge(): void {
  console.log(user.name);
  console.log(user.age);
}
console.log(user);
usersNameAndAge();

// 問50. オブジェクトの型定義**
// 以下の条件に合う `Person` 型を作成し、それを使用してオブジェクトを作成してください。
// - `name`（文字列型）
// - `age`（数値型）
type Person = {
  name: string;
  age: number;
};
const person: Person = {
  name: "Jhon",
  age: 45,
};
console.log(person);

// 問51. オプショナルプロパティ**
// 以下の条件を満たす `Person2` 型を定義してください。
// - `name`（必須、文字列型）
// - `age`（必須、数値型）
// - `email`（オプショナル、文字列型）
type Person2 = {
  name: string;
  age: number;
  email?: string;
};
const person2: Person2 = {
  name: "Risa",
  age: 22,
};
console.log(person2);

// 問52. 読み取り専用プロパティ**
// 以下の条件に合う `Book` 型を作成し、オブジェクトを作成してください。
// - `title`（**読み取り専用**、文字列型）
// - `author`（**読み取り専用**、文字列型）
// - `publishedYear`（数値型）
type Book = {
  readonly title: string;
  readonly author: string;
  publishedYear: number;
};
const book: Book = {
  title: "Dragon Ball",
  author: "Akira Toriyama",
  publishedYear: 1984,
};
book.publishedYear = 1982;
console.log(book);
