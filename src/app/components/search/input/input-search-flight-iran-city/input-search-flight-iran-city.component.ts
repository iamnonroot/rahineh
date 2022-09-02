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
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';
import { ILiveSearchWayLocation } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-input-search-flight-iran-city',
  templateUrl: './input-search-flight-iran-city.component.html',
  styleUrls: ['./input-search-flight-iran-city.component.scss'],
})
export class InputSearchFlightIranCityComponent implements OnInit {
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

  public CitiesSearched: CitySearch[] = [];
  public CitiesIndexed: CitySearch[] = [];

  private timeout: any;

  constructor(private search: SearchFlightIranService) {}

  ngOnInit(): void {
    this.fetchIndex();
  }

  public CloseOnClickOutSide(): void {
    setTimeout(() => {
      document
        .querySelector('app-root')
        ?.addEventListener('click', this.onCloseOutside.bind(this));
    }, 50);
  }

  public FilteredCities(): CitySearch[] {
    return this.Search.length == 0 ? this.CitiesIndexed : this.CitiesSearched;
  }

  public SetCity(location: ILiveSearchWayLocation) {
    document.querySelector('app-root')?.removeAllListeners!('click');

    this.valueChange.emit(location);
    this.menu.closeMenu();
    this.error = false;
    this.Search = '';
  }

  public OnSearching() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.fetchSearch();
    }, 200);
  }

  private fetchIndex() {
    this.search.FetchLocationIndex().subscribe({
      next: (res) => {
        this.CitiesIndexed = [
          {
            text: 'شهر های پرتردد',
            cities: res,
          },
        ];
        this.Length = this.CitiesIndexed.length;
      },
    });
  }

  private fetchSearch() {
    this.search.FetchLocationBySearch(this.Search).subscribe({
      next: (res) => {
        this.CitiesSearched = [
          {
            text: `جستجو: ${this.Search}`,
            cities: res,
          },
        ];
        this.Length = this.CitiesSearched.length;
      },
    });
  }

  private onCloseOutside() {
    this.menu.closeMenu();
    document.querySelector('app-root')?.removeAllListeners!('click');
  }
}

export interface CitySearch {
  text: string;
  cities: City[];
}

export interface City {
  value: string;
  text: string;
  sub?: City[];
}
