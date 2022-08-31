import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchBusComponent } from './card-search-bus.component';

describe('CardSearchBusComponent', () => {
  let component: CardSearchBusComponent;
  let fixture: ComponentFixture<CardSearchBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSearchBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearchBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
