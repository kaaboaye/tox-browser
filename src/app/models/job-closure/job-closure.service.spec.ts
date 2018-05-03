import { TestBed, inject } from '@angular/core/testing';

import { JobClosureService } from './job-closure.service';

describe('JobClosureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobClosureService]
    });
  });

  it('should be created', inject([JobClosureService], (service: JobClosureService) => {
    expect(service).toBeTruthy();
  }));
});
