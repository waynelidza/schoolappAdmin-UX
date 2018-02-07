import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    HttpClientModule ,
    IonicPageModule.forChild(LoginPage),
  ],
   providers:[


   ]


})
export class LoginPageModule {}
