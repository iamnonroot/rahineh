import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from 'src/app/services/result/result.service';
import { SearchDefaultTypes } from 'src/app/services/search/search/search.default';
import { TLiveSearchType } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public Result: ResultService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.setType();
    }, 0);
    this.router.events.subscribe(() => this.setType());
  }

  private setType() {
    const params = this.route.snapshot.params['type'];

    if (SearchDefaultTypes.includes(params)) {
      this.Result.Type = params;
    } else {
      this.Result.Type = 'flight-iran';
    }
  }
}
