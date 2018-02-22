import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MandateManagePage } from '../mandateManage/mandateManage';
import { LoadingController } from 'ionic-angular';
import { UserDetails } from '../../classes/UserDetails';
import { Http, Headers } from '@angular/http';
import { NavParams } from 'ionic-angular';
import { BANKS } from '../../classes/mock-users';
import { COMPANY } from '../../classes/mock-users';
import { Account } from '../../classes/Account';
import { Restrictions } from '../../classes/Restrictions';
import { Mandate } from '../../classes/Mandate';
import { MANDETES1 } from '../../classes/mock-users';
import { PaymentDetail } from '../../classes/PaymentDetail';
import { AlertController } from 'ionic-angular';






@Component({
  selector: 'page-addManadte',
  templateUrl: 'addMandate.html'
})

export class AddMandatePage {

  banks = BANKS;
  companys = COMPANY;
  myUser: UserDetails;
  newAccount: Account = new Account();
  newMandate : Mandate = new Mandate();
  restrictions: Restrictions = new Restrictions();
  paymentDetailDemo : PaymentDetail [];

 

  chosenCompany: String;


  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams,public alerCtrl: AlertController) {
    this.myUser = (navParams.get('myUser'));
    // this.newAccount.mandates[0]= this.newMandate;
    // this.myUser.accounts.push(this.newAccount);
  }


  submit(){
    this.restrictions = { notifyMoreThanUsual: true, notifyOnPayment: true };
    this.paymentDetailDemo=[{paymentAmount: "€320",paymentDate: "18/02/22" }];
    this.newMandate= { CustomerId: "6621243445", userId: "046259735", serviceProviderName: "T-Mobile", serviceProviderArea: "Electric company", restrictions: this.restrictions ,imagePath:"./assets/images/companyLogos/tmobile.jpg" ,initDate:"17/1/1",paymentDetail:this.paymentDetailDemo}
    MANDETES1.push(this.newMandate);
    let alert = this.alerCtrl.create({
      title: 'T-Mobile Mandate was successfully created',
      message:'Notification has been sent to your bank',
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
    
  }







}





