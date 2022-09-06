import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-dc-filter-radio',
  templateUrl: './dc-filter-radio.component.html',
  styleUrls: ['./dc-filter-radio.component.scss'],
})
export class DcFilterRadioComponent implements OnInit {
  @Input('injected')
  public Injected!: DcFilterRadioInjected;
  public get Value(): string {
    return this.filter.Value[this.Injected!.key];
  }
  constructor(private filter: FilterService) {}

  ngOnInit(): void {}

  public HasValue(value: string): boolean {
    return this.Value.includes(value);
  }

  public ToggleValue(value: string) {
    this.filter.SetValueOf(this.Injected!.key, value);
  }
}

export interface DcFilterRadioInjected {
  title: string;
  opened: boolean;
  key: string; // live filter => object key
  options: Option[];
}

export interface Option {
  value: string;
  text: string;
}
