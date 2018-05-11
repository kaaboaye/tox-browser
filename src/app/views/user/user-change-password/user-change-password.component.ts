import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Strings } from '../../../strings';
import { UserChangePassword } from './user-change-password';
import { AuthService } from '../../../auth/auth.service';
import { UserRank } from '../../../models/user/user';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.scss']
})
export class UserChangePasswordComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserChangePassword,
    public auth: AuthService
  ) { }

  Rank = UserRank;
  t = Strings;
  @Input() form: UserChangePassword;

  ngOnInit() {
    this.form = this.data;
  }

  change() {
    this.dialogRef.close(this.form);
  }
}
