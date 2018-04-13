import { Component, Input, OnInit } from '@angular/core';
import { Strings } from '../../../strings';
import { Job } from '../../../models/job/job';
import { JobState } from '../../../models/job/job-state.enum';
import { DateFormat } from '../../../config';
import { JobRegistrationType } from '../../../models/job-registration/job-registration';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.scss']
})
export class JobOverviewComponent implements OnInit {

  constructor() { }

  t = Strings;
  @Input() job: Job;
  JobState = JobState;
  JobRegistrationType = JobRegistrationType;
  format = DateFormat;

  ngOnInit() {
  }

}
