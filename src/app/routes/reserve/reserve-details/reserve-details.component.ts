import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { ResultService } from 'src/app/services/result/result.service';
import { Location } from '@angular/common';
import { IResultItineraryItem } from 'src/app/services/result/result.interface';

@Component({
  selector: 'app-reserve-details',
  templateUrl: './reserve-details.component.html',
  styleUrls: ['./reserve-details.component.scss'],
})
export class ReserveDetailsComponent implements OnInit {
  public Injected!: Injected;

  constructor(
    public Reserve: ReserveService,
    public Result: ResultService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.Result.IsEmpty) {
      this.Back();
    }
    this.setInjected()
  }

  public Back() {
    this.location.back();
  }

  private setInjected() {
    this.Injected = {
      ...this.Result.Selected!,
      detailed: true,
    };
  }
}

interface Injected extends IResultItineraryItem {
  detailed: boolean;
}
