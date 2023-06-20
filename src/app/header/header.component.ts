import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuType:string='default';
  sellerName:string='';
  constructor(private _router:Router){

  }
  ngOnInit(): void {
    this._router.events.subscribe((val:any) =>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType="seller";
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            // console.warn(sellerData.name);
            this.sellerName=sellerData.name;
          }
        } else {
          this.menuType="default";
        }
      }
    })
  }


  logout(){
    localStorage.removeItem('seller')
    this._router.navigate(['/']);
  }
}
