import { Injectable } from '@angular/core';
import { SearchVehacel } from '../search/search.abstract';
import {
  SearchDefaultPassenger,
  SearchDefaultWay,
} from '../search/search.default';
import {
  SEARCH_PASSENGERS,
  SEARCH_WAYS,
  SEARCH_WAY_TYPE,
} from '../search/search.enum';
import { SearchService } from '../search/search.service';
import { ILiveSearchFlightIran } from './flight-iran.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchFlightIranService extends SearchVehacel<ILiveSearchFlightIran> {
  constructor(search: SearchService) {
    super(search, 'flight-iran');
    this.Clear();
  }

  public Clear() {
    this.search.Set('flight-iran', {
      [SEARCH_PASSENGERS]: SearchDefaultPassenger,
      [SEARCH_WAYS]: [SearchDefaultWay],
      [SEARCH_WAY_TYPE]: 'go',
    });
  }
}
