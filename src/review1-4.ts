export {};
// 問23. `map` を使った配列の操作
// 1. 配列 `[2, 4, 6, 8, 10]` の各要素を半分にした新しい配列を作成してください。
let numbers: number[] = [2, 4, 6, 8, 10];
let halfNums: number[] = numbers.map((num) => num / 2);
console.log(halfNums);

// 2. 文字列配列 `['a', 'b', 'c', 'd', 'e']` の各要素を `'_'` で囲んだ新しい配列を作成してください（例：`'_a_'`）。
let arr: string[] = ["a", "b", "c", "d", "e"];
let connectedArr: string[] = arr.map((str) => "_" + str + "_");
console.log(connectedArr);
// 3. 数字の配列 `[1, 2, 3, 4, 5]` を使って、各要素を文字列に変換した新しい配列を作成してください。
let numbers2: number[] = [1, 2, 3, 4, 5];
let strNums: string[] = numbers2.map((num) => num.toLocaleString());
console.log(strNums);
console.log("問23. `map` を使った配列の操作 ここまで");

// 問24. `forEach` を使った配列の操作
// 1. 数字の配列 `[10, 20, 30, 40, 50]` の各要素を `console.log` で表示してください。
let numbers3: number[] = [10, 20, 30, 40, 50];
numbers3.forEach((num) => console.log(num));
// 2. 配列 `[3, 6, 9, 12, 15]` の各要素を使って、各値に2を足した結果を`console.log`で表示してください（新しい配列の作成は不要）。
let numbers4: number[] = [3, 6, 9, 12, 15];
numbers4.forEach((num) => console.log(num + 2));
// 3. 文字列配列 `['cat', 'dog', 'bird']` の各要素の先頭に「動物:」を追加して表示してください。
let animals: string[] = ["cat", "dog", "bird"];
animals.forEach((animal) => console.log("動物:" + animal));
console.log("問24. `forEach` を使った配列の操作 ここまで");

// 問25. 配列の高度な操作
// 1. 配列 `[1, 2, 3, 4, 5, 6]` の要素を合計してください。
let numbers6: number[] = [1, 2, 3, 4, 5, 6];
let sum: number = numbers6.reduce((currentValue, total) => {
  return currentValue + total;
}, 0);
console.log(sum);
// 2. 配列 `[10, 20, 30, 40, 50]` の平均値を計算してください。
let numbers7: number[] = [10, 20, 30, 40, 50];
let sum2 = numbers7.reduce((currentValue, total) => {
  return currentValue + total;
}, 0);
let average = sum2 / numbers7.length;
console.log(average);
// 3. 数字が重複している配列 `[1, 2, 2, 3, 4, 4, 5]` から重複を削除して新しい配列を作成してください。
let numbers8: number[] = [1, 2, 2, 3, 4, 4, 5];
let newNumbers8: number[] = [...new Set(numbers8)];
console.log(newNumbers8);
// 4. 配列 `[5, 3, 8, 1, 2, 7]` を昇順にソートしてください。
let numbers9: number[] = [5, 3, 8, 1, 2, 7];
let sortedNumbers9: number[] = numbers9.sort((a, b) => a - b);
console.log(sortedNumbers9);
console.log("問25. 配列の高度な操作 ここまで");

// 問26. 配列の探索と条件分岐

// 1. 配列 `[10, 20, 30, 40, 50]` に値 `30` が含まれているかどうかを確認してください。結果を`true`または`false`で表示してください。
let numbers10: number[] = [10, 20, 30, 40, 50];
let hasThirty: boolean = numbers10.includes(30);
// 2. 配列 `[1, 3, 5, 7, 9]` から最初に条件「偶数」である要素を探してください（該当する要素がない場合は `undefined` を返します）。
let numbers11: number[] = [1, 3, 5, 7, 9];
let hasEvenNum: number | undefined = numbers11.find((num) => num % 2 === 0);
console.log(hasEvenNum);

console.log("問26. 配列の探索と条件分岐 ここまで");
