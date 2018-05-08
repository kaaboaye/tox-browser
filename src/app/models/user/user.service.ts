import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { UserChangePassword } from './user-change-password/user-change-password';

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

  GetMe(): Observable<any> {
    return this.http.get(this.url + '/me', this.httpOptions);
  }

  ChangePassword(form: UserChangePassword): Observable<any> {
    return this.http.post(this.url + '/change-password', form, this.httpOptions);
  }
}
