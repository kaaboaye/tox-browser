import { Component, Input, OnInit } from '@angular/core';
import { User, UserRank } from './user';
import { Strings } from '../../strings';
import { MatDialog } from '@angular/material';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserService } from './user.service';
import { UserChangePassword } from './user-change-password/user-change-password';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public usersService: UserService
  ) { }

  t = Strings;
  Rank = UserRank;
  @Input() user: User;

  ngOnInit() {
  }

  changePasswordClick() {
    const  dialog = this.dialog.open(UserChangePasswordComponent, {
      data: new UserChangePassword(this.user)
    });

    dialog.afterClosed().subscribe((form: UserChangePassword) => {
      this.usersService.ChangePassword(form).subscribe((user: User) => {
        this.user = user;
      });
    });
  }

}
