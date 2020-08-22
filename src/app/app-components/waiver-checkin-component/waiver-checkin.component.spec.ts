import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiverCheckinComponent } from './waiver-checkin.component';

describe('WaiverCheckinComponentComponent', () => {
  let component: WaiverCheckinComponent;
  let fixture: ComponentFixture<WaiverCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiverCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiverCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
