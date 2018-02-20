import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import {AddAccountPage} from '../addAccount/addAcount';
import { LoadingController } from 'ionic-angular';
import {AddMandatePage} from '../addMandate/addMandate';
import {viewMandateDetailesPage} from '../viewMandateDetailes/viewMandateDetailes'
import {USERS} from '../../classes/mock-users'

@Component({
  selector: 'page-mandateManagePage',
  templateUrl: 'mandateManage.html'
})
export class MandateManagePage {
  users=USERS;
  myuser= this.users[1];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }
  goToAddMandate(){
    this.navCtrl.push(AddMandatePage);
  }

  viewMandate(){
    this.navCtrl.push(viewMandateDetailesPage);
  }

}
