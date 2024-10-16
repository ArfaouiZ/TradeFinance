import { TestBed } from '@angular/core/testing';

import { ReglementServiceService } from './reglement-service.service';

describe('ReglementServiceService', () => {
  let service: ReglementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
