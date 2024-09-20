import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiterComponent } from './Components/AUTH/regiter/regiter.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/AUTH/login/login.component';
import { ForgetPasswordComponent } from './Components/AUTH/forget-password/forget-password.component';
import { AuthGuard } from './Core/Guards/auth.guard';
import { ControalComponent } from './Components/controal/controal.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductpageComponent } from './Components/productpage/productpage.component';
const routes: Routes =[ 
  { path: "login", component: LoginComponent },
  { path: "register", component: RegiterComponent }, 
  { path: "forgetPassword", component: ForgetPasswordComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {
    path: "",
    canActivate: [AuthGuard],
    component:ControalComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: 'products/:name', component: ProductpageComponent },


    ]
  },
  { path: '**', redirectTo: '/home' } 
  

  




 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
