import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationPage } from '../authentication/authentication';
import { LoadingController } from 'ionic-angular';
import {UserDetails} from '../../classes/UserDetails';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user:UserDetails = new UserDetails();

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {
  }


  goToAuthentication(){
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait...",
    //   duration: 3000
    // });
    // loader.present();

    let headers = new Headers;
    headers.append('Content-Type', 'application/json');

    let body = { email: this.user.email, password: this.user.password, name: this.user.name, phoneNumber: this.user.phoneNumber,
      familyName: this.user.familyName};

    this.http.post('http://localhost:8080/register', JSON.stringify(body), { headers: headers })
      .map(res => res.json())
      .subscribe(data => { console.log(data); }

      
    );


    this.navCtrl.push(AuthenticationPage);
  }

 

}
