import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { ResultService } from 'src/app/services/result/result.service';
import { SearchQueryService } from 'src/app/services/search-query/search-query.service';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';
import {
  SearchDefaultPassenger,
  SearchDefaultTypes,
} from 'src/app/services/search/search/search.default';
import {
  ILiveSearchPassenger,
  TLiveSearchType,
} from 'src/app/services/search/search/search.interface';

@Injectable({
  providedIn: 'root',
})
export class PreSearchGuard implements CanActivate {
  constructor(
    private query: SearchQueryService,
    private result: ResultService,
    private reserve: ReserveService,
    private flightIran: SearchFlightIranService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const { url } = state;
    const {
      queryParams: query,
      params: { type },
    } = route;

    const passengers: any = Object.keys(query).reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: Number(query[curr]),
      }),
      SearchDefaultPassenger
    );

    const ways = this.query.ConvertFromQuery(
      url.replace(`/search/${type}/`, '').split('?')[0]
    );

    // setting result
    this.result.Step = 0;
    this.result.Length = ways.length;
    this.result.Selected = Array.from(
      { length: ways.length },
      () => undefined
    ) as any[];

    switch (type as TLiveSearchType) {
      case 'flight-iran':
        // setting search
        this.flightIran.SetWayType(ways.length == 1 ? 'go' : 'go-back');
        this.flightIran.SetWay(ways);
        this.flightIran.SetPassengers({
          adult: Number(passengers.adult),
          child: Number(passengers.child),
          infant: Number(passengers.infant),
        });
        // setting reserve
        this.reserve.SetPassengersByCount(this.flightIran.CountPassengers());
        // setting result
        this.result.Type = 'flight-iran';
        this.result.WayType = this.flightIran.GetWayType();
        break;

      default:
        return false;
    }

    return true;
  }
}

export const PreSearchMatcher = (path: string) => (url: any) => {
  if (
    url.length < 4 ||
    url[0].path != path ||
    SearchDefaultTypes.includes(url[1].path as any) == false
  )
    return null;

  return {
    consumed: url,
    posParams: {
      type: url[1],
    },
  };
};
