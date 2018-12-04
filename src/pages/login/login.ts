import { Component } from '@angular/core';
import {AlertController, IonicPage} from 'ionic-angular';
import {LanguageService} from "../../app/language.service";
import {NavigationService} from "../../app/nav.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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

  myForm: FormGroup;

  constructor(public resources: LanguageService,
              public navigation: NavigationService,
              public formBuilder: FormBuilder,
              public alertCtrl: AlertController) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
  }

  doLogin() {
    this.navigation.doLogin(this.emailForm, this.passwordForm);
  }


  doSignup(){
    this.navigation.doSignup(this.emailForm, this.passwordForm);
  }

  get emailForm() {
    return this.myForm.get('email').value;
  }

  get passwordForm() {
    return this.myForm.get('password').value;
  }

  private createMyForm(){
    return this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(32)
      ]
      ]});
  }



  //doLoginWithGoogleAccount(){
    //this.navigation.doLogin();
  //}

}
