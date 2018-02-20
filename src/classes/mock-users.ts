import { UserDetails } from './UserDetails';
import { Account } from './Account';
import { Restrictions } from './Restrictions';
import { Mandate } from './Mandate';

export const restrictions: Restrictions = { notifyMoreThanUsual: true, notifyOnPayment: true };

export const MANDETES: Mandate[] = [
    { CustomerId: "32545243445", userId: "123456789", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243445", userId: "046259735", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "1234555555", userId: "208056789", serviceProviderName: "Virgin Media", serviceProviderArea: "TV/Phone/Cell bundle provider", restrictions: restrictions,imagePath:".\assets\images\companyLogos\virgin_media-bundle_internet_phone_tv.png" }, 
    { CustomerId: "6621243445", userId: "046259735", serviceProviderName: "British Gas", serviceProviderArea: "Electric company", restrictions: restrictions ,imagePath:".\assets\images\companyLogos\british_gas.png" }, 
    { CustomerId: "5487989898", userId: "046259735", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions ,imagePath:".\assets\images\companyLogos\O2_cellphone.png"}, 
    { CustomerId: "32545243445", userId: "208056789", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png"}, 
    { CustomerId: "32545243445", userId: "30897459", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243445", userId: "126987745", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243445", userId: "3069724498", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Allianze-insurance.png" }, 
    { CustomerId: "32545243775", userId: "30897459", serviceProviderName: "Direct Énergie", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:".\assets\images\companyLogos\Direct Énergie.png" }, 
    { CustomerId: "6621243445", userId: "126987745", serviceProviderName: "British Gas", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:".\assets\images\companyLogos\british_gas.png" },
    { CustomerId: "5487989898", userId: "123456789", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions,imagePath:".\assets\images\companyLogos\O2_cellphone.png"},
    {CustomerId: "1234555555", userId: "123456789", serviceProviderName: "Virgin Media", serviceProviderArea: "TV/Phone/Cell bundle provider", restrictions: restrictions,imagePath:".\assets\images\companyLogos\virgin_media-bundle_internet_phone_tv.png" }

];
export const ACCOUNTS: Account[] = [
    { bankName: "Barclays", accountNum: "1111111", branchName: "02B",mandates:MANDETES,imagePath:".\assets\images\bankLogos\barclays.png" },
    { bankName: "HSBC", accountNum: "2222222", branchName: "151",mandates:MANDETES , imagePath:".\assets\images\bankLogos\hsbc.png"},
    { bankName: "HSBC", accountNum: "3333333", branchName: "0CD",mandates:MANDETES , imagePath:".\assets\images\bankLogos\hsbc.png"},
    { bankName: "SWED", accountNum: "4444444", branchName: "DEQ",mandates:MANDETES, imagePath:".\assets\images\bankLogos\swedbank.png" },
    { bankName: "BOI", accountNum: "55555555", branchName: "NEG",mandates:MANDETES , imagePath:".\assets\images\bankLogos\BOI.png"},
    { bankName: "SWED", accountNum: "6666666", branchName: "B2R",mandates:MANDETES, imagePath:".\assets\images\bankLogos\swedbank.png" },
    { bankName: "Barclays", accountNum: "7777777", branchName: "02B",mandates:MANDETES, imagePath:".\assets\images\bankLogos\barclays.png"}

];


export const USERS: UserDetails[] = [
    { name: "John", familyName: "Lennon", userId: "123456789",email: "John.lennon@gmail.com", password: "abc123", phoneNumber: "+12326795543",accounts:ACCOUNTS },
    { name: "Merav", familyName: "Shahor",userId: "046259735", email: "merav.shahor@gmail.com", password: "abc123", phoneNumber: "+972528543238",accounts:ACCOUNTS },
    { name: "Dikla", familyName: "Weil", userId: "208056789",email: "dikla.weil@gmail.com", password: "abc123", phoneNumber: "+97215369715",accounts:ACCOUNTS },
    { name: "Boaz", familyName: "Shuker", userId: "30897459",email: "boaz.shuker@gmail.com", password: "abc123", phoneNumber: "+9726351429",accounts:ACCOUNTS },
    { name: "Shani", familyName: "Keshet",userId: "126987745", email: "shani.keshet@gmail.com", password: "abc123", phoneNumber: "+97258796452",accounts:ACCOUNTS },
    { name: "Rochai", familyName: "Ben-Mor", userId: "3069724498",email: "rochi.benMor@gmail.com", password: "abc123", phoneNumber: "+97253689742",accounts:ACCOUNTS },
    { name: "Amir", familyName: "Shahor",userId: "040535304", email: "amir.shahor@gmail.com", password: "abc123", phoneNumber: "+972506222966",accounts:ACCOUNTS },
    { name: "Tair", familyName: "Shahor", userId: "3026584257",email: "tair.shahor@gmail.com", password: "abc123", phoneNumber: "+9999999999",accounts:ACCOUNTS },
    { name: "Golan", familyName: "Shahor",userId: "3025698741", email: "golan.shahor@gmail.com", password: "abc123", phoneNumber: "+888888888",accounts:ACCOUNTS },
    { name: "Yarden", familyName: "Shahor", userId: "305967410",email: "yarden.shahor@gmail.com", password: "abc123", phoneNumber: "+777777777",accounts:ACCOUNTS },
    { name: "Arbel", familyName: "Shahor", userId: "20153647",email: "arbel.shahor@gmail.com", password: "abc123", phoneNumber: "+9725645645",accounts:ACCOUNTS },



];