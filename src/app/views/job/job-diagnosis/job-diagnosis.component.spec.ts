import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDiagnosisComponent } from './job-diagnosis.component';

describe('JobDiagnosisComponent', () => {
  let component: JobDiagnosisComponent;
  let fixture: ComponentFixture<JobDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
