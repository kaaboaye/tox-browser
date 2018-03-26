import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrl, KeepSession } from '../config';
import { User } from '../models/user';
import { Session } from '../models/session';

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

  public Register(user: User): User {
    const user = this.http.post(this.url, user, httpOptions) as User;

    if (user.error) {
      throw user.error;
    }

    return user;
  }

  public Login(user: User): void {
    const res = this.http.post(this.url + '/login', user, httpOptions) as Session;

    if (res.error) {
      throw res.error;
    }

    this.Token = res.token;
    this.ExpireAt = res.expireAt;

    if (KeepSession) {
      localStorage.token = res.token;
      localStorage.expireAt = res.expireAt.toString();
    }
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
    const res = this.http.get(ApiUrl + '/sessions/ping', new HttpHeaders({
      'Authorization': `Bearer ${this.Token}`
    })) as any;

    return !!res.session;
  }
}
