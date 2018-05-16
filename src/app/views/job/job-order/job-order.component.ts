import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Strings } from '../../../strings';
import { Job } from '../../../models/job/job';
import { JobOrder } from '../../../models/job-order/job-order';

@Component({
  selector: 'app-job-order',
  templateUrl: './job-order.component.html',
  styleUrls: ['./job-order.component.scss']
})
export class JobOrderComponent implements OnInit {

  constructor() { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;

  init() {
    if (!this.job.order) {
      this.job.order = new JobOrder();
    }
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  add() {
    this.submit.emit(null);
  }
}
