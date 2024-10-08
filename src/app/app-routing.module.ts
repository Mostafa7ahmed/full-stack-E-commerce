import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/Guards/auth.guard';
import { ControalComponent } from './Components/controllers/controal.component';
const routes: Routes =[ 
  { path: "login",loadComponent:()=>import("./Components/AUTH/login/login.component").then(c =>c.LoginComponent)},
  { path: "register", loadComponent:()=>import("./Components/AUTH/regiter/regiter.component").then(c =>c.RegiterComponent)}, 
  { path: "forgetPassword",  loadComponent:()=>import("./Components/AUTH/forget-password/forget-password.component").then(c =>c.ForgetPasswordComponent)},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {
    path: "",
    canActivate: [AuthGuard],
    component:ControalComponent,
    children: [
      { path: "home", title:"Home" , loadComponent:()=>import("./Components/home/home.component").then(c =>c.HomeComponent) },
      { path: "products",   title:"Products" , loadComponent:()=>import("./Components/productpage/productpage.component").then(c =>c.ProductpageComponent) },
      { path: 'products/:name', title:"Prodcut Details" ,  loadComponent:()=>import("./Components/produts-detailes/produts-detailes.component").then(c =>c.ProdutsDetailesComponent) },
      { path: "fromUs",   title:"From US" , loadComponent:()=>import("./Components/fromus/fromus.component").then(c =>c.FromusComponent) },
      { path: "contactUS",   title:"Contact US" , loadComponent:()=>import("./Components/contactus/contactus.component").then(c =>c.ContactusComponent) },

      { path: '**',   title:"Not Found"  ,loadComponent:()=>import("./Components/notfound/notfound.component").then(c =>c.NotfoundComponent)} 
    ]
  },
  

  




 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
