import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';
import { SignInPage } from '../signIn/signIn';
import { LoadingController } from 'ionic-angular';
import {UserDetails} from '../../classes/UserDetails';

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:UserDetails = new UserDetails();

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {
  }

  goToSignUp(){
    

  
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
    this.navCtrl.push(RegisterPage);
  }


  goToSignIn(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 300
    });
    loader.present();
    this.navCtrl.push(SignInPage);
  }
  

}
