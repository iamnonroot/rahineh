import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservePaymentComponent } from './reserve-payment.component';

describe('ReservePaymentComponent', () => {
  let component: ReservePaymentComponent;
  let fixture: ComponentFixture<ReservePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
