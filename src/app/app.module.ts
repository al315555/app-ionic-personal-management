import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CountPage } from '../pages/count/count';
import { RemindersPage} from '../pages/reminders/reminders';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TareasPage} from "../pages/tareas/tareas";
import {LanguageService} from "./language.service";
import {PurchaseListPage} from "../pages/purchase-list/purchase-list";

@NgModule({
  declarations: [
    MyApp,
    CountPage,
    RemindersPage,
    HomePage,
    TabsPage,
    TareasPage,
    PurchaseListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CountPage,
    RemindersPage,
    HomePage,
    TabsPage,
    TareasPage,
    PurchaseListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LanguageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
