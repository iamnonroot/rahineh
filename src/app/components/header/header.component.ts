import { Component, Input, OnInit } from '@angular/core';
import { HeaderLinks, IHeaderLink } from 'src/app/database/components/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  public hidden: boolean = false;

  public HeaderLinks: IHeaderLink[] = HeaderLinks;
  constructor() {}

  ngOnInit(): void {}
}
