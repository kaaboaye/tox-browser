import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { Client } from '../client/client';
import { Observable } from 'rxjs/Observable';
import { Device } from './device';

@Injectable()
export class DevicesService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  static url(client: Client): string {
    return `${ ApiUrl }/clients/${ client.id }/devices`;
  }

  GetDevices(client: Client): Observable<any> {
    return this.http.get(DevicesService.url(client), this.httpOptions);
  }

  Get(id): Observable<any> {
    return this.http.get(DevicesService.url({id: 0} as Client) + `/${id}`, this.httpOptions);
  }

  Post(device: Device): Observable<any> {
    return this.http.post(DevicesService.url(device.owner), device, this.httpOptions);
  }

}
