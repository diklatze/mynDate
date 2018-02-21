import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { SignInPage } from '../pages/signIn/signIn';
import { AuthenticationPage } from '../pages/authentication/authentication';
import { AuthenticationSuccessPage } from '../pages/authenticationSucess/authenticationSuccess';
import {AddAccountPage} from '../pages/addAccount/addAcount';
import {MandateManagePage} from '../pages/mandateManage/mandateManage';
import {AddMandatePage} from '../pages/addMandate/addMandate';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {viewMandateDetailesPage} from '../pages/viewMandateDetailes/viewMandateDetailes';
import { MandateCard } from '../components/mandateCard/mandateCard';
import { MandateSegmant } from '../components/mandateSegmant/mandateSegmant';
import { PopoverPage } from '../pages/mandateManage/mandateManage';
import {ViewMandateContructPage} from '../pages/viewMandateContruct/viewMandateContruct';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PopoverPage,
    RegisterPage,
    AuthenticationPage,
    AuthenticationSuccessPage,
    AddAccountPage,
    SignInPage,
    MandateCard,
    MandateSegmant,
    MandateManagePage,
    AddMandatePage,
    viewMandateDetailesPage,
    ViewMandateContructPage
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverPage,
    ListPage,
    RegisterPage,
    AuthenticationPage,
    AuthenticationSuccessPage,
    AddAccountPage,
    SignInPage,
    MandateManagePage,
    AddMandatePage,
    viewMandateDetailesPage,
    ViewMandateContructPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
