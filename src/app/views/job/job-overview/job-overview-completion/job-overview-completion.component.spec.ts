import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOverviewCompletionComponent } from './job-overview-completion.component';

describe('JobOverviewCompletionComponent', () => {
  let component: JobOverviewCompletionComponent;
  let fixture: ComponentFixture<JobOverviewCompletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOverviewCompletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOverviewCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
