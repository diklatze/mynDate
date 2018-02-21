import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';
import { SignInPage } from '../signIn/signIn';
import { LoadingController } from 'ionic-angular';
import  {UserDetails} from '../../classes/UserDetails';
import {MandateManagePage} from '../mandateManage/mandateManage';
import { AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { USERS } from '../../classes/mock-users';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  users = USERS;
  myuser = this.users[1];
  
  user:UserDetails = new UserDetails();

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http, public alerCtrl: AlertController) {
  }

  
  goToSignUp(){
    

  
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3
    });
    loader.present();
    this.navCtrl.push(RegisterPage);
  }


  goToSignIn(){
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');

    let body = { email: this.user.email, password: this.user.password};

    this.http.post('http://localhost:8080/login', JSON.stringify(body), { headers: headers })
      .map(res => res.json())
      .subscribe(data => { console.log(data); }

      
    );

    let alert = this.alerCtrl.create({
      title: 'Hello, John Lennon',
      message: 'Welcome back to Myndate. Ready to start?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.push(MandateManagePage);
          }
        }]
    });
    alert.present()

   
 /*   let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3
    });
    loader.present();
    this.navCtrl.push(MandateManagePage)*/
  }
  

}
