import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
  addProductSuccessfully:string|undefined;  

  constructor(private _addProductService:AadProductService){

  }

  ngOnInit(): void {

  }

  onFormSubmit(addproduct: NgForm) {
    // console.log(addproduct.value);
    addproduct.resetForm()
      
    // console.log('Name:' + addproduct.controls['name'].value);
} 

  addProducts(data:addProduct){
    this._addProductService.addproduct(data).subscribe((res) => {
      console.warn(res);
      if(res){
        this.addProductSuccessfully="Product add successfully"
        // this.onFormSubmit()
      }
    })
    setTimeout(() => (this.addProductSuccessfully=undefined),3000)
  }

}
