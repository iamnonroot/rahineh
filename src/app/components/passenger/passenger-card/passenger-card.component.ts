import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import moment from 'jalali-moment';
import { IReservePassenger } from 'src/app/services/reserve/reverse.interface';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss'],
})
export class PassengerCardComponent implements OnInit {
  public get Days(): number[] {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  }

  public get Months(): string[] {
    const locale = moment.localeData('fa');
    return locale.jMonths();
  }

  public get Years(): number[] {
    const year = moment().jYear();
    return Array.from({ length: 100 }, (_, i) => year - i);
  }

  @Input()
  public value!: IReservePassenger;

  @Input()
  public title: string = '';

  @Input()
  public removeable: boolean = true;

  @Input()
  public selectable: boolean = true;

  @Input()
  public saveable: boolean = false;

  @Output()
  public remove: EventEmitter<void> = new EventEmitter();

  @Output()
  public save: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
