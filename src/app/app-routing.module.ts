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
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { TestComponent } from './test/test.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToysListComponent } from './toys-list/toys-list.component';
import { ToyProductDetailComponent } from './toy-product-detail/toy-product-detail.component';

const routes: Routes = [ 
  { path:"",component:HomeComponent},
  {path:"seller-auth",component:SellerAuthComponent },
  {path:"seller-home",component:SellerHomeComponent , canActivate:[SellerAuthGuard] },
  {path:"seller-add-product",component:SellerAddProductComponent , canActivate:[SellerAuthGuard] },
  {path:"seller-update-product/:id",component:SellerProductUpdateComponent , canActivate:[SellerAuthGuard] },
  {path:"search/:query",component:SearchedProductComponent},
  {path:"details/:productId",component:ProductDetailComponent},
  {path:"user-auth",component:UserAuthComponent},
  {path:"cart-page",component:CartPageComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"my-order",component:MyOrdersComponent},
  {path:"test",component:TestComponent},
  {path:"side",component:SideNavComponent},
  {path:"toysProduct",component:ToysListComponent},
  {path:"detail/:productToyId",component:ToyProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
