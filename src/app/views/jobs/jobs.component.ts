import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Strings } from '../../strings';
import { Client } from '../../models/client/client';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { Job } from '../../models/job/job';
import { MatDialog } from '@angular/material';
import { JobNewComponent } from './job-new/job-new.component';
import { JobsService } from '../../models/job/jobs.service';
import { Router } from '@angular/router';
import { JobRegistration } from '../../models/job-registration/job-registration';
import { JobRegistrationService } from '../../models/job-registration/job-registration.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public jobsService: JobsService,
    public jobsRegistrationService: JobRegistrationService,
    public router: Router
  ) { }

  t = Strings;
  @Input() noHeader = false;
  @Input() client: Client;
  @ViewChild('jobsList') jobsList: JobsListComponent;


  ngOnInit() {
    if (!this.client) {
      this.client = new Client();
      this.client.id = 0;
    }
  }

  Pull() {
    this.jobsList.Pull();
  }

  addJob() {
    const job = new Job();
    job.client = this.client;
    job.registration = new JobRegistration();

    const dialog = this.dialog.open(JobNewComponent, {
      data: job
    });

    dialog.afterClosed().subscribe(response => {
      if (!response) {
        return;
      }

      const registration = new JobRegistration();
      registration.description = job.registration.description;
      registration.type = job.registration.type;
      registration.placeOfRealisation = job.registration.placeOfRealisation;

      this.jobsService.Post(job).subscribe((newJob: Job) => {
        this.jobsList.jobs.push(newJob);

        newJob.registration = registration;
        this.jobsRegistrationService.Post(newJob)
          .subscribe(_ => {
            this.router.navigate(['/job', newJob.id]);
          });
      });
    });
  }

}
