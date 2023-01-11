import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from "@angular/forms";

//Additional Routes
import { LoginRoutingModule} from "./login.routing.module";
import { LoginComponent} from "./login.component";
//import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,ReactiveFormsModule,LoginRoutingModule],

})
export class LoginModule { }
