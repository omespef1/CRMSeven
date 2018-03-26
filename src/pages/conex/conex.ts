import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,ModalController} from 'ionic-angular';
//pages
//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';

/**
 * Generated class for the ConexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conex',
  templateUrl: 'conex.html',
})
export class ConexPage {
connections:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private _seven:SevenProvider,private viewCtrl:ViewController,
   private modalCtrl:ModalController,private _user:UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConexPage');
    this.GetConnections();
  }
 GetConnections(){
     this._seven.getDataConex().then(data=>{
       let datos:any = data;
       console.log(data);
       if(datos){
         this.connections = datos.ObjResult;
       }
     })
 }

 closeLupa(connection:any){
   this.viewCtrl.dismiss(connection);
 }
 close(){
   this.viewCtrl.dismiss();
 }
}
