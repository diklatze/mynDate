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
   

}

