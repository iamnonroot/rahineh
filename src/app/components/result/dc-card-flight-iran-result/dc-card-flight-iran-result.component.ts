import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import moment from 'jalali-moment';
import {
  IResultItineraryItem,
  IResultItineraryItemOriginDestinationLeg,
  IResultItineraryItemPrice,
} from 'src/app/services/result/result.interface';
import { ResultService } from 'src/app/services/result/result.service';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';

@Component({
  selector: 'app-dc-card-flight-iran-result',
  templateUrl: './dc-card-flight-iran-result.component.html',
  styleUrls: ['./dc-card-flight-iran-result.component.scss'],
})
export class DcCardFlightIranResultComponent implements OnInit {
  @Input('injected')
  private Injected!: DcCardFlightIranResultInjected;

  public Data!: DcCardFilterIranResultData;
  public Details: DcCardFilterIranResultDetailsRow[][] = [];

  public Detailed: boolean = false;

  constructor(
    private dialog: MatDialog,
    private result: ResultService,
    private search: SearchFlightIranService
  ) {}

  ngOnInit(): void {
    let tags: Tag[] = [];
    if (['SYSTEM', 'CHARTER'].includes(this.Injected!.sellType)) {
      tags.push({
        text: this.Injected!.sellType == 'SYSTEM' ? 'سیستمی' : 'چارتری',
        class:
          this.Injected.sellType == 'SYSTEM'
            ? 'bg-sky-500 text-white'
            : 'bg-violet-500 text-white',
      });
    }

    this.Data = {
      refrenceId: this.Injected!.refrenceId,
      price: this.Injected!.price,
      remaining: this.Injected!.remaining,
      tags: tags,
      ways: this.Injected.originDestinations.map((item) => {
        const first = item.legs[0],
          last = item.legs[item.legs.length - 1];

        const start = moment(first.departureDateTime);
        const end = moment(last.arrivalDateTime);
        const duration = moment.duration(end.diff(start));
        duration.add(item.connectionTimePerMinute, 'minutes');

        const stops: Stop[] = item.legs.map((item) => {
          return {
            code: item.arrivalCityCode ?? item.arrivalAirportCode,
            name: item.arrivalCityName ?? item.arrivalAirportName,
            time: '',
          };
        });

        return {
          airline: this.generateAirlines(item.legs),
          fromText: first.departureCityName,
          fromValue: first.departureCityCode,
          start: start.format('HH:mm'),
          end: end.format('HH:mm'),
          duration: [
            duration.days() ? duration.days() + ' روز ' : '',
            duration.hours() ? duration.hours() + ' ساعت ' : '',
            duration.minutes() ? duration.minutes() + ' دقیقه ' : '',
          ]
            .filter((item) => item.length != 0)
            .join(' و '),
          toText: last.arrivalCityName,
          toValue: last.arrivalCityCode,
          stops: item.legs.length == 1 ? [] : stops.slice(0, stops.length - 1),
        };
      }),
    };

    for (let item of this.Injected.originDestinations) {
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

      this.Details.push(ways);
    }
  }

  private generateAirlines(
    input: IResultItineraryItemOriginDestinationLeg[]
  ): Airline {
    const image = Array.from(new Set(input.map((item) => item.airlineImage!)));
    const codes = input.map((item) => item.airlineFlightNumber);
    return {
      image: image,
      title: image.length == 1 ? input[0].airlineName! : 'چند ایرلاین',
      subtitle:
        codes.length == 1
          ? codes[0]
          : codes.slice(0, codes.length - 1).join(' - '),
    };
  }

  public Select() {
    this.result.Select(this.Injected!);
  }

  public GetPrices(): PricePassenger {
    const count = this.search.CountPassengers();
    return {
      adult: {
        text: 'بزرگسال',
        count: count.adult,
        price: this.Injected!.price.adult * count.adult,
      },
      child: {
        text: 'کودک',
        count: count.child,
        price: this.Injected!.price.child * count.child,
      },
      infant: {
        text: 'نوزاد',
        count: count.infant,
        price: this.Injected!.price.infant * count.infant,
      },
    };
  }

  public GetPricesList(): PricePassengerItem[] {
    return Object.values(this.GetPrices());
  }

  public GetTotalPrice(): number {
    const prices = this.GetPrices();
    return prices.adult.price + prices.child.price + prices.infant.price;
  }
}

export interface DcCardFlightIranResultInjected extends IResultItineraryItem {}

export interface DcCardFilterIranResultData {
  refrenceId: string;
  price: IResultItineraryItemPrice;
  remaining: number;
  tags: Tag[];
  ways: DcCardFilterIranResultDataWay[];
}

export interface DcCardFilterIranResultDataWay {
  airline: Airline;
  fromText: string;
  fromValue: string;
  start: string;
  duration: string;
  end: string;
  toText: string;
  toValue: string;
  stops: Stop[];
}

export interface Airline {
  image: string[];
  title: string;
  subtitle?: string;
}

export interface Tag {
  text: string;
  class: string;
}

export interface Stop {
  code: string;
  name: string;
  time: string;
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

interface PricePassenger {
  adult: PricePassengerItem;
  child: PricePassengerItem;
  infant: PricePassengerItem;
}

interface PricePassengerItem {
  text: string;
  count: number;
  price: number;
}
