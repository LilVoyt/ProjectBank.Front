import { Transaction } from "./transaction";

export interface Card {
    id: string;
    cardName: string;
    numberCard: string;
    pincode: number;
    cvv: number;
    expiryDate: Date;
    balance: number;
    sentTransactions: Transaction;
    receivedTransactions: Transaction;
  }