export {};
// 問35. 可変長引数 (Restパラメータ)**
// 1. 任意の数の数値を引数として受け取り、それらの合計を返す関数を作成してください。
function sum(...numbers: number[]): number {
  return numbers.reduce((currentValue, total) => {
    return total + currentValue;
  });
}
console.log(sum(2, 3, 5, 8, 13, 21));

// 2. 任意の数の文字列を引数として受け取り、それらをスペースで結合して1つの文字列として返す関数を作成してください。
function joinedStrings(...arr: string[]): string {
  return arr.join(" ");
}
console.log(joinedStrings("TypeScript", "is", "exciting"));
