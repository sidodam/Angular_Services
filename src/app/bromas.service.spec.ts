import { TestBed } from '@angular/core/testing';

import { BromasService } from './bromas.service';

describe('BromasService', () => {
  let service: BromasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BromasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
