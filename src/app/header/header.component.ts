import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addProduct } from 'src/assets/interfaces/add-product';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuType:string='default';
  sellerName:string='';
  searchedProducts:undefined | addProduct[];
  userName:string='';
  cartItems=0;
  constructor(private _router:Router , private _productService:AadProductService){

  }
  ngOnInit(): void {
    this._router.events.subscribe((val:any) =>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
         
       
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            // console.warn(sellerData.name);
            this.sellerName=sellerData.name;
            this.menuType="seller"; 
        } else if(localStorage.getItem('user')){
          let userStore=localStorage.getItem('user');
          let userData= userStore && JSON.parse(userStore);
          this.userName=userData.name;
          this.menuType="user";
          this._productService.getCartList(userData.id)
        } else {
          this.menuType="default";
        }
      }
    });

    let cartData=localStorage.getItem('localCart');

    if(cartData){
      this.cartItems= JSON.parse(cartData).length
    }
    console.warn(this.cartItems);
    
    this._productService.cartData.subscribe((items)=>{
      // console.warn("working header");
      this.cartItems=items.length;
    });

    this._productService.cartDataLocal.subscribe((items)=>{
      // console.warn("working header");
      this.cartItems=items.length;
    });

    this._productService.cartDatas.subscribe((items)=>{
      console.warn(items);
      
      console.warn("working header new");
      this.cartItems=items.length;
    });
  }

  search(query:KeyboardEvent){
    console.warn(query);
    
    if(query){
      const element= query.target as HTMLInputElement
      console.warn(element.value);
      
     this._productService.searchProduct(element.value).subscribe((data)=>{
      if(data){
        console.warn(data);
        if(data.length>3){
          data.length=4;
        }
        this.searchedProducts=data;
        console.warn(this.searchedProducts);
      }
     })
    }
  }

  hiddenSearch(){
    this.searchedProducts=undefined;
  }

  submit(val:string){
    console.warn(val);
    this._router.navigate([`search/${val}`]);
  }

  redirectToDetail(id:number){
    this._router.navigate(['/details/'+id]);
  }
  logout(){
    localStorage.removeItem('seller')
    this._router.navigate(['/']);
   
  }

  userLogout(){
    localStorage.removeItem('user')
    this._router.navigate(['/']);
    this._productService.cartData.emit([])
  }
}
