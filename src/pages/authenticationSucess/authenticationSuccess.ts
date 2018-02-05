import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-authenticationSuccess',
  templateUrl: 'authenticationSuccess.html'
})
export class AuthenticationSuccessPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }
   
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}

