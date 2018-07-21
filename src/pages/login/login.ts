import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {LanguageService} from "../../app/language.service";
import {NavigationService} from "../../app/nav.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public resources: LanguageService,
              public navigation: NavigationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLoginWithGoogleAccount(){
    this.navigation.doLogin();
  }

}
