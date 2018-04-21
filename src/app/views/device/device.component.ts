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

  @Input() device: Device;
  t = Strings;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { deviceId } = params;

      if (deviceId) {
        this.devicesService.Get(deviceId)
          .subscribe(device => this.device = device);
      }

    });
  }
}
