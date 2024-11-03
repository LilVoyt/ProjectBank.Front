import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCardDto } from '../../models/addCardDto';
import { jwtDecode } from 'jwt-decode';
import { JwtPayloadUpgraded } from '../../models/jwtPayloadUpgraded';
import { PersonalCabinetComponent } from '../personal-cabinet/personal-cabinet.component';
import { PersonalCabinetService } from '../../services/personal-cabinet.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-set-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './card-set-info.component.html',
  styleUrl: './card-set-info.component.css'
})
export class CardSetInfoComponent {
  createCardForm: FormGroup;
  addCard: AddCardDto = {
    pincode: '',
    cardName: '',
    currencyCode: '',
    accountId: ''
  }
  newCard: Card | null = null;
  cardType: string;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private personalCabinetService: PersonalCabinetService) {
    this.createCardForm = this.fb.group({
      agreeToTerms: [false, Validators.requiredTrue],
      pinCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      currencyCode: ['UAH', Validators.required]
    });
    this.cardType = this.route.snapshot.paramMap.get('type') ?? " ";
  }
  
  ngOnInit() {
  }

  onSubmit(): void {
    if (this.createCardForm.valid) {
      const formData = this.createCardForm.value;
      console.log('Form Data:', formData);

      const token = localStorage.getItem('token')??'';
      const decoded = jwtDecode<JwtPayloadUpgraded>(token);

      this.addCard.pincode = formData.pinCode;
      this.addCard.cardName =  this.route.snapshot.paramMap.get('type') ?? "";
      this.addCard.currencyCode = formData.currencyCode;
      this.addCard.accountId = decoded.certserialnumber;

      console.log(this.addCard);

      this.personalCabinetService.addCard(this.addCard).subscribe(card => {
        this.newCard = card;
      })
    }
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
