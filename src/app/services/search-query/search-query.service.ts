import { Injectable } from '@angular/core';
import moment from 'jalali-moment';
import {
  ILiveSearchPassenger,
  ILiveSearchWay,
  TLiveSearchType,
  TLiveSearchWayType,
} from '../search/search/search.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchQueryService {
  constructor() {}

  public ConvertToQuery(
    type: TLiveSearchType,
    ways: ILiveSearchWay[],
    wayType: TLiveSearchWayType,
    passengers: ILiveSearchPassenger
  ) {
    let pathname = `/search/${type}`;

    for (let item of ways) {
      // setting origin-destination
      pathname += `/${item.origin!.value.toUpperCase()}-${item.destination!.value.toUpperCase()}/`;
      // setting date
      pathname += `${item.date!.year}-${item.date!.month}-${item.date!.day}`;
    }

    return {
      pathname,
      query: {
        adult: passengers.adult,
        child: passengers.child,
        infant: passengers.infant,
        way: wayType,
      },
    };
  }

  public ConvertFromQuery(pathname: string): ILiveSearchWay[] {
    const splited = pathname.split('/');
    let ways: ILiveSearchWay[] = [];

    for (let index in splited) {
      const i = Number(index);
      
      if (i % 2 == 0) {
        const [origin, destination] = splited[i].split('-');
        ways.push({
          origin: {
            value: origin,
            text: origin,
          },
          destination: {
            value: destination,
            text: destination,
          },
        });
      } else {
        const [year, month, day] = splited[i].split('-');
        const date = moment(
          `${year}/${month}/${day}`,
          year.startsWith('20') ? 'YYYY/M/D' : 'jYYYY/jM/jD'
        );

        ways[ways.length - 1].date = {
          format: 'jalali',
          year: date.jYear(),
          month: date.jMonth() + 1,
          day: date.jDate(),
        };
      }
    }
        
    return ways;
  }
}
