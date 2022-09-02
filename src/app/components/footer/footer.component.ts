import { Component, OnInit } from '@angular/core';
import { ISearchTab, SearchTabs } from 'src/app/database/components/search';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  host: {
    class: '-md:hidden'
  }
})
export class FooterComponent implements OnInit {
  public Tabs: ISearchTab[] = SearchTabs;

  constructor() {}

  ngOnInit(): void {}
}
