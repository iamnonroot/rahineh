import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHotelHeaderComponent } from './dc-hotel-header.component';

describe('DcHotelHeaderComponent', () => {
  let component: DcHotelHeaderComponent;
  let fixture: ComponentFixture<DcHotelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcHotelHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcHotelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
