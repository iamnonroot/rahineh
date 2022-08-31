import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHotelAttributesComponent } from './dc-hotel-attributes.component';

describe('DcHotelAttributesComponent', () => {
  let component: DcHotelAttributesComponent;
  let fixture: ComponentFixture<DcHotelAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcHotelAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcHotelAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
