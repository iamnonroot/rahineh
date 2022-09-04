import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-filter-header',
  templateUrl: './filter-header.component.html',
  styleUrls: ['./filter-header.component.scss'],
})
export class FilterHeaderComponent implements OnInit {
  constructor(public Filter: FilterService) {}

  ngOnInit(): void {}
}
