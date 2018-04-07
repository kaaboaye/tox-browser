import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../../models/job/job';
import { Client } from '../../../models/client/client';
import { JobsService } from '../../../models/job/jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  constructor(
    private jobsService: JobsService
  ) { }

  jobs: Job[] = [];
  @Input() client: Client;

  ngOnInit() {
  }

  Pull() {
    this.jobsService.GetJobs(this.client.id)
      .subscribe(jobs => this.jobs = jobs);
  }

}
