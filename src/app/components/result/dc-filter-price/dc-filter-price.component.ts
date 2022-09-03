import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { TikFunctionsService } from 'projects/utils/src/lib/services/functions/functions.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-dc-filter-price',
  templateUrl: './dc-filter-price.component.html',
  styleUrls: ['./dc-filter-price.component.scss'],
})
export class DcFilterPriceComponent implements OnInit {
  @Input('injected')
  public Injected!: FilterPriceInjected;

  public Options: Options | undefined = undefined;

  public get Value(): [number, number] | undefined {
    return this.filter.Value[this.Injected!.key];
  }

  constructor(
    private functions: TikFunctionsService,
    private filter: FilterService
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
  }

  public Change(right: number, left: number) {
    this.filter.SetValueOf(this.Injected!.key, [right, left]);
  }
}

export interface FilterPriceInjected {
  key: string;
  min: number;
  max: number;
  step: number;
  value: [number, number];
}
