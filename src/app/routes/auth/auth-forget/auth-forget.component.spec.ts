import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgetComponent } from './auth-forget.component';

describe('AuthForgetComponent', () => {
  let component: AuthForgetComponent;
  let fixture: ComponentFixture<AuthForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthForgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
