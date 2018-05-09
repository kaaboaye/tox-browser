import { Component, Inject, Input, OnInit } from '@angular/core';
import { Strings } from '../../../strings';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User } from '../../../models/user/user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }

  t = Strings;
  @Input() user: User;

  ngOnInit() {
    this.user = this.data;
  }

  change() {
    this.dialogRef.close(this.user);
  }
}
