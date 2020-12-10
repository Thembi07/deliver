import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
name;
surname;
email;
password;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  signUp(){

    console.log(this.name);
    console.log(this.surname);
    console.log(this.email);
    console.log(this.password);
    this.router.navigateByUrl("login")

  }

  

}
