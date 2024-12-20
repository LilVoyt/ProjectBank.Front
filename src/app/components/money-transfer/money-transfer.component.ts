import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from '../../models/card';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { JwtPayloadUpgraded } from '../../models/jwtPayloadUpgraded';

@Component({
  selector: 'app-money-transfer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './money-transfer.component.html',
  styleUrl: './money-transfer.component.css'
})
export class MoneyTransferComponent implements OnInit {
  transferForm: FormGroup;
  cards: Card[] | null = null;

  constructor(private fb: FormBuilder, private personalCabinetService: PersonalCabinetService) {
    this.transferForm = this.fb.group({
      senderNumber: ['', Validators.required],
      receiverNumber: ['', Validators.required],
      sum: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')??'';
    const decoded = jwtDecode<JwtPayloadUpgraded>(token);
    this.personalCabinetService.getAccountCards(decoded.certserialnumber).subscribe(cards =>{
      this.cards = cards;
    }
    );
    console.log(this.cards);  
    this.transferForm = this.fb.group({
      senderNumber: ['', Validators.required],
      receiverNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      sum: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit(): void {
    if (this.transferForm.valid) {
      const formData = this.transferForm.value;
      console.log('Form Data:', formData); 
      this.personalCabinetService.postTransaction(formData).subscribe({
        next: (response) => {
          console.log('Transaction successful:', response);
        },
        error: (error) => {
          console.error('Error occurred:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
