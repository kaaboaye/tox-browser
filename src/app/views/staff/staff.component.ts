import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../models/user/user.service';
import { Strings } from '../../strings';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor(
    public usersService: UserService
  ) { }

  t = Strings;
  staff: User[] = null;

  ngOnInit() {
    this.Pull();
  }

  Pull() {
    this.usersService.Get().subscribe(staff => {
      this.staff = staff;
    });
  }

}
