import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlertController, NavController} from "ionic-angular";
import {Observable} from "rxjs/Observable";
import {NativeStorage} from "@ionic-native/native-storage";
import {HomePage} from "../../pages/home/home";

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  apiAdminUrl ="http://localhost/schoolapp/loginAdmin.php"
  constructor(public http: HttpClient,public alertCtrl: AlertController,private nativeStorage: NativeStorage) {

  }
   Login(email:string,password:string) {
     let postParams = {
       emails: email,
       mypasswords: password,

     }

     return new Promise((resolve, reject) => {
       this.http.post(this.apiAdminUrl, JSON.stringify(postParams))
         .subscribe(res => {
           resolve(res);
          if(res===null){

          }else{



          }

         }, (err) => {
           reject(err);
           if(err.status ===401){
             this.showAlert();
           }

         });
     });

   }

  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'Incorrect Email or Password',
      buttons: ['OK']
    });
    alert.present();
  }

  public handleError(error: Response) {

  }

}
