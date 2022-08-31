import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeWalletComponent } from './me-wallet.component';

describe('MeWalletComponent', () => {
  let component: MeWalletComponent;
  let fixture: ComponentFixture<MeWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
