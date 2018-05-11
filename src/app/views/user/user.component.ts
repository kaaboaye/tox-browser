import { Component, Input, OnInit } from '@angular/core';
import { User, UserRank } from '../../models/user/user';
import { Strings } from '../../strings';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserService } from '../../models/user/user.service';
import { UserChangePassword } from './user-change-password/user-change-password';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public usersService: UserService,
    public snackBar: MatSnackBar
  ) { }

  t = Strings;
  Rank = UserRank;
  @Input() user: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { userId } = params;

      if (userId) {
        this.usersService.Get(userId)
          .subscribe(user => this.user = user);
      }
    });
  }

  changePasswordClick() {
    const dialog = this.dialog.open(UserChangePasswordComponent, {
      data: new UserChangePassword(this.user)
    });

    dialog.afterClosed().subscribe((form: UserChangePassword) => {
      if (!form) {
        return;
      }

      this.usersService.ChangePassword(form).subscribe((user: User) => {
        if (user.error) {
          this.snackBar.open(Strings[user.error.message], Strings.Ok);
          return;
        }

        this.user = user;
      });
    });
  }

}
