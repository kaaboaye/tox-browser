import { TestBed, inject } from '@angular/core/testing';

import { JobDiagnosisService } from './job-diagnosis.service';

describe('JobDiagnosisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobDiagnosisService]
    });
  });

  it('should be created', inject([JobDiagnosisService], (service: JobDiagnosisService) => {
    expect(service).toBeTruthy();
  }));
});
