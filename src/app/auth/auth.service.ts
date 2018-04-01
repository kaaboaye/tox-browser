import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrl, KeepSession } from '../config';
import { User } from '../models/user/user';
import { Session } from '../models/session/session';
import {Observable} from 'rxjs/Observable';
import { LoginForm } from '../views/login/login.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  public User: User;
  public Authenticated: boolean;
  public Token: string;
  public ExpireAt: Date;

  private url = ApiUrl + '/users';

  constructor(private http: HttpClient) {
    if (KeepSession) {
      this.Token = localStorage.token || undefined;
      this.ExpireAt = localStorage.expireAt || undefined;
    }

    this.Authenticated = this.ping();
  }

  public Register(reqUser: User): User {
    let user: User;

    (this.http.post(this.url, reqUser, httpOptions) as Observable<User>)
      .subscribe(res => {
        user = res;
      });

    if (user.error) {
      throw user.error;
    }

    return user;
  }

  public Login(form: LoginForm): void {
    (this.http.post(this.url + '/login', form, httpOptions) as Observable<Session>)
      .subscribe((session: Session) => {
        if (session.error) {
          throw new Error(session.error);
        }

        this.Token = session.token;
        this.ExpireAt = session.expireAt;
        this.Authenticated = true;

        if (KeepSession) {
          localStorage.token = session.token;
          localStorage.expireAt = session.expireAt.toString();
        }
      });
  }

  public Logout(): void {
    if (KeepSession) {
      localStorage.clear();
    }

    this.User = undefined;
    this.Token = undefined;
    this.Authenticated = false;
  }

  private ping(): boolean {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.Token}`
      })
    };

    (this.http.get(ApiUrl + '/sessions/ping', options) as any)
      .subscribe(res => {
      this.Authenticated = !!res.session;
    });

    return this.Authenticated;
  }
}
