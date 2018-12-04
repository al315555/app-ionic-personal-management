import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {LanguageService} from "./language.service";
import {AlertController} from "ionic-angular";

@Injectable()
export class NavigationService {

  constructor(private auth: AuthService, private resources: LanguageService, public alertCtrl: AlertController) {
    //this.isLogged = this.auth.logged;
  }

  doLogin(email:string, password:string){
    this.auth.login(email, password).catch(err => this.showLoginAlert());
    this.showLoginAlert();

  }

  showLoginAlert(){
    const returnedValue = this.auth.errorMessage;
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: this.showSpanishMsg(returnedValue),
      buttons: ['Ok']
    });
    if(returnedValue != 'OK') {alert.present();}
  }

  private showSpanishMsg(errorMess: string): string {
    if (this.resources.language === 'EN') { return errorMess; }
    switch (errorMess) {
      case 'The email address is badly formatted.':
        return 'El formato del e-mail no es correcto.';
      case 'The password is invalid or the user does not have a password.':
        return 'La contraseña es incorrecta.';
      case 'There is no user record corresponding to this identifier. The user may have been deleted.':
        return 'El usuario no existe.';
      default:
        return 'Error genérico. Contacte con el administrador';
    }
  }

  doSignup(email:string, password:string){
    this.auth.signup(email, password);
  }

  doLogout(){
    this.auth.logout();
  }

  get mainPage(){return this.auth.isLoggedIn() ? 1 : 0;}

}
