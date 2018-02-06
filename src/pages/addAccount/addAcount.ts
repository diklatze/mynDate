import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AuthenticationPage } from '../authentication/authentication';
import { LoadingController } from 'ionic-angular';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }


  goToAuthentication(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(AuthenticationPage);
  }

 

}
