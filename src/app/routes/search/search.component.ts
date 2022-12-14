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
import { TCalendaringFormatter } from 'calendaring/dist/interface';
import { SearchService } from 'src/app/services/search/search/search.service';

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
  public Format: TCalendaringFormatter = 'jalali';

  constructor(
    public Result: ResultService,
    private search: SearchService,
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
            this.makeResultFromSearch(false, false);
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

  public CalendarChange(event: any) {
    switch (this.Result.Type) {
      case 'flight-iran':
        this.searchFlightIran.PushWayDate(event, this.Format);
        this.searchFlightIran.Event.next();
        break;

      default:
        break;
    }
  }

  public MakeDone() {
    console.timeEnd('render');
    this.Result.Loading = false;
  }

  private searchForFlightIran(withPrices: boolean = false) {
    console.time('fetch/search');
    const param = this.searchFlightIran.ConvertLiveSearchToParamSearch();
    this.Format = this.searchFlightIran.GetWayDateByStep(0)?.format!;

    let sub_search = this.searchFlightIran.Search(param).subscribe({
      next: (res) => {
        sub_search.unsubscribe();
        console.timeEnd('fetch/search');
        console.time('render');
        this.Result.EndTimer();
        this.Result.SetResults(res.status ? res.flights : []);
        if (this.Result.Results.length != 0) {
          // render filter
          this.searchFlightIran.Filter({
            airlines: res.airlines_details,
            flights: res.flights,
          });
        }

        if (withPrices) this.fetchPricesForFlightIran();

        this.makeSearchFlightIranResult();
      },
    });
  }

  private fetchPricesForFlightIran() {
    const param = this.searchFlightIran.ConvertLiveSearchToParamSearch();
    console.time('fetch/prices');
    let sub_price = this.searchFlightIran.Prices(param).subscribe({
      next: (res) => {
        sub_price.unsubscribe();
        console.timeEnd('fetch/prices');
        this.Prices = res.status ? res.prices : [];
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

  private makeResultFromSearch(
    force: boolean = false,
    withPrices: boolean = true
  ) {
    if (this.Result.Loading == true && force == false) return;
    this.Result.StartTimer();
    this.Result.Loading = true;
    this.filter.Clear();
    switch (this.Result.Type) {
      case 'flight-iran':
        this.searchForFlightIran(withPrices);
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
