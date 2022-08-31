import { Component, OnInit } from '@angular/core';
import moment from 'jalali-moment';

@Component({
  selector: 'app-me-profile',
  templateUrl: './me-profile.component.html',
  styleUrls: ['./me-profile.component.scss'],
})
export class MeProfileComponent implements OnInit {
  public get Days(): number[] {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  }

  public get Months(): string[] {
    const locale = moment.localeData('fa');
    return locale.jMonths();
  }

  public get Years(): number[] {
    const year = moment().jYear();
    return Array.from({ length: 100 }, (_, i) => year - i);
  }

  constructor() {}

  ngOnInit(): void {}
}
