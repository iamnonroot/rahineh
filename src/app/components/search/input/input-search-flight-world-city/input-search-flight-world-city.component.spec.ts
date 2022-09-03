import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchFlightWorldCityComponent } from './input-search-flight-world-city.component';

describe('InputSearchFlightWorldCityComponent', () => {
  let component: InputSearchFlightWorldCityComponent;
  let fixture: ComponentFixture<InputSearchFlightWorldCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchFlightWorldCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchFlightWorldCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
