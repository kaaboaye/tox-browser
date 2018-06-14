import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Job } from '../../../../models/job/job';
import { Strings } from '../../../../strings';
import { JobRepairType } from '../../../../models/job-diagnosis/job-repair-type.enum';
import { JobDiagnosis } from '../../../../models/job-diagnosis/job-diagnosis';
import { JobDiagnosisService } from '../../../../models/job-diagnosis/job-diagnosis.service';

@Component({
  selector: 'app-job-overview-diagnosis',
  templateUrl: './job-overview-diagnosis.component.html',
  styleUrls: ['./job-overview-diagnosis.component.scss']
})
export class JobOverviewDiagnosisComponent implements OnInit, OnChanges {

  constructor(
    public jobDiagnosisService: JobDiagnosisService
  ) { }

  @Input() job: Job;
  diagnosis: JobDiagnosis;

  t = Strings;
  JobRepairType = JobRepairType;

  init() {
    this.diagnosis = { ...this.job.diagnosis };
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  prev() {
    if (this.diagnosis.prev) {
      this.diagnosis = this.diagnosis.prev;
      return;
    }

    this.jobDiagnosisService.Prev(this.diagnosis)
      .subscribe((prev: JobDiagnosis) => {
        this.diagnosis.prev = prev;
        prev.next = this.diagnosis;
        this.diagnosis = prev;
      });
  }

  next() {
    this.diagnosis = this.diagnosis.next;
  }

}
