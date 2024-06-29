import { TestBed } from '@angular/core/testing';

import { DecisionWeigherService } from './decision-weigher.service';

describe('DecisionWeigherService', () => {
  let service: DecisionWeigherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecisionWeigherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
