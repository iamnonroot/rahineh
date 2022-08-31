import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveFactorComponent } from './reserve-factor.component';

describe('ReserveFactorComponent', () => {
  let component: ReserveFactorComponent;
  let fixture: ComponentFixture<ReserveFactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveFactorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
