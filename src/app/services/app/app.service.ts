import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public HeaderHidden: boolean = false;
  public BottomNavBarHidden: boolean = false;

  constructor() {}

  public SetHeaderHidden(value: boolean) {
    this.HeaderHidden = value;
  }

  public SetBottomNavBarHidden(value: boolean) {
    this.BottomNavBarHidden = value;
  }
}
