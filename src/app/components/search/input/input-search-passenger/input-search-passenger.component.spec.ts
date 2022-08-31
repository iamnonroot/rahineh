import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchPassengerComponent } from './input-search-passenger.component';

describe('InputSearchPassengerComponent', () => {
  let component: InputSearchPassengerComponent;
  let fixture: ComponentFixture<InputSearchPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchPassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
