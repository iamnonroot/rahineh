import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-header-reserve',
  templateUrl: './header-reserve.component.html',
  styleUrls: ['./header-reserve.component.scss'],
})
export class HeaderReserveComponent implements OnInit {
  @Input()
  public step: number = 0;

  public Steps: Step[] = [
    {
      icon: 'done',
      text: 'انتخاب',
    },
    {
      icon: 'luggage',
      text: 'مشخصات سفر',
      link: '/reserve/details',
    },
    {
      icon: 'groups',
      text: 'مشخصات مسافرین',
      link: '/reserve/info',
    },
    {
      icon: 'checklist',
      text: 'تایید اطلاعات',
      link: '/reserve/submit',
    },
    {
      icon: 'credit_card',
      text: 'پرداخت',
      link: '/',
    },
    {
      icon: 'confirmation_number',
      text: 'صدور',
      link: '/',
    },
  ];

  constructor(private result: ResultService, private location: Location) {}

  ngOnInit(): void {
    if (this.result.IsEmpty == false) {
      const start = this.result.Selected!.ways[0].fromValue;
      const end =
        this.result.Selected!.ways[this.result.Selected!.ways.length - 1]
          .toValue;
      this.Steps[0].subtext = `${start}-${end}`;
      const link = '/' + document.referrer.split('/').slice(3).join('/');
    }
  }

  public Back() {
    this.location.back();
  }
}

interface Step {
  icon: string;
  text: string;
  subtext?: string;
  link?: string;
}
