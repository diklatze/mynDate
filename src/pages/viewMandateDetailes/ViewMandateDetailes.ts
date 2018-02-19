import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {AddAccountPage} from '../addAccount/addAcount';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-ViewMandateDetailesPage',
  templateUrl: 'ViewMandateDetailes.html'
})
export class ViewMandateDetailesPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }


}
