import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Strings } from '../../strings';
import { DevicesService } from '../../models/device/devices.service';
import { MatDialog } from '@angular/material';
import { DeviceNewComponent } from './device-new/device-new.component';
import { Device } from '../../models/device/device';
import { Client } from '../../models/client/client';
import { DevicesListComponent } from './devices-list/devices-list.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(
    private devicesService: DevicesService,
    private dialog: MatDialog
  ) { }

  t = Strings;

  @Input() client: Client;
  @Input() noHeader = false;

  @ViewChild('devicesList') devicesList: DevicesListComponent;

  ngOnInit() {
    if (!this.client) {
      this.client = new Client();
      this.client.id = 0;
    }
  }

  Pull() {
    this.devicesList.Pull();
  }

  addDevice() {
    const dialog = this.dialog.open(DeviceNewComponent, {
      data: this.client
    });

    dialog.afterClosed().subscribe((newDevice: Device) => {
      if (!newDevice) {
        return;
      }

      this.devicesService.Post(newDevice).subscribe(device => {
        this.devicesList.devices.push(device);
        this.devicesList.Pull();
      });

    });
  }

}
