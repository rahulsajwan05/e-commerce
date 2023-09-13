import { Component, OnInit } from '@angular/core';
import { order } from 'src/assets/interfaces/order';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  
  orderData:order[]|undefined;
  constructor(private _productService:AadProductService){

  }
  
  ngOnInit(): void {
    this.getOrderList();
  }

  cancelOrder(orderId:number|undefined){
     orderId && this._productService.cancelOrder(orderId).subscribe((result)=>{
        this.getOrderList();
    })
  }

  getOrderList(){
    this._productService.orderList().subscribe((result)=>{
      this.orderData=result;
     })
  }
}
