import { Component, OnInit, ViewChild } from '@angular/core';
import { Strings } from '../../strings';
import { MatDialog, MatTabChangeEvent } from '@angular/material';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientService } from '../../models/client/client.service';
import { ClientNewComponent } from './client-new/client-new.component';
import { Client } from '../../models/client/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public clientService: ClientService
  ) { }

  @ViewChild('list') list: ClientsListComponent;

  t = Strings;

  ngOnInit() {
  }

  addClient() {
    const dialog = this.dialog.open(ClientNewComponent);

    dialog.afterClosed().subscribe((newClient: Client) => {
      this.clientService.Post(newClient)
        .subscribe((client: Client) => {
          this.list.clients.push(client);
          this.list.Refresh();
        });
    });
  }
}
