import { AfterContentInit, Component, OnInit } from '@angular/core';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.scss']
})
export class ToysListComponent implements AfterContentInit , OnInit{

  toysProduct: undefined | addProduct[]
  constructor(private _productService: AadProductService){

  }
  ngOnInit(): void {
    this._productService.toyProducts().subscribe((res)=>{
      this.toysProduct=res;
      console.log(this.toysProduct);
    })
  }
  ngAfterContentInit(){
    
    
  }

}
