import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addProduct, cart } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  
  productData: undefined|addProduct;
  productQuantity: number =1;
  removeCart=false;
  cartData:addProduct|undefined;
  constructor(private _activateRouter:ActivatedRoute, private _router:Router, private _productService: AadProductService){

  }

  ngOnInit(): void {
    let productId= this._activateRouter.snapshot.paramMap.get('productId');
    productId && this._productService.getProduct(productId).subscribe((result)=>{
      console.warn(result);
      this.productData=result;
    });

    let carData= localStorage.getItem("localCart");
    if(productId && carData){
      let items= JSON.parse(carData);
      console.log(items);
      items= items.filter((item:addProduct)=>productId==item.id.toString());
      console.warn(items);
      if(items.length){
        this.removeCart=true
      }else{
        this.removeCart=false;
      } 
      
    }

    let user = localStorage.getItem('user');
   
    if(user){
      let userId= user && JSON.parse(user).id;
      this._productService.getCartList(userId);
      console.warn(userId);
      
      this._productService.cartData.subscribe((result)=>{
        console.warn(result);
        
        let items = result.filter((items:addProduct)=>productId?.toString()===items.productId?.toString())
        if(items.length){
          this.cartData=items[0];
          this.removeCart=true
        }
      })
    }
  }

  handleQuantity(val:string){

      if(this.productQuantity<20 && val==='max'){
        this.productQuantity+=1;
      } else if(this.productQuantity>1 && val==='min'){
        this.productQuantity-=1;
      }
  }

  addToCart(){
    if(this.productData){
      console.warn(this.productData);
      
      this.productData.quantity= this.productQuantity;
      if(!localStorage.getItem('user')){
        this._productService.localAddToCart(this.productData);
        this.removeCart=true;
      }else{
        let user = localStorage.getItem('user');
        let userId= user && JSON.parse(user).id;
        console.warn(userId);
        
        let cartData:cart={
          ...this.productData,
          userId:userId,
          productId:this.productData.id
        }

        console.warn(cartData);
        delete cartData.id;
        this._productService.addToCart(cartData).subscribe((result)=>{
          if(result){
            console.warn(result);
            
            this._productService.getCartList(userId);
            this.removeCart=true;
          }
        });
      }
    }
  }

  removeToCart(productId:number){
    // console.warn(productId );
    if(!localStorage.getItem('user')){
    this._productService.removeTolocalCart(productId);
    } else {
      console.warn(this.cartData);
      this.cartData && this._productService.removeToCart(this.cartData.id).subscribe((result)=>{
        console.warn(result);
        
        if(result){
          let user = localStorage.getItem('user');
         let userId= user && JSON.parse(user).id;
         this._productService.getCartList(userId);
        }
      });
    }
    this.removeCart=false;
  }

  viewAllToys(){
    this._router.navigate(['toysProduct']);
  }
}
