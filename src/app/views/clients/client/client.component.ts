import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../../models/client/client';
import { StaffListComponent } from './staff-list/staff-list.component';
import { Strings } from '../../../strings';
import { MatDialog } from '@angular/material';
import { ClientPersonNewComponent } from './client-person-new/client-person-new.component';
import { PeopleService } from '../../../models/person/people.service';
import { JobsListComponent } from '../../jobs/jobs-list/jobs-list.component';
import { JobsComponent } from '../../jobs/jobs.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private peopleService: PeopleService
  ) { }

  t = Strings;
  @Input() client: Client;
  @ViewChild('staffList') staffList: StaffListComponent;
  @ViewChild('jobs') jobs: JobsComponent;

  ngOnInit() {
  }

  staffOpened() {
    this.staffList.Pull();
  }

  jobsOpened() {
    this.jobs.Pull();
  }

  addPerson(client: Client) {
    const dialog = this.dialog.open(ClientPersonNewComponent, {
      data: client
    });

    dialog.afterClosed().subscribe(contact => {
      this.peopleService.Post(contact)
        .subscribe(newContact => {
          this.staffList.staff.push(newContact);
        });

      this.staffList.Pull();
    });
  }
}