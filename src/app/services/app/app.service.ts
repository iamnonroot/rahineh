import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public HeaderHidden: boolean = false;
  constructor() {}

  public SetHeaderHidden(value: boolean) {
    this.HeaderHidden = value;
  }
}
