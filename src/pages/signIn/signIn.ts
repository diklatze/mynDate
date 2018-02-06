import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {AddAccountPage} from '../addAccount/addAcount';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-signIn',
  templateUrl: 'signIn.html'
})
export class SignInPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  goToAddAccount(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(AddAccountPage);
  }
 

}
