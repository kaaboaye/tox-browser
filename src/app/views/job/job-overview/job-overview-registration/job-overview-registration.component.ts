import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../../../models/job/job';
import { Strings } from '../../../../strings';
import { JobRegistrationType } from '../../../../models/job-registration/job-registration';

@Component({
  selector: 'app-job-overview-registration',
  templateUrl: './job-overview-registration.component.html',
  styleUrls: ['./job-overview-registration.component.scss']
})
export class JobOverviewRegistrationComponent implements OnInit {

  constructor() { }

  @Input() job: Job;
  t = Strings;
  JobRegistrationType = JobRegistrationType;

  ngOnInit() {
  }

}
