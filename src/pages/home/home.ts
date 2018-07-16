import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TareasPage} from "../tareas/tareas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  launchTareasPage(){
    this.navCtrl.push(TareasPage);
  }
}
