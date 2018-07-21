import {Injectable} from '@angular/core';
import {properties} from '../environments/properties';

@Injectable()
export class LanguageService {

  language: string;

  public languages: any[];

  constructor() {
    this.languages = [
      {
        value: 'ES',
        label: 'Español'
      },
      {
        value: 'EN',
        label: 'Inglés'
      }
      ]
    this.language = 'ES';
  }

  public changeLanguaje(lSelected:string) {
    this.language = lSelected;
  }

  get properties() {
    switch (this.language) {
      case 'ES':
        return properties.es;
      case 'EN':
        return properties.en;
    }
  }
}
