import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { Account } from '../../models/account';
import { Card } from '../../models/card';
import { Transaction } from '../../models/transaction';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-personal-cabinet',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './personal-cabinet.component.html',
  styleUrls: ['./personal-cabinet.component.css'] 
})
export class PersonalCabinetComponent implements OnInit {
  account: Account | null = null;
  transactions: Transaction[] | null = null;
  selectedCard: Card | null = null;
  cardsArray: any;         

  constructor(private personalCabinetService: PersonalCabinetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('id');
    if (login) {
      this.personalCabinetService.getAccountById(login).subscribe(account => {
        console.log('Received account:', account);
        this.account = account;
        
        if (account.cards) {
          this.cardsArray = account.cards;
        } else {
          this.cardsArray = [];
        }
      });
    }
  }

  selectCard(card: Card): void {
    this.selectedCard = card;
    this.getTransaction();
  }

  getTransaction(){
    this.personalCabinetService.getAllransactions().subscribe(transactions => {
      this.transactions = transactions;
      console.log(transactions);
    })
  }
  
}
