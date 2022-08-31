import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPhoneComponent } from './auth-phone.component';

describe('AuthPhoneComponent', () => {
  let component: AuthPhoneComponent;
  let fixture: ComponentFixture<AuthPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
