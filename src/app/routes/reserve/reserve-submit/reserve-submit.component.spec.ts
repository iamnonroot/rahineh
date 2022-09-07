import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveSubmitComponent } from './reserve-submit.component';

describe('ReserveSubmitComponent', () => {
  let component: ReserveSubmitComponent;
  let fixture: ComponentFixture<ReserveSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
