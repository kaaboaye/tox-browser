import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Job } from '../../../models/job/job';
import { Strings } from '../../../strings';
import { JobRegistration, JobRegistrationType } from '../../../models/job-registration/job-registration';

@Component({
  selector: 'app-job-register',
  templateUrl: './job-register.component.html',
  styleUrls: ['./job-register.component.scss']
})
export class JobRegisterComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() job: Job;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  t = Strings;
  registerType = JobRegistrationType;

  init() {
    if (!this.job.registration) {
      this.job.registration = new JobRegistration();
    }
  }

  ngOnInit() {
    this.init();
  }

  ngOnChanges() {
    this.init();
  }

  add() {
    this.submit.emit(null);
  }
}
