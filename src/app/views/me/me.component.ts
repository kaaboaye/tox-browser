import { Component, OnInit } from '@angular/core';
import { UserService } from '../../models/user/user.service';
import { User, UserRank } from '../../models/user/user';
import { Strings } from '../../../strings';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  constructor(
    private users: UserService
  ) { }

  t = Strings;
  me: User;

  ngOnInit() {
    this.GetMe();
  }

  GetMe() {
    this.users.GetMe().subscribe(u => this.me = u);
  }
}
