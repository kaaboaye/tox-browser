import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { Observable } from 'rxjs/Observable';
import { Job } from './job';

@Injectable()
export class JobsService {

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

  private static url(clientId: number): string {
    return `${ ApiUrl }/clients/${ clientId }/jobs`;
  }

  GetJobs(clientId: number): Observable<any> {
    return this.http.get(JobsService.url(clientId), this.httpOptions);
  }

  Get(job: Job): Observable<any> {
    return this.http.get(JobsService.url(0) + `/${ job.id }`, this.httpOptions);
  }

  Post(job: Job): Observable<any> {
    return this.http.post(JobsService.url(job.client.id), job, this.httpOptions);
  }
}
