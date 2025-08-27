export {};
// 問57. クラスメソッド**
// 以下の条件を満たす `Person` クラスを修正してください。
// - `introduce` メソッドを作成し、自分の `name` と `age` を含む文字列を返す （例: `"私は Alice です。年齢は 50 歳です。"）
class Person {
  constructor(public name: string, public age: number) {}

  introduce(): string {
    return `私の名前は${this.name}で、年齢は${this.age}歳です。`;
  }
}
const person = new Person("Alice", 50);
console.log(person);
console.log(person.introduce());
console.log("問57. クラスメソッド ここまで");

// 問58. アクセス修飾子**
// 以下の条件を満たす `BankAccount` クラスを作成してください。
// - `owner`（文字列型、**private**）
// - `balance`（数値型、**private**）
// - コンストラクタを使って `owner` と `balance` を初期化する
// - `deposit` メソッドで入金ができる（引数: `amount`、戻り値なし）
// - `withdraw` メソッドで引き出しができる（引数: `amount`、戻り値なし）
// - `getBalance` メソッドで現在の `balance` を取得できる
class BankAccount {
  private owner: string;
  private balance: number;
  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0 || isNaN(amount)) {
      throw new Error("無効な入金額です。");
    }
    this.balance += amount;
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("残高不足のため引き出せません。");
      return;
    }
    this.balance -= amount;
  }
  getBalance(): number {
    return this.balance;
  }
}
const bankAccount = new BankAccount("Bill", 2500000);
bankAccount.deposit(770000);
console.log(bankAccount);
bankAccount.withdraw(6000);
console.log(bankAccount);
bankAccount.getBalance();
console.log(bankAccount);
console.log("問58. アクセス修飾子 ここまで");

//問59 クラスの継承
// 以下の条件を満たす `Employee` クラスを作成してください。
// - `Person` クラスを継承する
// - `jobTitle`（文字列型）を追加
// - `introduce` メソッドをオーバーライドし、`jobTitle` も含めた自己紹介を返す （例: `"私は Alice です。年齢は 25 歳です。職業はエンジニアです。"）
class Employee extends Person {
  jobTitle: string;
  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }
  introduce(): string {
    return `${super.introduce()}職業は${this.jobTitle}です。`;
  }
}
const employee = new Employee("Bob", 45, "会計士");
console.log(employee.introduce());
