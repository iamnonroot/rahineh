import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcCardFlightIranResultComponent } from './dc-card-flight-iran-result.component';

describe('DcCardFlightIranResultComponent', () => {
  let component: DcCardFlightIranResultComponent;
  let fixture: ComponentFixture<DcCardFlightIranResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcCardFlightIranResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcCardFlightIranResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
