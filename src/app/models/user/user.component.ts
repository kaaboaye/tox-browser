import { Component, Input, OnInit } from '@angular/core';
import { User, UserRank } from './user';
import { Strings } from '../../strings';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  t = Strings;
  Rank = UserRank;
  @Input() user: User;

  ngOnInit() {
  }

}
