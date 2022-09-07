import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveLayoutComponent } from './reserve-layout.component';

describe('ReserveLayoutComponent', () => {
  let component: ReserveLayoutComponent;
  let fixture: ComponentFixture<ReserveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
