export {};
// 問39. Promise（基本）
// `resolve` で `"TypeScript is fun!!"` を返す Promise を作成し、その結果を取得してコンソールに出力するコードを書いてください。
new Promise<string>((resolve) => {
  resolve("TypeScript is fun!!");
}).then((message) => console.log(message));

// 問40. `setTimeout` を使用して、2秒後に `"Delayed Hello"` を `resolve` する Promise を作成し、その結果を取得してコンソールに出力するコードを書いてください。
new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Delayed Hello");
  }, 2000);
}).then((result) => console.log(result));
// 問41. Promise のチェーン**
// `resolve` で数値 `25` を返す Promise を作成し、それに `.then()` をチェーンさせ、受け取った値に `3` を掛ける処理を追加してください（最終的に `75` が出力されるようにしてください）。
new Promise<number>((resolve) => {
  resolve(25);
}).then((num) => console.log(num * 3));
// 問42. `resolve` で `"Step 1"` を返す Promise を作成し、それに `.then()` をチェーンさせ、`"Step 2"`、`"Step 3"` を順番に出力するコードを書いてください。
new Promise<string>((resolve) => {
  resolve("Step1");
})
  .then((result1) => {
    console.log(result1);
    return "Step2";
  })
  .then((result2) => {
    console.log(result2);
    return "Step3";
  })
  .then((result3) => {
    console.log(result3);
  });
