import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPassengerComponent } from 'src/app/dialog/me/dialog-passenger/dialog-passenger.component';
import { ReverseDefaultPassenger } from 'src/app/services/reserve/reverse.default';
import { IReservePassenger } from 'src/app/services/reserve/reverse.interface';

@Component({
  selector: 'app-me-passenger',
  templateUrl: './me-passenger.component.html',
  styleUrls: ['./me-passenger.component.scss'],
})
export class MePassengerComponent implements OnInit {
  public Passengers: IReservePassenger[] = [];
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public AddPassenger() {
    this.dialog
      .open(DialogPassengerComponent)
      .afterClosed()
      .subscribe((type) => {
        if (type) {
          this.Passengers.push(ReverseDefaultPassenger(type));
        }
      });
  }

  public RemovePassengerByIndex(index: number) {
    this.Passengers.splice(index, 1);
  }
}
