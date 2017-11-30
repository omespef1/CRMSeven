import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
//providers
import {SevenProvider} from '../../providers/seven/seven';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private _seven:SevenProvider,private viewCtrl:ViewController) {
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
