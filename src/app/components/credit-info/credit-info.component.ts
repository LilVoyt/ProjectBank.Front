import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditService } from '../../services/credit.service';
import { CreditInfo } from '../../models/creditInfo';

@Component({
  selector: 'app-credit-info',
  standalone: true,
  imports: [],
  templateUrl: './credit-info.component.html',
  styleUrl: './credit-info.component.css'
})
export class CreditInfoComponent implements OnInit {
  creditId: string;
  creditDetails: CreditInfo | null = null;
  constructor(private route: ActivatedRoute, private creditService: CreditService) {
    this.creditId = this.route.snapshot.paramMap.get('id') ?? " ";
  }

  ngOnInit(): void {
    if (this.creditId) {
      this.loadTransactionDetails(this.creditId);
    }
  }

  loadTransactionDetails(transactionId: string): void {
    this.creditService.getCreditInfo(transactionId).subscribe(data => {
      this.creditDetails = data;
    });
  }

  makeMonthlyPayment() : void {
    this.creditService.monthlyPayment(this.creditId).subscribe();
  }
}