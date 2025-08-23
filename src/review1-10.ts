import * as readline from "readline";

export {};
// 問43 APIのPromise
// `fetch("<https://jsonplaceholder.typicode.com/todos/1>")` を使って、API からデータを取得し、その `title` を取得してコンソールに出力するコードを書いてください。
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data: Todo) => console.log(data.title))
  .catch((error) => console.log(error));
// 問44. async/await の基礎**
// 1. `resolve` で `"非同期成功!!"` を返す非同期関数を作成し、その結果を `await` で受け取り、コンソールに出力するコードを書いてください。
function asyncFunc(): Promise<string> {
  return new Promise((resolve) => {
    resolve("非同期成功!!");
  });
}
async function getAsyncFun() {
  const result = await asyncFunc();
  console.log(result);
}
getAsyncFun();
// 2. `setTimeout` を使用して 3 秒後に `"3秒待て!!"` を `resolve` する Promise を作成し、それを `await` で受け取るコードを書いてください。
function waitThreeSeconds(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3秒待て!!");
    }, 3000);
  });
}
async function getThreeSeconds() {
  const result = await waitThreeSeconds();
  console.log(result);
}
getThreeSeconds();
// 3. 1秒後に `10` を返す非同期関数と、2秒後に `20` を返す非同期関数を作成し、それらを `Promise.all` を使用して並行実行し、合計値をコンソールに出力するコードを書いてください。
function getTenAfterOne(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}
function getTwentyAfterTwo(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
}
Promise.all([getTenAfterOne(), getTwentyAfterTwo()]).then((values) => {
  const sum: number = values[0] + values[1];
  console.log(sum);
});

// 問45. Promise のエラーハンドリング**
// 1. `reject` で `"Error occurred"` を返す Promise を作成し、それを `catch` で処理するコードを書いてください。
Promise.reject("Error occurred").catch((error) => console.log(error));
// 2. `setTimeout` を使用して 2 秒後にエラーを `reject` する Promise を作成し、それを `try...catch` を使ってエラーハンドリングする非同期関数を書いてください。
function delayedError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed!!");
    }, 2000);
  });
}
async function getDelayedError() {
  try {
    const result = await delayedError();
    console.log(result);
  } catch (error: unknown) {
    console.log(error);
  }
}
getDelayedError();
// 3. `fetch("<https://jsonplaceholder.typicode.com/invalid-url>")` を使用し、エラーが発生した場合に `"Failed to fetch"` と出力するコードを書いてください。
fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch!!");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// 問46. Promise.all と Promise.race**

// 1. `Promise.all` を使用して、`1秒後に "First" を返す Promise` と `2秒後に "Second" を返す Promise` を並行実行し、結果を配列で取得してコンソールに出力するコードを書いてください。
function getFirst(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First");
    }, 1000);
  });
}
function getSecond(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second");
    }, 2000);
  });
}
Promise.all([getFirst(), getSecond()])
  .then((values: string[]) => {
    console.log(values);
  })
  .catch((error: unknown) => console.log(error));

// 2. `Promise.race` を使用して、`1秒後に "Fast"` を返す Promise と `3秒後に "Slow"` を返す Promise を実行し、最初に完了した値を取得するコードを書いてください。
function getFast(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast");
    }, 1000);
  });
}
function getSlow(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow");
    }, 2000);
  });
}
Promise.race([getFast(), getSlow()])
  .then((value) => {
    console.log(value);
  })
  .catch((error: unknown) => console.log(error));
// 3. `Promise.allSettled` を使用して、`1つは resolve、もう1つは reject する Promise` を処理し、結果をコンソールに出力するコードを書いてください。
const promise1 = Promise.resolve("成功!!");
const promise2 = Promise.reject("失敗!!");

Promise.allSettled([promise1, promise2]).then((results) => {
  results.forEach((result) => console.log(result));
});

// 問47. 標準入力
// 下記仕様を満たすプログラムを実装してください。
// 仕様
// 「あなたの名前は？」出力
// ↓
// 入力 ex) Micael
// ↓
// 「Micaelさん、あなたの年齢は？」出力
// ↓
// 入力 ex) 20
// ↓
// 「Micaelさん（年齢:20）、ご登録ありがとうございます！」出力
// ↓
// プログラム終了
// なお、標準入力はreadlineを使用して実装してください。

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("あなたの名前は?", (name: string) => {
  rl.question(`${name}さん、あなたの年齢は?`, (age: string) => {
    console.log(`${name}さん(${age}歳)、ご登録ありがとうございます!!`);
    rl.close();
  });
});
