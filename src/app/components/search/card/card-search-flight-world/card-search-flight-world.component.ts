import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchQueryService } from 'src/app/services/search-query/search-query.service';
import { SearchFlightWorldService } from 'src/app/services/search/flight-world/flight-world.service';

@Component({
  selector: 'app-card-search-flight-world',
  templateUrl: './card-search-flight-world.component.html',
  styleUrls: ['./card-search-flight-world.component.scss'],
  host: {
    class: 'flex flex-col p-4 gap-4',
  },
})
export class CardSearchFlightWorldComponent implements OnInit {
  public Errors: string[] = [];

  constructor(
    public Search: SearchFlightWorldService,
    private Query: SearchQueryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public Submit() {
    const { valid, value, errors } = this.Search.Validate();
    this.Errors = [];
    if (valid) {
      const { pathname, query } = this.Query.ConvertToQuery(
        'flight-world',
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
