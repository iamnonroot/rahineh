import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterResultComponent } from 'src/app/components/result/filter-result/filter-result.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private app: AppService, private bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.app.SetBottomNavBarHidden(true);
  }

  ngOnDestroy(): void {
    this.app.SetBottomNavBarHidden(false);
  }

  public OpenFilter() {
    this.bottomSheet.open(FilterResultComponent);
  }
}
