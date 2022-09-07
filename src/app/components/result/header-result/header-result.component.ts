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

  @Input('prices')
  set prices(value: ISearchPrice[]) {
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
}

interface Price {
  date: DateTime;
  text: string;
  price: string;
}

interface DateTime {
  year: number;
  month: number;
  day: number;
}
