import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
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
  constructor(search: SearchService, private http: HttpClient) {
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

  
  public FetchLocationIndex() {
    return this.http
      .get(
        'https://api.rahineh.com/api/v1/information/flight/airports/useful?local=false'
      )
      .pipe(
        map<any, any>((res) => {
          if ('type' in res && res.type == 0) return undefined;
          else return res.cities_airport;
        }),
        filter((res) => res != undefined)
      );
  }

  public FetchLocationBySearch(search: string) {
    return this.http
      .get(
        `https://api.rahineh.com/api/v1/information/flight/airports/search?q=${search}`
      )
      .pipe(
        map<any, any>((res) => {
          if ('type' in res && res.type == 0) return undefined;
          else return res.cities_airport;
        }),
        filter((res) => res != undefined)
      );
  }
}
