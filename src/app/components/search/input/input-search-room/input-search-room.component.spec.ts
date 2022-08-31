import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSearchRoomComponent } from './input-search-room.component';

describe('InputSearchRoomComponent', () => {
  let component: InputSearchRoomComponent;
  let fixture: ComponentFixture<InputSearchRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSearchRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
