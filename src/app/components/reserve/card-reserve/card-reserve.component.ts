import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { IResultItineraryItem } from 'src/app/services/result/result.interface';
import {
  ILiveSearchPassenger,
  TLiveSearchType,
} from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-card-reserve',
  templateUrl: './card-reserve.component.html',
  styleUrls: ['./card-reserve.component.scss'],
})
export class CardReserveComponent implements OnInit {
  @Input()
  public type!: TLiveSearchType;

  @Input()
  public selected?: IResultItineraryItem;

  @Input()
  public submitText: string = 'تایید و ادامه';

  @Output()
  public change: EventEmitter<void> = new EventEmitter();

  @Input()
  public submit: EventEmitter<void> = new EventEmitter();

  constructor(private reserve: ReserveService) {}

  ngOnInit(): void {}

  public GetPrices(): PricePassenger {
    const count = this.reserve.CountPassengers();
    return {
      adult: {
        text: 'بزرگسال',
        count: count.adult,
        price: this.selected!.price.adult * count.adult,
      },
      child: {
        text: 'کودک',
        count: count.child,
        price: this.selected!.price.child * count.child,
      },
      infant: {
        text: 'نوزاد',
        count: count.infant,
        price: this.selected!.price.infant * count.infant,
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
