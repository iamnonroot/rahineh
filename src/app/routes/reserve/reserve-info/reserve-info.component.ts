import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    public Reserve: ReserveService,
    public Result: ResultService,
    private location: Location,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public Back() {
    this.location.back();
  }

  public Submit() {
    if (this.Reserve.ValidatePassengers()) {
      this.router.navigate(['/reserve/submit'], {
        queryParams: {
          id: this.Result.Selected!.refrenceId,
          type: this.Result.Type,
          adult: this.Reserve.CountPassengerByType('adult'),
          child: this.Reserve.CountPassengerByType('child'),
          infant: this.Reserve.CountPassengerByType('infant'),
        },
      });
    } else {
      this.snackbar.open('اطلاعات مسافر را کامل وارد نشده است', 'باشه', {
        duration: 3000,
        direction: 'rtl',
      });
    }
  }

  public TitleByType(type: TReservePassengerType, index: number): string {
    if (type == 'adult') return `بزرگسال  / ${index + 1}`;
    else if (type == 'child') return `کودک / ${index + 1}`;
    else if (type == 'infant') return `نوزاد / ${index + 1}`;
    else return '';
  }
}
