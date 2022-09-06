import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FilterResultComponent } from 'src/app/components/result/filter-result/filter-result.component';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';
import { DynamicComponentComponent } from 'projects/dynamic-component/src/lib/dynamic-component/dynamic-component.component';
import { ResultService } from 'src/app/services/result/result.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/services/filter/filter.service';
import { ISearchPrice } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('search')
  private dcSearch!: DynamicComponentComponent;

  private subscription!: Subscription;

  public OpenedFilter: boolean = false;
  public Prices: ISearchPrice[] = [];

  constructor(
    public Result: ResultService,
    private app: AppService,
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private filter: FilterService,
    private searchFlightIran: SearchFlightIranService
  ) {}

  ngOnInit(): void {
    this.app.SetBottomNavBarHidden(true);
    this.subscription = new Subscription();
    this.subscription.add(
      this.router.events.subscribe(() => {
        setTimeout(() => {
          if (this.router.url.startsWith('/search'))
            this.makeResultFromSearch();
        }, 20);
      })
    );
    this.subscription.add(
      this.filter.Change.subscribe(() => {
        this.makeSearchResult();
      })
    );
    setTimeout(() => {
      this.makeResultFromSearch(true);
    }, 0);
  }

  ngOnDestroy(): void {
    this.app.SetBottomNavBarHidden(false);
    this.subscription.unsubscribe();
  }

  public OpenFilter() {
    this.bottomSheet.open(FilterResultComponent);
  }

  public MakeDone() {
    this.Result.Loading = false;
  }

  private searchForFlightIran() {
    const param = this.searchFlightIran.ConvertLiveSearchToParamSearch();

    this.searchFlightIran.Prices(param).subscribe({
      next: (res) => {
        this.Prices = res.status ? res.prices : [];
      },
    });

    this.searchFlightIran.Search(param).subscribe({
      next: (res) => {
        this.Result.EndTimer();
        this.Result.SetResults(res.status ? res.flights : []);
        if (this.Result.Results.length != 0) {
          // render filter
          this.searchFlightIran.Filter({
            airlines: res.airlines_details,
            flights: res.flights,
          });
        }

        this.makeSearchFlightIranResult();
      },
    });
  }

  private makeSearchFlightIranResult() {
    // render results
    this.dcSearch.layouts =
      this.searchFlightIran.ConvertSearchResultToDynamicComponent(
        this.Result.Results
      );

    this.dcSearch.make();
  }

  private makeResultFromSearch(force: boolean = false) {
    if (this.Result.Loading == true && force == false) return;
    this.Result.StartTimer();
    this.Result.Loading = true;
    this.filter.Clear();
    switch (this.Result.Type) {
      case 'flight-iran':
        this.searchForFlightIran();
        break;

      default:
        break;
    }
  }

  private makeSearchResult() {
    switch (this.Result.Type) {
      case 'flight-iran':
        this.makeSearchFlightIranResult();
        break;

      default:
        break;
    }
  }
}
