import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationPage } from '../authentication/authentication';
import { LoadingController } from 'ionic-angular';
import {UserDetails} from '../../classes/UserDetails';
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

  AddMandate()
  {
    
  }
}



/*
export class AddMandatePage {
  user:UserDetails = new UserDetails();


  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public http: Http) {
  }


  goToAuthentication(){
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait...",
    //   duration: 3000
    // });
    // loader.present();

    let headers = new Headers;
    headers.append('Content-Type', 'application/json');

    let body = { email: this.user.email, password: this.user.password, name: this.user.name, phoneNumber: this.user.phoneNumber,
      familyName: this.user.familyName};

    this.http.post('http://localhost:8080/register', JSON.stringify(body), { headers: headers })
      .map(res => res.json())
      .subscribe(data => { console.log(data);
      if(data.mail!=null){
        //test
      } 
    });

    //this.navCtrl.push(AuthenticationPage);
  }


  
  showSubOptionOfInsurance:boolean = false; //default
   option: String;

  onSelectChangeOption() {
  //    //grab form value

  // //show subOptions
   if(option == "Insurance"){
    this.showSubOptionOfInsurance = true;
  }


 

}*/
