import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events ,AlertController,ToastController} from 'ionic-angular';
//providers
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
import { BrowserTab } from '@ionic-native/browser-tab';
//import {SevenProvider} from '../seven/seven';
import  {Globals} from '../../assets/global';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  HAS_LOGGED_IN = 'hasLoggedIn';
  constructor(public http: HttpClient,private storage: Storage,public events: Events,private callNumber: CallNumber,
  private emailComposer: EmailComposer,private alertCtrl:AlertController,private toastCtrl:ToastController,private keychain:KeychainTouchId,
private browserTab: BrowserTab) {
    console.log('Hello UserDataProvider Provider');
  }
  login(username: string,info:any,usupass:string): void {
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUsername(username);
      info.password = usupass;
       this.setUserInfo(info)
      this.events.publish('user:login');
    };
    signup(username: string): void {
      this.storage.set(this.HAS_LOGGED_IN, true);
      this.setUsername(username);
      this.events.publish('user:signup');
    };
    logout(): void {
    console.log("borrando usuario");
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.storage.remove('userinfo');
    this.events.publish('user:logout');
  };
  setUsername(username: string): void {
    this.storage.set('username', username);
    console.log('username guardado');
  };
  setSecureUser(user: string): void {
    this.storage.set('secureUser', user);
  };
  setUserInfo(info: any): void {
    console.log(info);
    this.storage.set('userinfo', info);
  };
  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };
  getSecureUser(): Promise<string> {
    return this.storage.get('secureUser').then((value) => {
      return value;
    });
  };
  getUserInfo(): Promise<any> {
    return this.storage.get('userinfo').then((value) => {
      return value;
    });
  };
  SetReplicated(replicated:string):void{
      this.storage.set('replicated', replicated);
  }
  getReplicated(): Promise<any> {
    return this.storage.get('replicated').then((value) => {
      return value;
    });
  };
  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  setConnectionsPreference(selected:boolean):void{
    this.storage.set('SettedConnection',selected);
  }
  getConnectionsPreference():Promise<boolean>{
    return this.storage.get('SettedConnection').then(value=>{
      return value;
    })
  }
  setSavedConnections(conex:string){
      Globals.ClientUrl = conex;
      this.storage.set('SavedConnection',conex);
  }
  getSavedConnections():Promise<string>{
    return this.storage.get('SavedConnection').then(value=>{
      return value;
    })
  }
  setFaClien(data:any):void{
    console.log("faclien almacenados en memoria");
    this.storage.set("faClien",data)
  }
  setBusiness(data:any){
    this.storage.set("business",data);
  }
  GetBusiness():Promise<any>{
    return this.storage.get('business').then(value=>{
      return value;
    })
  }
  SetBusinessClient(client:any){
    this.storage.set("businessClient",client);
  }
  GetBusinessClient(){
    return this.storage.get('businessClient').then(value=>{
      console.log(value);
      return value;
    })
  }
  callContact(number:string){
    this.callNumber.callNumber(number, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }
  sendEmail(to:string){
    this.emailComposer.isAvailable().then((available: boolean) =>{
     if(available) {
       //Now we know we can send
     }
    });
    let email = {
    to: to,
  };
    // Send a text message using default options
    this.emailComposer.open(email);
  }
  showAlert(mensaje:string, titulo:string) {
  let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: mensaje,
    buttons: ['OK']
  });
  alert.present();
  }
  showToast(mensaje:string){
  let toast=  this.toastCtrl.create({
      message:mensaje,
      duration:2000,
      position:'top'
    })
    toast.present();
  }
  setBackGround(color:string){
      this.storage.set('background',color);
  }
  setLogo(logo:string){
    this.storage.set('logo',logo);
  }
  setLink(link:string){
    this.storage.set('link',link);
  }
  getBackground(){
    return this.storage.get('background').then(value=>{
      return value;
    })
  }
  getLogo(){
    return this.storage.get('logo').then(value=>{
      return value;
    })
  }
  getLink(){
    return this.storage.get('link').then(value=>{
      return value;
    })
  }
  RemoveTouchID(){
    this.storage.remove('secureUser');
      this.keychain.delete('password');
  }
  removeData(){
    this.storage.remove('background');
    this.storage.remove('logo');
    this.storage.remove('SavedConnection');
    this.storage.remove('userinfo');
    this.storage.remove('username');
    this.storage.remove('secureUser');
    this.keychain.delete('password');
    this.storage.remove("business");
    this.storage.remove('replicated');
    this.storage.remove("businessClient");
    this.storage.remove("SavedConnection");
    this.logout();
  }
  removeReplicated(){
      this.storage.remove('replicated');
  }
  openBrowser(url:string){
    this.browserTab.isAvailable()
     .then((isAvailable: boolean) => {
       if (isAvailable) {
         this.browserTab.openUrl(url);
       } else {
  console.log('navegador no disponible')
       }

  })
  }

}
