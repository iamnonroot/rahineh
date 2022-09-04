import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
  host: {
    class: 'flex flex-col w-full',
  },
})
export class FilterResultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
