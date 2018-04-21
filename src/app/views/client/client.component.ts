import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/client/client';
import { StaffListComponent } from './staff-list/staff-list.component';
import { Strings } from '../../strings';
import { MatDialog } from '@angular/material';
import { ClientPersonNewComponent } from './client-person-new/client-person-new.component';
import { PeopleService } from '../../models/person/people.service';
import { JobsComponent } from '../jobs/jobs.component';
import { DevicesComponent } from '../devices/devices.component';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../models/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public peopleService: PeopleService,
    public clientService: ClientService
  ) { }

  t = Strings;
  @Input() client: Client;
  @ViewChild('staff') staff: StaffListComponent;
  @ViewChild('jobs') jobs: JobsComponent;
  @ViewChild('devices') devices: DevicesComponent;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { clientId } = params;

      if (clientId) {
        this.clientService.Get(clientId)
          .subscribe(client => this.client = client);

      }
    });
  }

  staffOpened() {
    this.staff.Pull();
  }

  jobsOpened() {
    this.jobs.Pull();
  }

  devicesOpened() {
    this.devices.Pull();
  }

  addPerson(client: Client) {
    const dialog = this.dialog.open(ClientPersonNewComponent, {
      data: client
    });

    dialog.afterClosed().subscribe(contact => {
      this.peopleService.Post(contact)
        .subscribe(newContact => {
          this.staff.staff.push(newContact);
        });

      this.staff.Pull();
    });
  }
}
