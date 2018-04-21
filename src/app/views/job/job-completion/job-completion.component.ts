import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class JobCompletionComponent implements OnInit {

  constructor(
    public peopleService: PeopleService
  ) { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;
  staff: Person[];

  ngOnInit() {
    this.job.completion = new JobCompletion();

    this.peopleService.GetStaff(0)
      .subscribe(staff => this.staff = staff);
  }

  add() {
    this.submit.emit(null);
  }

}
