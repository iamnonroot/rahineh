import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';

@Component({
  selector: 'app-passenger-header',
  templateUrl: './passenger-header.component.html',
  styleUrls: ['./passenger-header.component.scss'],
})
export class PassengerHeaderComponent implements OnInit {
  constructor(public Reserve: ReserveService) {}

  public get Subtitle(): string {
    let value: string[] = [];

    const count = this.Reserve.CountPassengers();

    if (count!.adult) value.push(`${count.adult} بزرگسال`);
    if (count!.child) value.push(`${count.child} کودک`);
    if (count!.infant) value.push(`${count.infant} نوزاد`);

    return value.join(' و ');
  }

  ngOnInit(): void {}
}
