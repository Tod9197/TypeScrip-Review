export {};
// 問1:変数の宣言
// 以下の指定された条件に合うように、変数をTypeScriptで宣言し、値を代入してください。
// - 整数（number型） `number`: 12
let number: number = 12;
console.log(number);
// - 文字列（string型） `text`: "review"
let text: string = "review";
console.log(text);
// - 論理型（boolean型） `flag`: true
let flag: boolean = true;
console.log(flag);
// - null型 `test`: null
let test: null = null;
console.log(test);
console.log("問1:変数の宣言 ここまで");

//問2. 計算
// 整数型（number）の2つの変数を宣言してください。2つの変数を使って次の計算を行い、それぞれの結果を出力してください。
// - 足し算
// - 引き算
// - 掛け算
// - 割り算
// - 割り算の余り
let num1: number = 8;
let num2: number = 6;
// - 足し算
let sum: number = num1 + num2;
console.log(sum);
// - 引き算
let difference: number = num1 - num2;
console.log(difference);
// - 掛け算
let product: number = num1 * num2;
console.log(product);
// - 割り算
let quotient: number = num1 / num2;
console.log(quotient);
// - 割り算の余り
let remainder: number = num1 % num2;
console.log(remainder);
console.log("問2. 計算 ここまで");

// 問3. 条件式とboolean(論理型)
// 初期値が`false`である論理型（boolean）の変数を宣言してください。
// 問題2で宣言した2つの整数を足した結果が偶数であれば、論理型の変数に`true`を代入してください。
let isEven: boolean = false;
if (sum % 2 === 0) {
  isEven = true;
}
console.log(isEven);
console.log("問3. 条件式とboolean(論理型) ここまで");
// 問4. 条件式
// 問3のboolean型の変数を使用し、偶数か奇数かを判定する条件式を作成し、次のように出力してください。
// - 偶数なら「偶数です」と表示
// - 奇数なら「奇数です」と表示
if (isEven) {
  console.log("偶数です。");
} else {
  console.log("奇数です");
}
console.log("問4. 条件式 ここまで");

// 問5. for文
// 1~10までの数字をfor文を使って出力してください
for (let i: number = 1; i <= 10; i++) {
  console.log(i);
}
console.log(" 問5. for文 ここまで");

// 問6.for文-2;
// 35 ~ 46までの数字をfor文を使って出力してください
for (let i: number = 35; i <= 46; i++) {
  console.log(i);
}
console.log(" 問6.for文-2 ここまで");

// 問7.for文と条件式の組み合わせ;
// 40 ~ 50までの数字の中で奇数の数字のみを出力してください
for (let i: number = 40; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log(" 問7.for文と条件式の組み合わせ ここまで");

// 問8.for文と条件式の組み合わせ2;
// 10 ~ 25までの数字の中で3の倍数の数字のみを出力してください
for (let i: number = 10; i <= 32; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
console.log(" 問8.for文と条件式の組み合わせ2 ここまで");

// 問9. for文と条件式の組み合わせ3
// 20 ~ 50までの数字の中で2で割ったら奇数となる数字のみを出力してください
for (let i: number = 20; i <= 50; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
console.log("問9. for文と条件式の組み合わせ3 ここまで");

// 問10.for文と条件式の組み合わせ4;
// 20 ~ 50までの数字の中で2で割ったら奇数となる数字の個数を出力してください
let count: number = 0;
for (let i: number = 20; i <= 50; i++) {
  if (i % 2 === 1) {
    count += 1;
  }
}
console.log(count);

console.log("問10. for文と条件式の組み合わせ4 ここまで");

// 問11. for文を使用した計算
// 1000未満の「3と7の倍数」は何個あるか 個数を出力してください
count = 0;
for (let i: number = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    count += 1;
  }
}
console.log(count);
console.log("問11. for文を使用した計算 ここまで");

// 問12. for文を使用した計算2
// 1000未満の「3と7の倍数」の11番目に大きい数を出力してください
count = 0;
for (let i: number = 999; i > 0; i--) {
  if (i % 3 === 0 && i % 7 === 0) {
    count += 1;
    if (count === 11) {
      console.log(i);
      break;
    }
  }
}
console.log("問12. for文を使用した計算2 ここまで");
