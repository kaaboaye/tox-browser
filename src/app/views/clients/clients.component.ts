import { Component, OnInit, ViewChild } from '@angular/core';
import { Strings } from '../../../strings';
import { MatTabChangeEvent } from '@angular/material';
import { ClientsListComponent } from '../../models/client/clients-list/clients-list.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  @ViewChild('list') list: ClientsListComponent;

  t = Strings;

  ngOnInit() {
  }

  tabChanged(e: MatTabChangeEvent) {
    if (e.index === 0) {
      this.list.Refresh();
    }
  }
}
