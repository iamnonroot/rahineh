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
import { ILiveSearchFlightWorld } from './flight-world.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchFlightWorldService extends SearchVehacel<ILiveSearchFlightWorld> {
  constructor(search: SearchService) {
    super(search, 'flight-world');
    this.Clear();
  }

  public Clear() {
    this.search.Set('flight-world', {
      [SEARCH_PASSENGERS]: SearchDefaultPassenger,
      [SEARCH_WAYS]: [SearchDefaultWay],
      [SEARCH_WAY_TYPE]: 'go',
    });
  }
}
