import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHotelRoomComponent } from './dc-hotel-room.component';

describe('DcHotelRoomComponent', () => {
  let component: DcHotelRoomComponent;
  let fixture: ComponentFixture<DcHotelRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcHotelRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcHotelRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
