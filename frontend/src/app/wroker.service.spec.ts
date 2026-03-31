import { TestBed } from '@angular/core/testing';

import { WrokerService } from './wroker.service';

describe('WrokerService', () => {
  let service: WrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
