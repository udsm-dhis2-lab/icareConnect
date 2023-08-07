import { TestBed } from '@angular/core/testing';

import { ProviderShedulingService } from './provider-sheduling.service';

describe('ProviderShedulingService', () => {
  let service: ProviderShedulingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProviderShedulingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
