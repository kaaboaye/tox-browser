import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOverviewOrderComponent } from './job-overview-order.component';

describe('JobOverviewOrderComponent', () => {
  let component: JobOverviewOrderComponent;
  let fixture: ComponentFixture<JobOverviewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOverviewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOverviewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
