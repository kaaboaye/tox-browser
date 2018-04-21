import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrl } from '../../config';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';

@Injectable()
export class ClientService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private url = ApiUrl + '/clients';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  GetAll(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  Get(id: number): Observable<any> {
    return this.http.get(this.url + `/${ id }`, this.httpOptions);
  }

  Post(payload: Client): Observable<any> {
    return this.http.post(this.url, payload, this.httpOptions);
  }
}
