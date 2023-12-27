import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { SellerAddProductComponent } from './seller/seller-add-product/seller-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerProductUpdateComponent } from './seller/seller-product-update/seller-product-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchedProductComponent } from './search/searched-product/searched-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToysProductComponent } from './toys-product/toys-product.component';
import { SunglassProductComponent } from './sunglass-product/sunglass-product.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToysListComponent } from './toys-list/toys-list.component';
import { ToyProductDetailComponent } from './toy-product-detail/toy-product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerProductUpdateComponent,
    SearchedProductComponent,
    ProductDetailComponent,
    UserAuthComponent,
    CartPageComponent,
    CheckoutComponent,
    MyOrdersComponent,
    TestComponent,
    ToysProductComponent,
    SunglassProductComponent,
    FooterComponent,
    SideNavComponent,
    ToysListComponent,
    ToyProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    CommonModule,
    CarouselModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
