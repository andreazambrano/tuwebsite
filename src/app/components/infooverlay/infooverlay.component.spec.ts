import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfooverlayComponent } from './infooverlay.component';

describe('InfooverlayComponent', () => {
  let component: InfooverlayComponent;
  let fixture: ComponentFixture<InfooverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfooverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfooverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
