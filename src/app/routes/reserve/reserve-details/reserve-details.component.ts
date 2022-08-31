import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { ResultService } from 'src/app/services/result/result.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reserve-details',
  templateUrl: './reserve-details.component.html',
  styleUrls: ['./reserve-details.component.scss'],
})
export class ReserveDetailsComponent implements OnInit {
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
}
