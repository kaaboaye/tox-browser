import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { Strings } from '../../../strings';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

export class LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  t = Strings;
  user: LoginForm;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new LoginForm();
  }

  login() {
    try {
      this.auth.Login(this.user);
    } catch (e) {
      alert(e.message);
    }
  }
}
