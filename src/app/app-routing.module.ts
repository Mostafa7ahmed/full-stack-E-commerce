import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/Guards/auth.guard';
import { ControalComponent } from './Components/controllers/controal.component';
const routes: Routes = [
  { path: "login", loadComponent: () => import("./Components/AUTH/login/login.component").then(c => c.LoginComponent) },
  { path: "register", loadComponent: () => import("./Components/AUTH/regiter/regiter.component").then(c => c.RegiterComponent) },
  { path: "forgetPassword", loadComponent: () => import("./Components/AUTH/forget-password/forget-password.component").then(c => c.ForgetPasswordComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: "",
    canActivate: [AuthGuard],
    component: ControalComponent,
    children: [
      { path: "home", title: "Home", loadComponent: () => import("./Components/home/home.component").then(c => c.HomeComponent) },
      { path: "products", title: "Products", loadComponent: () => import("./Components/productpage/productpage.component").then(c => c.ProductpageComponent) },
      { path: 'products/:id', title: "Prodcut Details", loadComponent: () => import("./Components/produts-detailes/produts-detailes.component").then(c => c.ProdutsDetailesComponent) },
      { path: 'department/:name', title: "Prodcut DepartMenet", loadComponent: () => import("./Components/productdepartment/productdepartment.component").then(c => c.ProductdepartmentComponent) },
      { path: "fromUs", title: "From US", loadComponent: () => import("./Components/fromus/fromus.component").then(c => c.FromusComponent) },
      { path: "contactUS", title: "Contact US", loadComponent: () => import("./Components/contactus/contactus.component").then(c => c.ContactusComponent) },
      { path: "cart", title: "Cart", loadComponent: () => import("./Components/ComponetCart/cart/cart.component").then(c => c.CartComponent) },
      { path: "payment", title: "Payment", loadComponent: () => import("./Components/ComponetCart/payment/payment.component").then(c => c.PaymentComponent) },
      { path: "Done", title: "Payment", loadComponent: () => import("./Components/ComponetCart/donepayment/donepayment.component").then(c => c.DonepaymentComponent) },
      {
        path: "Personal",
        title: "Personal",
        loadComponent: () => import("./Components/CoponentPerson/personal/personal.component").then(c => c.PersonalComponent),
        children: [
          {
            path: "me",
            loadComponent: () => import("./Components/CoponentPerson/viewdata/viewdata.component").then(c => c.ViewdataComponent),

          },
          {
            path: "changedata",
            loadComponent: () => import("./Components/CoponentPerson/editdata/editdata.component").then(c => c.EditdataComponent),

          },
          {
            path: "changepassword",
            loadComponent: () => import("./Components/CoponentPerson/editpassword/editpassword.component").then(c => c.EditpasswordComponent),

          },
          {
            path: "address",
            loadComponent: () => import("./Components/CoponentPerson/addaddress/addaddress.component").then(c => c.AddaddressComponent),

          },

        ]
      },


      { path: '**', title: "Not Found", loadComponent: () => import("./Components/notfound/notfound.component").then(c => c.NotfoundComponent) }
    ]
  },









];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
