import { Transaction, TransactionTypes } from "./Transaction";

let accountsLastId: number = 1;

export class Account {
  private readonly _id: number;
  private _balance: number = 0;
  private _transactions: Transaction[] = [];

  constructor(public name: string) {
    this._id = accountsLastId++;
  }

  get number(): number {
    return this._id;
  }

  get balance(): number {
    return this._balance;
  }

  get transactions(): Transaction[] {
    return this._transactions;
  }

  add(amount: number): void {
    this._balance += amount;
    this._transactions.push(new Transaction(TransactionTypes.ADD, amount));
  }

  sub(amount: number): void {
    if ((this._balance - amount) < 0) {
      throw new Error(`Cannot subtract from account #${this._id}`);
    }
    this._balance -= amount;
    this._transactions.push(new Transaction(TransactionTypes.SUB, amount));
  }
}
