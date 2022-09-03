import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterResultComponent } from 'src/app/components/result/filter-result/filter-result.component';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';
import { HttpClient } from '@angular/common/http';
import { DynamicComponentComponent } from 'projects/dynamic-component/src/lib/dynamic-component/dynamic-component.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('search')
  private dcSearch!: DynamicComponentComponent;

  constructor(
    private app: AppService,
    private bottomSheet: MatBottomSheet,
    private http: HttpClient,
    private searchFlightIran: SearchFlightIranService
  ) {}

  ngOnInit(): void {
    this.app.SetBottomNavBarHidden(true);
  }

  ngOnDestroy(): void {
    this.app.SetBottomNavBarHidden(false);
  }

  public OpenFilter() {
    this.bottomSheet.open(FilterResultComponent);
  }

  private makeResultFromSearch() {
    this.http.get('');
  }
}
