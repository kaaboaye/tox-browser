import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { Job } from '../job/job';
import { JobOrder } from './job-order';

@Injectable()
export class JobOrdersService {

  constructor(
    public http: HttpClient,
    public auth: AuthService
  ) { }

  private url = ApiUrl + '/job-orders';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  Post(job: Job): Observable<any> {
    return this.http.post(this.url, job, this.httpOptions);
  }

  Prev(jobOrder: JobOrder): Observable<any> {
    return this.http.get(`${this.url}/${jobOrder.id}/prev`, this.httpOptions);
  }
}
