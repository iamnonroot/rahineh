import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-error-result',
  templateUrl: './dc-error-result.component.html',
  styleUrls: ['./dc-error-result.component.scss'],
  host: {
    class: 'flex flex-col items-center justify-center h-[500px]',
  },
})
export class DcErrorResultComponent implements OnInit {
  @Input('injected')
  public Injected!: DcErrorResultInjected;

  constructor() {}

  ngOnInit(): void {}
}

export interface DcErrorResultInjected {
  code: number;
  message: string;
  retry: boolean;
}
