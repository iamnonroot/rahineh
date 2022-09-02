import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDefaultTypes } from 'src/app/services/search/search/search.default';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss'],
  host: {
    class:
      'grid grid-cols-3 gap-2 bg-white h-[80px] bg-[#b9f6ca] z-10  md:!hidden',
  },
})
export class BottomNavBarComponent implements OnInit {
  @Input()
  @HostBinding('class.hidden')
  public hidden: boolean = false;

  public ActiveTab: number = -1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveTab();
    this.router.events.subscribe(() => {
      this.setActiveTab();
    });
  }

  private setActiveTab() {
    const path = this.router.url.split('?')[0];
    if (
      path == '/' ||
      SearchDefaultTypes.includes(path.replace('/', '') as any)
    )
      this.ActiveTab = 0;
    else if (path.startsWith('/auth') || path.startsWith('/me'))
      this.ActiveTab = 2;
  }
}
