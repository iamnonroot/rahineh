import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { ResultService } from 'src/app/services/result/result.service';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';
import { SearchDefaultTypes } from 'src/app/services/search/search/search.default';
import {
  ILiveSearchPassenger,
  TLiveSearchType,
} from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-reserve-layout',
  templateUrl: './reserve-layout.component.html',
  styleUrls: ['./reserve-layout.component.scss'],
})
export class ReserveLayoutComponent implements OnInit {
  public Validated: boolean | undefined = undefined;

  constructor(
    private result: ResultService,
    private reserve: ReserveService,
    private route: ActivatedRoute,
    private location: Location,
    private searchFlightIran: SearchFlightIranService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.validateId();
    }, 0);
  }

  public Back() {
    this.location.back();
  }

  private validateId() {
    // clear reserve form
    this.reserve.Clear();
    //
    const { id, type, adult, child, infant } = this.route.snapshot.queryParams;
    if (!id || !type || SearchDefaultTypes.includes(type) == false) {
      this.Back();
    } else {
      const passenger: ILiveSearchPassenger = {
        adult: Number(adult) ?? 1,
        child: Number(child) ?? 0,
        infant: Number(infant) ?? 0,
      };
      switch (type as TLiveSearchType) {
        case 'flight-iran':
          this.searchFlightIran.Revalidate(id).subscribe({
            next: (res) => {
              this.Validated = res.status == true && res.itinerary != undefined;
              if (res.status && res.itinerary) {
                this.result.Selected = res.itinerary;
                this.result.Type = type;
                this.reserve.SetPassengersByCount(passenger);
              }
            },
          });
          break;

        default:
          break;
      }
    }
  }
}
