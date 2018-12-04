import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LanguageService} from "../../app/language.service";

@Component({
  selector: 'page-about',
  templateUrl: 'count.html'
})
export class CountPage {

  constructor(public navCtrl: NavController, public resources: LanguageService) {

  }

}
