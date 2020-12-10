import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

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
