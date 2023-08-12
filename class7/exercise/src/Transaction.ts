export enum TransactionTypes {
  ADD = "+",
  SUB = "-",
}

export type TransactionType = TransactionTypes.ADD | TransactionTypes.SUB;

let transactionsLastId: number = 1;

export class Transaction {
  private readonly _id: number;
  private readonly _date: Date;

  constructor(
    private readonly _type: TransactionType,
    private readonly _amount: number
  ) {
    this._id = transactionsLastId++;
    this._date = new Date();
  }

  get id(): number {
    return this._id;
  }

  get type(): TransactionType {
    return this._type;
  }

  get amount(): number {
    return this._amount;
  }

  get date(): Date {
    return this._date;
  }
}
