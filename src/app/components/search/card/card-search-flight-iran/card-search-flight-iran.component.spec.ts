import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchFlightIranComponent } from './card-search-flight-iran.component';

describe('CardSearchFlightIranComponent', () => {
  let component: CardSearchFlightIranComponent;
  let fixture: ComponentFixture<CardSearchFlightIranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSearchFlightIranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearchFlightIranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
