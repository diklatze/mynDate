import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';
import { SignInPage } from '../signIn/signIn';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSignUp(){
    this.navCtrl.push(RegisterPage);
  }

  goToSignIn(){
    this.navCtrl.push(SignInPage);
  }
  

}
