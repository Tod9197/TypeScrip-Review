export {};
// 問35. 可変長引数 (Restパラメータ)
// 1. 任意の数の数値を引数として受け取り、それらの合計を返す関数を作成してください。
function sum(...numbers: number[]): number {
  return numbers.reduce((currentValue, total) => {
    return total + currentValue;
  }, 0);
}
console.log(sum(2, 3, 5, 8, 13));
// 2. 任意の数の文字列を引数として受け取り、それらをスペースで結合して1つの文字列として返す関数を作成してください。
function joinedStrings(...arr: string[]): string {
  return arr.join(" ");
}
console.log(joinedStrings("TypeScript", "is", "super", "fun!!"));
console.log("問35. 可変長引数 (Restパラメータ) ここまで");

// 問36. 再帰関数**
// 1. 与えられた数値を引数として、1からその数値までの合計を計算する再帰関数を作成してください。
//     - 例: `sum(5)` → 1 + 2 + 3 + 4 + 5 = 15
function sum2(num: number): number {
  if (num === 0) {
    return 0;
  } else {
    return num + sum2(num - 1);
  }
}
console.log(sum2(7));
// 2. 与えられた数値を引数として、その数値の階乗 (factorial) を計算する再帰関数を作成してください。
//     - 例: `factorial(5)` → 5 × 4 × 3 × 2 × 1 = 120
function factorial(num: number): number {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(8));

console.log("問36. 再帰関数 ここまで");
