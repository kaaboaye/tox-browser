import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Job } from '../../../../models/job/job';
import { Strings } from '../../../../strings';
import { JobRegistration, JobRegistrationType } from '../../../../models/job-registration/job-registration';
import { JobRegistrationService } from '../../../../models/job-registration/job-registration.service';

@Component({
  selector: 'app-job-overview-registration',
  templateUrl: './job-overview-registration.component.html',
  styleUrls: ['./job-overview-registration.component.scss']
})
export class JobOverviewRegistrationComponent implements OnInit, OnChanges {

  constructor(
    public jobRegistrationService: JobRegistrationService
  ) { }

  t = Strings;
  JobRegistrationType = JobRegistrationType;

  @Input() job: Job;
  registration: JobRegistration;

  init() {
    this.registration = { ...this.job.registration };
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  prev() {
    if (this.registration.prev) {
      this.registration = this.registration.prev;
      return;
    }

    this.jobRegistrationService.Prev(this.registration)
      .subscribe(prev => {
        this.registration.prev = prev;
        prev.next = this.registration;
        this.registration = prev;
      });
  }

  next() {
    this.registration = this.registration.next;
  }

}
