import { Component, Input, OnInit } from '@angular/core';
import { HeaderLinks, HeaderSidenavItems, IHeaderLink, IHeaderSidenavItem } from 'src/app/database/components/header';
import { ISearchTab, SearchTabs } from 'src/app/database/components/search';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public hidden: boolean = false;

  public HeaderLinks: IHeaderLink[] = HeaderLinks;
  public HeaderSidenavItems: IHeaderSidenavItem[] = HeaderSidenavItems;
  public SearchTabs: ISearchTab[] = SearchTabs;

  public OpenedSidenav: boolean = false;

  constructor(public Result: ResultService) {}

  ngOnInit(): void {}
}
