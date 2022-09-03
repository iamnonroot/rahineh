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
    private app: AppService,
    private bottomSheet: MatBottomSheet,
    private router: Router,
    private result: ResultService,
    private searchFlightIran: SearchFlightIranService
  ) {}

  ngOnInit(): void {
    this.app.SetBottomNavBarHidden(true);
    this.makeResultFromSearch();
    this.router.events.subscribe(() => this.makeResultFromSearch());
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
        console.log(res);
      },
    });
  }

  private makeResultFromSearch() {
    switch (this.result.Type) {
      case 'flight-iran':
        this.searchForFlightIran();
        break;

      default:
        break;
    }
  }
}
