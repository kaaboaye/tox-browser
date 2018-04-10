import { Component, Inject, OnInit } from '@angular/core';
import { Strings } from '../../../strings';
import { Device } from '../../../models/device/device';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Client } from '../../../models/client/client';
import { ClientService } from '../../../models/client/client.service';

@Component({
  selector: 'app-device-new',
  templateUrl: './device-new.component.html',
  styleUrls: ['./device-new.component.scss']
})
export class DeviceNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeviceNewComponent>,
    public clientsService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: Client) { }

  t = Strings;
  device: Device;
  clients: Client[];
  askOwner: boolean;

  ngOnInit() {
    this.device = new Device();
    this.device.owner = this.data;

    this.askOwner = (this.device.owner.id === 0);

    if (this.askOwner) {
      this.clientsService.GetAll()
        .subscribe(clients => this.clients = clients);
    }
  }

  add() {
    this.dialogRef.close(this.device);
  }

}
