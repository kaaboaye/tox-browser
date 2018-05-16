import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Strings } from '../../../strings';
import { Job } from '../../../models/job/job';
import { JobCompletion } from '../../../models/job-completion/job-completion';
import { Person } from '../../../models/person/person';
import { PeopleService } from '../../../models/person/people.service';

@Component({
  selector: 'app-job-completion',
  templateUrl: './job-completion.component.html',
  styleUrls: ['./job-completion.component.scss']
})
export class JobCompletionComponent implements OnInit, OnChanges {

  constructor(
    public peopleService: PeopleService
  ) { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;
  staff: Person[];

  init() {
    if (!this.job.completion) {
      this.job.completion = new JobCompletion();
    }
  }

  ngOnInit() {
    this.init();

    this.peopleService.GetStaff(0)
      .subscribe(staff => this.staff = staff);
  }

  ngOnChanges() {
    this.init();
  }

  add() {
    this.submit.emit(null);
  }

}
