import { Restrictions } from './Restrictions';
import {PaymentDetail } from './PaymentDetail';


export class Mandate {
    serviceProviderArea?: String; 
    serviceProviderName: String;
    CustomerId: String;
    userId ?: String;
    restrictions : Restrictions;
    imagePath ?: String;
    initDate? : String;
    expiredDate?:String;
    paymentsDetails?: PaymentDetail[]; 

    
    }
