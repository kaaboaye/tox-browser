import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Job } from '../job/job';
import { ApiUrl } from '../../config';
import { Observable } from 'rxjs/Observable';
import { JobRegistration } from './job-registration';

@Injectable()
export class JobRegistrationService {

  constructor(
    public http: HttpClient,
    public auth: AuthService
  ) { }

  private url = ApiUrl + '/job-registration';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  Post(job: Job): Observable<any> {
    return this.http.post(this.url, job, this.httpOptions);
  }

  Prev(jobRegistration: JobRegistration): Observable<any> {
    return this.http.get(this.url + `/${jobRegistration.id}/prev`, this.httpOptions);
  }
}
