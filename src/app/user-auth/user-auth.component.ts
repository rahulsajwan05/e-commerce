import { Component, OnInit } from '@angular/core';
import { signUp } from 'src/assets/interfaces/seller-auth';
import { UserService } from 'src/assets/services/user-service/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  
  constructor(private _userSignUpService: UserService){

  }

  ngOnInit(): void {

  }

  signUp(data:signUp){
    this._userSignUpService.userSignUp(data);
  }

  showLoginButton(){

  }

  
}
