export {};
// 問13. `while`ループと条件式
// `while`ループを使用して、1から100までの数字を順に出力しますが、6と10の両方で割り切れる数字が見つかったらループを停止してください。 ループが停止する直前に出力された最後の数字を表示してください。
let count: number = 1;
while (count <= 100) {
  if (count % 6 === 0 && count % 10 === 0) {
    console.log(count);
    break;
  }
  count++;
}
console.log("問13. `while`ループと条件式 ここまで");
// 問14. `do-while`ループと条件
// `do-while`ループを使用して、10から50までの偶数の合計を計算し、その結果を出力してください。
let num: number = 10;
let sum: number = 0;

do {
  if (num % 2 === 0) {
    sum += num;
  }
  num++;
} while (num <= 50);
console.log(sum);
console.log("問14. `do-while`ループと条件 ここまで");

// 問15. switch文
// 整数型の２つの変数を宣言してください。
// 上記で宣言した２つの変数の内、1つ目を2つ目で引いた数字が偶数、奇数、0で「偶数です」「奇数です」「0です」と表示させるような条件式を書いてください。
let number1: number = 15;
let number2: number = 7;
let difference: number = number1 - number2;

switch (difference) {
  case 0:
    console.log("0です");
    break;
  default:
    switch (difference % 2) {
      case 0:
        console.log("偶数です");
        break;
      case 1:
        console.log("奇数です");
        break;
    }
}
console.log("問15. switch文 ここまで");
// 問16. 図形の表示
// ⭐︎
// ⭐︎⭐︎
// ⭐︎⭐︎⭐︎
for (let i: number = 1; i <= 3; i++) {
  let num: string = "";
  for (let j: number = 0; j < i; j++) {
    num += "⭐︎";
  }
  console.log(num);
}

console.log("問16, 図形の表示 ここまで");
// この図形をfor文を使って出力してください。
// ### 17. 図形の表示2
// ⭐︎
// ⭐︎⭐︎⭐︎
// ⭐︎⭐︎⭐︎⭐︎⭐︎
for (let i: number = 1; i <= 3; i++) {
  let num: string = "";
  for (let j: number = 0; j < 2 * i - 1; j++) {
    num += "⭐︎";
  }
  console.log(num);
}

console.log("問17. 図形の表示2 ここまで");
// 問18. 図形の表示3
// この図形をfor文を使って出力してください。
// ⭐︎
// ⭐︎⭐︎⭐︎
// ⭐︎⭐︎⭐︎⭐︎⭐︎
// ⭐︎⭐︎⭐︎
// ⭐︎
let max: number = 3;
for (let i: number = 1; i <= max; i++) {
  let num: string = "";
  for (let j: number = 0; j < 2 * i - 1; j++) {
    num += "⭐︎";
  }
  console.log(num);
}
for (let i: number = max - 1; i >= 1; i--) {
  let num: string = "";
  for (let j: number = 0; j < 2 * i - 1; j++) {
    num += "⭐︎";
  }
  console.log(num);
}
console.log("問18. 図形の表示3 ここまで");
