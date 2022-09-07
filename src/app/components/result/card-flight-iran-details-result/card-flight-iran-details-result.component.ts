import { Component, Input, OnInit } from '@angular/core';
import moment from 'jalali-moment';
import { IResultItineraryItem } from 'src/app/services/result/result.interface';

@Component({
  selector: 'app-card-flight-iran-details-result',
  templateUrl: './card-flight-iran-details-result.component.html',
  styleUrls: ['./card-flight-iran-details-result.component.scss'],
  host: {
    class: 'flex flex-col'
  }
})
export class CardFlightIranDetailsResultComponent implements OnInit {
  @Input()
  public item!: IResultItineraryItem;

  public Details: DcCardFilterIranResultDetails[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let item of this.item.originDestinations) {
      let ways: DcCardFilterIranResultDetailsRow[] = [];

      for (let leg of item.legs) {
        const start = moment(leg.departureDateTime),
          end = moment(leg.arrivalDateTime),
          duration = end.diff(start);

        ways.push({
          type: 'way',
          data: {
            time: start.format('HH:mm'),
            city: leg.departureCityName,
            airport: leg.departureAirportName! ?? leg.departureAirportCode!,
            stop: false,
          },
        });

        ways.push({
          type: 'airline',
          data: {
            image: leg.airlineImage,
            name: leg.airlineName,
            number: leg.airlineFlightNumber,
            time: moment.utc(duration).format('HH:mm'),
          },
        });

        ways.push({
          type: 'way',
          data: {
            time: end.format('HH:mm'),
            city: leg.arrivalCityName,
            airport: leg.arrivalAirportName! ?? leg.arrivalAirportCode!,
          },
        });
      }

      this.Details.push({
        date: moment(item.legs[0].departureDateTime)
          .locale('fa')
          .format('dddd DD MMMM YYYY'),
        rows: ways,
      });
    }
  }
}

export interface DcCardFilterIranResultDetails {
  date: string;
  rows: DcCardFilterIranResultDetailsRow[];
}

export interface DcCardFilterIranResultDetailsRow {
  type: 'way' | 'airline';
  data: any;
}

export interface DcCardFilterIranResultDetailsWay {
  time: string;
  city: string;
  airport: string;
}
