import { Component, Inject, Input, OnInit } from '@angular/core';
import { Strings } from '../../../strings';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { User, UserRank } from '../../../models/user/user';

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
  Rank = UserRank;
  @Input() user: User;

  ngOnInit() {
    this.user = this.data;
  }

  add() {
    this.dialogRef.close(this.user);
  }
}
