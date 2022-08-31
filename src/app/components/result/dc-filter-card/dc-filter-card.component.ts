import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-filter-card',
  templateUrl: './dc-filter-card.component.html',
  styleUrls: ['./dc-filter-card.component.scss'],
})
export class DcFilterCardComponent implements OnInit {
  @Input('injected')
  public Injected!: DcFilterCardInjected;

  constructor() {}

  ngOnInit(): void {}
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
