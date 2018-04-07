import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Strings } from '../../strings';
import { Paths } from '../../routes';

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

  ngOnInit() {
  }

}
