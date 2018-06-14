import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { Job } from '../job/job';
import { JobCompletion } from './job-completion';

@Injectable()
export class JobCompletionService {

  constructor(
    public http: HttpClient,
    public auth: AuthService
  ) { }

  private url = ApiUrl + '/job-completions';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  Post(job: Job): Observable<any> {
    return this.http.post(this.url, job, this.httpOptions);
  }

  Prev(jobCompletion: JobCompletion): Observable<any> {
    return this.http.get(`${this.url}/${jobCompletion.id}/prev`, this.httpOptions);
  }
}
