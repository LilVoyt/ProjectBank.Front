import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSetInfoComponent } from './card-set-info.component';

describe('CardSetInfoComponent', () => {
  let component: CardSetInfoComponent;
  let fixture: ComponentFixture<CardSetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSetInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
