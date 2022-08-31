import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchHotelComponent } from './card-search-hotel.component';

describe('CardSearchHotelComponent', () => {
  let component: CardSearchHotelComponent;
  let fixture: ComponentFixture<CardSearchHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSearchHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearchHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
