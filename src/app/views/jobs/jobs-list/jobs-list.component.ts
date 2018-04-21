import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../../models/job/job';
import { Client } from '../../../models/client/client';
import { JobsService } from '../../../models/job/jobs.service';
import { Strings } from '../../../strings';
import { Person } from '../../../models/person/person';
import { MatDialog } from '@angular/material';
import { PersonDialogComponent } from '../../../models/person/person/person-dialog/person-dialog.component';
import { TimeFormat } from '../../../config';
import { JobState } from '../../../models/job/job-state.enum';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public jobsService: JobsService
  ) { }

  format = TimeFormat;
  t = Strings;
  JobState = JobState;
  jobs: Job[] = null;
  @Input() client: Client;

  ngOnInit() {
    if (this.client.id === 0) {
      this.Pull();
    }
  }

  Pull() {
    this.jobsService.GetJobs(this.client.id)
      .subscribe(jobs => this.jobs = jobs);
  }

  contactClicked(job: Job) {
    const person = job.applicant;
    person.client = job.client;

    this.dialog.open(PersonDialogComponent, {
      data: person
    });
  }

}
