import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardModelGeneratorService {

  constructor() {}

  generateCard(photo: string, name: string, numberCard: string, pincode: number, 
    cvv: number, expiryDate: Date, balance: number) {
    return {
      photo,
      name,
      numberCard,
      pincode,
      cvv,
      expiryDate,
      balance
    };
  }
}
