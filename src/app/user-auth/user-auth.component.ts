import { Component, OnInit } from '@angular/core';
import { sellerLogin, signUp } from 'src/assets/interfaces/seller-auth';
import { UserService } from 'src/assets/services/user-service/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  
  showSignUp:boolean=true;
  showLogin:boolean=false
  authError:string="";
  constructor(private _userSignUpService: UserService){

  }

  ngOnInit(): void {
    this._userSignUpService.userAuthReload();
  }

  signUp(data:signUp){
    this._userSignUpService.userSignUp(data);
  }

  login(data:sellerLogin){
    this._userSignUpService.userLogin(data)
    this._userSignUpService.invalidUserAuth.subscribe((result)=>{
      if(result){
        this.authError="Invalid email and password";
      }
    })    
  }

  showLoginButton(){
    this.showSignUp=false;
    this.showLogin=true
  }

  showSignUpButton(){
    this.showSignUp=true;
    this.showLogin=true
  }

  
}
