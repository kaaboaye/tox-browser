import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOverviewRegistrationComponent } from './job-overview-registration.component';

describe('JobOverviewRegistrationComponent', () => {
  let component: JobOverviewRegistrationComponent;
  let fixture: ComponentFixture<JobOverviewRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOverviewRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOverviewRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
