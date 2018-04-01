import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client';
import { StaffListComponent } from '../../person/staff-list/staff-list.component';
import { Strings } from '../../../../strings';
import { MatDialog } from '@angular/material';
import { ClientPersonNewComponent } from './client-person-new/client-person-new.component';
import { PeopleService } from '../../person/people.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private peopleService: PeopleService
  ) { }

  t = Strings;
  @Input() client: Client;
  @ViewChild('staffList') staffList: StaffListComponent;

  ngOnInit() {
  }

  staffOpened() {
    this.staffList.Pull();
  }

  addPerson(client: Client) {
    const dialog = this.dialog.open(ClientPersonNewComponent, {
      data: client
    });

    dialog.afterClosed().subscribe(contact => {
      this.peopleService.Post(contact)
        .subscribe(newContact => {
          this.staffList.staff.push(newContact);
        });

      this.staffList.Pull();
    });
  }
}
