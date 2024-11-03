import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardModelGeneratorService {

  constructor() {}

  generateCard(name: string, numberCard: string, pincode: number, 
    cvv: number, expiryDate: Date, balance: number) {
    return {
      name,
      numberCard,
      pincode,
      cvv,
      expiryDate,
      balance
    };
  }
}
