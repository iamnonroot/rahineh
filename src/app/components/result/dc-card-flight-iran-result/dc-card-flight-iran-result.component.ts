import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFlightIranComponent } from 'src/app/dialog/result/dialog-flight-iran/dialog-flight-iran.component';
import { IResultItineraryItem } from 'src/app/services/result/result.interface';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-dc-card-flight-iran-result',
  templateUrl: './dc-card-flight-iran-result.component.html',
  styleUrls: ['./dc-card-flight-iran-result.component.scss'],
})
export class DcCardFlightIranResultComponent implements OnInit {
  @Input('injected')
  public Injected!: DcCardFlightIranResultInjected;

  constructor(private dialog: MatDialog, private result: ResultService) {}

  ngOnInit(): void {}

  public OpenMoreDialog() {
    this.dialog.open(DialogFlightIranComponent, {
      data: {
        injected: this.Injected,
      },
      minWidth: 680,
      maxWidth: 680
    });
  }

  public Select() {
    this.result.Select(this.Injected!);
  }
}

export interface DcCardFlightIranResultInjected extends IResultItineraryItem {}
