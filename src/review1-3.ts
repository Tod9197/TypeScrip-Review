// 問19. 配列の作成とアクセス
// 1. 空の配列を作成し、表示してください。
let arr: (number | undefined)[] = [];
console.log(arr);
// 2. 数字の配列 `[1, 2, 3, 4, 5]` を作成し、配列の最初の要素と最後の要素を表示してください。
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers[0], numbers[numbers.length - 1]);
console.log("問19. 配列の作成とアクセス ここまで");

// 問20. 配列の操作
// 1. 配列 `[1, 2, 3, 4, 5]` に要素 `6` を追加してください。
numbers.push(6);
console.log(numbers);
// 2. 配列 `[1, 2, 3, 4, 5]` の3番目の要素を `10` に変更してください。
numbers[2] = 10;
console.log(numbers);
// 3. 配列 `[1, 2, 3, 4, 5]` から要素 `3` を削除してください。
let numbers2: number[] = [1, 2, 3, 4, 5];
numbers2.splice(2, 1);
console.log(numbers2);
// 4. 配列 `[1, 2, 3, 4, 5]` を逆順にしてください。
let numbers3: number[] = [1, 2, 3, 4, 5];
numbers3.reverse();
console.log(numbers3);
console.log("問20. 配列の操作 ここまで");

// 問21. 配列の操作（応用）
// 1. 配列 `[1, 2, 3, 4, 5]` の各要素を2倍にした新しい配列を作成してください。
let numbers4: number[] = [1, 2, 3, 4, 5];
let doubleNum: number[] = numbers4.map((num) => num * 2);
console.log(doubleNum);
// 2. 配列 `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` から偶数だけを取り出して新しい配列を作成してください。
let numbers5: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums: number[] = numbers5.filter((num) => num % 2 === 0);
console.log(evenNums);
// 3. 文字列配列 `['apple', 'banana', 'cherry']` の各要素の長さを表示してください。
let fruits: string[] = ["apple", "banana", "cherry"];
let fruitsLength: number[] = fruits.map((fruit) => fruit.length);
console.log(fruitsLength);
// 4. 配列 `[1, 2, 3, 4, 5]` と `[6, 7, 8, 9, 10]` を結合して新しい配列を作成してください。
let numbers6: number[] = [1, 2, 3, 4, 5];
let numbers7: number[] = [6, 7, 8, 9, 10];
let joinedNum: number[] = numbers6.concat(numbers7);
console.log(joinedNum);
console.log("問21. 配列の操作（応用） ここまで");

// 問22. 配列の応用操作
// 1. 配列 `[1, 2, 3, 4, 5]` の各要素を3倍にした新しい配列を作成してください。
let numbers8: number[] = [1, 2, 3, 4, 5];
let trippleNum: number[] = numbers8.map((num) => num * 3);
console.log(trippleNum);
// 2. 配列 `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` から奇数だけを取り出して新しい配列を作成してください。
let numbers9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNums: number[] = numbers9.filter((num) => num % 2 === 1);
console.log(oddNums);
// 3. 配列 `['red', 'blue', 'green', 'yellow']` の各要素を大文字に変換した新しい配列を作成してください。
let colors: string[] = ["red", "blue", "green", "yellow"];
let upperString: string[] = colors.map((color) => color.toUpperCase());
console.log(upperString);
console.log("問22. 配列の応用操作 ここまで");
