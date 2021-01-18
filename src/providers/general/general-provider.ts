import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ToastController,AlertController} from 'ionic-angular'

/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralProvider {

  constructor(private _toastCtrl:ToastController,private alertCtrl:AlertController) {
    console.log('Hello GeneralProvider Provider');
  }
  showToast(mensaje:string){
  let toast=  this._toastCtrl.create({
      message:mensaje,
      duration:2000,
      position:'top'
    })
    toast.present();
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
