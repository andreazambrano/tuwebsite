import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrablesComponent } from './administrables.component';

describe('AdministrablesComponent', () => {
  let component: AdministrablesComponent;
  let fixture: ComponentFixture<AdministrablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
