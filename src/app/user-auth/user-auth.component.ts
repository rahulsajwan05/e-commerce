import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { addProduct, cart } from 'src/assets/interfaces/add-product';
import { sellerLogin, signUp } from 'src/assets/interfaces/seller-auth';
import { AadProductService } from 'src/assets/services/product-service/aad-product.service';
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
  constructor(private _userSignUpService: UserService , private _productService:AadProductService){

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
      console.log(result)
      if(result){
        this.authError="Invalid email and password";
      }else {
        this.localCartToRemoteCart();
      }
    })    
  }

  showLoginButton(){
    this.showSignUp=false;
    this.showLogin=true
  }

  showSignUpButton(){
    this.showSignUp=true;
    this.showLogin=false
  }

  localCartToRemoteCart(){
    let data = localStorage.getItem('localCart');
    setTimeout(()=>{
      let user = localStorage.getItem('user');
      let userId= user && JSON.parse(user).id;
      console.log(userId);
    if(data){
      let cartItems:addProduct[]= JSON.parse(data);
      console.warn(cartItems);
      

      cartItems.forEach((product:addProduct,index) => {
        let cartData:cart={
          ...product,
          userId:userId,
          productId:product.id
        }
        delete cartData.id;
        console.warn(cartData);

        setTimeout(()=>{

          this._productService.addToCart(cartData).subscribe((result)=>{
            if(result){
              alert("otems stored in db");
            }
          })
          if(cartItems.length===index+1){
            localStorage.removeItem('localCart');
          }
        } ,2000)
        
      });

    }
    
    this._productService.getCartList(userId)
  } ,1000);

  }
  
}
