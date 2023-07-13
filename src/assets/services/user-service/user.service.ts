import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { signUp } from 'src/assets/interfaces/seller-auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient , private _router:Router) { }

  userSignUp(user:signUp){
    this._http.post("http://localhost:3000/users",user,{observe:'response'})
    .subscribe((result)=>{
      if(result){
        localStorage.setItem("users",JSON.stringify(result.body));
        this._router.navigate(['/']);
      }
    })
  }
}
