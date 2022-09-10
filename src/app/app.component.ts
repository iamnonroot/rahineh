import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'w-screen h-full flex flex-col',
  },
})
export class AppComponent implements OnInit {
  constructor(public App: AppService) {}

  ngOnInit(): void {}
}
