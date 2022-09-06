import { Injectable, EventEmitter } from '@angular/core';
import {
  IDynamicComponentItem,
  TikDynamicComponentService,
} from 'projects/dynamic-component/src/public-api';
import { DcFilterCardInjected } from 'src/app/components/result/dc-filter-card/dc-filter-card.component';
import { DcFilterCheckboxInjected } from 'src/app/components/result/dc-filter-checkbox/dc-filter-checkbox.component';
import { DcFilterRadioInjected } from 'src/app/components/result/dc-filter-radio/dc-filter-radio.component';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public Components: IDynamicComponentItem[] = [];
  public Value: any = {};
  public Change: EventEmitter<any> = new EventEmitter();
  private defaultValue: any = {};
  private timeout: any;

  constructor(private dc: TikDynamicComponentService) {}

  public GetValueOf<T = any>(key: string): T {
    return this.Value[key];
  }

  public SetValueOf<T = any>(key: string, value: T) {
    this.Value[key] = value;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.Change.emit(this.Value);
    }, 500);
  }

  public Save() {
    this.defaultValue = { ...this.Value };
    this.dc.SetComponentLayout('@tikban/#/filter', this.Components);
  }

  public Clear() {
    this.Components = [];
    this.Value = {};
    this.defaultValue = {};
    this.AddHeader();
  }

  public Reset() {
    this.Value = { ...this.defaultValue };
  }

  public AddHeader() {
    this.Components.push({
      actor: '',
      type: 'component',
      tag: 'dc-filter-header',
    });
  }

  public AddPrice(min: number = 0, max = 0) {
    this.Value['price'] = [min, max];
    this.Components.push({
      actor: '',
      type: 'component',
      tag: 'dc-filter-price',
      data: {
        type: 'static',
        value: {
          title: 'فیلتر بر اساس قیمت',
          key: 'price',
          min: min,
          max: max,
          step: 1000,
          value: [min, max],
        },
      },
    });
  }

  public AddCard(value: DcFilterCardInjected) {
    this.Value[value.key] = [];
    this.Components.push({
      actor: '',
      type: 'component',
      tag: 'dc-filter-card',
      data: {
        type: 'static',
        value: value,
      },
    });
  }

  public AddCheckbox(value: DcFilterCheckboxInjected) {
    this.Value[value.key] = [];

    this.Components.push({
      actor: '',
      type: 'component',
      tag: 'dc-filter-checkbox',
      data: {
        type: 'static',
        value: value,
      },
    });
  }

  public AddRadio(value: DcFilterRadioInjected) {
    this.Value[value.key] = '';
    this.Components.push({
      actor: '',
      type: 'component',
      tag: 'dc-filter-radio',
      data: {
        type: 'static',
        value: value,
      },
    });
  }
}
