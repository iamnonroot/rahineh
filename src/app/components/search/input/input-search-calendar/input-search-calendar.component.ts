import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Calendaring } from 'calendaring';
import {
  ICalendaringDay,
  TCalendaringFormatter,
} from 'calendaring/dist/interface';
import moment from 'jalali-moment';
import { TikFunctionsService } from 'projects/utils/src/lib/services/functions/functions.service';
import { ILiveSearchWayDate } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-input-search-calendar',
  templateUrl: './input-search-calendar.component.html',
  styleUrls: ['./input-search-calendar.component.scss'],
})
export class InputSearchCalendarComponent implements OnInit {
  @Input()
  public type: 'departure' | 'return' = 'departure';

  @Input()
  public value: ILiveSearchWayDate | undefined;

  @Input()
  public error: boolean = false;

  @Output()
  public valueChange: EventEmitter<ILiveSearchWayDate> = new EventEmitter();

  @ViewChild(MatMenuTrigger) menu!: MatMenuTrigger;

  public Days: ICalendaringDay<DayValue | null>[] = [];
  public Calendars: { jalali: Week; gregorian: Week } = {
    jalali: {
      dir: 'rtl',
      class: '',
      week: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
      month: [
        'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور	',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند',
      ],
    },
    gregorian: {
      dir: 'ltr',
      class: 'text-en',
      week: ['Sat', 'Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri'],
      month: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
  };
  public Calendaring = new Calendaring();

  public Past!: DayValue;

  public get Calendar(): Week {
    if (this.Calendaring.Locale == 'fa') return this.Calendars.jalali;
    else return this.Calendars.gregorian;
  }

  public get Month(): string {
    return this.Calendar.month[this.Current!.month! - 1];
  }

  public get Year(): string {
    return this.Current!.year.toString();
  }

  public get Label(): string {
    return `${this.Year} ${this.Month}`;
  }

  public get Value(): string | undefined {
    if (this.Selected) {
      const { month, day } = this.Selected;
      return `${month <= 9 ? '0' + month : moment}/${
        day <= 9 ? '0' + day : day
      }`;
    } else return undefined;
  }

  public Current!: DateCurrent;
  public Selected!: DateCurrent;

  constructor(private functions: TikFunctionsService) {}

  ngOnInit(): void {
    this.today('jalali');
    if (this.value) {
      this.Selected = this.value;
      this.Current = this.value;
    } else {
      this.Current = {
        format: 'jalali',
        ...this.Past,
      };
    }
  }

  public CloseOnClickOutSide(): void {
    setTimeout(() => {
      const close = () => {
        this.menu.closeMenu();
        document.querySelector('app-root')?.removeEventListener('click', close);
      };

      document.querySelector('app-root')?.removeEventListener('click', close);
      document.querySelector('app-root')?.addEventListener('click', close);
    }, 50);
  }

  private today(format: TCalendaringFormatter = this.Current.format) {
    const today = this.functions.Today(format == 'jalali' ? 'fa' : 'en');
    this.Past = {
      day: today.date(),
      month: today.month() + 1,
      year: today.year(),
    };
  }

  public Generate() {
    this.Calendaring.SetFormatter(this.Current!.format);
    const { count, length, array } = this.Calendaring.Generate<DayValue>(
      this.Current!.year,
      this.Current!.month
    );
    this.Days = array;
    this.CloseOnClickOutSide();
  }

  public IsInPast(day: number): boolean {
    const { year, month } = this.Current!;
    if (year < this.Past.year) return true;
    else if (year == this.Past.year && month < this.Past.month) return true;
    else if (
      year == this.Past.year &&
      month == this.Past.month &&
      day < this.Past.day
    )
      return true;
    return false;
  }

  public IsSelectedDay(day: number): boolean {
    if (this.Selected) {
      const { year: cyear, month: cmonth } = this.Current!;
      const { year: syear, month: smonth, day: sday } = this.Selected!;
      if (cyear != syear || cmonth != smonth) return false;
      else return day == sday;
    }
    return false;
  }

  public SetDay(day: number) {
    if (day > 0) {
      this.Selected = {
        ...this.Current,
        day,
      };

      this.error = false;
      this.menu.closeMenu();
      this.valueChange.emit(this.Selected);
    }
  }

  public MonthBefore() {
    if (this.Current!.month - 1 == 0) {
      this.Current!.year -= 1;
      this.Current!.month = 12;
    } else {
      this.Current!.month -= 1;
    }
    this.Generate();
  }

  public MonthNext() {
    if (this.Current!.month + 1 == 13) {
      this.Current!.year += 1;
      this.Current!.month = 1;
    } else {
      this.Current!.month += 1;
    }

    this.Generate();
  }

  public ToggleFormatter() {
    const format: TCalendaringFormatter =
      this.Calendaring.Formatter == 'jalali' ? 'gregorian' : 'jalali';
    const today = this.functions.Today(format == 'jalali' ? 'fa' : 'en');

    this.Current = {
      format,
      year: today.year(),
      month: today.month() + 1,
      day: -1,
    };

    this.Current.day = -1;

    this.today();
    this.Generate();
  }
}

interface DayValue {
  year: number;
  month: number;
  day: number;
}

interface Week {
  dir: 'ltr' | 'rtl';
  class: string;
  week: string[];
  month: string[];
}

interface DateCurrent extends DayValue {
  format: TCalendaringFormatter;
}
