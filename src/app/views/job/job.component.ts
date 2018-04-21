import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../models/job/jobs.service';
import { Strings } from '../../strings';
import { Job } from '../../models/job/job';
import { JobState } from '../../models/job/job-state.enum';
import { TimeFormat } from '../../config';
import { JobRegistrationService } from '../../models/job-registration/job-registration.service';
import { JobDiagnosisService } from '../../models/job-diagnosis/job-diagnosis.service';
import { JobOrdersService } from '../../models/job-order/job-orders.service';
import { JobCompletionService } from '../../models/job-completion/job-completion.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public jobsService: JobsService,
    public jobRegistrationService: JobRegistrationService,
    public jobDiagnoseService: JobDiagnosisService,
    public jobOrderService: JobOrdersService,
    public jobCompletionService: JobCompletionService
  ) { }

  t = Strings;
  jobId: number;
  job: Job;
  JobState = JobState;
  selectedTab: number;
  loading = true;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jobId = params.jobId;

      this.Pull();
    });
  }

  Pull() {
    this.loading = true;

    this.jobsService.Get({id: this.jobId} as Job).subscribe(job => {
      this.job = job;
      this.loading = false;
    });
  }

  jobRegister() {
    this.jobRegistrationService.Post(this.job)
      .subscribe(job => this.job = job);
  }

  jobDiagnose() {
    this.jobDiagnoseService.Post(this.job)
      .subscribe(job => this.job = job);
  }

  jobOrder() {
    this.jobOrderService.Post(this.job)
      .subscribe(job => this.job = job);
  }

  jobCompletion() {
    this.jobCompletionService.Post(this.job)
      .subscribe(job => this.job = job);
  }

}
