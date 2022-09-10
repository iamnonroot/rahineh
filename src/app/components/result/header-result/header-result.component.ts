import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TCalendaringFormatter } from 'calendaring/dist/interface';
import moment from 'jalali-moment';
import { TikFunctionsService } from 'projects/utils/src/lib/services/functions/functions.service';
import { ResultService } from 'src/app/services/result/result.service';
import { ISearchPrice } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-header-result',
  templateUrl: './header-result.component.html',
  styleUrls: ['./header-result.component.scss'],
})
export class HeaderResultComponent implements OnInit {
  private _active: number = 0;

  public Prices: Price[] = [];

  public MinPrices: number[] = [];
  public MaxPrices: number[] = [];

  @Input('prices')
  set prices(value: ISearchPrice[]) {
    if (value.length == 0) return;
    this.calculatePrices(value);
    this.Prices = value.map((item) => {
      const date = moment(item.date);
      return {
        text:
          this.format == 'jalali'
            ? date.locale('fa').format('dddd jMM/jDD')
            : date.format('dddd MM/DD'),
        date: {
          year: this.format == 'jalali' ? date.jYear() : date.year(),
          month: this.format == 'jalali' ? date.jMonth() + 1 : date.month() + 1,
          day: this.format == 'jalali' ? date.jDate() : date.date(),
        },
        price:
          item.totalFare && Number(item.totalFare) > 0
            ? this.functions.FormatPrice(item.totalFare) +
              ' ' +
              item.fareCurrencyName
            : Number(item.totalFare) == 0
            ? 'نامشخص'
            : 'تکمیل ظرفیت',
        _price: item.totalFare ? Number(item.totalFare) : 0,
      };
    });
  }

  @Input()
  public format: TCalendaringFormatter = 'jalali';

  @Input()
  public get active(): number {
    return this._active;
  }

  public set active(value: number) {
    if (value == this.active) return;
    this._active = value;
    this.activeChange.emit(value);
    this.change.emit(this.Prices[value].date);
  }

  @Output()
  public activeChange: EventEmitter<number> = new EventEmitter();

  @Output()
  public change: EventEmitter<DateTime> = new EventEmitter();

  constructor(
    public Result: ResultService,
    private functions: TikFunctionsService
  ) {}

  ngOnInit(): void {}

  private calculatePrices(value: ISearchPrice[]) {
    const min = new Set<number>(),
      max = new Set<number>();

    const result = Array.from(
      new Set(
        value
          .filter((item) => item.totalFare)
          .map((item) => Number(item.totalFare))
          .sort((a, b) => a - b)
      )
    );

    if (result.length == 2) {
      min.add(result[0]);
      max.add(result[1]);
    } else if (result.length == 3) {
      min.add(result[0]);
      max.add(result[2]);
    } else if (result.length == 4 || result.length == 5) {
      min.add(result[0]).add(result[1]);
      max.add(result[result.length - 1]).add(result[result.length - 2]);
    } else if (result.length >= 6) {
      min.add(result[0]).add(result[1]).add(result[2]);
      max
        .add(result[result.length - 1])
        .add(result[result.length - 2])
        .add(result[result.length - 3]);
    }

    this.MinPrices = Array.from<number>(min);
    this.MaxPrices = Array.from<number>(max);
  }
}

interface Price {
  date: DateTime;
  text: string;
  price: string;
  _price: number;
}

interface DateTime {
  year: number;
  month: number;
  day: number;
}
