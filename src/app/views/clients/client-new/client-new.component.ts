import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Strings } from '../../../strings';
import { Person } from '../../../models/person/person';
import { Client } from '../../../models/client/client';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.scss']
})
export class ClientNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClientNewComponent>
  ) { }

  t = Strings;
  @Input() client: Client;
  @ViewChild('form') form;

  ngOnInit() {
    this.client = new Client();
  }

  add(e) {
    this.dialogRef.close(this.client);
  }
}
