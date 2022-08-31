import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFilterCheckboxComponent } from './dc-filter-checkbox.component';

describe('DcFilterCheckboxComponent', () => {
  let component: DcFilterCheckboxComponent;
  let fixture: ComponentFixture<DcFilterCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcFilterCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcFilterCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
