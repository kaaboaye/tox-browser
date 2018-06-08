import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Strings } from '../../../../strings';
import { Person } from '../../../../models/person/person';

@Component({
  selector: 'app-staff-list-patch',
  templateUrl: './staff-list-patch.component.html',
  styleUrls: ['./staff-list-patch.component.scss']
})
export class StaffListPatchComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StaffListPatchComponent>,
    @Input() @Inject(MAT_DIALOG_DATA) public person: Person
  ) { }

  t = Strings;

  ngOnInit() {
  }

  add() {
    this.dialogRef.close(true);
  }

}
