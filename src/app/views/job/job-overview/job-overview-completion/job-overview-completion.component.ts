import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { JobCompletionService } from '../../../../models/job-completion/job-completion.service';
import { Job } from '../../../../models/job/job';
import { JobCompletion } from '../../../../models/job-completion/job-completion';
import { Strings } from '../../../../strings';
import { TimeFormat } from '../../../../config';

@Component({
  selector: 'app-job-overview-completion',
  templateUrl: './job-overview-completion.component.html',
  styleUrls: ['./job-overview-completion.component.scss']
})
export class JobOverviewCompletionComponent implements OnInit, OnChanges {

  constructor(
    public jobCompletionService: JobCompletionService
  ) { }

  t = Strings;
  timeFormat = TimeFormat;

  @Input() job: Job;
  completion: JobCompletion;

  init() {
    this.completion = { ...this.job.completion };
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  prev() {
    if (this.completion.prev) {
      this.completion = this.completion.prev;
      return;
    }

    this.jobCompletionService.Prev(this.completion)
      .subscribe((prev: JobCompletion) => {
        this.completion.prev = prev;
        prev.next = this.completion;
        this.completion = prev;
      });
  }

  next() {
    this.completion = this.completion.next;
  }

}
