import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchFlightWorldComponent } from './card-search-flight-world.component';

describe('CardSearchFlightWorldComponent', () => {
  let component: CardSearchFlightWorldComponent;
  let fixture: ComponentFixture<CardSearchFlightWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSearchFlightWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearchFlightWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
