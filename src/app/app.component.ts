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
    this.dc.SetComponentLayout('@tikban/#/result', [
      {
        actor: '',
        type: 'component',
        tag: 'dc-card-flight-iran',
        class: 'mb-2',
        data: {
          type: 'static',
          value: {
            ways: [
              {
                image: 'https://tikban.com/Flight/GetLogo/Y9',
                title: 'کیش ایر',
                subtitle: 'Y9-7055',
                fromText: 'تهران',
                fromValue: 'THR',
                toText: 'کیش',
                toValue: 'KIH',
                start: '11:00',
                end: '13:30',
                duration: '2 ساعت و 30 دقیقه',
                stops: ['QZV', 'MHD'],
              },
              {
                image: 'https://tikban.com/Flight/GetLogo/Y9',
                title: 'کیش ایر',
                subtitle: 'Y9-7055',
                fromText: 'تهران',
                fromValue: 'THR',
                toText: 'کیش',
                toValue: 'KIH',
                start: '11:00',
                end: '13:30',
                duration: '2 ساعت و 30 دقیقه',
                stops: ['QZV', 'MHD'],
              },
            ],
            price: {
              adult: 920000,
              child: 860000,
              infant: 510000,
            },
            remaining: 6,
            tags: [
              {
                text: 'اکونومی',
                class: 'bg-emerald-500 text-white',
              },
              {
                text: 'سیستمی',
                class: 'border',
              },
            ],
          },
        },
      },
    ]);

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
