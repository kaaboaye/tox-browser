import { Component, Inject, Input, OnInit } from '@angular/core';
import { Client } from '../../../client/client';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Strings } from '../../../../../strings';
import { Person } from '../../person';

@Component({
  selector: 'app-staff-list-patch',
  templateUrl: './staff-list-patch.component.html',
  styleUrls: ['./staff-list-patch.component.scss']
})
export class StaffListPatchComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StaffListPatchComponent>,
    @Inject(MAT_DIALOG_DATA) public oldPerson: Person
  ) { }

  t = Strings;
  @Input() person: Person;

  ngOnInit() {
    this.person = this.oldPerson;
  }

  private add() {
    this.dialogRef.close(this.person);
  }

}
