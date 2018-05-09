import { Component, OnInit } from '@angular/core';
import { User, UserRank } from '../../models/user/user';
import { UserService } from '../../models/user/user.service';
import { Strings } from '../../strings';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Person } from '../../models/person/person';
import { UserNewComponent } from './user-new/user-new.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(
    public usersService: UserService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  t = Strings;
  Rank = UserRank;
  staff: User[] = null;

  ngOnInit() {
    this.Pull();
  }

  Pull() {
    this.usersService.GetAll().subscribe(staff => {
      this.staff = staff;
    });
  }

  addUser() {
    const u = new User();
    u.identity = new Person();

    const dialog = this.dialog.open(UserNewComponent, {
      data: u
    });

    dialog.afterClosed().subscribe((user: User) => {
      if (!user) {
        return;
      }

      this.usersService.Register(user).subscribe((createdUser: User) => {
        if (createdUser.error) {
          this.snackBar.open(Strings[user.error.message], Strings.Ok);
          return;
        }

        this.Pull();
      });
    });
  }

}
