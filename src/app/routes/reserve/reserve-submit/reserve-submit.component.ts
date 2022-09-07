import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { ResultService } from 'src/app/services/result/result.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';
import { TikFunctionsService } from 'projects/utils/src/lib/services/functions/functions.service';

@Component({
  selector: 'app-reserve-submit',
  templateUrl: './reserve-submit.component.html',
  styleUrls: ['./reserve-submit.component.scss'],
})
export class ReserveSubmitComponent implements OnInit {
  public Loading: boolean = false;

  constructor(
    public Reserve: ReserveService,
    public Result: ResultService,
    private location: Location,
    private router: Router,
    private snackbar: MatSnackBar,
    private functions: TikFunctionsService,
    private searchFlightIran: SearchFlightIranService
  ) {}

  ngOnInit(): void {}

  public Back() {
    this.location.back();
  }

  public Submit() {
    if (!this.Reserve.ValidatePassengers()) {
      this.snackbar.open('اطلاعات مسافر را کامل وارد نشده است', 'باشه', {
        duration: 3000,
        direction: 'rtl',
      });
      this.Back();
      return;
    }

    if (this.Reserve.ValidateInformation()) {
      switch (this.Result.Type) {
        case 'flight-iran':
          this.Loading = true;
          this.searchFlightIran
            .Issue({
              passengers: this.Reserve.Passengers,
              information: this.Reserve.Information,
              description: this.Reserve.Description,
              refrenceId: this.Result.Selected!.refrenceId,
            })
            .subscribe((res) => {
              this.Loading = false;
              if (res.status) {
                this.snackbar.open('در حال انتقال به درگاه پرداخت', '', {
                  direction: 'rtl',
                });
                this.functions.OpenTab(res.reserved.redirect);
              } else {
                this.snackbar.open('خطایی در رزرو رخ داد', 'باشه', {
                  duration: 3000,
                  direction: 'rtl',
                });
              }
            });
          break;

        default:
          break;
      }
    } else {
      this.snackbar.open('اطلاعات خریدار را کامل وارد کنید', 'باشه', {
        duration: 3000,
        direction: 'rtl',
      });
    }
  }
}
