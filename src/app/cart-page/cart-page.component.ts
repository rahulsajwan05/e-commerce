import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addProduct, cart, priceSummary } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';
import {faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cartData: cart[] | undefined;
  icon=faTrash;
  // userId:undefined|number;
  // cartData: addProduct[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }
  constructor(private _productService: AadProductService, private _router: Router) {

  }

  ngOnInit(): void {
    console.warn("ngonit working");

    if (localStorage.getItem('user')) {
      this.loadDetails();
    } else {
      let localCart = JSON.parse(localStorage.getItem('localCart')!);
      this.cartData = localCart
      console.warn(localCart);
    }

    let cartDatas=localStorage.getItem('localCart');
    if(cartDatas){
      this.cartData= JSON.parse(cartDatas)
    }
    console.warn(this.cartData);
    this._productService.cartDataLocal.subscribe((items)=>{
      console.warn("working header cart");
      this.cartData=items;
    });
  
    // this._productService.cartDatas.subscribe((items)=>{
    //   console.warn("working header cart new");
    //   this.cartData=items;
    // });



  }

  loadDetails() {
    if (localStorage.getItem('user')) {
      this._productService.currentCart().subscribe((result) => {
        this.cartData = result;
        console.warn(this.cartData);

        let price = 0;
        result.forEach((items) => {
          if (items.quantity) {
            price = price + (+items.price * +items.quantity)
          }
        })
        console.warn(price);

        this.priceSummary.price = price;
        this.priceSummary.discount = price / 10;
        this.priceSummary.tax = price / 10;
        this.priceSummary.delivery = 100;
        this.priceSummary.total = price + (price / 10) + 100 - (price / 10);

        if (this.cartData.length === 0) {
          this._router.navigate(['/'])
        }
      });
    } 
    else {
      this._productService.getLocalCartData();
    }
  }

  removeToCart(cartId: number | undefined) {
  
    if (!localStorage.getItem('user')) {
      cartId && this._productService.removeToLocalCurrentCart(cartId);
      this.loadDetails();
    } else {
      cartId && this._productService.removeToCart(cartId).subscribe((result) => {
        console.warn(result);
        if(result){
          let user = localStorage.getItem('user');
          let userId= user && JSON.parse(user).id;
          this._productService.getCartList(userId);
          this.loadDetails();
        }
      });
    }
  }

  checkOut() {
    this._router.navigate(['/checkout'])
  }

}
