export {};
// 問31. デフォルト引数**
// 1. 名前を引数として受け取り、デフォルト値を `"Guest"` に設定し、`Welcome, [名前]!` と出力する関数を作成してください。
function greet(name: string = "Guest"): void {
  console.log(`Welcome,${name}!!`);
}
greet("Tom");
// 2. 2つの数値を引数として受け取り、2番目の引数のデフォルト値を10に設定して、それらを掛け算する関数を作成してください。
function product(num1: number, num2: number = 10): number {
  return num1 * num2;
}
console.log(product(15));
console.log("問31. デフォルト引数 ここまで");

// 問32. オプショナル引数**
// 1. 2つの数値を引数として受け取り、2番目の引数が指定されている場合はそれらを掛け算し、指定されていない場合は1番目の数値をそのまま返す関数を作成してください。
function product2(num1: number, num2?: number): number {
  if (num2 !== undefined) {
    return num1 * num2;
  } else {
    return num1;
  }
}
console.log(product2(16, 12));
// 2. 名前を引数として受け取り、オプショナル引数で年齢を受け取り、`[名前] is [年齢] years old.` または `[名前] is ageless.` を出力する関数を作成してください。
function showNameAge(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`${name} is ${age} years old`);
  } else {
    console.log(`${name} is ageless`);
  }
}
showNameAge("Melissa", 32);
console.log("問32. オプショナル引数 ここまで");

// 問33. アロー関数**
// 1. 文字列を引数として受け取り、その長さを返すアロー関数を作成してください。
const transformStringsArray = (str: string): number => str.length;
console.log(transformStringsArray("I am from Japan"));
// 2. 配列を受け取り、その配列内の要素を全て2倍にして新しい配列を返すアロー関数を作成してください。
const doubleElement = (arr: number[]): number[] => arr.map((el) => el * 2);
console.log(doubleElement([4, 7, 11]));

console.log("問33. アロー関数 ここまで");
