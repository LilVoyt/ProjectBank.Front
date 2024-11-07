export class CreditCreate{
    cardNumber: string;
    principal: number;
    numberOfMonth: number;
    birthday: Date;
    monthlyIncome: number;
    creditTypeName: string;
    
    constructor(cardNumber: string, principal: number, numberOfMonth: number, birthday: Date, monthlyIncome: number, creditTypeName: string) {
        this.cardNumber = cardNumber;
        this.principal = principal;
        this.numberOfMonth = numberOfMonth;
        this.birthday = birthday;
        this.monthlyIncome = monthlyIncome;
        this.creditTypeName = creditTypeName;
      }
}