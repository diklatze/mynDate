import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationPage } from '../authentication/authentication';
import { LoadingController } from 'ionic-angular';
import { UserDetails } from '../../classes/UserDetails';
import { Http, Headers } from '@angular/http';
import { NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-addManadte',
  templateUrl: 'addMandate.html'
})

export class AddMandatePage {
  
myUser: UserDetails;

  chosenCompany: String;
  choice : boolean = false; 
  option: String;
  showSubOptionOfInsurance: boolean = false; 
  showSubOptionOfElectricCompany: boolean = false; 
  showSubOptionOfCellphoneProvider: boolean = false; 
  showSubOptionOfTvPhoneCellBundleProvider: boolean = false; 
 
  constructor(public navCtrl: NavController, private http: Http,public navParams: NavParams ) {
    this.myUser = (navParams.get('myUser'));
    
  }
 
  
  


  



  onSelectChangeOption() {

    if (this.option == "Insurance") {
      this.showSubOptionOfInsurance = true;
      this.showSubOptionOfElectricCompany = false;
      this.showSubOptionOfCellphoneProvider = false;
      this.showSubOptionOfTvPhoneCellBundleProvider = false;
    }
    if (this.option == "ElectricCompany") {
      this.showSubOptionOfInsurance = false;
      this.showSubOptionOfElectricCompany = true;
      this.showSubOptionOfCellphoneProvider = false;
      this.showSubOptionOfTvPhoneCellBundleProvider = false;
    }
    if (this.option == "CellphoneProvider") {
      this.showSubOptionOfInsurance = false;
      this.showSubOptionOfElectricCompany = false;
      this.showSubOptionOfCellphoneProvider = true;
      this.showSubOptionOfTvPhoneCellBundleProvider = false;
    }
    if (this.option == "TvPhoneCellBundleProvider") {
      this.showSubOptionOfInsurance = false;
      this.showSubOptionOfElectricCompany = false;
      this.showSubOptionOfCellphoneProvider = false;
      this.showSubOptionOfTvPhoneCellBundleProvider = true;
    }
  }


}


