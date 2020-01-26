import { TestBed } from '@angular/core/testing';

import { DecisionPointService } from './decision-point.service';

describe('DecisionPointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecisionPointService = TestBed.get(DecisionPointService);
    expect(service).toBeTruthy();
  });
});
