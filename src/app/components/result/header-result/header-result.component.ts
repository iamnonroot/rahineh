import { Component, Input, OnInit } from '@angular/core';
import { TikFunctionsService } from 'projects/utils/src/lib/services/functions/functions.service';
import { ResultService } from 'src/app/services/result/result.service';
import { ISearchPrice } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-header-result',
  templateUrl: './header-result.component.html',
  styleUrls: ['./header-result.component.scss'],
})
export class HeaderResultComponent implements OnInit {
  public ActiveCalendar: number = 0;
  public Prices: Price[] = [];

  @Input('prices')
  set prices(value: ISearchPrice[]) {
    this.Prices = value.map((item) => ({
      date: this.functions.FormatJalali(item.date, 'dddd jDD/jMM'),
      price: item.totalFare
        ? this.functions.FormatPrice(item.totalFare) +
          ' ' +
          item.fareCurrencyName
        : 'تکمیل ظرفیت',
    }));
  }

  constructor(
    public Result: ResultService,
    private functions: TikFunctionsService
  ) {}

  ngOnInit(): void {}
}

interface Price {
  date: string;
  price: string;
}
