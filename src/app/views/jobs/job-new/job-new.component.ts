import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { Job } from '../../../models/job/job';
import { Client } from '../../../models/client/client';
import { Device } from '../../../models/device/device';
import { DevicesService } from '../../../models/device/devices.service';
import { ClientService } from '../../../models/client/client.service';
import { Strings } from '../../../strings';
import { PeopleService } from '../../../models/person/people.service';
import { Person } from '../../../models/person/person';
import { JobRegistrationType } from '../../../models/job-registration/job-registration';
import { DeviceNewComponent } from '../../devices/device-new/device-new.component';
import { ClientPersonNewComponent } from '../../client/client-person-new/client-person-new.component';

@Component({
  selector: 'app-job-new',
  templateUrl: './job-new.component.html',
  styleUrls: ['./job-new.component.scss']
})
export class JobNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JobNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Job,
    public devicesService: DevicesService,
    public clientsService: ClientService,
    public peopleService: PeopleService,
    private dialog: MatDialog
  ) { }

  t = Strings;
  registerType = JobRegistrationType;
  job: Job = this.data;
  clients: Client[];
  devices: Device[];
  contacts: Person[];
  askClient = true;


  ngOnInit() {
    if (!this.job) {
      this.job = new Job();
    } else {
      if (this.job.device) {
        if (!this.job.device.owner) {
          this.devicesService.Get(this.job.device.id)
            .subscribe(device => this.job.device = device);
        }

        this.job.client = this.job.device.owner;
      }
    }

    this.askClient = this.job.client.id === 0;

    this.pullClients();
    this.pullDevices();
    this.pullContacts();
  }

  clientChanged() {
    this.pullDevices();
    this.pullContacts();
  }

  deviceChanged() {
  }

  pullClients() {
    this.clientsService.GetAll()
      .subscribe(clients => this.clients = clients);
  }

  pullDevices() {
    this.devicesService.GetDevices(this.job.client)
      .subscribe(devices => this.devices = devices);
  }

  pullContacts() {
    this.peopleService.GetStaff(this.job.client.id)
      .subscribe(contacts => this.contacts = contacts);
  }

  add() {
    this.dialogRef.close(true);
  }

  addDevice() {
    const dialog = this.dialog.open(DeviceNewComponent, {
      data: this.job.client
    });

    dialog.afterClosed().subscribe((newDevice: Device) => {
      if (!newDevice) {
        return;
      }

      this.devicesService.Post(newDevice).subscribe(device => {
        this.pullDevices();
        this.job.device = device;
      });

    });
  }

  addContract() {
    const dialog = this.dialog.open(ClientPersonNewComponent, {
      data: this.job.client
    });

    dialog.afterClosed().subscribe(contact => {
      if (!contact) {
        return;
      }

      this.peopleService.Post(contact)
        .subscribe(newContact => {
          this.pullContacts();
          this.job.applicant = newContact;
        });
    });
  }
}
