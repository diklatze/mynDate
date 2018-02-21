import { Component } from '@angular/core';
import { ListPage } from '../list/list';
import {AddAccountPage} from '../addAccount/addAcount';
import { LoadingController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Mandate } from '../../classes/Mandate';
import { ViewChild, ElementRef } from '@angular/core';
import { PopoverController} from 'ionic-angular';


@Component({
  selector: 'page-viewMandateDetailesPage',
  templateUrl: 'viewMandateDetailes.html'

  
})



export class viewMandateDetailesPage {
  
  myMandate: Mandate;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.myMandate = (navParams.get('myMandate'));
  }

  goToMandateContruct(){};

 

}

