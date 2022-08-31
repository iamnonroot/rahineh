import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterLayoutComponent } from './help-center-layout.component';

describe('HelpCenterLayoutComponent', () => {
  let component: HelpCenterLayoutComponent;
  let fixture: ComponentFixture<HelpCenterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpCenterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
