import { Card } from "./card";

export interface Transaction{
    id : string;
    transactionDate : Date;
    sum : number;
    cardSender : Card;
    cardReceiver : Card;
}