import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';
import { SellerService } from 'src/assets/services/seller-service/seller.service';

@Component({
  selector: 'app-seller-product-update',
  templateUrl: './seller-product-update.component.html',
  styleUrls: ['./seller-product-update.component.scss']
})
export class SellerProductUpdateComponent implements OnInit{
  
  productData:addProduct | undefined;
  productMessage:undefined|string;
  constructor(private _activateRouter : ActivatedRoute, private _productService:AadProductService){

  }

  ngOnInit(): void {
    let productId = this._activateRouter.snapshot.paramMap.get('id')
    productId && this._productService.getProduct(productId).subscribe((data) =>{
      this.productData=data;
      console.log(this.productData)
    });
  }

  update(data:addProduct){
    // let productId = this._activateRouter.snapshot.paramMap.get('id')
    if(this.productData){

      data.id=this.productData.id
    }
  
    this._productService.updateProduct(data).subscribe((result) =>{
    console.log(result)
      console.log(this.productData)
      
      if(result){
        this.productMessage="Product added successfully";
      }
    })
    setTimeout(()=>{
      this.productMessage=undefined;
    },3000)
  }      

}
