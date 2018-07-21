import {Injectable} from '@angular/core';

@Injectable()
export class NavigationService {

  isLogged:boolean = false;
  /*LOGGED:number = 1;
  NOT_LOGGED:number = 0;*/

  constructor() {}

  doLogin(){
    //TODO
    this.isLogged = true;
  }

  doLogout(){
    //TODO
    this.isLogged = false;
  }

  get mainPage(){return this.isLogged ? 1 : 0;}

}
