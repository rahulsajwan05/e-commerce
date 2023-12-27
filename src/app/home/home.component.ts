import { Component, Input, OnInit } from '@angular/core';
import { SellerAddProductComponent } from '../seller/seller-add-product/seller-add-product.component';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';
import { addProduct } from 'src/assets/interfaces/add-product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { banner } from 'src/assets/interfaces/banner';

// declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  popularProducts: undefined | addProduct[];
  trendyProducts: undefined | addProduct[];
  banner: undefined | banner[];
  toy : undefined | addProduct;
  // bamerArray=[
  //   {
  //     id:1,
  //     image:''
  //   }
  // ]
  constructor(private _productService: AadProductService, private _router:Router){

  }
  ngOnInit(): void {

    this._productService.popularProducts().subscribe((data )=>{
      this.popularProducts=data;
    });

    this._productService.trendyProducts().subscribe((data )=>{
      this.trendyProducts=data;
    });
    
    this._productService.getBanner().subscribe((data )=>{
      this.banner=data;
    });
  }

  // viewToy(id:number){
  //   console.log("working")
  //   this._productService.getToyProduct(id).subscribe((res)=>{
  //     this.toy=res;
  //     console.log(this.toy);
  //   })
    
  // }

  viewAllToys(){
    this._router.navigate(['toysProduct']);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 20,
    navText: ['&#8249', '&#8250;'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items:2
      },
      400: {
        items: 2
      },
      540:{
        items:3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      },
    }
  }

}
