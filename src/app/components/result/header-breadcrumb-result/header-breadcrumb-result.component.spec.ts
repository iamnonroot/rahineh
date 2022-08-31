import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBreadcrumbResultComponent } from './header-breadcrumb-result.component';

describe('HeaderBreadcrumbResultComponent', () => {
  let component: HeaderBreadcrumbResultComponent;
  let fixture: ComponentFixture<HeaderBreadcrumbResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBreadcrumbResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBreadcrumbResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
