import { Component, OnInit } from '@angular/core';
import { CardModelGeneratorService } from '../../services/card-model-generator.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-model-generator.component.html',
  styleUrls: ['./card-model-generator.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];

  constructor(private cardModelGeneratorService: CardModelGeneratorService) {}

  ngOnInit(): void {
    this.cards.push(this.cardModelGeneratorService.generateCard(
      './assets/photo.png', 'Універсальна', '0123 4567 5678 9101', 1234, 123, new Date(2027, 1, 1), 10000
    ));
    this.cards.push(this.cardModelGeneratorService.generateCard(
      './assets/photo2.png', 'Для виплат', '0123 4567 5678 9102', 1234, 123, new Date(2027, 1, 1), 5000
    ));
    this.cards.push(this.cardModelGeneratorService.generateCard(
      './assets/photo3.png', 'Юніорам', '0123 4567 5678 9103', 1234, 123, new Date(2027, 1, 1), 3000
    ));
  }
}
