import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../models/client/client';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  constructor() { }

  @Input() client: Client;

  ngOnInit() {
  }

  Pull() {

  }
}
