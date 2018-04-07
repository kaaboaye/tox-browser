import { Component, Inject, OnInit } from '@angular/core';
import { Strings } from '../../../strings';
import { Device } from '../../../models/device/device';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Client } from '../../../models/client/client';

@Component({
  selector: 'app-device-new',
  templateUrl: './device-new.component.html',
  styleUrls: ['./device-new.component.scss']
})
export class DeviceNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeviceNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client) { }

  t = Strings;
  device: Device;

  ngOnInit() {
    this.device = new Device();
    this.device.owner = this.data;
  }

  add() {
    this.dialogRef.close(this.device);
  }

}
