import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result/result.service';

@Component({
  selector: 'app-header-result',
  templateUrl: './header-result.component.html',
  styleUrls: ['./header-result.component.scss'],
})
export class HeaderResultComponent implements OnInit {
  public ActiveCalendar: number = 0;

  constructor(public Result: ResultService) {}

  ngOnInit(): void {}
}
