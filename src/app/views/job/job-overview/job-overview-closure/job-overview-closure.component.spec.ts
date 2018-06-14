import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOverviewClosureComponent } from './job-overview-closure.component';

describe('JobOverviewClosureComponent', () => {
  let component: JobOverviewClosureComponent;
  let fixture: ComponentFixture<JobOverviewClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOverviewClosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOverviewClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
