import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchInsuranceComponent } from './card-search-insurance.component';

describe('CardSearchInsuranceComponent', () => {
  let component: CardSearchInsuranceComponent;
  let fixture: ComponentFixture<CardSearchInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSearchInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearchInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
