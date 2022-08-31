import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveInformationComponent } from './reserve-information.component';

describe('ReserveInformationComponent', () => {
  let component: ReserveInformationComponent;
  let fixture: ComponentFixture<ReserveInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
