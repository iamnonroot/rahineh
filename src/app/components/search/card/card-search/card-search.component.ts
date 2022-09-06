import { Component, Input, OnInit } from '@angular/core';
import { ISearchTab, SearchTabs } from 'src/app/database/components/search';
import { TLiveSearchType } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss'],
  host: {
    class: 'flex flex-col md:p-4 rounded-2xl bg-white shadow-lg',
  },
})
export class CardSearchComponent implements OnInit {
  @Input()
  public tabless: boolean = false;

  @Input()
  public expansionable: boolean = false; // expansion on middle screen size

  @Input() type: TLiveSearchType = 'flight-iran';

  @Input() disabled: boolean = false;

  public Tabs: ISearchTab[] = SearchTabs;

  constructor() {}

  ngOnInit(): void {}
}
