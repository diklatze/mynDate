import { UserDetails } from './UserDetails';
import { Account } from './Account';
import { Restrictions } from './Restrictions';
import { Mandate } from './Mandate';

export const restrictions: Restrictions = { notifyMoreThanUsual: true, notifyOnPayment: true };

export const MANDETES: Mandate[] = [
    { CustomerId: "32545243445", userId: "201038312", serviceProviderName: "Allianz", serviceProviderArea: "Insurance", restrictions: restrictions }, 
    { CustomerId: "6621243445", userId: "201038312", serviceProviderName: "British Gas", serviceProviderArea: "Electric company", restrictions: restrictions },
    { CustomerId: "121263645", userId: "201038312", serviceProviderName: "O2", serviceProviderArea: "Cellphone provider", restrictions: restrictions},
    {CustomerId: "3243436645", userId: "201038312", serviceProviderName: "Virgin Media", serviceProviderArea: "TV/Phone/Cell bundle provider", restrictions: restrictions}

];
export const ACCOUNTS: Account[] = [
    { bankName: "Barclays", accountNum: "20474290124893", branchName: "02B",mandates:MANDETES }

];


export const USERS: UserDetails[] = [
    { name: "John", familyName: "Lennon", email: "John.lennon@gmail.com", password: "abc123", phoneNumber: "26795543",accounts:ACCOUNTS },

];