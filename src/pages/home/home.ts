import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TareasPage} from "../tareas/tareas";
import {LanguageService} from "../../app/language.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public resources: LanguageService) {

  }

  launchTareasPage(){
    this.navCtrl.push(TareasPage);
  }
}
