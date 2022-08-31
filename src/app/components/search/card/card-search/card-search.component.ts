import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISearchTab, SearchTabs } from 'src/app/database/components/search';
import { TLiveSearchType } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
  host: {
    class: 'flex flex-col p-4 rounded-2xl bg-white shadow-lg',
  },
})
export class CardSearchComponent implements OnInit {
  @Input()
  public tabless: boolean = false;

  @Input() type: TLiveSearchType = 'flight-iran';

  public Tabs: ISearchTab[] = SearchTabs;

  constructor() {}

  ngOnInit(): void {}
}
