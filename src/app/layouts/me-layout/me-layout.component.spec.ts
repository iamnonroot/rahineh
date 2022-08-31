import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeLayoutComponent } from './me-layout.component';

describe('MeLayoutComponent', () => {
  let component: MeLayoutComponent;
  let fixture: ComponentFixture<MeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
