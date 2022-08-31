import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  IResultItineraryItemPrice,
  IResultItineraryItemWay,
} from 'src/app/services/result/result.interface';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.scss'],
})
export class CardResultComponent implements OnInit {
  @Input()
  public ways: IResultItineraryItemWay[] = [];

  @Input()
  public icon: string = '';

  @Input()
  public price: IResultItineraryItemPrice = {
    adult: 0,
    child: 0,
    infant: 0,
  };

  @Input()
  public remaining: number = 0;

  @Input()
  public tags: ICardResultTag[] = [];

  @Output()
  public more: EventEmitter<void> = new EventEmitter();

  @Output()
  public Select: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

export interface ICardResultTag {
  text: string;
  class: string;
}
