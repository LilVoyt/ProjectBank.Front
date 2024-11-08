import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { CreditCreate } from '../../models/creditCreate';
import { Card } from '../../models/card';
import { jwtDecode } from 'jwt-decode';
import { JwtPayloadUpgraded } from '../../models/jwtPayloadUpgraded';
import { CreditService } from '../../services/credit.service';
@Component({
  selector: 'app-create-credit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-credit.component.html',
  styleUrl: './create-credit.component.css'
})
export class CreateCreditComponent implements OnInit {
  creditForm: FormGroup;
  cards: Card[] | null = null;
  creditTypes = [
    { id: 1, name: 'Business Loan' },
    { id: 2, name: 'Mortgage Loan' },
    { id: 3, name: 'Consumer Loan' },
    { id: 4, name: 'Microloan' }
  ];

  constructor(private fb: FormBuilder, private personalCabinetService: PersonalCabinetService, private creditService: CreditService) {
    this.creditForm = this.fb.group({
      cardNumber: ['', [Validators.required]],
      creditAmount: ['', [Validators.required, Validators.min(1000)]],
      duration: ['', [Validators.required, Validators.min(1)]],
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
      residencePlace: [''],
      purpose: [''],
      creditType: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')??'';
    const decoded = jwtDecode<JwtPayloadUpgraded>(token);
    this.personalCabinetService.getAccountCards(decoded.certserialnumber).subscribe(cards =>{
      this.cards = cards;
    }
  )
  }

  onSubmit(): void {
    if (this.creditForm.valid) {
      const formData = this.creditForm.value;
      const createCredit = new CreditCreate(
        formData.cardNumber, 
        formData.creditAmount,
        formData.duration,
        formData.dateOfBirth,
        formData.monthlyIncome,
        formData.creditType
      );
      console.log("Credit application submitted:", createCredit);
      this.creditService.postCredit(createCredit).subscribe(
        (result) => {
          console.log("Credit created successfully:", result);
        },
        (error) => {
          console.error("Error creating credit:", error);
        }
      )

    }
  }
}