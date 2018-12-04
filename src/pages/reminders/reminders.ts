import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LanguageService} from "../../app/language.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'reminders.html'
})
export class RemindersPage {

  constructor(public navCtrl: NavController, public resources: LanguageService) {

  }

}
