import {Injectable} from '@angular/core';
import {properties} from '../environments/properties';

@Injectable()
export class LanguageService {

  language: string;

  constructor() {
    this.language = 'ES';
  }

  public changeTo_EN() {
    this.language = 'EN';
  }

  public changeTo_ES() {
    this.language = 'ES';
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
