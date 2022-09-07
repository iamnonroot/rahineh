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

  public Options: any = undefined;

  public get Value(): number[] {
    return this.filter.Value[this.Injected!.key] ?? [];
  }

  constructor(
    private functions: TikFunctionsService,
    private filter: FilterService
  ) {}

  ngOnInit(): void {
    this.Options = {
      connect: true,
      direction: 'rtl',
      start: [this.Injected.min, this.Injected.max],
      range: {
        min: this.Injected.min,
        max: this.Injected.max,
      },
      step: this.Injected.step ?? 10,
      behaviour: 'drag',
      translate: (value: number): string => {
        return this.functions.FormatPrice(value) + ' تومان';
      },
    };
  }

  public Change(event: any) {
    this.filter.SetValueOf(this.Injected!.key, event);
  }
}

export interface FilterPriceInjected {
  key: string;
  min: number;
  max: number;
  step: number;
  value: [number, number];
}
