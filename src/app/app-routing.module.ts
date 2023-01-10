import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule , PreloadAllModules} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
     {
       path: 'home',
       component: HomeComponent,
 },
  {
      path: 'login',
      component: LoginComponent,
    },
  {
    path: '',  redirectTo: '/login', pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
  [RouterModule.forRoot(routes)],
  ]
})
export class AppRoutingModule { }
