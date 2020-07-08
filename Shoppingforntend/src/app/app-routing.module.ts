import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import {MyAccountComponent} from './component/my-account/my-account.component';
import {MyprofileComponent} from './component/myprofile/myprofile.component';
import { ClothesComponent } from './component/clothes/clothes.component';
import {ShoppingcartComponent} from './component/shoppingcart/shoppingcart.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'myAccount', component: MyAccountComponent },
  {path: 'myProfile', component: MyprofileComponent},
  {path: 'clothes', component: ClothesComponent},
  {path: 'shoppingCart', component: ShoppingcartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
