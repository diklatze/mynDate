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
  selector: 'page-viewMandateContruct',
  templateUrl: 'viewMandateContruct.html'
})

export class ViewMandateContructPage {

  constructor(public navCtrl: NavController,private popoverCtrl: PopoverController) {

  }
  }
















