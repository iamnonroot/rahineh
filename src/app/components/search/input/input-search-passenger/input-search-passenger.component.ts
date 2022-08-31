import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ILiveSearchPassenger,
  TLiveSearchPasenger,
} from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-input-search-passenger',
  templateUrl: './input-search-passenger.component.html',
  styleUrls: ['./input-search-passenger.component.scss'],
})
export class InputSearchPassengerComponent implements OnInit {
  @Input()
  public value!: ILiveSearchPassenger;

  @Output()
  public remove: EventEmitter<TLiveSearchPasenger> = new EventEmitter();

  @Output()
  public add: EventEmitter<TLiveSearchPasenger> = new EventEmitter();

  public get Value(): string {
    let value: string[] = [];

    if (this.value) {
      if (this.value!.adult) value.push(`${this.value.adult} بزرگسال`);
      if (this.value!.child) value.push(`${this.value.child} کودک`);
      if (this.value!.infant) value.push(`${this.value.infant} نوزاد`);
    }
    return value.join(' و ');
  }

  constructor() {}

  ngOnInit(): void {}
}
