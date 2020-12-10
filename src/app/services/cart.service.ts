import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// export interface product{
//   id: number;
//   name: string;
//   price: number;
//   amount: number;

// }
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList = [];
 products = [
    { id: 0, name: 'americano', price:15.99, desc:'coffee with extra milk', url:'./assets/images/americano.jpg' },
    { id: 1, name: 'espresso', price: 14.99, desc:'coffee with extra milk', url:'./assets/images/espresso.png'},
    { id: 2, name: 'latte', price: 14.99, desc:'coffee with extra milk', url:'./assets/images/latte.jpg'},
    { id: 3, name: 'cappuccino', price: 16.99, desc:'coffee with extra milk', url:'./assets/images/cappuccino.jpg' },
    { id: 4, name: 'iced latte', price: 13.99, desc:'coffee with extra milk', url:'./assets/images/iced.jpg' },
    { id: 5, name: 'ice coffee', price: 12.99, desc:'coffee with extra milk', url:'./assets/images/iced-cof.jpg'},
    { id: 6, name: 'blueberry ', price: 11.99, desc:'coffee with extra milk', url:'./assets/images/blueberry muf.png'},
    { id: 7, name: 'choc muffin', price: 12.99, desc:'coffee with extra milk', url:'./assets/images/chocolate cupcake.png' },
    { id: 6, name: 'blueberry ', price: 11.99, desc:'with blueberries', url:'./assets/images/blueberry muf.png'},
    { id: 7, name: 'choc muffin', price: 12.99, desc:'with choc chips', url:'./assets/images/chocolate cupcake.png' },
  ];

  
  // private cart = [];
  // private cartItemCount = new BehaviorSubject(0);
 


  constructor() { }

  addToCart(product){
    this.cartList.push(product);
   }
 
   removeItem(product){
     var i = 0;
    while(i < this.cartList.length){
     if(this.cartList[i] === product){
       this.cartList.splice(i, 1);
     }else{
       ++i;
     }
   }
   return this.cartList;
  }
  getCart() {
   return this.cartList;
 }
 getProducts() {
   return this.products;
 }

  // getProducts() {
  //   return this.data;
  // }
  
  // getCart() {
  //   return this.cart;
  // }
  // getCartItemCount() {
  //   return this.cartItemCount;
  // }

  // addProduct(product) {
  //   let added = false;
  //   for (let p of this.cart) {
  //     if (p.id === product.id) {
  //       p.amount += 1;
  //       added = true;
  //       break;
  //     }
  //   }
  //   if (!added) {
  //     product.amount = 1;
  //     this.cart.push(product);
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value + 1);
  // }
 
  // decreaseProduct(product) {
  //   for (let [index, p] of this.cart.entries()) {
  //     if (p.id === product.id) {
  //       p.amount -= 1;
  //       if (p.amount == 0) {
  //         this.cart.splice(index, 1);
  //       }
  //     }
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value - 1);
  // }
 
  // removeProduct(product) {
  //   for (let [index, p] of this.cart.entries()) {
  //     if (p.id === product.id) {
  //       this.cartItemCount.next(this.cartItemCount.value - p.amount);
  //       this.cart.splice(index, 1);
  //     }
  //   }
  // }
}
