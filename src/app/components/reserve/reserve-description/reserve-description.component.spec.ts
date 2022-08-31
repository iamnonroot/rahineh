import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDescriptionComponent } from './reserve-description.component';

describe('ReserveDescriptionComponent', () => {
  let component: ReserveDescriptionComponent;
  let fixture: ComponentFixture<ReserveDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
