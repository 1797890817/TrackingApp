import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ImagePicker } from "@ionic-native/image-picker";
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
import { PlaHomePage } from '../pages/plantation/home/home';
import { PlotsPage } from '../pages/plantation/plots/plots';
import { OperationPage } from '../pages/plantation/operation/operation';
import { AddOperationPage } from "../pages/plantation/add-operation/add-operation";
import { LoginPage } from '../pages/login/login';

import { CirHomePage } from "../pages/circulation/cirhome/cirhome";
import { ProHomePage } from "../pages/producation/prohome/prohome";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { ToastProvider } from '../providers/toast/toast';

@NgModule({
  declarations: [
    MyApp,
    PlaHomePage,
    PlotsPage,
    OperationPage,
    AddOperationPage,
    CirHomePage,
    ProHomePage,
    LoginPage
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlaHomePage,
    PlotsPage,
    OperationPage,
    AddOperationPage,
    CirHomePage,
    ProHomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    ApiProvider,
    ToastProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    
  ]
})
export class AppModule {}
