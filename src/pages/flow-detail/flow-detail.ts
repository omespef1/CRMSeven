import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ViewController} from 'ionic-angular';
//providers
import {SevenProvider} from '../../providers/seven/seven';
/**
 * Generated class for the FlowDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-detail',
  templateUrl: 'flow-detail.html',
})
export class FlowDetailPage {
flow:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _seven: SevenProvider,
  private alertCtrl:AlertController,private viewCtrl:ViewController) {
    this.flow = navParams.get('flow');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowDetailPage');
  }

  flowAprobment(){

   this._seven.ApproveFlow(this.flow).then(data=>{
     let response:any = data;
     if(response.State){
      this.showAlert('El flujo ha sido aprobado!','Listo!')
       this.close()
      return;
    }
    this.showAlert(response.Message,'Lo sentimos!')
   })

  }
  flowReject(){
    this._seven.RejectFlow(this.flow).then(data=>{
      let response:any = data;
      if(response.State){
         this.showAlert('El flujo ha sido rechazado!','Listo!')
         this.close();
         return;
      }
      this.showAlert('Ups!Ocurrió un error!','Lo sentimos!')
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

  close(){
    this.viewCtrl.dismiss();
  }
}
