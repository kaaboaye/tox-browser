import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../job/job';
import { AuthService } from '../../auth/auth.service';
import { ApiUrl } from '../../config';
import { JobDiagnosis } from './job-diagnosis';

@Injectable()
export class JobDiagnosisService {

  constructor(
    public http: HttpClient,
    public auth: AuthService
  ) { }

  private url = ApiUrl + '/job-diagnoses';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.auth.Token }`
    })
  };

  Post(job: Job): Observable<any> {
    return this.http.post(this.url, job, this.httpOptions);
  }

  Prev(jobDiagnosis: JobDiagnosis) {
    return this.http.get(`${this.url}/${jobDiagnosis.id}/prev`, this.httpOptions);
  }

}
