import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import {AddAccountPage} from '../addAccount/addAcount';
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Mandate } from '../../classes/Mandate';


@Component({
  selector: 'page-viewMandateDetailesPage',
  templateUrl: 'viewMandateDetailes.html'
})
export class viewMandateDetailesPage {
  myMandate: Mandate;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,navParams: NavParams) {
    this.myMandate = (navParams.get('myMandate'));
  }

  

}

