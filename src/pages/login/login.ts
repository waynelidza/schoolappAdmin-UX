import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service/service";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  users: any;
  errorcount: number;
  Admin = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {

  }



  showAlert() {
    let alert = this.alertCtrl.create({
      subTitle: ' Email or Password cannot be blank',
      buttons: ['OK']
    });
    alert.present();
  }

  lestLogin() {
    this.errorcount = 0;
    if (this.Admin.password === '') {
      this.errorcount++;
    }
    if (this.Admin.email === '') {
      this.errorcount++;

    }

    if (this.errorcount === 0) {
      this.presentLoading();
      this.service.Login(this.Admin.email, this.Admin.password)
        .then(data => {
          this.users = data;
          if (this.users === "") {


          } else {

            this.navCtrl.push(HomePage);
          }
        });
    } else {
      this.showAlert();


    }
  }


  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
