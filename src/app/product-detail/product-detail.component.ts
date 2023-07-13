import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  
  productData: undefined|addProduct;
  productQuantity: number =1;
  constructor(private _activateRouter:ActivatedRoute, private _router:Router, private _productService: AadProductService){

  }

  ngOnInit(): void {
    let productId= this._activateRouter.snapshot.paramMap.get('productId');
    productId && this._productService.getProduct(productId).subscribe((result)=>{
      console.warn(result);
      this.productData=result;
    })
  }

  handleQuantity(val:string){

      if(this.productQuantity<20 && val==='max'){
        this.productQuantity+=1;
      } else if(this.productQuantity>1 && val==='min'){
        this.productQuantity-=1;
      }
  }

}
