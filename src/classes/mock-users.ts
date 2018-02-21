import { UserDetails } from './UserDetails';
import { Account } from './Account';
import { Restrictions } from './Restrictions';
import { Mandate } from './Mandate';
import { PaymentDetail } from './PaymentDetail';

export const restrictions: Restrictions = { notifyMoreThanUsual: true, notifyOnPayment: true };

export const PaymentDetail1: PaymentDetail[] = [
    {paymentAmount: "456.37 EUR",paymentDate: "1/1/2017" },
    {paymentAmount: "479.37 EUR",paymentDate: "2/1/2017" },
    {paymentAmount: "489.37 EUR",paymentDate: "3/1/2017" },
    {paymentAmount: "438.00 EUR",paymentDate: "4/1/2017" },
    {paymentAmount: "489.00 EUR",paymentDate: "5/1/2017" },
    {paymentAmount: "450.00 EUR",paymentDate: "6/1/2017" },
    {paymentAmount: "400.97 EUR",paymentDate: "7/1/2017" },
    {paymentAmount: "421.99 EUR",paymentDate: "8/1/2017" },
    {paymentAmount: "498.67 EUR",paymentDate: "9/1/2017" }

];
export const PaymentDetail2: PaymentDetail[] = [
    {paymentAmount: "1000.37 EUR",paymentDate: "1/5/2017" },
    {paymentAmount: "1239.37 EUR",paymentDate: "2/5/2017" },
    {paymentAmount: "1489.37 EUR",paymentDate: "3/5/2017" },
    {paymentAmount: "1111.00 EUR",paymentDate: "4/5/2017" },
    {paymentAmount: "1322.00 EUR",paymentDate: "5/5/2017" },
    {paymentAmount: "1000.00 EUR",paymentDate: "6/5/2017" },
    {paymentAmount: "1023.97 EUR",paymentDate: "7/5/2017" },
    {paymentAmount: "986.99 EUR",paymentDate: "8/5/2017" },
    {paymentAmount: "1212.67 EUR",paymentDate: "9/5/2017" }

];
export const PaymentDetail3: PaymentDetail[] = [
    {paymentAmount: "123.37 EUR",paymentDate: "1/10/2017" },
    {paymentAmount: "111.37 EUR",paymentDate: "2/10/2017" },
    {paymentAmount: "102.37 EUR",paymentDate: "3/10/2017" },
    {paymentAmount: "98.00 EUR",paymentDate: "4/10/2017" },
    {paymentAmount: "111.00 EUR",paymentDate: "5/10/2017" },
    {paymentAmount: "109.00 EUR",paymentDate: "6/10/2017" },
    {paymentAmount: "109.97 EUR",paymentDate: "7/10/2017" },
    {paymentAmount: "111.99 EUR",paymentDate: "8/10/2017" },
    {paymentAmount: "99.67 EUR",paymentDate: "9/10/2017" }

];
export const PaymentDetail4: PaymentDetail[] = [
    {paymentAmount: "540.00 EUR",paymentDate: "1/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "2/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "3/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "4/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "5/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "6/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "7/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "8/1/2016" },
    {paymentAmount: "540.00 EUR",paymentDate: "9/1/2016" }

];
export const MANDETES1: Mandate[] = [
    { CustomerId: "32545243445", userId: "123456789", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Allianze-insurance.png",initDate:"11/31/17",paymentDetail:PaymentDetail4 }, 
    { CustomerId: "32545243445", userId: "046259735", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions,imagePath:"./assets/images/companyLogos/O2_cellphone.png",initDate:"11/31/17",paymentDetail:PaymentDetail3 }, 
    { CustomerId: "1234555555", userId: "208056789", serviceProviderName: "Virgin Media", serviceProviderArea: "TV/Phone/Cell bundle provider", restrictions: restrictions,imagePath:"./assets/images/companyLogos/virgin_media-bundle_internet_phone_tv.png" ,initDate:"11/31/17",paymentDetail:PaymentDetail2}, 
    { CustomerId: "6621243445", userId: "046259735", serviceProviderName: "British Gas", serviceProviderArea: "Electric company", restrictions: restrictions ,imagePath:"./assets/images/companyLogos/british_gas.png" ,initDate:"1/1/17",paymentDetail:PaymentDetail1}, 
];

export const MANDETES2: Mandate[] = [
  { CustomerId: "32545243775", userId: "30897459", serviceProviderName: "Direct Énergie", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Direct Énergie.png",initDate:"12/20/16",paymentDetail:PaymentDetail1 }, 
    { CustomerId: "6621243445", userId: "126987745", serviceProviderName: "Endesa", serviceProviderArea: "Electric company", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Endesa.png",initDate:"12/20/16" ,paymentDetail:PaymentDetail2},
    { CustomerId: "5487989898", userId: "123456789", serviceProviderName: "Vodafone", serviceProviderArea: "Cellphone provider", restrictions: restrictions,imagePath:"./assets/images/companyLogos/vodafone.png",initDate:"12/24/16",paymentDetail:PaymentDetail3}

];
export const MANDETES3: Mandate[] = [
     { CustomerId: "5487989898", userId: "046259735", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions ,imagePath:"./assets/images/companyLogos/O2_cellphone.png",initDate:"12/20/16",paymentDetail:PaymentDetail2}, 
      { CustomerId: "32545243445", userId: "208056789", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions,imagePath:"./assets/images/companyLogos/Allianze-insurance.png",initDate:"12/20/16", paymentDetail:PaymentDetail3}

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


