import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from 'src/assets/interfaces/add-product';
import { order } from 'src/assets/interfaces/order';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  
  totalPrice:number| undefined;
  cartData:cart[]|undefined;
  constructor(private _productService:AadProductService , private _router:Router){

  }
  ngOnInit(): void {
    this._productService.currentCart().subscribe((result)=>{
      let price= 0;
      this.cartData=result;
      result.forEach((items)=>{
       if(items.quantity){
         price = price + (+items.price * +items.quantity)
       }
      })
      console.warn(price);
      
       this.totalPrice=price+(price/10)+100 - (price/10);
       console.warn(this.totalPrice);
       
     })
  }
  
  orderNow(data:{email:string,address:string,contact:string,PurchaseNameFirstName:string,PurchaseNameLastName:string,pincode:string}){
    console.warn(data);
    let user = localStorage.getItem('user');
    let userid = user && JSON.parse(user).id;

    if(this.totalPrice){
      let orderData:order={
        ...data,
        totalPrice: this.totalPrice,
        userId: userid,
        id: undefined,
      }

      this.cartData?.forEach((item)=>{
        setTimeout(() => {
         item.id && this._productService.deleteCartItems(item.id)
        }, 600);

      })
      this._productService.orderNow(orderData).subscribe((result)=>{
        if(result){
          alert("Order has been placed")
          this._router.navigate(["my-order"])

        }
      })
    }
  }

}
