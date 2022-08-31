import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-me-layout',
  templateUrl: './me-layout.component.html',
  styleUrls: ['./me-layout.component.scss'],
})
export class MeLayoutComponent implements OnInit {
  public Tabs: Tab[] = [
    {
      icon: 'person',
      text: 'حساب کاربری',
      link: '/me',
    },
    {
      icon: 'luggage',
      text: 'سفر های من',
      link: '/me/history',
    },
    {
      icon: 'receipt_long',
      text: 'تراکنش های من',
      link: '/me/transaction',
    },
    {
      icon: 'airline_seat_recline_normal',
      text: 'مسافرین سابق',
      link: '/me/passenger',
    },
    {
      icon: 'wallet',
      text: 'کیف پول من',
      link: '/me/wallet',
    },
  ];

  public ActiveTab: number = -1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.setActiveTab();
      this.router.events.subscribe(() => {
        this.setActiveTab();
      });
    }, 0);
  }

  private setActiveTab() {
    const path = this.router.url;
    this.ActiveTab = this.Tabs.findIndex((item) => item.link == path);
  }
}

export interface Tab {
  icon: string;
  text: string;
  link: string;
}
