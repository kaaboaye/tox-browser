import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListPatchComponent } from './staff-list-patch.component';

describe('StaffListPatchComponent', () => {
  let component: StaffListPatchComponent;
  let fixture: ComponentFixture<StaffListPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffListPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
