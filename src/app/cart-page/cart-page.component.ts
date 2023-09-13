import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart, priceSummary } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit{

  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price:0,
    discount:0,
    tax:0,
    delivery:0,
    total:0
}
  constructor(private _productService:AadProductService , private _router:Router){

  }
  
  ngOnInit(): void {
   this.loadDetails();
  }

  loadDetails(){
    this._productService.currentCart().subscribe((result)=>{
      this.cartData=result;
      let price= 0;
      result.forEach((items)=>{
       if(items.quantity){
         price = price + (+items.price * +items.quantity)
       }
      })
      console.warn(price);
      
       this.priceSummary.price=price;
       this.priceSummary.discount=price/10;
       this.priceSummary.tax=price/10;
       this.priceSummary.delivery=100;
       this.priceSummary.total=price+(price/10)+100 - (price/10);
       
       if(this.cartData.length===0){
        this._router.navigate(['/'])
       }
     });
  }

  removeToCart(cartId:number|undefined){
    cartId && this._productService.removeToCart(cartId).subscribe((result)=>{
      this.loadDetails(); 
   });
  }

  checkOut(){
    this._router.navigate(['/checkout'])
  }

}
