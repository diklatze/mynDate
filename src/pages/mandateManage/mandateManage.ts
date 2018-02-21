import { Component, ViewChild, ElementRef } from '@angular/core';

import { PopoverController, NavParams } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AddAccountPage } from '../addAccount/addAcount';
import { LoadingController } from 'ionic-angular';
import { AddMandatePage } from '../addMandate/addMandate';
import { viewMandateDetailesPage } from '../viewMandateDetailes/viewMandateDetailes'
import { USERS } from '../../classes/mock-users'




@Component({
  template: `
    <ion-list class="popover-page">
    <ion-item>
    <ion-icon name="add" item-start></ion-icon>
    <button ion-button clear item-start (click)="goToAddMandate()">Add New Mandate</button>
      </ion-item>
    <ion-item>
    <ion-icon name="home" item-start></ion-icon>
    <button ion-button clear item-start (click)="goToTemp()">home</button>
      </ion-item>
      <ion-item>
      <ion-icon name="man" item-start></ion-icon>
      <button ion-button clear item-start (click)="goToTemp()">Edit Profile</button>
        </ion-item>
        <ion-item>
        <ion-icon name="cash" item-start></ion-icon>
        <button ion-button clear item-start (click)="goToTemp()">Add Bank Account</button>   
          </ion-item>
        <ion-item>
        <ion-icon name="remove" item-start></ion-icon>
        <button ion-button clear item-start (click)="goToTemp()">Remove Bank Account</button>    
         </ion-item>
          <ion-item>
          <ion-icon name="log-out" item-start></ion-icon>
          <button ion-button clear item-start (click)="goToTemp()">Sign out</button>    
            </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  background: string;
  contentEle: any;
  textEle: any;
  fontFamily;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(private navParams: NavParams,private navCtrl: NavController) {

  }
  goToAddMandate(){
    this.navCtrl.push(AddMandatePage);
  }

  goToTemp(){

    this.navCtrl.pop();

}  

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;

      
    }
  }

  
  
}


@Component({
  templateUrl: 'mandateManage.html'
})
export class MandateManagePage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  users = USERS;
  myuser = this.users[1];
  constructor(public navCtrl: NavController,private popoverCtrl: PopoverController) {

  }

  goToAddMandate(){
    this.navCtrl.push(AddMandatePage);
  }

  

presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      // textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
}
