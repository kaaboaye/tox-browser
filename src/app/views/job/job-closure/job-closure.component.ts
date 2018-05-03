import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../../../models/job/job';
import { Person } from '../../../models/person/person';
import { Strings } from '../../../strings';
import { JobClosure } from '../../../models/job-closure/job-closure';

@Component({
  selector: 'app-job-closure',
  templateUrl: './job-closure.component.html',
  styleUrls: ['./job-closure.component.scss']
})
export class JobClosureComponent implements OnInit {

  constructor(
  ) { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;

  ngOnInit() {
    this.job.closure = new JobClosure();
    console.log(this.job);
  }

  add() {
    this.submit.emit(null);
  }

}
