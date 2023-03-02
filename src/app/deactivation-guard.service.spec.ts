import { TestBed } from '@angular/core/testing';

import { DeactivationGuardService } from './deactivation-guard.service';

describe('DeactivationGuardService', () => {
  let service: DeactivationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeactivationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
