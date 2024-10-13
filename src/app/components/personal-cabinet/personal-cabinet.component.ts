import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { Account } from '../../models/account';
import { Card } from '../../models/card';
import { Transaction } from '../../models/transaction';
import { CreateTransactionCommand } from '../../models/transactionDto';

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
    const login = this.route.snapshot.paramMap.get('id');
    if (login) {
      this.personalCabinetService.getAccountById(login).subscribe(account => {
        console.log('Received account:', account);
        this.account = account;
        this.cardsArray = account.cards;
        this.personalCabinetService.setAccountCards(account.cards);
      });
    }
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
      console.log('Transactions:', this.transactions);
    });
  }

  sendTransaction() : void {
    this.router.navigate([`/money-transfer`]);
  }
}
