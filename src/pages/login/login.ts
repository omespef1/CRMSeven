import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform,ModalController } from 'ionic-angular';
//pages
import {TabsPage} from '../tabs/tabs';
import {ConexPage} from '../conex/conex';
import { NgForm } from '@angular/forms';
//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';
//plugins
import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login = { username: '', password: '' };
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,private alertCtrl:AlertController,
  private _user:UserDataProvider,private keychainTouchId: KeychainTouchId,
private platform:Platform,private faio: FingerprintAIO,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    this.verifyConnections()
    this.GetAccessTouchID();
  }

  onLogin(form: NgForm) {

      this.submitted = true;
      this.TryAccess()

  }
  TryAccess(){
    this._seven.GetValidationUser(this.login.username,this.login.password).then(data=>{
      let datos:any;
          datos=data;
        if(!datos.State){
          this.showAlert('Usuario o contraseña incorrectos','Lo sentimos');
        return;
      }
        this._user.login(this.login.username,datos.ObjResult);
        }
    ).catch(err=>{
          this.showAlert(err,"Lo sentimos!")
    })
  }


GetAccessTouchID(){
  if(this.platform.is("cordova")){
    this.keychainTouchId.has("passwordCodeAssistant").then(()=>{
      this.keychainTouchId.verify("passwordCodeAssistant","Ingrese su huella dactilar para ingresar").then(pass=>{
        this._user.getSecureUser().then(user=>{
          this.login.username = user;
          this.login.password = pass;
          this.TryAccess();
        })
      })
    })
  }
}
SetAccessTouchID(){
   if (this.platform.is("cordova")){
      this._user.setSecureUser(this.login.username);
      this.keychainTouchId.save("passwordCodeAssistant",this.login.password);
   }
}
VerifyTouchID(){
  if(this.platform.is("cordova")){
    this.keychainTouchId.has("passwordCodeAssistant").catch(err=>{
      this.keychainTouchId.isAvailable().then(()=>{
          this.faio.show({
            clientId: 'TouchIDConfirmation',
            localizedReason: 'Autentícate para ingresar con tu huella'
          })
            .then((result: any) =>this.SetAccessTouchID())
            .catch((error: any) => console.log(error))
          })
    })
  }
}
verifyConnections(){
  this._user.getConnectionsPreference().then(data=>{
    if(!data){
     let modal=  this.modalCtrl.create(ConexPage);
     modal.present();
     modal.onDidDismiss(conex=>{
       if(conex)
       this._user.setConnectionsPreference(true);
       this._user.setSavedConnections(conex.CNX_IPSR);
       this._seven.setConnection(conex.CNX_IPSR);
     })
    }
    else{
           this._user.getSavedConnections().then(data=>{
             this._seven.setConnection(data);
           });
    }


  })
}
showAlert(mensaje:string, titulo:string) {
let alert = this.alertCtrl.create({
  title: titulo,
  subTitle: mensaje,
  buttons: ['OK']
});
alert.present();
}
}
