import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { addProduct, cart } from 'src/assets/interfaces/add-product';
import { banner } from 'src/assets/interfaces/banner';
import { order } from 'src/assets/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class AadProductService {

  cartData = new EventEmitter<addProduct[] | []>()
  cartDataLocal = new EventEmitter<cart[] | []>()
  cartDatas = new EventEmitter<cart[] | []>()
  constructor(private _http: HttpClient) { }

  addproduct(data: addProduct) {
    console.log(data)
    return this._http.post("http://localhost:3000/products", data)
  }

  getAllProducts() {
    return this._http.get<addProduct[]>("http://localhost:3000/products")
  }

  deleteProduct(id: number) {
    return this._http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id: string) {
    return this._http.get<addProduct>(`http://localhost:3000/products/${id}`);
  }


  updateProduct(data: addProduct) {
    console.log(data)
    return this._http.put<addProduct>(`http://localhost:3000/products/${data.id}`, data)
  }

  popularProducts() {
    return this._http.get<addProduct[]>("http://localhost:3000/products?_limit=3");
  }

  trendyProducts() {
    return this._http.get<addProduct[]>("http://localhost:3000/products?_limit=10");
  }

  toyProductsLimit() {
    return this._http.get<addProduct[]>("http://localhost:3000/toysProducts?_limit=10");
  }

  toyProducts() {
    return this._http.get<addProduct[]>("http://localhost:3000/toysProducts");
  }

  getToyProduct(id: number) {
    return this._http.get<addProduct>(`http://localhost:3000/toysProducts/${id}`);
  }


  glassesProducts() {
    return this._http.get<addProduct[]>("http://localhost:3000/glassesProducts");
  }

  glassesProductsLimit() {
    return this._http.get<addProduct[]>("http://localhost:3000/glassesProducts?_limit=8");
  }


  searchProduct(query: string) {
    return this._http.get<addProduct[]>(`http://localhost:3000/products?q=${query}`);
  }

  localAddToCart(data: addProduct) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem("localCart", JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem("localCart", JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }

  }

  getLocalCartData() {
    // let localCart=JSON.parse(localStorage.getItem('localCart')!);
    // console.warn(localCart);

    // return localCart;
    // if(!localCart){
    //   let localCarts = localStorage.getItem('localCart');
    //    return let localCartData=localCarts && JSON.parse(localCarts);
    // }
  }

  removeTolocalCart(productId: number) {
    let cartData = localStorage.getItem('localCart');

    if (cartData) {
      let items = JSON.parse(cartData)
      console.warn(items);
      items = items.filter((item: addProduct) => productId !== item.id);
      console.warn(items);
      localStorage.setItem("localCart", JSON.stringify(items));
      this.cartData.emit(items);
    }
  }

  addToCart(cartData: cart) {
    return this._http.post("http://localhost:3000/cart", cartData);
  }

  getCartList(userId: number) {
    return this._http.get<addProduct[]>('http://localhost:3000/cart?userId=' + userId,
      { observe: 'response' })
      .subscribe((result) => {
        console.warn(result);
        
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }

  removeToCart(cartId: number) {
    // this.cartDataLocal.emit(items);
    return this._http.delete("http://localhost:3000/cart/" + cartId);

  }

  currentCart() {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    return this._http.get<cart[]>('http://localhost:3000/cart?userId=' + userId);
  }

  removeToLocalCurrentCart(cartId: number) {
    let cartDatas = localStorage.getItem('localCart');
    if (cartDatas) {
      let items = JSON.parse(cartDatas)
      console.warn(items);
      items = items.filter((item: cart) => cartId !== item.id);
      console.warn(items);
      localStorage.setItem("localCart", JSON.stringify(items));
      this.cartDataLocal.emit(items);
    }

    // this._productService.cartData.subscribe((items)=>{
    //   console.warn("working header cart");
    // this.cartData=items;
    // });
  }

  orderNow(data: order) {
    return this._http.post('http://localhost:3000/orders', data)
  }
  orderList() {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    return this._http.get<order[]>('http://localhost:3000/orders?userId=' + userId);
  }

  deleteCartItems(cartId: number) {
    return this._http.delete("http://localhost:3000/cart/" + cartId, { observe: 'response' }).subscribe((result) => {
      if (result) {
        this.cartData.emit([])
      }
    });
  }


  cancelOrder(orderId: number) {
    return this._http.delete("http://localhost:3000/orders/" + orderId)
  }

  getBanner(){
    return this._http.get<banner[]>("http://localhost:3000/bannerProducts")
  }

} 
