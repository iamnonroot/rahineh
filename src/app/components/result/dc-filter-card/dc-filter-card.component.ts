import { Component, Input, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-dc-filter-card',
  templateUrl: './dc-filter-card.component.html',
  styleUrls: ['./dc-filter-card.component.scss'],
})
export class DcFilterCardComponent implements OnInit {
  @Input('injected')
  public Injected!: DcFilterCardInjected;

  public get Value(): string[] {
    return this.filter.Value[this.Injected!.key];
  }

  constructor(private filter: FilterService) {}

  ngOnInit(): void {}

  public HasValue(value: string): boolean {
    return this.Value.includes(value);
  }

  public ToggleValue(value: string) {
    const _value = [...this.Value];
    const index = _value.indexOf(value);
    if (index == -1) _value.push(value);
    else _value.splice(index, 1);
    this.filter.SetValueOf(this.Injected!.key, _value);
  }
}

export interface DcFilterCardInjected {
  title: string;
  opened: boolean;
  key: string; // live filter => object key
  options: Option[];
}

export interface Option {
  value: string;
  image?: string;
  title: string;
  subtitle?: string;
}
