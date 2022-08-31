import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReserveComponent } from './card-reserve.component';

describe('CardReserveComponent', () => {
  let component: CardReserveComponent;
  let fixture: ComponentFixture<CardReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
