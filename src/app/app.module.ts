import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RouterTestingModule} from "@angular/router/testing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    AboutComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
