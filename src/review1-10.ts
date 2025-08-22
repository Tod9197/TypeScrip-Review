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
  .then((respose) => respose.json())
  .then((data: Todo) => console.log(data.title))
  .catch((error: unknown) => console.log(error));

// 問44. async/await の基礎**
// 1. `resolve` で `"非同期成功!!"` を返す非同期関数を作成し、その結果を `await` で受け取り、コンソールに出力するコードを書いてください。
function asyncFunc() {
  return new Promise<string>((resolve) => {
    resolve("非同期成功!!");
  });
}
async function getAsyncFunc() {
  const result = await asyncFunc();
  console.log(result);
}
getAsyncFunc();
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
