import { Restrictions } from './Restrictions';


export class Mandate {
    serviceProviderArea?: String; 
    serviceProviderName: String;
    CustomerId: String;
    initDate? : Date;
    expiredDate?:Date;
    restrictions : Restrictions;
    imagePath ?: String;
    
    }
