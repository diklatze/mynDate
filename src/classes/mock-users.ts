import { UserDetails } from './UserDetails';
import { Account } from './Account';
import { Restrictions } from './Restrictions';
import { Mandate } from './Mandate';
import { PaymentDetail } from './PaymentDetail';
import {BusinessComp} from './BusinessComp';



export const restrictions: Restrictions = { notifyMoreThanUsual: true, notifyOnPayment: true };

export const PaymentDetail1: PaymentDetail[] = [
    {paymentAmount: "€ 456.37",paymentDate: "17/09/01" },
    {paymentAmount: "€ 479.37",paymentDate: "17/08/01" },
    {paymentAmount: "€ 489.37",paymentDate: "17/07/01" },
    {paymentAmount: "€ 438.00",paymentDate: "17/06/01" },
    {paymentAmount: "€ 489.00",paymentDate: "17/05/01" },
    {paymentAmount: "€ 450.00",paymentDate: "17/04/01" },
    {paymentAmount: "€ 400.97",paymentDate: "17/03/01" },
    {paymentAmount: "€ 421.99",paymentDate: "17/02/01" },
    {paymentAmount: "€ 498.67",paymentDate: "17/01/01" }

];
export const PaymentDetail2: PaymentDetail[] = [
    {paymentAmount: "€ 1000.37",paymentDate: "17/09/05" },
    {paymentAmount: "€ 1239.37",paymentDate: "17/08/05" },
    {paymentAmount: "€ 1489.37",paymentDate: "17/07/05" },
    {paymentAmount: "€ 1111.00",paymentDate: "17/06/05" },
    {paymentAmount: "€ 1322.00",paymentDate: "17/05/05" },
    {paymentAmount: "€ 1000.00",paymentDate: "17/04/05" },
    {paymentAmount: "€ 1023.97",paymentDate: "17/03/05" },
    {paymentAmount: "€ 986.99",paymentDate:  "17/02/05" },
    {paymentAmount: "€ 1212.67",paymentDate: "17/01/05" }

];
export const PaymentDetail3: PaymentDetail[] = [
    {paymentAmount: "€ 123.37",paymentDate: "17/09/10" },
    {paymentAmount: "€ 111.37",paymentDate: "17/08/10" },
    {paymentAmount: "€ 102.37",paymentDate: "17/07/10" },
    {paymentAmount: "€ 98.00",paymentDate:  "17/06/10" },
    {paymentAmount: "€ 111.00",paymentDate: "17/05/10" },
    {paymentAmount: "€ 109.00",paymentDate: "17/04/10" },
    {paymentAmount: "€ 109.97",paymentDate: "17/03/10" },
    {paymentAmount: "€ 111.99",paymentDate: "17/02/10" },
    {paymentAmount: "€ 99.67",paymentDate:  "17/01/10" }

];
export const PaymentDetail4: PaymentDetail[] = [
    {paymentAmount: "€ 540.00",paymentDate: "16/09/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/08/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/07/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/06/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/05/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/04/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/03/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/02/01" },
    {paymentAmount: "€ 540.00",paymentDate: "16/01/01" }

];
export const MANDETES1: Mandate[] = [
    { CustomerId: "32545243445", userId: "123456789", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Allianze-insurance.png",initDate:"17/11/31",paymentDetail:PaymentDetail4 }, 
    { CustomerId: "32545243445", userId: "046259735", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions,imagePath:"./assets/images/companyLogos/O2_cellphone.png",initDate:"17/11/31",paymentDetail:PaymentDetail3 }, 
    { CustomerId: "1234555555", userId: "208056789", serviceProviderName: "Virgin Media", serviceProviderArea: "TV/Phone/Cell bundle provider", restrictions: restrictions,imagePath:"./assets/images/companyLogos/virgin_media-bundle_internet_phone_tv.png" ,initDate:"17/11/31",paymentDetail:PaymentDetail2}, 
     
];

export const MANDETES2: Mandate[] = [
  { CustomerId: "32545243775", userId: "30897459", serviceProviderName: "Direct Énergie", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Direct Énergie.png",initDate:"16/12/20",paymentDetail:PaymentDetail1 }, 
    { CustomerId: "6621243445", userId: "126987745", serviceProviderName: "Endesa", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Endesa.png",initDate:"16/12/20" ,paymentDetail:PaymentDetail2},
    { CustomerId: "5487989898", userId: "123456789", serviceProviderName: "Vodafone", serviceProviderArea: "Cellphone provider", restrictions: restrictions,imagePath:"./assets/images/companyLogos/vodafone.png",initDate:"16/12/24",paymentDetail:PaymentDetail3}

];
export const MANDETES3: Mandate[] = [
     { CustomerId: "5487989898", userId: "046259735", serviceProviderName: "Tesco", serviceProviderArea: "Cellphone provider", restrictions: restrictions ,imagePath:"./assets/images/companyLogos/tesco.png",initDate:"16/12/20",paymentDetail:PaymentDetail2}, 
      { CustomerId: "32545243445", userId: "208056789", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Allianze-insurance.png",initDate:"16/12/20", paymentDetail:PaymentDetail3}

];



export const ACCOUNTS: Account[] = [
    { bankName: "Barclays", accountNum: "20474290124893", branchName: "02B",mandates:MANDETES1,imagePath:"./assets/images/bankLogos/barclays.png" },
    { bankName: "HSBC", accountNum: "40010131446495", branchName: "69B",mandates:MANDETES2 , imagePath:"./assets/images/bankLogos/hsbc.png"},
   { bankName: "SWED", accountNum: "01670010", branchName: "IBF",mandates:MANDETES3, imagePath:"./assets/images/bankLogos/swedbank.png" }

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


export const BANKS:BusinessComp[]=[
{name:"BARCLAYS",imagePath:"./assets/images/bankLogos/barclays.png" },
{name:"BOI",imagePath:"./assets/images/bankLogos/BOI.png" },
{name:"HSBC",imagePath:"./assets/images/bankLogos/hsbc.png" },
{name:"SWED",imagePath:"./assets/images/bankLogos/swedbank.png" }

];

export const COMPANY:BusinessComp[]=[
    {name:"Allianze-insurance",imagePath:"./assets/images/companyLogos/Allianze-insurance.png" },
    {name:"British_gas",imagePath:"./assets/images/companyLogos/british_gas.png" },
    {name:"Direct Énergie",imagePath:"./assets/images/companyLogos/Direct Énergie.png" },
    {name:"E.ON",imagePath:"./assets/images/companyLogos/E.ON.png" },
    {name:"Endesa",imagePath:"./assets/images/companyLogos/Endesa.png" },
    {name:"O2_cellphone",imagePath:"./assets/images/companyLogos/O2_cellphone.png" },
    {name:"tesco",imagePath:"./assets/images/companyLogos/tesco.png" },
    {name:"virgin_media",imagePath:"./assets/images/companyLogos/virgin_media-bundle_internet_phone_tv.png" },
    {name:"vodafone",imagePath:"./assets/images/companyLogos/vodafone.png" }
    ];