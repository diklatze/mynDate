import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationPage } from '../authentication/authentication';
import { LoadingController } from 'ionic-angular';
import { UserDetails } from '../../classes/UserDetails';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  
  styles: [
    `.buttoncss.alert-button{
      color:#e74c3c !important;
      font-size: 1px;
      
      }`,
      
      `.alertcss{
      color:#e74c3c;
      /Any other style you wish to apply/
      }`
  

  ]
  
})
export class RegisterPage {
  user: UserDetails = new UserDetails();

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http, public alerCtrl: AlertController) {
  }


  goToSignIn() {
    let alert = this.alerCtrl.create({
      title: 'Debit Alert from Myndate',
      subTitle:'T-Mobile has requested to charge your Barclays bank account for €39.00. This amount exceeds the amout limit you defined (€29.00)',
      // message: 'T-Mobile has requested to charge your Barclays bank account for €39.00. This amount exceeds the amout limit you defined (€29.00)',
      buttons: [
        {
          text: 'Approve',
          
          handler: () => {
            console.log('Disagree clicked');
            //this.navCtrl.push(MandateManagePage);
            },
          cssClass:"buttoncss",
        },
        {
          text: 'Hold',
          handler: () => {
            console.log('Disagree clicked');
           // this.navCtrl.push(MandateManagePage);
          }
        },
        {
          text: 'Reject',
          handler: () => {
          //  this.navCtrl.push(MandateManagePage);
          }
        }
      ]
    });
    alert.present()
  }



  /*

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

      
   


    this.navCtrl.push(AuthenticationPage);
  }*/



}
