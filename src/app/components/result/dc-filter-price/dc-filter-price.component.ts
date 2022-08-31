import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { TikFunctionsService } from 'projects/utils/src/lib/services/functions/functions.service';

@Component({
  selector: 'app-dc-filter-price',
  templateUrl: './dc-filter-price.component.html',
  styleUrls: ['./dc-filter-price.component.scss'],
})
export class DcFilterPriceComponent implements OnInit {
  @Input('injected')
  public Injected!: FilterPriceInjected;

  public Options: Options | undefined = undefined;

  public Value: [number, number] = [0, 0];

  constructor(
    private functions: TikFunctionsService,
    // private search: SearchService
  ) {}

  ngOnInit(): void {
    this.Options = {
      floor: this.Injected.min,
      ceil: this.Injected.max,
      rightToLeft: true,
      step: this.Injected.step ?? 10,
      translate: (value: number): string => {
        return this.functions.FormatPrice(value) + ' تومان';
      },
    };
    // const value = this.search.Get(this.Injected.key);
    // if (!value) {
    //   this.Value[1] = this.Options.ceil!;
    //   this.search.Set(this.Injected.key, this.Value);
    // } else {
    //   this.Value = value;
    // }
  }

  public Change(right: number, left: number) {
    this.Value = [right, left];
    // this.search.Set(this.Injected.key, this.Value);
  }
}

export interface FilterPriceInjected {
  key: string;
  min: number;
  max: number;
  step: number;
}
