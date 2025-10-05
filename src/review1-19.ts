// 問77. 条件付き型 + infer：配列の中の型を取り出す**
// 以下の条件を満たす `ElementType<T>` 型を定義してください。
// - `T` が配列型であれば、その要素型を取り出す
// - 配列型でなければ `never` を返す
// type ElementType<T> = // ここを実装
type ElementType<T> = T extends (infer U)[] ? U : never;
type NumberType = ElementType<number[]>;
const num: NumberType[] = [1, 2, 3];
console.log(num);

// 問78. Mapped Types + keyof：プロパティ名を変換する**
// 以下の条件を満たす `ReadonlyKeys<T>` 型を定義してください。
// - `T` のすべてのキーを `readonly` にする
// type ReadonlyKeys<T> = // ここを実装

// 問79. keyof + 条件付き型：プロパティの型に応じてキーを絞る**
// 以下の条件を満たす `StringKeys<T>` 型を定義してください。
// - `T` のうち、`string` 型の値を持つキーのみを抽出する
// type StringKeys<T> = // ここを実装
