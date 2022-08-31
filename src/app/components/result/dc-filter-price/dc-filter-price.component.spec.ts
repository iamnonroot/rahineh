import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFilterPriceComponent } from './dc-filter-price.component';

describe('DcFilterPriceComponent', () => {
  let component: DcFilterPriceComponent;
  let fixture: ComponentFixture<DcFilterPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcFilterPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcFilterPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
