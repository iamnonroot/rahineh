import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MePassengerComponent } from './me-passenger.component';

describe('MePassengerComponent', () => {
  let component: MePassengerComponent;
  let fixture: ComponentFixture<MePassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MePassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
