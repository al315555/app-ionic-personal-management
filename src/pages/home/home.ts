import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TareasPage} from "../tareas/tareas";
import {LanguageService} from "../../app/language.service";
import {NavigationService} from "../../app/nav.service";
import {AuthService} from "../../app/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  userName: string;

  constructor(public navCtrl: NavController
              , public resources: LanguageService
              , public auth: AuthService) {
    this.userName = this.auth.userSpecificData.name;
    this.email = this.auth.userSpecificData.email;
  }

  launchTareasPage(){
    console.log('TareasLaunch');
    this.navCtrl.push(TareasPage);
    this.userName = this.userData.name;
    this.email = this.userData.email;
  }

  changeName() {
    this.auth.userSpecificData.name = this.userName;
  }

  choose(event){
    this.changeLanguaje(event);
  }

  saveData(){
    this.auth.userSpecificData.languaje = this.resources.language;
    this.auth.saveUserData();
  }

  get userData(){
    return this.auth.userSpecificData;
  }

  changeLanguaje(newOne: string){
    //this.languaje = newOne;
    this.resources.changeLanguaje(newOne);
  }

}
