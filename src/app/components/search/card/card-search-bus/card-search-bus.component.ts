import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchQueryService } from 'src/app/services/search-query/search-query.service';
import { SearchBusService } from 'src/app/services/search/bus/bus.service';

@Component({
  selector: 'app-card-search-bus',
  templateUrl: './card-search-bus.component.html',
  styleUrls: ['./card-search-bus.component.scss'],
  host: {
    class: 'flex flex-col p-4 gap-4',
  },
})
export class CardSearchBusComponent implements OnInit {
  public Errors: string[] = [];

  constructor(
    public Search: SearchBusService,
    private Query: SearchQueryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public Submit() {
    const { valid, value, errors } = this.Search.Validate();
    this.Errors = [];
    if (valid) {
      const { pathname, query } = this.Query.ConvertToQuery(
        'bus',
        value.ways,
        'go',
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
