import { Component, OnInit } from '@angular/core';
import { ISearchTab, SearchTabs } from 'src/app/database/components/search';

@Component({
  selector: 'app-header-breadcrumb-result',
  templateUrl: './header-breadcrumb-result.component.html',
  styleUrls: ['./header-breadcrumb-result.component.scss'],
})
export class HeaderBreadcrumbResultComponent implements OnInit {
  public Tabs: ISearchTab[] = SearchTabs;

  constructor() {}

  ngOnInit(): void {}
}
