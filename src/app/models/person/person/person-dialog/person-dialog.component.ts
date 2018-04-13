import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Person } from '../../person';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Person
  ) { }

  ngOnInit() {
  }

}
