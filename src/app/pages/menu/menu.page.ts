import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  slideOps= {
    slidesPerView: 2,
    spaceBetween: 2,
   
  };
  cart = [];
  items = [];
  
    constructor(private cartService: CartService, private router: Router) { }
  
    ngOnInit() {
      this.items = this.cartService.getProducts();
      this.cart = this.cartService.getCart();
    }
    add(product){
      this.cartService.addToCart(product);
       console.log(this.cartService.getCart());
    }

  goCart(){
     this.router.navigateByUrl('tabs/cart');
  }
}
