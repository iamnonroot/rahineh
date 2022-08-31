import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchTrainComponent } from './card-search-train.component';

describe('CardSearchTrainComponent', () => {
  let component: CardSearchTrainComponent;
  let fixture: ComponentFixture<CardSearchTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSearchTrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSearchTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
