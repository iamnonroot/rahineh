import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFlightIranComponent } from './dialog-flight-iran.component';

describe('DialogFlightIranComponent', () => {
  let component: DialogFlightIranComponent;
  let fixture: ComponentFixture<DialogFlightIranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogFlightIranComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFlightIranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
