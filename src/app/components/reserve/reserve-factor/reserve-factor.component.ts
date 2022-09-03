import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-reserve-factor',
  templateUrl: './reserve-factor.component.html',
  styleUrls: ['./reserve-factor.component.scss'],
})
export class ReserveFactorComponent implements OnInit {
  public Columns: string[] = ['text', 'count', 'price'];
  public Data: TableRow[] = [];

  constructor(private reserve: ReserveService, private result: ResultService) {}

  ngOnInit(): void {
    this.Data = this.GetPricesList().filter((item) => item.count != 0);
  }

  public GetPrices(): PricePassenger {
    const selected = this.result.Selected!;
    const count = this.reserve.CountPassengers();
    return {
      adult: {
        text: 'بزرگسال',
        count: count.adult,
        price: selected.price.adult * count.adult,
      },
      child: {
        text: 'کودک',
        count: count.child,
        price: selected.price.child * count.child,
      },
      infant: {
        text: 'نوزاد',
        count: count.infant,
        price: selected.price.infant * count.infant,
      },
    };
  }

  public GetPricesList(): TableRow[] {
    return Object.values(this.GetPrices());
  }

  public GetTotalPrice(): number {
    return this.Data.reduce((prev, curr) => prev + curr.price, 0);
  }
}

interface PricePassenger {
  adult: TableRow;
  child: TableRow;
  infant: TableRow;
}

interface TableRow {
  text: string;
  count: number;
  price: number;
}
