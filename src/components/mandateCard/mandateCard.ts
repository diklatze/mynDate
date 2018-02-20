import { Component,Input , Output} from '@angular/core';
import { UserDetails } from '../../classes/UserDetails';




@Component({
  selector: 'mandate-card',
  templateUrl: 'mandateCard.html'
})
export class MandateCard {

    @Input() account:Account;

  constructor() {
  }


 

 

}