import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Job } from '../../../../models/job/job';
import { JobOrder } from '../../../../models/job-order/job-order';
import { JobOrdersService } from '../../../../models/job-order/job-orders.service';
import { Strings } from '../../../../strings';

@Component({
  selector: 'app-job-overview-order',
  templateUrl: './job-overview-order.component.html',
  styleUrls: ['./job-overview-order.component.scss']
})
export class JobOverviewOrderComponent implements OnInit, OnChanges {

  constructor(
    public jobOrderServide: JobOrdersService
  ) { }

  t = Strings;

  @Input() job: Job;
  order: JobOrder;

  init() {
    this.order = { ...this.job.order };
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  prev() {
    if (this.order.prev) {
      this.order = this.order.prev;
      return;
    }

    this.jobOrderServide.Prev(this.order)
      .subscribe((prev: JobOrder) => {
        this.order.prev = prev;
        prev.next = this.order;
        this.order = prev;
      });
  }

  next() {
    this.order = this.order.next;
  }

}
