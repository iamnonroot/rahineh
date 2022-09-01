import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-input-search-room',
  templateUrl: './input-search-room.component.html',
  styleUrls: ['./input-search-room.component.scss'],
})
export class InputSearchRoomComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;

  constructor() {}

  ngOnInit(): void {}

  public CloseOnClickOutSide(): void {
    setTimeout(() => {
      const close = () => {
        this.menu.closeMenu();
        document.querySelector('app-root')?.removeEventListener('click', close);
      };

      document.querySelector('app-root')?.addEventListener('click', close);
    }, 50);
  }
}
