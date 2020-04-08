import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioncallComponent } from './actioncall.component';

describe('ActioncallComponent', () => {
  let component: ActioncallComponent;
  let fixture: ComponentFixture<ActioncallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActioncallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActioncallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
