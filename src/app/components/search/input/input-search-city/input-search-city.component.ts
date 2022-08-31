import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(public filter: FilterPipe) {}

  ngOnInit(): void {}

  public FilteredCities(): any[] {
    const result = this.filter.transform(this.Cities, this.Search, 'cities');
    this.Length = result.length;
    return result;
  }

  public SetCity(location: ILiveSearchWayLocation) {
    this.valueChange.emit(location);
    this.Search = '';
    this.error = false;
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
