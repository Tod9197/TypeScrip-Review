export {};
// 問27. 配列のフィルタリングと条件チェック
// 1. 配列 `[12, 24, 35, 47, 55]` から50以上の値だけを取り出して新しい配列を作成してください。
let numbers: number[] = [12, 24, 35, 47, 55, 67, 78, 90, 105];
let moreFifty: number[] = numbers.filter((num) => num >= 50);
console.log(moreFifty);
// 2. 配列 `[1, 2, 3, 4, 5, 6, 7, 8]` の全ての要素が偶数であるかどうかを確認してください。
let numbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let isEven: boolean = numbers2.every((num) => num % 2 === 0);
console.log(isEven);
// 3. 配列 `[15, 25, 35, 45, 55]` に「20以上かつ40以下」の要素が一つでも含まれているかどうかを確認してください。
let numbers3: number[] = [15, 25, 35, 45, 55];
let hasNumberInRange: boolean = numbers3.some((num) => num >= 20 && num <= 40);
console.log(hasNumberInRange);
console.log("問27. 配列のフィルタリングと条件チェック ここまで");

// 問28. 配列と文字列操作の組み合わせ
// 1. 配列 `['hello', 'world', 'typescript']` の各要素を大文字に変換し、要素同士をハイフン で連結して一つの文字列を作成してください（例：`'HELLO-WORLD-TYPESCRIPT'`）。
let arr: string[] = ["typescript", "is", "good!!"];
let newArr: string = arr.map((str) => str.toUpperCase()).join("-");
console.log(newArr);
// 2. 文字列 `'apple, banana, orange'` をカンマで分割し、配列に変換してください。
let fruits: string = "apple,banana,orange";
let arrFruits: string[] = fruits.split(",");
console.log(arrFruits);
// 3. 配列 `['typescript', 'is', 'fun!!']` をスペースで結合し、一つの文字列を作成してください。
let arr2: string[] = ["typescript", "is", "fun"];
let joinedStr: string = arr2.join(" ");
console.log(joinedStr);
console.log("問28. 配列と文字列操作の組み合わせ ここまで");

// 問29. 配列のネスト操作
// 1. 二次元配列 `[[1, 2, 3], [4, 5, 6], [7, 8, 9]` の全ての要素をフラットにして、一次元配列 `[1, 2, 3, 4, 5, 6]` を作成してください。
let numbers4: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let flatNums: number[] = numbers4.flat();
console.log(flatNums);
// 2. 配列 `[['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]` の各要素を結合し、新しい配列 `['ab', 'cd', 'ef']` を作成してください。
let arr3: string[][] = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
let connectedArr: string[] = arr3.map((str) => str.join());
console.log(connectedArr);
console.log("問29. 配列のネスト操作 ここまで");

// 問30. 基本的な関数**
// 1. 数値を受け取り、その数値の2乗を返す関数を作成してください。
function squaredNum(num: number): number {
  return num * num;
}
console.log(squaredNum(256));
// 2. 名前を引数として受け取り、`Hello, [名前]!` と出力する関数を作成してください。
function greet(name: string): void {
  console.log(`Hello,${name}!`);
}
greet("Taro");
// 3. 2つの数値を引数として受け取り、それらの合計を返す関数を作成してください。
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(sum(35, 72));
console.log("問30. 基本的な関数 ここまで");
