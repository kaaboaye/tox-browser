import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Job } from '../../../models/job/job';
import { Person } from '../../../models/person/person';
import { Strings } from '../../../strings';
import { JobClosure } from '../../../models/job-closure/job-closure';

@Component({
  selector: 'app-job-closure',
  templateUrl: './job-closure.component.html',
  styleUrls: ['./job-closure.component.scss']
})
export class JobClosureComponent implements OnInit, OnChanges {

  constructor(
  ) { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;

  init() {
    if (!this.job.closure) {
      this.job.closure = new JobClosure();
    }
  }

  ngOnInit() {
    this.init();

    console.log(this.job);
  }

  ngOnChanges() {
    this.init();
  }

  add() {
    this.submit.emit(null);
  }

}
