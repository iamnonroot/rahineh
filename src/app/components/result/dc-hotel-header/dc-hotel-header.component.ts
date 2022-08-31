import { Component, Input, OnInit } from '@angular/core';
import { TikDynamicComponentService } from 'projects/dynamic-component/src/public-api';

@Component({
  selector: 'app-dc-hotel-header',
  templateUrl: './dc-hotel-header.component.html',
  styleUrls: ['./dc-hotel-header.component.scss'],
  host: {
    class: 'flex flex-nowrap items-center justify-between gap-2',
  },
})
export class DcHotelHeaderComponent implements OnInit {
  @Input('injected')
  public Injected!: DcHotelHeaderInjected;

  constructor(private dc: TikDynamicComponentService) {}

  ngOnInit(): void {}

  public More() {
    this.dc.CallCallback(this.Injected.more!.callback);
  }
}

interface DcHotelHeaderInjected {
  title: string;
  more?: {
    text: string;
    callback: string;
  };
}
