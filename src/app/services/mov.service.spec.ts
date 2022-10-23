import { TestBed } from '@angular/core/testing';

import { MovService } from './mov.service';

describe('MovService', () => {
  let service: MovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
