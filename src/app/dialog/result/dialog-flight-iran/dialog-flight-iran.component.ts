import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DcCardFlightIranResultInjected } from 'src/app/components/result/dc-card-flight-iran-result/dc-card-flight-iran-result.component';
import { ResultService } from 'src/app/services/result/result.service';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';

@Component({
  selector: 'app-dialog-flight-iran',
  templateUrl: './dialog-flight-iran.component.html',
  styleUrls: ['./dialog-flight-iran.component.scss'],
})
export class DialogFlightIranComponent implements OnInit {
  constructor(
    private ref: DialogRef<DialogFlightIranComponent>,
    private result: ResultService,
    private search: SearchFlightIranService,
    @Inject(MAT_DIALOG_DATA)
    public Data: { injected: DcCardFlightIranResultInjected }
  ) {}

  ngOnInit(): void {}

  public Select() {
    this.result.Select(this.Data.injected);
  }

  public GetPrices(): PricePassenger {
    const price = this.Data.injected.price;
    const count = this.search.CountPassengers();
    return {
      adult: {
        text: 'بزرگسال',
        count: count.adult,
        price: price.adult * count.adult,
      },
      child: {
        text: 'کودک',
        count: count.child,
        price: price.child * count.child,
      },
      infant: {
        text: 'نوزاد',
        count: count.infant,
        price: price.infant * count.infant,
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
