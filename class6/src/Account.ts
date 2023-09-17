import { Transaction, TransactionTypes } from './Transaction';

let accountsLastId = 1;

export class Account {
  private readonly id: number;
  private _balance: number = 0;
  private _transactions: Transaction[] = [];

  constructor (public name: string) {
    this.id = accountsLastId++;
  }

  get number () {
    return this.id;
  }

  get balance () {
    return this._balance;
  }

  get transactions () {
    return this._transactions;
  }

  add (amount: number) {
    this._transactions.push(new Transaction(TransactionTypes.ADD, amount, new Date()));
    this._balance += amount;
  }

  sub (amount: number) {
    this._transactions.push(new Transaction(TransactionTypes.SUB, amount, new Date()));
    this._balance -= amount;
  }
}
