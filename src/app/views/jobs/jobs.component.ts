import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Strings } from '../../strings';
import { Client } from '../../models/client/client';
import { JobsListComponent } from './jobs-list/jobs-list.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  constructor() { }

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

  }

}
