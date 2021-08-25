import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/guard/auth.guard';
import { LoginSignupGuard } from './services/guard/login-signup.guard';


const routes: Routes = [
  {path:'',component:HomeComponent, data: {index : 0}},
  {path:'login',component:LoginComponent,canActivate :[LoginSignupGuard] ,data: {index : 1} },
  {path:'signup',component:SignupComponent, canActivate :[LoginSignupGuard],data: {index : 2} },
  {path:'cart',component:CartComponent, canActivate: [AuthGuard],data: {index : 3} },
  {path:'admin',component:GoodsComponent,data: {index : 4} },
  {path:'**',component:NotFoundComponent ,data: {index : 5}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
