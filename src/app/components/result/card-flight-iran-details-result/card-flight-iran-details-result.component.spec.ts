import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlightIranDetailsResultComponent } from './card-flight-iran-details-result.component';

describe('CardFlightIranDetailsResultComponent', () => {
  let component: CardFlightIranDetailsResultComponent;
  let fixture: ComponentFixture<CardFlightIranDetailsResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFlightIranDetailsResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFlightIranDetailsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
