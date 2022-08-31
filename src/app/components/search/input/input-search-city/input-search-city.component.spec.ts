import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchCityComponent } from './input-search-city.component';

describe('InputSearchCityComponent', () => {
  let component: InputSearchCityComponent;
  let fixture: ComponentFixture<InputSearchCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
