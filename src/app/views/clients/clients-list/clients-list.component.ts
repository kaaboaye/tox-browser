import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../models/client/client.service';
import { Client } from '../../../models/client/client';
import { Strings } from '../../../strings';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  constructor(
    private service: ClientService
  ) { }

  clients: Client[] = null;
  t = Strings;

  ngOnInit() {
    this.get();
  }

  Refresh() {
    this.get();
  }

  private get() {
    this.service.GetAll()
      .subscribe(clients => this.clients = clients);
  }
}
