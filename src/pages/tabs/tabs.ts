import { Component } from '@angular/core';

import { CountPage } from '../count/count';
import { RemindersPage } from '../reminders/reminders';
import { HomePage } from '../home/home';
import {LanguageService} from "../../app/language.service";
import {TareasPage} from "../tareas/tareas";
import {PurchaseListPage} from "../purchase-list/purchase-list";
import {NavigationService} from "../../app/nav.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TareasPage;
  tab3Root = RemindersPage;
  tab4Root = CountPage;
  tab5Root = PurchaseListPage;

  constructor( public resources: LanguageService, public nav: NavigationService) {

  }

  logout(){
    this.nav.doLogout()
  }
}
