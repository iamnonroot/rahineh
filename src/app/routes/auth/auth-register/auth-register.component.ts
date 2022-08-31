import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent implements OnInit {
  public ShowPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
