export interface Transaction{
    id : string;
    transactionDate : Date;
    sum : number;
    cardSenderId : string;
    cardReceiverId : string;
}