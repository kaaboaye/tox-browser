import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Strings } from '../../../strings';
import { Job } from '../../../models/job/job';
import { JobState } from '../../../models/job/job-state.enum';
import { DateFormat, TimeFormat } from '../../../config';
import { JobRegistrationType } from '../../../models/job-registration/job-registration';
import { JobRepairType } from '../../../models/job-diagnosis/job-repair-type.enum';

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
  JobRepairType = JobRepairType;
  timeFormat = TimeFormat;
  dateFormat = DateFormat;

  ngOnInit() {
  }

}
