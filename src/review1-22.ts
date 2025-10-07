export {};
import * as fs from "fs";
import { promises as fsp } from "fs";
// ### **85. ファイルの追記（非同期）**
// 以下の条件を満たす appendToFile 関数を作成してください。
// - ファイル名と追記する文字列を引数に取る
// - 非同期でファイルの末尾に文字列を追加する
// - 完了したら "追記完了" を出力する
async function appendToFile(fileName: string, data: string): Promise<void> {
  try {
    await fsp.appendFile(fileName, data);
    console.log("追記完了");
  } catch (error) {
    console.log("書き込みに失敗しました:", error);
  }
}
appendToFile("src/appendTest.txt", "追記しました。");
// ### **86. ファイルの削除**
// 以下の条件を満たす deleteFile 関数を作成してください。
// - ファイルパスを引数に受け取る
// - 非同期でそのファイルを削除する
// - 削除が成功したら "削除完了" を出力する
// - ファイルが存在しない場合は "ファイルが存在しません" と出力する
async function deleteFile(filePath: string): Promise<void> {
  try {
    await fsp.unlink(filePath);
    console.log("削除完了");
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOENT") {
      console.warn("ファイルが存在しません。", filePath);
    } else {
      console.error("削除に失敗しました。");
    }
  }
}
deleteFile("src/testDelete.txt");
// ### **87. ファイルのコピー**
// 以下の条件を満たす copyFile 関数を作成してください。
// - コピー元とコピー先のファイルパスを受け取る
// - 非同期でファイルをコピーする
// - 成功したら "コピー完了" を出力する

// ### **88. pathモジュール：絶対パスの取得**
// 以下の条件を満たす getAbsolutePath 関数を作成してください。
// - 相対パスを受け取り、絶対パスに変換して返す
// - path.resolve() を使用すること
