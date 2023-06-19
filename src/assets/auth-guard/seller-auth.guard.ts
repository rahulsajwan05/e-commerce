import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from '../services/seller-service/seller.service';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuard implements CanActivate {

  constructor(private _sellerService:SellerService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(localStorage.getItem('seller')){
        return true;
      }

    return this._sellerService.isSellerLoggedIn;
  
  }
  
}
