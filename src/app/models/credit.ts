export class Credit {
    cardNumber: string;
    principal: number;
    amountToRepay: number;
    annualInterestRate: number;
    monthlyPayment: number;
    startDate: Date;
    endDate: Date;
    currencyName: string;
    creditTypeName: string;
  
    constructor(
      cardNumber: string,
      principal: number,
      amountToRepay: number,
      annualInterestRate: number,
      monthlyPayment: number,
      startDate: Date,
      endDate: Date,
      currencyName: string,
      creditTypeName: string
    ) {
      this.cardNumber = cardNumber;
      this.principal = principal;
      this.amountToRepay = amountToRepay;
      this.annualInterestRate = annualInterestRate;
      this.monthlyPayment = monthlyPayment;
      this.startDate = new Date(startDate);
      this.endDate = new Date(endDate);
      this.currencyName = currencyName;
      this.creditTypeName = creditTypeName;
    }
  }
  