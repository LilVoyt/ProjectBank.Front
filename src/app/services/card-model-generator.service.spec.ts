import { TestBed } from '@angular/core/testing';

import { CardModelGeneratorService } from './card-model-generator.service';

describe('CardModelGeneratorService', () => {
  let service: CardModelGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardModelGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
