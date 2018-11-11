import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LanguageService} from "../../app/language.service";

/**
 * Generated class for the PurchaseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-list',
  templateUrl: 'purchase-list.html',
})
export class PurchaseListPage {

  purchaseItems: {}[];

  constructor(public navCtrl: NavController
              , public navParams: NavParams
              , public resources1: LanguageService
              , public alertCtrl: AlertController) {
    this.purchaseItems = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseListPage');
  }

  deployAddPrompt(){
    const prompt = this.alertCtrl.create({
      title: 'Añadir producto',
      message: 'Introduzca el nombre del componente y una pequeña descripción.',
      inputs: [
        {
          name: 'Nom',
          placeholder: 'Nombre'
        },
        {
          name: 'Descrip',
          placeholder: 'Descripción'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            this.purchaseItems.push(data);
            console.log('Saved clicked ');
            console.log(data);
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  addItem(item: string){
    this.purchaseItems.push(item);
  }

}
