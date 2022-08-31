import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-phone',
  templateUrl: './auth-phone.component.html',
  styleUrls: ['./auth-phone.component.scss'],
})
export class AuthPhoneComponent implements OnInit {
  public Loading: boolean = false;
  public Step: number = 0;

  // phone step / 0
  public Phone: string = '';

  // code step / 1
  public CodeLength: number = 6;
  public Code: string = '';
  public Timer: number = 120; // 2min = 120s
  private interval: any;

  constructor() {}

  ngOnInit(): void {}

  public ResendCode() {
    //
  }

  private startTimer() {
    this.Timer = 120;
    this.interval = setInterval(() => {
      if (this.Timer - 1 < 0) this.stopTimer();
      else this.Timer -= 1;
    }, 1000);
  }

  private stopTimer() {
    clearInterval(this.interval);
  }
}
