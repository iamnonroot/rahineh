import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';

@Component({
  selector: 'app-reserve-description',
  templateUrl: './reserve-description.component.html',
  styleUrls: ['./reserve-description.component.scss'],
})
export class ReserveDescriptionComponent implements OnInit {
  constructor(public Reserve: ReserveService) {}

  ngOnInit(): void {}
}
