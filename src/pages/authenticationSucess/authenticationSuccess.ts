import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-authenticationSuccess',
  templateUrl: 'authenticationSuccess.html'
})
export class AuthenticationSuccessPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  goToSignIn(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(HomePage);
  }
}

