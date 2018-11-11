import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable()
export class NavigationService {

  constructor(private auth: AuthService) {
    //this.isLogged = this.auth.logged;
  }

  doLogin(email:string, password:string){
    this.auth.login(email, password);
  }

  doSignup(email:string, password:string){
    this.auth.signup(email, password);
  }

  doLogout(){
    this.auth.logout();
  }

  get mainPage(){return this.auth.isLoggedIn() ? 1 : 0;}

}
