import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-section-result',
  templateUrl: './filter-section-result.component.html',
  styleUrls: ['./filter-section-result.component.scss'],
})
export class FilterSectionResultComponent implements OnInit {
  @Input() title: string = '';
  @Input() opened: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
