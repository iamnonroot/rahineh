import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderResultComponent } from './header-result.component';

describe('HeaderResultComponent', () => {
  let component: HeaderResultComponent;
  let fixture: ComponentFixture<HeaderResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
