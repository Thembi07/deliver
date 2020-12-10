import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email;
  password;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
    this.router.navigateByUrl("tabs/menu")

  }

  signUp() {
    this.router.navigateByUrl("sign-up")
  }




}
