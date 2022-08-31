import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  constructor(private app: AppService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.app.SetHeaderHidden(true);
    }, 0);
  }

  ngOnDestroy(): void {
    this.app.SetHeaderHidden(false);
  }

}
