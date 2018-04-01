import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPersonNewComponent } from './client-person-new.component';

describe('ClientPersonNewComponent', () => {
  let component: ClientPersonNewComponent;
  let fixture: ComponentFixture<ClientPersonNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPersonNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPersonNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
