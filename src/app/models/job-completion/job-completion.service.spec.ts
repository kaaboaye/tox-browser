import { TestBed, inject } from '@angular/core/testing';

import { JobCompletionService } from './job-completion.service';

describe('JobCompletionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobCompletionService]
    });
  });

  it('should be created', inject([JobCompletionService], (service: JobCompletionService) => {
    expect(service).toBeTruthy();
  }));
});
