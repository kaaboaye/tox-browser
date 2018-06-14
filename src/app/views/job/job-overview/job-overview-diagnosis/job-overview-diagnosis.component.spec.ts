import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOverviewDiagnosisComponent } from './job-overview-diagnosis.component';

describe('JobOverviewDiagnosisComponent', () => {
  let component: JobOverviewDiagnosisComponent;
  let fixture: ComponentFixture<JobOverviewDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOverviewDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOverviewDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
