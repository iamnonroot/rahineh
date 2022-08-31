import { Injectable } from '@angular/core';
import { SearchVehacel } from '../search/search.abstract';
import {
  SearchDefaultPassenger,
  SearchDefaultWay,
} from '../search/search.default';
import { SEARCH_PASSENGERS, SEARCH_WAYS } from '../search/search.enum';
import { SearchService } from '../search/search.service';
import { ILiveSearchBus } from './bus.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchBusService extends SearchVehacel<ILiveSearchBus> {
  constructor(search: SearchService) {
    super(search, 'bus');
    this.Clear();
  }

  public Clear() {
    this.search.Set('bus', {
      [SEARCH_PASSENGERS]: SearchDefaultPassenger,
      [SEARCH_WAYS]: [SearchDefaultWay],
    });
  }
}
