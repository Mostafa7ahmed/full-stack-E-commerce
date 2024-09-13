import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegiterComponent } from './Components/AUTH/regiter/regiter.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/AUTH/login/login.component';
import { ForgetPasswordComponent } from './Components/AUTH/forget-password/forget-password.component';
import { AuthGuard } from './Core/Guards/auth.guard';

const routes: Routes =[ 
  { path: "home", component: HomeComponent, canActivate: [AuthGuard], pathMatch: 'full' }, // Combined the routes and added the AuthGuard
  { path: "login", component: LoginComponent },
  { path: "register", component: RegiterComponent }, 
  { path: "forgetPassword", component: ForgetPasswordComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
  

  




 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
