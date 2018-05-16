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

  @Input() job: Job;
  t = Strings;
  JobRegistrationType = JobRegistrationType;
  registrations: JobRegistration[];
  cid = 0;

  init() {
    this.registrations = [
      this.job.registration
    ];

    if (this.job.registration && this.job.registration.prev) {
      this.registrations.push(this.job.registration.prev);
    }
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  prev() {
    this.registrations.push(this.registrations[this.cid].prev);
    ++this.cid;

    if (this.cid + 1 === this.registrations.length) {
      this.jobRegistrationService.Prev(this.registrations[this.cid])
        .subscribe((jr: JobRegistration) => {
          this.registrations[this.cid] = jr;
        });
    }
  }

}
