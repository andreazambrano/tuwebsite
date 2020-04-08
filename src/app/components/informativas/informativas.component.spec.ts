import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativasComponent } from './informativas.component';

describe('InformativasComponent', () => {
  let component: InformativasComponent;
  let fixture: ComponentFixture<InformativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
