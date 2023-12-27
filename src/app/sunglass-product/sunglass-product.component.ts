import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-sunglass-product',
  templateUrl: './sunglass-product.component.html',
  styleUrls: ['./sunglass-product.component.scss']
})
export class SunglassProductComponent implements OnInit{

  sunGlassProduct:undefined | addProduct[];
  
  constructor(private _addProductService: AadProductService){

  }

  ngOnInit(): void {
    this._addProductService.glassesProductsLimit().subscribe((res)=>{
      this.sunGlassProduct=res;
      console.log(this.sunGlassProduct);
    })
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
      }
    },
    
  }


}
