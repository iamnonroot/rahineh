import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDefaultTypes } from 'src/app/services/search/search/search.default';
import { TLiveSearchType } from 'src/app/services/search/search/search.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public Type: TLiveSearchType | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.setType();
    }, 0);
    this.router.events.subscribe(() => this.setType());
  }

  private setType() {
    const params = this.route.snapshot.params['type'];

    if (SearchDefaultTypes.includes(params)) {
      this.Type = params;
    } else {
      this.Type = 'flight-iran';
    }

    console.log(this.Type);
  }
}
