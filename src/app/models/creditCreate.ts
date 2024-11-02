export class CreditCreate{
    cardNumber: string;
    principal: number;
    numberOfMonth: number;
    creditTypeName: string;
    
    constructor(cardNumber: string, principal: number, numberOfMonth: number, creditTypeName: string) {
        this.cardNumber = cardNumber;
        this.principal = principal;
        this.numberOfMonth = numberOfMonth;
        this.creditTypeName = creditTypeName;
      }
}