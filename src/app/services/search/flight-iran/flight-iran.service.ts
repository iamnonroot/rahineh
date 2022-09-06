import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'jalali-moment';
import { IDynamicComponentItem } from 'projects/dynamic-component/src/public-api';
import { filter, map } from 'rxjs';
import { FilterService } from '../../filter/filter.service';
import { SearchVehacel } from '../search/search.abstract';
import {
  SearchDeafultFilterSortVehacel,
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
  ISearchFlightIranFilterParam,
  ISearchFlightIranParam,
} from './flight-iran.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchFlightIranService extends SearchVehacel<ILiveSearchFlightIran> {
  constructor(
    search: SearchService,
    private http: HttpClient,
    private filter: FilterService
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
    const type = this.GetWayType();
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
        tripType: type == 'go' ? 1 : 2,
      },
      searchedPassenger: passengers,
    };
  }

  public ConvertSearchResultToDynamicComponent(
    result: any[]
  ): IDynamicComponentItem[] {
    let output: IDynamicComponentItem[] = [];

    if (result.length == 0) {
      return [
        {
          actor: '',
          type: 'component',
          tag: 'dc-error-result',
          data: {
            type: 'static',
            value: {
              code: 'نتیحه ای یافت نشد',
              message: 'هیچ بلیط پروازی برای این مسیر یافت نشد',
              retry: false,
            },
          },
        },
      ];
    }

    for (let item of result) {
      output.push({
        actor: '',
        type: 'component',
        tag: 'dc-card-flight-iran',
        class: 'mb-2',
        data: {
          type: 'static',
          value: item,
        },
      });
    }
    return output;
  }

  public Search(param: ISearchFlightIranParam) {
    return this.http
      .post('https://api.rahineh.com/api/v1/flight/search', param)
      .pipe(
        map<any, any>((res) => {
          if ('type' in res && res.type == 0) return undefined;
          else return res;
        }),
        filter((res) => res != undefined)
      );
  }

  public Filter(param: ISearchFlightIranFilterParam) {
    this.filter.Clear();

    this.filter.AddRadio(SearchDeafultFilterSortVehacel);

    let price_min = param.flights[0].price.adult,
      price_max = 0;

    for (let item of param.flights) {
      const price = item.price.adult;
      if (price < price_min) price_min = price;
      if (price_max < price) price_max = price;
    }

    this.filter.AddPrice(price_min, price_max);

    this.filter.AddCard({
      key: 'airlies',
      title: 'فیلتر بر اساس ایرلاین ها',
      opened: true,
      options: param.airlines.map((item) => ({
        image: `https://tikban.com/Flight/GetLogo/${item.code}`,
        title:
          item.persian_name.length == 0
            ? item.english_name.charAt(0).toUpperCase() +
              item.english_name.slice(1)
            : item.persian_name,
        value: item.code,
      })),
    });

    this.filter.AddCheckbox({
      key: 'more',
      title: 'موارد دیگر',
      opened: true,
      options: [
        {
          value: 'duplicate',
          text: 'نمایش بلیط های تکراری',
        },
      ],
    });

    this.filter.Save();
  }
}
