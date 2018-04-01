import { Component, Inject, Input, OnInit } from '@angular/core';
import { Strings } from '../../../../../strings';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Person } from '../../../person/person';
import { Client } from '../../client';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-person-new',
  templateUrl: './client-person-new.component.html',
  styleUrls: ['./client-person-new.component.scss']
})
export class ClientPersonNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClientPersonNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client
  ) { }

  t = Strings;
  @Input() person: Person;

  ngOnInit() {
    this.person = new Person();
    this.person.client = this.data;
  }

  private add() {
    this.dialogRef.close(this.person);
  }

}
