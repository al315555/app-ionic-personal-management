import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LanguageService} from "../../app/language.service";
import {PurchaseListElement} from "../../app/models/PurchaseListElement";
import {AuthService} from "../../app/auth.service";

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

  items: Array<PurchaseListElement>;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public resources1: LanguageService
    , public alertCtrl: AlertController
    , private authService: AuthService) {
    this.loadList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseListPage');
  }

  deployAddPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Añadir producto',
      message: 'Introduzca el nombre del componente y una pequeña descripción.',
      inputs: [
        {
          name: 'Nom',
          placeholder: 'Nombre',
          value: ''
        },
        {
          name: 'Descrip',
          placeholder: 'Descripción',
          value: ''
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
            const name = data['Nom'];
            const desc = data['Descrip'];
            let purchaseListElement = new PurchaseListElement();
            purchaseListElement.name = name;
            purchaseListElement.description = desc;
            purchaseListElement.dateModification = 0;
            this.authService.purchaseListData.push(purchaseListElement);
          }
        }
      ]
    });
    prompt.present();
  }

  private loadList(): void {
    this.authService.loadPurchaseListData();
  }

  saveList() {
    this.authService.savePurchaseListData();
  }

  get purchaseItems(){
    return this.authService.purchaseListData;
  }
}
