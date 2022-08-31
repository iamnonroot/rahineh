import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFilterRadioComponent } from './dc-filter-radio.component';

describe('DcFilterRadioComponent', () => {
  let component: DcFilterRadioComponent;
  let fixture: ComponentFixture<DcFilterRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcFilterRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcFilterRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
