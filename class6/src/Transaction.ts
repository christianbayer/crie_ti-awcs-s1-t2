export enum TransactionTypes {
  ADD = '+',
  SUB = '-'
}

export type TransactionType = TransactionTypes.ADD | TransactionTypes.SUB;

export class Transaction {
  private readonly _type: TransactionType;
  private readonly _amount: number;
  private readonly _date: Date;

  constructor (type: TransactionType, amount: number, date: Date) {
    this._type = type;
    this._amount = amount;
    this._date = date;
  }

  get type () {
    return this._type;
  }

  get amount () {
    return this._amount;
  }

  get date () {
    return this._date;
  }
}
