import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-filter-checkbox',
  templateUrl: './dc-filter-checkbox.component.html',
  styleUrls: ['./dc-filter-checkbox.component.scss'],
})
export class DcFilterCheckboxComponent implements OnInit {
  @Input('injected')
  public Injected!: DcFilterCheckboxInjected;

  constructor() {}

  ngOnInit(): void {}
}

export interface DcFilterCheckboxInjected {
  title: string;
  opened: boolean;
  key: string; // live filter => object key
  options: Option[];
}

export interface Option {
  value: string;
  text: string;
}
