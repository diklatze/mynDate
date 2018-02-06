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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    AuthenticationPage,
    AuthenticationSuccessPage,
    AddAccountPage,
    SignInPage,
    MandateManagePage
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
    ListPage,
    RegisterPage,
    AuthenticationPage,
    AuthenticationSuccessPage,
    AddAccountPage,
    SignInPage,
    MandateManagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
