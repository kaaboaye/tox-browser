import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../models/job/jobs.service';
import { Strings } from '../../strings';
import { Job } from '../../models/job/job';
import { JobState } from '../../models/job/job-state.enum';
import { DateFormat } from '../../config';
import { JobRegistrationService } from '../../models/job-registration/job-registration.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public jobsService: JobsService,
    public jobRegistrationService: JobRegistrationService
  ) { }

  t = Strings;
  jobId: number;
  job: Job;
  JobState = JobState;
  selectedTab: number;

  ngOnInit() {
    this.route.params.subscribe(params => this.jobId = params.jobId);

    this.Pull();
  }

  Pull() {
    this.jobsService.Get({id: this.jobId} as Job).subscribe(job => {
      this.job = job;

      // Disabled because bug with expandable panels :/
      // if (this.job.state === JobState.Created) {
      //   this.selectedTab = 1; // JobRegister tab
      // }
    });
  }

  jobRegister() {
    this.jobRegistrationService.Post(this.job)
      .subscribe(job => this.job = job);
  }

}
