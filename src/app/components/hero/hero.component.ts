import { Component, Input, OnInit } from '@angular/core';
import { HerosByType } from 'src/app/database/components/hero';
import { TLiveSearchType } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input()
  public type: TLiveSearchType = 'flight-iran';

  public get Title(): string {
    return HerosByType[this.type].title;
  }

  public get Subtitle(): string {
    return HerosByType[this.type].subtitle;
  }

  public get Image(): string {
    return HerosByType[this.type].image;
  }

  public get Color(): string {
    return HerosByType[this.type].color;
  }

  constructor() {}

  ngOnInit(): void {}
}
