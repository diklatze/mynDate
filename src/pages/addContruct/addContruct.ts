import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationPage } from '../authentication/authentication';
import { LoadingController } from 'ionic-angular';
import { UserDetails } from '../../classes/UserDetails';
import { Http, Headers } from '@angular/http';
import { NavParams } from 'ionic-angular';
import { BANKS } from '../../classes/mock-users';
import { COMPANY } from '../../classes/mock-users';
import { Account } from '../../classes/Account';
import { Mandate } from '../../classes/Mandate';



@Component({
  selector: 'page-addContruct',
  templateUrl: 'addContruct.html'
})

export class AddContructPage {

  banks = BANKS;
  companys = COMPANY;
  myUser: UserDetails;
  newAccount: Account = new Account();
  newMandate : Mandate = new Mandate();

 

  chosenCompany: String;


  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams) {
    this.myUser = (navParams.get('myUser'));
    // this.newAccount.mandates[0]= this.newMandate;
    // this.myUser.accounts.push(this.newAccount);
  }










}





