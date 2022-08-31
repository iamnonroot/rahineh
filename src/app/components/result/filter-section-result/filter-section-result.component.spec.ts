import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSectionResultComponent } from './filter-section-result.component';

describe('FilterSectionResultComponent', () => {
  let component: FilterSectionResultComponent;
  let fixture: ComponentFixture<FilterSectionResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSectionResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSectionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
