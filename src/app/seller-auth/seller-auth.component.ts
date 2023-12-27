import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../assets/services/seller-service/seller.service';
import { Router } from '@angular/router';
import { sellerLogin, signUp } from 'src/assets/interfaces/seller-auth';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  showLogin: boolean = false;
  authError:string='';
  constructor(private _sellerService: SellerService, private _router: Router) {
    
  }

  ngOnInit(): void {
    this._sellerService.reloadSeller();
  }

  signUp(data: signUp): void {
    this._sellerService.userSignUp(data);
  }

  login(data: sellerLogin): void {
    this._sellerService.userLogin(data);
    this._sellerService.isLoginError.subscribe((isError=> {
      if(isError){
        this.authError="Incorrect Email and password"
      }
    }))
  }

  showLoginButton() {
    this.showLogin = true
  }

  showSignUpButton() {
    this.showLogin = false
  }
}
