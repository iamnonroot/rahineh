import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcFilterCardComponent } from './dc-filter-card.component';

describe('DcFilterCardComponent', () => {
  let component: DcFilterCardComponent;
  let fixture: ComponentFixture<DcFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcFilterCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
