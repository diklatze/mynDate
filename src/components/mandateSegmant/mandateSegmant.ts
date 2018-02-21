
import { Component,Input , Output} from '@angular/core';
import { UserDetails } from '../../classes/UserDetails';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {AddMandatePage} from   '../../pages/addMandate/addMandate';
import {viewMandateDetailesPage} from '../../pages//viewMandateDetailes/viewMandateDetailes'
import { Mandate } from '../../classes/Mandate';



@Component({
  selector: 'mandate-segmant',
  templateUrl: 'mandateSegmant.html'
})
export class MandateSegmant {

    @Input() mandate:Mandate;


    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    }

  goToAddMandate(){
    this.navCtrl.push(AddMandatePage);
  }

  viewMandate(){
    this.navCtrl.push(viewMandateDetailesPage);
  }
 

 

}