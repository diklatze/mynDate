import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';
import { SignInPage } from '../signIn/signIn';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  goToSignUp(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(RegisterPage);
  }


  goToSignIn(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(SignInPage);
  }
  

}
