import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Strings } from '../../../strings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  t = Strings;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

}
