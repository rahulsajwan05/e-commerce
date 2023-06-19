import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerAuthGuard } from 'src/assets/auth-guard/seller-auth.guard';

const routes: Routes = [ 
  { path:"",component:HomeComponent},
  {path:"seller-auth",component:SellerAuthComponent },
  {path:"seller-home",component:SellerHomeComponent , canActivate:[SellerAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
