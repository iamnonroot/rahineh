import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { FilterPipe } from 'src/app/pipe/filter/filter.pipe';
import { ILiveSearchWayLocation } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-input-search-city',
  templateUrl: './input-search-city.component.html',
  styleUrls: ['./input-search-city.component.scss'],
})
export class InputSearchCityComponent implements OnInit {
  @Input()
  public type: 'origin' | 'destination' = 'origin';

  @Input()
  public value: ILiveSearchWayLocation | undefined;

  @Input()
  public error: boolean = false;

  @Output()
  public valueChange: EventEmitter<ILiveSearchWayLocation> = new EventEmitter();

  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;

  public Search: string = '';

  public Length: number = 0;

  public Cities: CitySearch[] = [
    {
      text: 'شهر های اخیر',
      cities: [
        {
          value: 'thr',
          text: 'تهران',
        },
      ],
    },
    {
      text: 'شهر های پرتردد',
      cities: [
        {
          value: 'thr',
          text: 'تهران',
        },
      ],
    },
  ];

  constructor(private filter: FilterPipe) {}

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

  public FilteredCities(): any[] {
    const result = this.filter.transform(this.Cities, this.Search, 'cities');
    this.Length = result.length;
    return result;
  }

  public SetCity(location: ILiveSearchWayLocation) {
    this.valueChange.emit(location);
    this.menu.closeMenu();
    this.error = false;
    this.Search = '';
  }
}

export interface CitySearch {
  text: string;
  cities: City[];
}

export interface City {
  value: string;
  text: string;
}
