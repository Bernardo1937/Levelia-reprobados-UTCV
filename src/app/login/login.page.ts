import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  goToRegister() {
    console.log('Ir a registro');
  }
}
