import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerAuthGuard } from 'src/assets/auth-guard/seller-auth.guard';
import { SellerAddProductComponent } from './seller/seller-add-product/seller-add-product.component';
import { SellerProductUpdateComponent } from './seller/seller-product-update/seller-product-update.component';
import { SearchedProductComponent } from './search/searched-product/searched-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [ 
  { path:"",component:HomeComponent},
  {path:"seller-auth",component:SellerAuthComponent },
  {path:"seller-home",component:SellerHomeComponent , canActivate:[SellerAuthGuard] },
  {path:"seller-add-product",component:SellerAddProductComponent , canActivate:[SellerAuthGuard] },
  {path:"seller-update-product/:id",component:SellerProductUpdateComponent , canActivate:[SellerAuthGuard] },
  {path:"search/:query",component:SearchedProductComponent},
  {path:"details/:productId",component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
