import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Option } from 'src/app/components/result/dc-filter-radio/dc-filter-radio.component';
import { SearchHotelService } from 'src/app/services/search/hotel/hotel.service';

@Component({
  selector: 'app-input-search-room',
  templateUrl: './input-search-room.component.html',
  styleUrls: ['./input-search-room.component.scss'],
})
export class InputSearchRoomComponent implements OnInit {
  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;

  public Numbers: string[] = ['اول', 'دوم', 'سوم', 'چهارم'];
  public Ages: Option[] = Array.from({ length: 12 }, (_, i) => ({
    value: i.toString(),
    text: [i, 'تا', i + 1, 'سال'].join(' '),
  }));

  constructor(public Search: SearchHotelService) {}

  ngOnInit(): void {}

  public CloseOnClickOutSide(): void {
    setTimeout(() => {
      const close = () => {
        this.menu.closeMenu();
        document.querySelector('app-root')?.removeAllListeners!('click');
      };

      document.querySelector('app-root')?.addEventListener('click', close);
    }, 50);
  }
}
