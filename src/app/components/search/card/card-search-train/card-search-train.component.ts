import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchQueryService } from 'src/app/services/search-query/search-query.service';
import { SearchTrainService } from 'src/app/services/search/train/train.service';

@Component({
  selector: 'app-card-search-train',
  templateUrl: './card-search-train.component.html',
  styleUrls: ['./card-search-train.component.scss'],
  host: {
    class: 'flex flex-col p-4 gap-4',
  },
})
export class CardSearchTrainComponent implements OnInit {
  public Errors: string[] = [];

  constructor(
    public Search: SearchTrainService,
    private Query: SearchQueryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public Submit() {
    const { valid, value, errors } = this.Search.Validate();
    this.Errors = [];
    if (valid) {
      const { pathname, query } = this.Query.ConvertToQuery(
        'train',
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
