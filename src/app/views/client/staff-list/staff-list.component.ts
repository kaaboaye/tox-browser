import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../models/person/person';
import { PeopleService } from '../../../models/person/people.service';
import { StaffListPatchComponent } from './staff-list-patch/staff-list-patch.component';
import { MatDialog } from '@angular/material';
import { Strings } from '../../../strings';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private service: PeopleService
  ) { }

  t = Strings;
  @Input() clientId: number;
  staff: Person[] = null;

  ngOnInit() {
  }

  Pull() {
    this.get();
  }

  private patchPerson(contact: Person) {
    const dialog = this.dialog.open(StaffListPatchComponent, {
      data: contact
    });

    dialog.afterClosed().subscribe(isOk => {
      if (!isOk) {
        this.Pull();
        return;
      }

      this.service.Patch(contact)
        .subscribe(newPerson => {
          contact = newPerson;
        });
    });
  }

  private get() {
    this.service.GetStaff(this.clientId)
      .subscribe(staff => this.staff = staff);
  }
}
