import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule , PreloadAllModules} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {AboutComponent} from "./about/about.component";
const routes: Routes = [
      {
         path: '',
         redirectTo: 'home', pathMatch: 'full'
      },
         {
           path: 'home',
           component: HomeComponent,
     },
    {
          path: 'login',
          component: LoginComponent,
    },
    {
        path:'about',
        component: AboutComponent
    }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
