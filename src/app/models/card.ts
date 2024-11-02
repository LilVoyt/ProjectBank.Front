import { Transaction } from "./transaction";

export interface Card {
    id: string;
    cardName: string;
    numberCard: string;
    pincode: number;
    expirationDate: any;
    cvv: number;
    balance: number;
    currencyCode: string;
  }