import { UserDetails } from './UserDetails';
import { Account } from './Account';
import { Restrictions } from './Restrictions';
import { Mandate } from './Mandate';

export const restrictions: Restrictions = { notifyMoreThanUsual: true, notifyOnPayment: true };

export const MANDETES: Mandate[] = [
    { CustomerId: "32545243445", userId: "John.lennon@gmail.com", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", 
    restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243445", userId: "merav.shahor@gmail.com", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "1234555555", userId: "dikla.weil@gmail.com", serviceProviderName: "Virgin Media", serviceProviderArea: "TV/Phone/Cell bundle provider", restrictions: restrictions,imagePath:".\assets\images\companyLogos\virgin_media-bundle_internet_phone_tv.png" }, 
    { CustomerId: "6621243445", userId: "merav.shahor@gmail.com", serviceProviderName: "British Gas", serviceProviderArea: "Electric company", restrictions: restrictions ,imagePath:".\assets\images\companyLogos\british_gas.png" }, 
    { CustomerId: "5487989898", userId: "merav.shahor@gmail.com", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions ,imagePath:".\assets\images\companyLogos\O2_cellphone.png"}, 
    { CustomerId: "32545243445", userId: "dikla.weil@gmail.com", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png"}, 
    { CustomerId: "32545243445", userId: "boaz.shuker@gmail.com", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243445", userId: "shani.keshet@gmail.com", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243445", userId: "rochi.benMor@gmail.com", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243775", userId: "boaz.shuker@gmail.com", serviceProviderName: "Direct Énergie", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Direct Énergie.png" }, 
    { CustomerId: "6621243445", userId: "shani.keshet@gmail.com", serviceProviderName: "British Gas", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:".\assets\images\companyLogos\british_gas.png" },
    { CustomerId: "5487989898", userId: "John.lennon@gmail.com", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions,imagePath:".\assets\images\companyLogos\O2_cellphone.png"},
    {CustomerId: "1234555555", userId: "John.lennon@gmail.com", serviceProviderName: "Virgin Media", serviceProviderArea: "TV/Phone/Cell bundle provider", restrictions: restrictions,imagePath:".\assets\images\companyLogos\virgin_media-bundle_internet_phone_tv.png" }

];
export const ACCOUNTS: Account[] = [
    { bankName: "Barclays", accountNum: "20474290124893", branchName: "02B",mandates:MANDETES,imagePath:".\assets\images\bankLogos\barclays.png" },
    { bankName: "HSBC", accountNum: "20445454124893", branchName: "151",mandates:MANDETES , imagePath:".\assets\images\bankLogos\hsbc.png"},
    { bankName: "HSBC", accountNum: "2047426541893", branchName: "0CD",mandates:MANDETES , imagePath:".\assets\images\bankLogos\hsbc.png"},
    { bankName: "SWED", accountNum: "20474244444893", branchName: "DEQ",mandates:MANDETES, imagePath:".\assets\images\bankLogos\swedbank.png" },
    { bankName: "BOI", accountNum: "20474233333893", branchName: "NEG",mandates:MANDETES , imagePath:".\assets\images\bankLogos\BOI.png"},
    { bankName: "SWED", accountNum: "204742128744893", branchName: "B2R",mandates:MANDETES, imagePath:".\assets\images\bankLogos\swedbank.png" },
    { bankName: "Barclays", accountNum: "20197224893", branchName: "02B",mandates:MANDETES, imagePath:".\assets\images\bankLogos\barclays.png"}

];


export const USERS: UserDetails[] = [
    { name: "John", familyName: "Lennon", email: "John.lennon@gmail.com", password: "abc123", phoneNumber: "+12326795543",accounts:ACCOUNTS },
    { name: "Merav", familyName: "Shahor", email: "merav.shahor@gmail.com", password: "abc123", phoneNumber: "+972528543238",accounts:ACCOUNTS },
    { name: "Dikla", familyName: "Weil", email: "dikla.weil@gmail.com", password: "abc123", phoneNumber: "+97215369715",accounts:ACCOUNTS },
    { name: "Boaz", familyName: "Shuker", email: "boaz.shuker@gmail.com", password: "abc123", phoneNumber: "+9726351429",accounts:ACCOUNTS },
    { name: "Shani", familyName: "Keshet", email: "shani.keshet@gmail.com", password: "abc123", phoneNumber: "+97258796452",accounts:ACCOUNTS },
    { name: "Rochai", familyName: "Ben-Mor", email: "rochi.benMor@gmail.com", password: "abc123", phoneNumber: "+97253689742",accounts:ACCOUNTS },
    { name: "Amir", familyName: "Shahor", email: "amir.shahor@gmail.com", password: "abc123", phoneNumber: "+972506222966",accounts:ACCOUNTS },
    { name: "Tair", familyName: "Shahor", email: "tair.shahor@gmail.com", password: "abc123", phoneNumber: "+9999999999",accounts:ACCOUNTS },
    { name: "Golan", familyName: "Shahor", email: "golan.shahor@gmail.com", password: "abc123", phoneNumber: "+888888888",accounts:ACCOUNTS },
    { name: "Yarden", familyName: "Shahor", email: "yarden.shahor@gmail.com", password: "abc123", phoneNumber: "+777777777",accounts:ACCOUNTS },
    { name: "Arbel", familyName: "Shahor", email: "arbel.shahor@gmail.com", password: "abc123", phoneNumber: "+9725645645",accounts:ACCOUNTS },



];