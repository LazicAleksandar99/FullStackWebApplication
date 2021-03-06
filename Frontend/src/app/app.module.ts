import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { CountdownModule } from 'ngx-countdown';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import { ShowUserProfileComponent } from './components/user-profile/show-user-profile/show-user-profile.component';
import { ChangeUserProfileComponent } from './components/user-profile/change-user-profile/change-user-profile.component';
import { CurrentOrderComponent } from './components/current-order/current-order.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { HasRoleDirective } from './components/directives/has-role.directive';
import { OrderListComponent } from './components/order-list/order-list.component';
import { DeliverersListComponent } from './components/deliverers-list/deliverers-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { StatusCardComponent } from './components/status-card/status-card.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ProductListComponent,
    ProductCardComponent,
    ShowUserProfileComponent,
    ChangeUserProfileComponent,
    CurrentOrderComponent,
    CartCardComponent,
    CartComponent,
    HomeComponent,
    HasRoleDirective,
    OrderListComponent,
    DeliverersListComponent,
    AddProductComponent,
    AllOrdersComponent,
    StatusCardComponent,
    OrderHistoryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    OAuthModule.forRoot(),
    ToastrModule.forRoot(),
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
