import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiterComponent } from './Components/AUTH/regiter/regiter.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/AUTH/login/login.component';
import { ForgetPasswordComponent } from './Components/AUTH/forget-password/forget-password.component';

const routes: Routes =[ 
  { path: "", component: LoginComponent, pathMatch: 'full' },
  { path: "login", component: LoginComponent, pathMatch: 'full' },

  
  { path: "register", component: RegiterComponent },
  { path: "forgetPassword", component: ForgetPasswordComponent },
  { path: "home", component: HomeComponent },



 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
