import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPassengerComponent } from './dialog-passenger.component';

describe('DialogPassengerComponent', () => {
  let component: DialogPassengerComponent;
  let fixture: ComponentFixture<DialogPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
