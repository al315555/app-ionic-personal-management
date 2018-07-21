import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {CountPage} from '../pages/count/count';
import {RemindersPage} from '../pages/reminders/reminders';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TareasPage} from "../pages/tareas/tareas";
import {LanguageService} from "./language.service";
import {PurchaseListPage} from "../pages/purchase-list/purchase-list";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {NavigationService} from "./nav.service";
import {LoginPage} from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    CountPage,
    RemindersPage,
    HomePage,
    TabsPage,
    TareasPage,
    PurchaseListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        backButtonText: '',
        iconMode: 'md',
        modalEnter: 'modal-slide-in',
        modalLeave: 'modal-slide-out',
        tabsPlacement: 'bottom',
        pageTransition: 'md-transition'
      }
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CountPage,
    RemindersPage,
    HomePage,
    TabsPage,
    TareasPage,
    PurchaseListPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LanguageService,
    NavigationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
