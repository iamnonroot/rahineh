import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchFlightIranCityComponent } from './input-search-flight-iran-city.component';

describe('InputSearchFlightIranCityComponent', () => {
  let component: InputSearchFlightIranCityComponent;
  let fixture: ComponentFixture<InputSearchFlightIranCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchFlightIranCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchFlightIranCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
