import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchQueryService } from 'src/app/services/search-query/search-query.service';
import { SearchFlightIranService } from 'src/app/services/search/flight-iran/flight-iran.service';

@Component({
  selector: 'app-card-search-flight-iran',
  templateUrl: './card-search-flight-iran.component.html',
  styleUrls: ['./card-search-flight-iran.component.scss'],
  host: {
    class: 'flex flex-col p-4 gap-2',
  },
})
export class CardSearchFlightIranComponent implements OnInit {
  @Input()
  public expansionable: boolean = false;

  @Input()
  public disabled: boolean = false;

  public opened: boolean = false;

  public Errors: string[] = [];

  constructor(
    public Search: SearchFlightIranService,
    private Query: SearchQueryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.opened = !this.expansionable;
  }

  public Submit() {
    const { valid, value, errors } = this.Search.Validate();
    this.Errors = [];
    if (valid) {
      const { pathname, query } = this.Query.ConvertToQuery(
        'flight-iran',
        value.ways,
        value.wayType,
        value.passengers
      );

      this.router.navigate([pathname], { queryParams: query });
    } else {
      for (let item of errors) {
        this.Errors.push(`${item.type}/${item.step}`);
      }
    }
  }
}
