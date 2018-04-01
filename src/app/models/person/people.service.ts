import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
import { Client } from '../client/client';

@Injectable()
export class PeopleService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private url = ApiUrl + '/people';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  GetStaff(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  Post(person: Person): Observable<any> {
    return this.http.post(this.url, person, this.httpOptions);
  }

  Patch(person: Person): Observable<any> {
    return this.http.patch(this.url, person, this.httpOptions);
  }
}
