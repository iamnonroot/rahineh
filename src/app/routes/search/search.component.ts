import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterResultComponent } from 'src/app/components/result/filter-result/filter-result.component';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';
import { DynamicComponentComponent } from 'projects/dynamic-component/src/lib/dynamic-component/dynamic-component.component';
import { ResultService } from 'src/app/services/result/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('search')
  private dcSearch!: DynamicComponentComponent;

  constructor(
    public Result: ResultService,
    private app: AppService,
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private searchFlightIran: SearchFlightIranService
  ) {}

  ngOnInit(): void {
    this.app.SetBottomNavBarHidden(true);
    this.router.events.subscribe(() => this.makeResultFromSearch());
    setTimeout(() => {
      this.makeResultFromSearch();
    }, 0);
  }

  ngOnDestroy(): void {
    this.app.SetBottomNavBarHidden(false);
  }

  public OpenFilter() {
    this.bottomSheet.open(FilterResultComponent);
  }

  private searchForFlightIran() {
    const param = this.searchFlightIran.ConvertLiveSearchToParamSearch();

    this.searchFlightIran.Search(param).subscribe({
      next: (res) => {
        this.Result.EndTimer();
        this.Result.Loading = false;
        this.Result.SetResults(res.flights);
        if (this.Result.Results.length == 0) return;
        else this.makeSearchResultForFlightIran();
      },
    });
  }

  private makeSearchResultForFlightIran() {
    this.dcSearch.layouts =
      this.searchFlightIran.ConvertSearchResultToDynamicComponent(
        this.Result.Results
      );
    this.dcSearch.make();
  }

  private makeResultFromSearch() {
    if (this.Result.Loading == true) return;
    this.Result.StartTimer();
    this.Result.Loading = true;
    switch (this.Result.Type) {
      case 'flight-iran':
        this.searchForFlightIran();
        break;

      default:
        break;
    }
  }
}
