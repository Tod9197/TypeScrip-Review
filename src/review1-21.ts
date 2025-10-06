export {};
import * as fs from "fs";
import { promises as fsp } from "fs";
import { access } from "fs/promises";
// 問81. ファイルの読み取り（同期）
// 以下の条件を満たす `readFileSync` 関数を作成してください。
// - ファイルパスを引数に受け取る
// - 指定されたファイルの内容を文字列として返す
// - ファイルが存在しない場合はエラーを投げる
function readFileSync(filePath: string): string {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return fileContent;
  } catch (error) {
    throw new Error(`ファイルの読み込みに失敗しました:${error}`);
  }
}
const result = readFileSync("src/readFile.txt");
console.log(result);

// 問82. ファイルの書き込み（非同期）
// 以下の条件を満たす `writeToFile` 関数を作成してください。
// - ファイル名と書き込む文字列を引数に取る
// - 非同期でファイルに書き込む
// - 書き込みが成功したら `"書き込み完了"` と出力する
async function writeToFile(fileName: string, data: string): Promise<void> {
  try {
    await fsp.writeFile(fileName, data, "utf-8");
  } catch (error) {
    throw new Error("書き込みに失敗しました。");
  }
}
writeToFile("src/writeFile.txt", "書き込みに成功しました！！")
  .then(() => console.log("書き込み完了"))
  .catch((error) => console.log(error));
// 問83. ファイルの存在確認
// 以下の条件を満たす `fileExists` 関数を作成してください。
// - ファイルパスを受け取り、ファイルが存在するかを真偽値で返す
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch (error) {
    return false;
  }
}
fileExists("src/writeFile.txt").then((result) =>
  console.log(result ? "ファイルは存在します。" : "ファイルが見つかりません。")
);
// 問84. ディレクトリ内のファイル一覧取得
// 以下の条件を満たす `listFiles` 関数を作成してください。
// - ディレクトリパスを受け取り、その中のファイル名を配列で返す
// - 非同期で処理を行う
// - ディレクトリが存在しない場合は空配列を返す
async function listFiles(dirPath: string): Promise<string[]> {
  try {
    const files = await fsp.readdir(dirPath);
    return files;
  } catch (error) {
    return [];
  }
}
listFiles("src")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
