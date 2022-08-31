import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { TReservePassengerType } from 'src/app/services/reserve/reverse.interface';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-reserve-info',
  templateUrl: './reserve-info.component.html',
  styleUrls: ['./reserve-info.component.scss'],
})
export class ReserveInfoComponent implements OnInit {
  constructor(
    public Reverse: ReserveService,
    public Result: ResultService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.Result.IsEmpty) {
      this.Back();
    }
  }

  public Back() {
    this.location.back();
  }

  public TitleByType(type: TReservePassengerType, index: number): string {
    if (type == 'adult') return `بزرگسال  / ${index + 1}`;
    else if (type == 'child') return `کودک / ${index + 1}`;
    else if (type == 'infant') return `نوزاد / ${index + 1}`;
    else return '';
  }
}
