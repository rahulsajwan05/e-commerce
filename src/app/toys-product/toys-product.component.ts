import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toys-product',
  templateUrl: './toys-product.component.html',
  styleUrls: ['./toys-product.component.scss']
})
export class ToysProductComponent implements OnInit{

  toysProduct:undefined | addProduct[];

  //send data child to parent
  @Output() fetchsingleToy : EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private _addProductService: AadProductService, private _router:Router){

  }

  ngOnInit() {
    this._addProductService.toyProductsLimit().subscribe((res)=>{
      this.toysProduct=res;
      console.log(this.toysProduct);
      
    })
    
  }

  fetchToy(id:number){
    console.log(id);
    this.fetchsingleToy.emit(id);
    this._addProductService.getToyProduct(id).subscribe((res)=>{
      console.warn(res);
      if(res){
        this._router.navigate(["detail/"+res.id])
      }
      
    });
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
