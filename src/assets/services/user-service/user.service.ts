import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { sellerLogin, signUp } from 'src/assets/interfaces/seller-auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  invalidUserAuth=new EventEmitter<boolean>(false)
  constructor(private _http: HttpClient , private _router:Router) { }

  userSignUp(user:signUp){
    this._http.post("https://ecom-data-snzm.onrender.com/users",user,{observe:'response'})
    .subscribe((result)=>{
      if(result && result.body){
        localStorage.setItem("user",JSON.stringify(result.body));
        this._router.navigate(['/']);
      }
    })
  }

  userLogin(user:sellerLogin){
    console.warn(user);
    
    var url='https://ecom-data-snzm.onrender.com/users?email='+user.email+'&password='+user.password;
    this._http.get<signUp[]>(url,{observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length){
        this.invalidUserAuth.emit(false)
        localStorage.setItem("user",JSON.stringify(result.body[0]));
        this._router.navigate(['/']);
      } else {
        this.invalidUserAuth.emit(true)
      }
    });
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this._router.navigate(['/']);
    }
  }
}
