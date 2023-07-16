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
        } else {
          this.menuType="default";
        }
      }
    })
  }

  search(query:KeyboardEvent){
    if(query){
      const element= query.target as HTMLInputElement
     this._productService.searchProduct(element.value).subscribe((data)=>{
      if(data){
        if(data.length>3){

          data.length=3;
        }
        this.searchedProducts=data;
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
  }
}
