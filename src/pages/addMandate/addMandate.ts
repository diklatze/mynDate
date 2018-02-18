import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationPage } from '../authentication/authentication';
import { LoadingController } from 'ionic-angular';
import { UserDetails } from '../../classes/UserDetails';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-addManadte',
  templateUrl: 'addMandate.html'
})

export class AddMandatePage {
  information: any[];
 
  constructor(public navCtrl: NavController, private http: Http) {
    let localData = http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
  }
 
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

  AddMandate(i){
    //this.information[i].open = !this.information[i].open;

  }
  goToAuthentication(i){
   


  }

  option: String;
  showSubOptionOfInsurance: boolean = false; //default
  showSubOptionOfElectricCompany: boolean = false; //default
  showSubOptionOfCellphoneProvider: boolean = false; //default
  TvPhoneCellBundleProvider: boolean = false; //default

  onSelectChangeOption() {

    if (this.option == "Insurance") {
      this.showSubOptionOfInsurance = true;
      this.showSubOptionOfElectricCompany = false;
      this.showSubOptionOfCellphoneProvider = false;
      this.TvPhoneCellBundleProvider = false;
    }
    if (this.option == "ElectricCompany") {
      this.showSubOptionOfInsurance = false;
      this.showSubOptionOfElectricCompany = true;
      this.showSubOptionOfCellphoneProvider = false;
      this.TvPhoneCellBundleProvider = false;
    }
    if (this.option == "CellphoneProvider") {
      this.showSubOptionOfInsurance = false;
      this.showSubOptionOfElectricCompany = false;
      this.showSubOptionOfCellphoneProvider = true;
      this.TvPhoneCellBundleProvider = false;
    }
    if (this.option == "TvPhoneCellBundleProvider") {
      this.showSubOptionOfInsurance = false;
      this.showSubOptionOfElectricCompany = false;
      this.showSubOptionOfCellphoneProvider = false;
      this.TvPhoneCellBundleProvider = true;
    }
  }


}


