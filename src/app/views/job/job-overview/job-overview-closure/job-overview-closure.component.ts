import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { JobClosureService } from '../../../../models/job-closure/job-closure.service';
import { Strings } from '../../../../strings';
import { Job } from '../../../../models/job/job';
import { JobClosure } from '../../../../models/job-closure/job-closure';
import { TimeFormat } from '../../../../config';

@Component({
  selector: 'app-job-overview-closure',
  templateUrl: './job-overview-closure.component.html',
  styleUrls: ['./job-overview-closure.component.scss']
})
export class JobOverviewClosureComponent implements OnInit, OnChanges {

  constructor(
    public jobClosureService: JobClosureService
  ) { }

  t = Strings;
  timeFormat = TimeFormat;

  @Input() job: Job;
  closure: JobClosure;

  init() {
    this.closure = { ...this.job.closure };
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  prev() {
    if (this.closure.prev) {
      this.closure = this.closure.prev;
      return;
    }

    this.jobClosureService.Prev(this.closure)
      .subscribe((prev: JobClosure) => {
        this.closure.prev = prev;
        prev.next = this.closure;
        this.closure = prev;
      });
  }

  next() {
    this.closure = this.closure.next;
  }

}
