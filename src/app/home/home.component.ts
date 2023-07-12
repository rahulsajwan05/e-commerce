import { Component, OnInit } from '@angular/core';
import { SellerAddProductComponent } from '../seller/seller-add-product/seller-add-product.component';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';
import { addProduct } from 'src/assets/interfaces/add-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  popularProducts: undefined | addProduct[];
  trendyProducts: undefined | addProduct[];

  constructor(private _productService: AadProductService){

  }
  ngOnInit(): void {

    this._productService.popularProducts().subscribe((data )=>{
      this.popularProducts=data;
    });

    this._productService.trendyProducts().subscribe((data )=>{
      this.trendyProducts=data;
    });
  }
}
