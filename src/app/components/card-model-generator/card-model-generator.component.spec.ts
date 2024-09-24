import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelGeneratorComponent } from './card-model-generator.component';

describe('CardModelGeneratorComponent', () => {
  let component: CardModelGeneratorComponent;
  let fixture: ComponentFixture<CardModelGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModelGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardModelGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
