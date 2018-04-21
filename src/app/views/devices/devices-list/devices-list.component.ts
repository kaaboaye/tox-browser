import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../models/client/client';
import { Device } from '../../../models/device/device';
import { DevicesService } from '../../../models/device/devices.service';
import { Strings } from '../../../strings';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  constructor(
    public devicesService: DevicesService
  ) { }

  @Input() client: Client;
  devices: Device[] = null;
  t = Strings;

  ngOnInit() {
    if (this.client.id === 0) {
      this.Pull();
    }
  }

  Pull() {
    this.devicesService.GetDevices(this.client)
      .subscribe(devices => this.devices = devices);
  }
}
