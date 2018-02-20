
import { Component,Input , Output} from '@angular/core';
import { UserDetails } from '../../classes/UserDetails';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {AddMandatePage} from   '../../pages/addMandate/addMandate';
import {viewMandateDetailesPage} from '../../pages//viewMandateDetailes/viewMandateDetailes'



@Component({
  selector: 'mandate-card',
  templateUrl: 'mandateCard.html'
})
export class MandateCard {

    @Input() account:Account;


    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    }

  goToAddMandate(){
    this.navCtrl.push(AddMandatePage);
  }

  viewMandate(){
    this.navCtrl.push(viewMandateDetailesPage);
  }
 

 

}