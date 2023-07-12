import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-searched-product',
  templateUrl: './searched-product.component.html',
  styleUrls: ['./searched-product.component.scss']
})
export class SearchedProductComponent implements OnInit {
  
  searchedProducts:undefined | addProduct[];
  constructor(private _activeRoute:ActivatedRoute, private _productService: AadProductService){

  }
  
  ngOnInit(): void {
    let query= this._activeRoute.snapshot.paramMap.get("query");

    query && this._productService.searchProduct(query).subscribe((data)=>{
      if(data){
        console.warn(data)
        this.searchedProducts=data;
      }
    })
   
  }

}
