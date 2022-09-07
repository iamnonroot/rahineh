import { Component, OnInit } from '@angular/core';
import { ReserveService } from 'src/app/services/reserve/reserve.service';

@Component({
  selector: 'app-reserve-information',
  templateUrl: './reserve-information.component.html',
  styleUrls: ['./reserve-information.component.scss'],
})
export class ReserveInformationComponent implements OnInit {
  constructor(public Reserve: ReserveService) {}

  ngOnInit(): void {}
}
