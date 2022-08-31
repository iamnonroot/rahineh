import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mat-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  host: {
    class: 'flex flex-nowrap items-center gap-4',
  },
})
export class BreadcrumbsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
