import { TestBed, inject } from '@angular/core/testing';

import { JobRegistrationService } from './job-registration.service';

describe('JobRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobRegistrationService]
    });
  });

  it('should be created', inject([JobRegistrationService], (service: JobRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
