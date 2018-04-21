import { TestBed, inject } from '@angular/core/testing';

import { JobOrdersService } from './job-orders.service';

describe('JobOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobOrdersService]
    });
  });

  it('should be created', inject([JobOrdersService], (service: JobOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
