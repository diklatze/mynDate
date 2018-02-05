import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AuthenticationPage } from '../authentication/authentication';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {

  }

  goToAuthentication(){
    this.navCtrl.push(AuthenticationPage);
  }

 

}
