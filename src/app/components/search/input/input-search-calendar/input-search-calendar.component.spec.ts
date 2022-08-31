import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchCalendarComponent } from './input-search-calendar.component';

describe('InputSearchCalendarComponent', () => {
  let component: InputSearchCalendarComponent;
  let fixture: ComponentFixture<InputSearchCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
