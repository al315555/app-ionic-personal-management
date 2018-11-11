import {Injectable} from '@angular/core';
import {properties} from '../environments/properties';

@Injectable()
export class LanguageService {

  private ES: string = 'ES';
  private EN: string = 'EN';

  public language: string;

  public languages: any[];

  constructor() {
    this.languages = [
      {
        value: 'ES',
        label: 'Español'
      },
      {
        value: 'EN',
        label: 'English'
      }
      ]
    this.language = 'ES';
  }

  public changeLanguaje(lSelected:string) {
    this.language = lSelected;
  }

  get properties() {
    switch (this.language) {
      case this.ES:
        return properties.es;
      case this.EN:
        return properties.en;
    }
  }

  get ES_LANGUAJE(){
    return this.ES;
  }

  get EN_LANGUAJE(){
    return this.EN;
  }
}
