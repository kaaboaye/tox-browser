import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../models/client/client';
import { DevicesService } from '../../models/device/devices.service';
import { Device } from '../../models/device/device';
import { Strings } from '../../strings';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public devicesService: DevicesService
  ) { }

  @Input() deviceId = 0;
  device: Device;
  t = Strings;

  ngOnInit() {
    if (this.deviceId !== 0) {
      this.devicesService.Get(this.deviceId).subscribe(device => this.device = device);
    } else {
      this.route.params.subscribe(params => {
        const { deviceId } = params;

        this.devicesService.Get(deviceId).subscribe(device => this.device = device);
      });
    }
  }

}
