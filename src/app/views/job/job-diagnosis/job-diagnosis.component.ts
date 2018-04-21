import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Strings } from '../../../strings';
import { Job } from '../../../models/job/job';
import { JobDiagnosis } from '../../../models/job-diagnosis/job-diagnosis';
import { JobRepairType } from '../../../models/job-diagnosis/job-repair-type.enum';
import { Person } from '../../../models/person/person';
import { PeopleService } from '../../../models/person/people.service';

@Component({
  selector: 'app-job-diagnosis',
  templateUrl: './job-diagnosis.component.html',
  styleUrls: ['./job-diagnosis.component.scss']
})
export class JobDiagnosisComponent implements OnInit {

  constructor(
    public peopleService: PeopleService
  ) { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;
  repairType = JobRepairType;
  staff: Person[];

  ngOnInit() {
    this.job.diagnosis = new JobDiagnosis();

    this.peopleService.GetStaff(0)
      .subscribe(staff => this.staff = staff);
  }

  add() {
    this.submit.emit(null);
  }
}
