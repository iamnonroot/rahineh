import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-hotel-attributes',
  templateUrl: './dc-hotel-attributes.component.html',
  styleUrls: ['./dc-hotel-attributes.component.scss'],
  host: {
    class: 'grid grid-cols-3 gap-4',
  },
})
export class DcHotelAttributesComponent implements OnInit {
  @Input('injected')
  public Injected: DcHotelAttributesInjected[] = [];

  constructor() {}

  ngOnInit(): void {}
}

interface DcHotelAttributesInjected {
  icon: string;
  text: string;
}
