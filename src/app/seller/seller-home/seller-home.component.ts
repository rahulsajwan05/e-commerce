import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';
import {faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | addProduct[];
  deleteMessage: undefined | string;
  icon=faTrash;
  iconEdit=faEdit
  constructor(private _addProducts: AadProductService) {

  }
  ngOnInit(): void {
   this.getAllProduct();
  }

  deleteProduct(id: number) {
    this._addProducts.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = "Product is deleted";
        this.getAllProduct();
      }
    })
    
    setTimeout(() => (this.deleteMessage = undefined), 3000)
  }

  getAllProduct(){
    this._addProducts.getAllProducts().subscribe((result) => {
      console.warn(result)
      this.productList = result;
      // this.productList=res;
      console.warn(this.productList)
    })
  }



}
