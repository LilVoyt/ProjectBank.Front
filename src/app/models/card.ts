import { Transaction } from "./transaction";

export interface Card {
    id: string;
    cardName: string;
    numberCard: string;
    pincode: number;
    Data: Date;
    cvv: number;
    balance: number;
    sentTransactions: Transaction[];
    receivedTransactions: Transaction[];
  }