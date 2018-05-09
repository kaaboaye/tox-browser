import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { Observable } from 'rxjs/Observable';
import { UserChangePassword } from '../../views/user/user-change-password/user-change-password';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private url = ApiUrl + '/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  Get(userId: number): Observable<any> {
    return this.http.get(this.url + `/${userId}`, this.httpOptions);
  }

  GetAll(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  GetMe(): Observable<any> {
    return this.http.get(this.url + '/me', this.httpOptions);
  }

  ChangePassword(form: UserChangePassword): Observable<any> {
    return this.http.post(this.url + '/change-password', form, this.httpOptions);
  }

  Register(user: User): Observable<any> {
    return this.http.post(this.url, user, this.httpOptions);
  }
}
