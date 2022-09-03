import { Component, OnInit } from '@angular/core';
import { TikDynamicComponentService } from 'projects/dynamic-component/src/public-api';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'w-screen h-full flex flex-col',
  },
})
export class AppComponent implements OnInit {
  constructor(public App: AppService, private dc: TikDynamicComponentService) {}

  ngOnInit(): void {
    this.dc.SetComponentLayout('@tikban/#/filter', [
      {
        actor: '',
        type: 'component',
        tag: 'dc-filter-radio',
        data: {
          type: 'static',
          value: {
            title: 'نمایش بر اساس',
            opened: false,
            key: 'sort',
            options: [
              {
                value: 'soon',
                text: 'زودتر',
              },
              {
                value: 'late',
                text: 'دیرتر',
              },
            ],
          },
        },
      },
      {
        actor: '',
        type: 'component',
        tag: 'dc-filter-price',
        data: {
          type: 'static',
          value: {
            title: 'فیلتر بر اساس قیمت',
            key: 'price',
            min: 0,
            max: 1000000,
            step: 1000,
          },
        },
      },
      {
        actor: '',
        type: 'component',
        tag: 'dc-filter-card',
        data: {
          type: 'static',
          value: {
            title: 'فیلتر بر اساس ساعت پرواز',
            key: 'time',
            options: [
              {
                image: '/assets/images/filter/sun.png',
                title: 'صبح',
                subtitle: '00:00 - 12:00',
              },
              {
                image: '/assets/images/filter/evening.png',
                title: 'عصر',
                subtitle: '12:00 - 18:00',
              },
              {
                image: '/assets/images/filter/moon.png',
                title: 'شب',
                subtitle: '18:00 - 00:00',
              },
            ],
          },
        },
      },
      {
        actor: '',
        type: 'component',
        tag: 'dc-filter-checkbox',
        data: {
          type: 'static',
          value: {
            title: 'فیلتر بر اساس کلاس پرواز',
            key: 'class',
            options: [
              {
                value: '1',
                text: 'اکونومی',
              },
              {
                value: '2',
                text: 'بیزینس',
              },
            ],
          },
        },
      },
    ]);
  }
}
