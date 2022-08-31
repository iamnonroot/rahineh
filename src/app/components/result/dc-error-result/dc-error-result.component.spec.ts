import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcErrorResultComponent } from './dc-error-result.component';

describe('DcErrorResultComponent', () => {
  let component: DcErrorResultComponent;
  let fixture: ComponentFixture<DcErrorResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcErrorResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcErrorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
