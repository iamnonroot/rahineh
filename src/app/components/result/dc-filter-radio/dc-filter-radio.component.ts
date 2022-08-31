import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-filter-radio',
  templateUrl: './dc-filter-radio.component.html',
  styleUrls: ['./dc-filter-radio.component.scss'],
})
export class DcFilterRadioComponent implements OnInit {
  @Input('injected')
  public Injected!: DcFilterRadioInjected;

  constructor() {}

  ngOnInit(): void {}
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
