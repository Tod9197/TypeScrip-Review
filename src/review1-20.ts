export {};
import * as readline from "readline";
import * as crypto from "crypto";
// ### 80. ATMの実装
// コマンドラインから実行すること
// 要件定義
// - 残額、入金、引き出しの機能を実装
// - 必要なバリデーションを実装
// - オブジェクト指向を意識した設計
// 実際にATMに必要な機能をリストアップして、ご自由に開発してみてください

// メニューオプション
enum MenuOption {
  DEPOSIT = "1",
  WITHDRAW = "2",
  BALANCE = "3",
  EXIT = "4",
}

// ユーザー
class Account {
  private accounts: {
    name: string;
    balance: number;
    pinHash: string;
  }[] = [];

  constructor(name: string, balance: number, pin: string) {
    this.accounts.push({
      name,
      balance,
      pinHash: this.hashPin(pin),
    });
  }

  private get accont() {
    return this.accounts[0];
  }

  // 暗証番号照会
  validatePin(input: string): boolean {
    return this.hashPin(input) === this.accont.pinHash;
  }
  // ハッシュ化
  private hashPin(pin: string): string {
    return crypto.createHash("sha256").update(pin).digest("hex");
  }
  // 預金
  deposit(amount: number): boolean {
    if (amount <= 0) return false;
    this.accont.balance += amount;
    return true;
  }
  // 引き出し
  withdraw(amount: number): boolean {
    if (amount > this.accont.balance) return false;
    this.accont.balance -= amount;
    return true;
  }
}
