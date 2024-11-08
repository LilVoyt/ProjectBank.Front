import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { Account } from '../../models/account';
import { Card } from '../../models/card';
import { Transaction } from '../../models/transaction';
import { CreateTransactionCommand } from '../../models/transactionDto';
import { jwtDecode } from "jwt-decode";
import { JwtPayloadUpgraded } from '../../models/jwtPayloadUpgraded';

@Component({
  selector: 'app-personal-cabinet',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.css']
})
export class PersonalCabinetComponent implements OnInit {
  account: Account | null = null;
  transactions: Transaction[] = [];
  selectedCard: Card | null = null;
  cardsArray: Card[] = [];
  transationResponse: CreateTransactionCommand | null = null;

  constructor(private personalCabinetService: PersonalCabinetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')??'';
    const decoded = jwtDecode<JwtPayloadUpgraded>(token);
     
    console.log(decoded)
    if (token) {
      this.personalCabinetService.getAccountById(decoded.certserialnumber).subscribe(account => {
        console.log('Received account:', account);
        this.account = account;
        this.cardsArray = account.cards;
        this.personalCabinetService.setAccountCards(account.cards);
        this.selectedCard = this.cardsArray[0];
        this.getTransactions(this.selectedCard.id, this.selectedCard.id);
      });
    }
    console.log('Transactions:', this.transactions);
  }

  selectCard(card: Card): void {
    this.selectedCard = card;
    this.getTransactions(this.selectedCard.id, this.selectedCard.id);
  }

  getTransactions(senderId: string | undefined, receiverId: string | undefined, sortItem: string = "date", sortOrder: string = "asc"): void {
    this.personalCabinetService.getAllTransactions(senderId, receiverId).subscribe(transactions => {
      if (this.selectedCard) {
        this.transactions = transactions;
      } else {
        this.transactions = transactions;
      }
    });
  }

  sendTransaction() : void {
    this.router.navigate([`/money-transfer`]);
  }

  addCard() : void { //here we need to add a route to class witch will add a card but also i need to change a jwt token to store there a id;
    this.router.navigate([`/create-card`]);
  }

  getCredits(): void{
    this.router.navigate(['/credit-management'])
  }

  getCardBackground(cardName: string): string {
    switch(cardName.toLowerCase()) {
      case 'Visa':
        return 'url("niceGoldBackground.jpg")';
      case 'mastercard':
        return 'url("steelBackground.jpg")';
      case 'american express':
        return 'url("photo.png")';
      default:
        return 'url("niceGoldBackground.jpg")';
    }
  }
}
