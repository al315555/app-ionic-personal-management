import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LanguageService} from "../../app/language.service";

/**
 * Generated class for the TareasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})
export class TareasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public resources: LanguageService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TareasPage');
  }

}
