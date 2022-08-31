import { Injectable } from '@angular/core';
import moment from 'jalali-moment';

@Injectable({
  providedIn: 'root',
})
export class TikFunctionsService {
  constructor() {}

  public FormatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // this function open a browser new tab
  public OpenTab(url: string) {
    window.open(url, '_blank');
  }

  public Today(locale = 'fa'): moment.Moment {
    return moment().locale(locale);
  }

  public Copy(data: string): void {
    navigator.clipboard.writeText(data);
  }

  public Share(data: ShareData): void {
    if (navigator.canShare(data)) {
      navigator.share(data);
    }
  }

  public FormatTimer(timer = 0): string {
    if (timer === 0) return '00:00';
    else if (timer < 60) return `00:${timer < 10 ? '0' + timer : timer}`;
    else {
      const min = Math.floor(timer / 60),
        sec = Math.floor(timer % 60);
      return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
    }
  }

  public FormatPrice(amount: number | string) {
    let value = amount ? amount.toString() : '0';
    if (value == '0') return '0';
    value = value.replace(/\,/g, '');
    var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
    while (objRegex.test(value)) {
      value = value.replace(objRegex, '$1,$2');
    }
    return value;
  }

  public FormatJalali(
    date: Date | number | string = Date.now(),
    format: string = 'jYYYY/jMM/jDD'
  ) {
    return moment(date).locale('fa').format(format);
  }

  // https://stackoverflow.com/a/9873379/15072588
  public FormatTimeAgo(date: Date | number | string = Date.now()) {
    if (!date) return ' لحظاتی پیش';
    var seconds = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 1000
    );
    if (isNaN(seconds)) return ' لحظاتی پیش';

    var interval = seconds / 31536000;

    if (interval > 1) {
      return `${Math.floor(interval)}  سال پیش`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)}  ماه پیش`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return `${Math.floor(interval)}  روز پیش`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)}  ساعت پیش`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)}  دقیقه پیش`;
    }
    return `${Math.floor(seconds)}  ثانیه پیش`;
  }
}
