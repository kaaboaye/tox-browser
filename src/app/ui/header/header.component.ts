import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Strings } from '../../strings';
import { Paths } from '../../routes';
import { UserRank } from '../../models/user/user';
import { Group } from '../../RankGroups';

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
  Paths = Paths;
  Group = Group;

  ngOnInit() {
  }

}
