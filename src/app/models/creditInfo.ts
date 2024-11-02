export class CreditInfo {
    monthlyPayment: number;
    amountToRepay: number;
    currencyCode: string;
  
    constructor(monthlyPayment: number, amountToRepay: number, currencyCode: string) {
      this.monthlyPayment = monthlyPayment;
      this.amountToRepay = amountToRepay;
      this.currencyCode = currencyCode;
    }
  }