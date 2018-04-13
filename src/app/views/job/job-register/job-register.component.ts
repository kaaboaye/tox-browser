import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../../../models/job/job';
import { Strings } from '../../../strings';
import { JobRegistration, JobRegistrationType } from '../../../models/job-registration/job-registration';

@Component({
  selector: 'app-job-register',
  templateUrl: './job-register.component.html',
  styleUrls: ['./job-register.component.scss']
})
export class JobRegisterComponent implements OnInit {

  constructor() { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;
  registerType = JobRegistrationType;

  ngOnInit() {
    this.job.registration = new JobRegistration();
  }

  add() {
    this.submit.emit(null);
  }
}
