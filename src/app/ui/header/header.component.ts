import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Strings } from '../../strings';
import { Paths } from '../../routes';
import { UserRank } from '../../models/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  t = Strings;
  Rank = UserRank;
  Paths = Paths;

  ngOnInit() {
  }

}
