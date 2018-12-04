import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {User} from "firebase";
import {PurchaseListElement} from "./models/PurchaseListElement";

@Injectable()
export class AuthService {
  private PHOTO_BY_DEFAULT: string =
    'http://static.wixstatic.com/media/1dd1d6_3f96863fc9384f60944fd5559cab0239.png_srz_300_300_85_22_0.50_1.20_0.00_png_srz';
  user: Observable<firebase.User>;
  userData: User;
  public errorMessage: string;
  public listPurchaseData = new Array<PurchaseListElement>();
  public userSpecificData = {
    email: ''
    , photoURL: 'http://static.wixstatic.com/media/1dd1d6_3f96863fc9384f60944fd5559cab0239.png_srz_300_300_85_22_0.50_1.20_0.00_png_srz'
    , languaje: 'EN', name: '', gender: 0, birthdate: 0, dataLoaded: false
  };

  constructor(private _firebaseAuth: AngularFireAuth, private _db: AngularFireDatabase) {
    this.user = _firebaseAuth.authState;
    this.userData = this._firebaseAuth.auth.currentUser;
    this._firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.userData = this._firebaseAuth.auth.currentUser;
        this.loadUserSpecificData();
        this.loadPurchaseListData();
      }else{
        this.userData = user;
        this.loadUserSpecificData();
      }
    });
  }

  isLoggedIn(): boolean {
    if (this.userData) {
      return true;
    } else {
      return false;
    }
  }

  private loadUserSpecificData(): void {
    if (this.userData && !this.userSpecificData.dataLoaded) {

      const UID = this.userData.uid;

      firebase.database().ref()
        .child('USUARIOS')
        .child(UID)
        .child('EMAIL').on('value',
        snapshot => {
          this.userSpecificData.email = snapshot.exportVal();
        }
      );
      firebase.database().ref()
        .child('USUARIOS')
        .child(UID)
        .child('LANGUAJE').on('value',
        snapshot => {
          this.userSpecificData.languaje = snapshot.exportVal();
        }
      );
      firebase.database().ref()
        .child('USUARIOS')
        .child(UID)
        .child('GENDER').on('value',
        snapshot => {
          this.userSpecificData.gender = snapshot.exportVal();
        }
      );
      firebase.database().ref()
        .child('USUARIOS')
        .child(UID)
        .child('NAME').on('value',
        snapshot => {
          this.userSpecificData.name = snapshot.exportVal();
        }
      );
      firebase.database().ref()
        .child('USUARIOS')
        .child(UID)
        .child('PHOTOURL').on('value',
        snapshot => {
          this.userSpecificData.photoURL = snapshot.exportVal();
        }
      );
      firebase.database().ref()
        .child('USUARIOS')
        .child(UID)
        .child('BIRTHDATE').on('value',
        snapshot => {
          this.userSpecificData.birthdate = snapshot.exportVal();
        }
      );

      this.userSpecificData.dataLoaded = true;
    }else if(this.userSpecificData.dataLoaded){
      this.userSpecificData = {
        email: ''
        , photoURL: 'http://static.wixstatic.com/media/1dd1d6_3f96863fc9384f60944fd5559cab0239.png_srz_300_300_85_22_0.50_1.20_0.00_png_srz'
        , languaje: 'EN', name: '', gender: 0, birthdate: 0, dataLoaded: false
      };
    }
;  }

  saveUserData() {
    console.log('GUARDANDO...' + this.userSpecificData.name);
    const UID = this.userData.uid;
    firebase.database().ref()
      .child('USUARIOS')
      .child(UID)
      .child('EMAIL')
      .set(this.userSpecificData.email).then(res => console.log('EMAIL SAVED'));
    firebase.database().ref()
      .child('USUARIOS')
      .child(UID)
      .child('PHOTOURL')
      .set(this.userSpecificData.photoURL).then(res => console.log('PHOTOURL SAVED'));
    firebase.database().ref()
      .child('USUARIOS')
      .child(UID)
      .child('LANGUAJE')
      .set(this.userSpecificData.languaje).then(res => console.log('LANGUAJE SAVED'));
    firebase.database().ref()
      .child('USUARIOS')
      .child(UID)
      .child('GENDER')
      .set(this.userSpecificData.gender).then(res => console.log('GENDER SAVED'));
    firebase.database().ref()
      .child('USUARIOS')
      .child(UID)
      .child('BIRTHDATE')
      .set(this.userSpecificData.birthdate).then(res => console.log('BIRTHDATE SAVED'));
    firebase.database().ref()
      .child('USUARIOS')
      .child(UID)
      .child('NAME')
      .set(this.userSpecificData.name).then(res => console.log('NAME SAVED'));
    console.log('DATA SAVED CORRECTLY --> name: ' + this.userSpecificData.name);
  }

  logout() {
    console.log('LOGGING OUT...');
    this._firebaseAuth.auth.signOut()
      .then((res) => {
        console.log('LOGGIN OUT DONE');
        // this.router.navigate(['/']);
      });
  }

  login(email: string, password: string){
    console.log('autenticando...')
    this.errorMessage = 'OK';
    return new Promise((resolve, reject) => {
      this._firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          // this.loadUserSpecificData();
          // console.log(this.userDetails.displayName + this.isLoggedIn());
          this.errorMessage = 'OK';
          resolve('');
        })
        .catch(err => {
          this.errorMessage = err.message;
          reject(err);
        });
    });

  }

  signup(email: string, password: string) {
    console.log('Entrada en signup');
    return new Promise((resolve, reject) => {
      this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(value => {

          firebase.database().ref()
            .child('USUARIOS')
            .child(value.user.uid)
            .child('EMAIL')
            .set(email);
          firebase.database().ref()
            .child('USUARIOS')
            .child(value.user.uid)
            .child('PHOTOURL')
            .set(this.PHOTO_BY_DEFAULT);
          firebase.database().ref()
            .child('USUARIOS')
            .child(value.user.uid)
            .child('LANGUAJE')
            .set('EN');
          firebase.database().ref()
            .child('USUARIOS')
            .child(value.user.uid)
            .child('GENDER')
            .set(0);
          firebase.database().ref()
            .child('USUARIOS')
            .child(value.user.uid)
            .child('BIRTHDATE')
            .set(0);
          firebase.database().ref()
            .child('USUARIOS')
            .child(value.user.uid)
            .child('NAME')
            .set('');

          console.log('ADDED CORRECTLY.');
          // this.loadUserSpecificData();
          resolve(value);
        })
        .catch(err => {
          this.errorMessage = err.message;
          reject(err);
        });
    });
  }

  public savePurchaseListData(){
    console.log('Storing purchase list...');
    const UID = this.userData.uid;
    firebase.database().ref()
      .child('PURCHASELIST')
      .child(UID)
      .set(this.purchaseListData);
    this.loadPurchaseListData();
  }

  public loadPurchaseListData(){
    console.log('Getting purchase list...');
    const UID = this.userData.uid;
    this.listPurchaseData = new Array<PurchaseListElement>();
    // let result = new Array<PurchaseListElement>();
    firebase.database().ref()
      .child('PURCHASELIST')
      .child(UID).on('value',
      snapshot => {
        // result = snapshot.exportVal();
        snapshot.val().forEach(element => {
          let purchaseListElement = new PurchaseListElement();
          purchaseListElement.name = element.name;
          purchaseListElement.description = element.description;
          purchaseListElement.dateModification = element.dateModification;
          this.listPurchaseData.push(purchaseListElement);
        });
      }
    );
  }

  get purchaseListData(){
    return this.listPurchaseData;
  }

}
