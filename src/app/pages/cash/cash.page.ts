import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.page.html',
  styleUrls: ['./cash.page.scss'],
})
export class CashPage implements OnInit {

  constructor(    private router: Router) { }

  ngOnInit() {
  }
  cash() {
    this.router.navigateByUrl("address")
  }

}
