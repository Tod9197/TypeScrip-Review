export {};

// 問60. 抽象クラス**
// 以下の条件を満たす `Shape` 抽象クラスを作成してください。
// - `getArea` メソッド（抽象メソッド）
// - `Rectangle` クラスを作成し `Shape` を継承
// - `width`（数値型）と `height`（数値型）をプロパティとして持つ
// - `getArea` メソッドをオーバーライドし、長方形の面積を返す
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(20, 40);
console.log(rectangle.getArea());
console.log("問60. 抽象クラス ここまで");

// ### **61. 静的メンバー**
// 以下の条件を満たす `MathUtil` クラスを作成してください。
// - `PI`（`3.1415`）を静的プロパティとして定義する
// - `circleArea` 静的メソッドを作成し、半径を受け取り円の面積を計算する （面積 = `PI × 半径 × 半径`）
class MathUtil {
  static readonly PI: number = 3.1415;

  static circleArea(radius: number): number {
    return MathUtil.PI * radius * radius;
  }
}
const circleArea = MathUtil.circleArea(10);
console.log(Number(circleArea.toFixed(1)));
console.log("問61. 静的メンバー ここまで");

// 問62. インターフェースの実装**
// 以下の条件を満たす `Vehicle` インターフェースを作成し、`Car` クラスを実装してください。
// - `Vehicle` インターフェース:
//     - `name`（文字列型）
//     - `speed`（数値型）
//     - `move` メソッド（戻り値なし）
// - `Car` クラス:
//     - `Vehicle` を実装
//     - `name` をプロパティとして持つ
//     - `speed` をプロパティとして持つ
//     - `move` メソッドを実装し、現在の `speed` を表示する
interface Vehicle {
  name: string;
  speed: number;
  move: () => void;
}
class Car implements Vehicle {
  constructor(public name: string, public speed: number) {
    this.name = name;
    this.speed = speed;
  }

  move(): void {
    console.log(`この${this.name}は、最高時速${this.speed}km/h出ます。`);
  }
}
// const vehicles: Vehicle[] = [
//   new Car("Lamborghini", 320),
//   new Car("Ferrari", 300),
//   new Car("Porsche", 250),
// ];
const lamborghini = new Car("Lamborghini", 320);
const ferrari = new Car("Ferrari", 300);
const porsche = new Car("Porsche", 250);
lamborghini.move();
ferrari.move();
porsche.move();
console.log("問62. インターフェースの実装 ここまで");
