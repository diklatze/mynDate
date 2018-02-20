import { Restrictions } from './Restrictions';


export class Mandate {
    serviceProviderArea?: String; 
    serviceProviderName: String;
    CustomerId: String;
    userId ?: String;
    restrictions : Restrictions;
    imagePath ?: String;
    initDate? : String;
    expiredDate?:String;
    
    }
