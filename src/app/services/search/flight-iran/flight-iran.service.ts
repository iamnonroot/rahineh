import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'jalali-moment';
import { TikFunctionsService } from 'projects/utils/src/lib/services/functions/functions.service';
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
import {
  ILiveSearchFlightIran,
  ISearchFlightIranParam,
} from './flight-iran.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchFlightIranService extends SearchVehacel<ILiveSearchFlightIran> {
  constructor(
    search: SearchService,
    private http: HttpClient,
    private functions: TikFunctionsService
  ) {
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

  public FetchLocationIndex() {
    return this.http
      .get(
        'https://api.rahineh.com/api/v1/information/flight/airports/useful?local=true'
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

  public ConvertLiveSearchToParamSearch(): ISearchFlightIranParam {
    const passengers = this.CountPassengers();
    const ways = this.GetWays();
    return {
      flightSteps: ways.map((item) => ({
        departureDate: moment(
          `${item.date!.year}/${item.date!.month}/${item.date!.day}`,
          item.date!.format == 'jalali' ? 'jYYYY/jM/jD' : 'YYYY/M/D'
        ).format('YYYY-MM-DD'),
        originCode: item.origin!.value,
        destinationCode: item.destination!.value,
      })),
      flightPreferences: {
        cabinClass: 1,
        tripType: 1,
      },
      searchedPassenger: passengers,
    };
  }

  public Search(param: ISearchFlightIranParam) {
    return this.http
      .post('https://api.rahineh.com/api/v1/flight/search', param)
      .pipe(
        map<any, any>((res) => {
          console.log(res);

          if ('type' in res && res.type == 0) return undefined;
          else return res.cities_airport;
        }),
        filter((res) => res != undefined)
      );
  }
}
