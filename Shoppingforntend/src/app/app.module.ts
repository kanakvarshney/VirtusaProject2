import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { DataTablesModule } from 'angular-datatables'; 


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { MyAccountComponent } from './component/my-account/my-account.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { MyprofileComponent } from './component/myprofile/myprofile.component';
import { ClothesComponent } from './component/clothes/clothes.component';
import { ClothesListComponent } from './component/clothes/clothes-list/clothes-list.component';
import { ShoppingcartComponent } from './component/shoppingcart/shoppingcart.component';
import { CartitemComponent } from './component/shoppingcart/cartitem/cartitem.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'materials.module';
import {MatTabsModule} from '@angular/material/tabs';
import{ FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';
import {LoginService} from './service/login.service';
import {UserService} from './service/user.service';









@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MyAccountComponent,
    MyprofileComponent,
    ClothesComponent,
    ClothesListComponent,
    ShoppingcartComponent,
    CartitemComponent,
    ],
  imports: [
    BrowserModule,
    DataTablesModule,
    MaterialModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
1