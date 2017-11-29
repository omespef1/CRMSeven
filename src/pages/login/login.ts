import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { NgForm } from '@angular/forms';
//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';

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
  datos:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,private alertCtrl:AlertController,
  private _user:UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onLogin(form: NgForm) {

try{
    if (form.valid) {
      this.submitted = true;
      this._seven.GetValidationUser(this.login.username,this.login.password).then(data=>{
          if(data)
           this.datos=data;
          if(!this.datos.State){
            this.showAlert('Usuario o contraseña incorrectos','Lo sentimos');
          return;
          }
          this._user.login(this.login.username,this.datos.Usu_Nomb)
          this.navCtrl.push(TabsPage);
          }
      ).catch(err=>{
            this.showAlert(err,"Lo sentimos!")
      })
  }
}
catch(err){
  this.showAlert("Ups, se produjo un error inesperado,contacta al administrador para solucionarlo "+ err ,'Lo sentimos!')
}

  }

  onSignup() {
    // this.navCtrl.push(SignupPage);
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
