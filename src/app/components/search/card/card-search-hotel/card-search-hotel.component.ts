import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchQueryService } from 'src/app/services/search-query/search-query.service';
import { SearchHotelService } from 'src/app/services/search/hotel/hotel.service';

@Component({
  selector: 'app-card-search-hotel',
  templateUrl: './card-search-hotel.component.html',
  styleUrls: ['./card-search-hotel.component.scss'],
  host: {
    class: 'flex flex-col p-4 gap-4',
  },
})
export class CardSearchHotelComponent implements OnInit {
  public Errors: string[] = [];

  constructor(
    public Search: SearchHotelService,
    private Query: SearchQueryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public Submit() {
    // const { valid, value, errors } = this.Search.Validate();
    // this.Errors = [];
    // if (valid) {
    //   const { pathname, query } = this.Query.ConvertToQuery(
    //     'hotel',
    //     value.ways,
    //     'go',
    //     value.passengers
    //   );
    //   this.router.navigate([pathname], { queryParams: query });
    // } else {
    //   for (let item of errors) {
    //     this.Errors.push(`${item.type}/${item.step}`);
    //   }
    // }
  }
}
