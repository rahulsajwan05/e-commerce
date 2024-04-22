import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sellerLogin, signUp } from 'src/assets/interfaces/seller-auth';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn=new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  constructor(private _http:HttpClient, private _router:Router) { }

  userSignUp(data:signUp){
    return this._http.post("https://ecom-data-snzm.onrender.com/seller",
    data,
    {observe:'response'}).subscribe( (result => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this._router.navigate(['seller-home']);
    }))
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this._router.navigate(['seller-home']);
    }
  }

  userLogin(data:sellerLogin){
    // console.log(data.email);
    var password=data.password
    var url='https://ecom-data-snzm.onrender.com/seller?email='+data.email+'&password='+password;
    console.log(url);
    this._http.get(url,
    {observe:'response'}).subscribe( (result:any) => {
      console.warn(result);

      if(result && result.body && result.body.length) {
        console.warn("user logged in")
        localStorage.setItem('seller',JSON.stringify(result.body));
        this._router.navigate(['seller-home']);
      } else {
        this.isLoginError.emit(true)
        console.warn("failed")     
      }
    });
  }
}
