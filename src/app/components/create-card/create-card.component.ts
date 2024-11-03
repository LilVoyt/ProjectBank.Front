import { Component } from '@angular/core';
import { CardModelGeneratorService } from '../../services/card-model-generator.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
export class CreateCardComponent {
  cards: any[] = [];

  constructor(private cardModelGeneratorService: CardModelGeneratorService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.generateTestCards();
  }

  generateTestCards() {
    this.cards = [
      this.cardModelGeneratorService.generateCard('Visa', '4111111111111111', 1234, 123, new Date('2025-12-31'), 1000),
      this.cardModelGeneratorService.generateCard('MasterCard', '5500000000000004', 5678, 456, new Date('2024-11-30'), 1500),
      this.cardModelGeneratorService.generateCard('American Express', '340000000000009', 9101, 789, new Date('2023-10-31'), 2000)
    ];
  }

  selectCard(card: any) {
    console.log('Selected card:', card.name);
    this.router.navigate([`/create-card/${card.name}`]);
  }

  getCardBackground(name: string): string {
    switch(name.toLowerCase()) {
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
