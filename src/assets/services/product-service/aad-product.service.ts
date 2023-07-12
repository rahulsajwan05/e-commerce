import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addProduct } from 'src/assets/interfaces/add-product';

@Injectable({
  providedIn: 'root'
})
export class AadProductService {

  constructor(private _http: HttpClient) { }

  addproduct(data:addProduct){
    console.log(data)
    return this._http.post("http://localhost:3000/products",data)
  }

  getAllProducts(){
    return this._http.get<addProduct[]>("http://localhost:3000/products")
  }

  deleteProduct(id:number){
    return this._http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id:string){
    return this._http.get<addProduct>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(data:addProduct){
   console.log(data)
    return this._http.put<addProduct>(`http://localhost:3000/products/${data.id}`,data)
  }

  popularProducts(){
    return this._http.get<addProduct[]>("http://localhost:3000/products?_limit=3");
  }

  trendyProducts(){
    return this._http.get<addProduct[]>("http://localhost:3000/products?_limit=6");
  }

  searchProduct(query:string){
    return this._http.get<addProduct[]>(`http://localhost:3000/products?q=${query}`);
  }
}
