import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoadingController } from 'ionic-angular';
import { AuthenticationSuccessPage } from '../authenticationSucess/authenticationSuccess';

@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html'
})
export class AuthenticationPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }
   
  goToAuthenticationSuccess(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(AuthenticationSuccessPage);
  }
}

