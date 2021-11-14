import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: any[] = [];

  constructor() { }

  addProductToCart(product:any) {
    this.cartProducts = [...this.cartProducts, product];
    console.log(this.cartProducts);
  }

  getCartProducts(){
    return this.cartProducts;
  }

  revomeProductFromCart(id: number){
    this.cartProducts = this.cartProducts.filter(product =>product.id !== id)
    
  }
}
