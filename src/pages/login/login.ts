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

//Pipes
import {ImagePipe} from '../../pipes/image/image';

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
  touchID:boolean;
  background:string;
  logo:any;
  url:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,private alertCtrl:AlertController,
  private _user:UserDataProvider,private keychainTouchId: KeychainTouchId,
private platform:Platform,private faio: FingerprintAIO,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    // this.faio.show({
    //   clientId: 'TouchIDConfirmation',
    //   localizedReason: 'Autentícate para ingresar con tu huella'
    // })
    //   .then((result: any) =>console.log('yes'))
    //   .catch((error: any) => console.log(error))
  }
 ionViewWillEnter(){

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
       this.VerifyTouchID();
        this._user.login(this.login.username,datos.ObjResult);
        }
    ).catch(err=>{
          this.showAlert(err,"Lo sentimos!")
    })
  }


GetAccessTouchID(){
console.log('entro a get');
  if(this.platform.is("cordova")){
    this.keychainTouchId.has("password").then(()=>{
    this.touchID=true;
      console.log('clave disponible');
      this.keychainTouchId.verify("password","Ingrese su huella dactilar para ingresar").then(pass=>{
        console.log('password obtenido');
        this._user.getSecureUser().then(user=>{
          this.login.username = user;
          this.login.password = pass;
          console.log('todo ok');
          this.TryAccess();
        })
      })
    })
  }
}
SetAccessTouchID(){
   if (this.platform.is("cordova")){
      this._user.setSecureUser(this.login.username);
      this.keychainTouchId.save("password",this.login.password);
   }
}
VerifyTouchID(){
  if(this.platform.is("cordova")){
    console.log('va preguntar si esta dispnuble');
   this.keychainTouchId.isAvailable().then(()=>{
    this.touchID = true;
    console.log('touch disponible');
    this.keychainTouchId.has("password").catch(err=>{
      console.log('se va a preguntar por huella');
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
  this._user.getSavedConnections().then(data=>{
    if(!data){
     let modal=  this.modalCtrl.create(ConexPage);
     modal.present();
     modal.onDidDismiss(conex=>{
       if(conex)
      // this._user.setConnectionsPreference(true);
       this._user.setSavedConnections(conex.CNX_IPSR);
      // this._seven.setConnection(conex.CNX_IPSR);
       this._user.setBackGround(conex.CNX_BACK);
       this._user.setLogo(conex.CNX_LOGO);
       this._user.setLink(conex.CNX_LINK);
       this.background= conex.CNX_BACK;
       this.logo = conex.CNX_LOGO;
       this.url = conex.CNX_LINK;

     })
    }
    else{
      this._user.getBackground().then(data=>{
          console.log('bk from memory')
           this.background = data;
      })
      this._user.getLogo().then(data=>{
        this.logo = data;
      })
      this._user.getLink().then(data=>{
        this.url = data;
      })
           this._user.getSavedConnections().then(data=>{
               this._user.setSavedConnections(data);
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
openUrl(){
this._user.openBrowser(this.url);
}
}
