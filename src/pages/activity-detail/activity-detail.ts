import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController,ModalController } from 'ionic-angular';
//pages
import {InvitedPage} from '../invited/invited';
//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';
/**
 * Generated class for the ActivityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {
activity:any;
invited:any ={};
usu_codi :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,private _seven:SevenProvider,
  private _user:UserDataProvider, private alertCtrl:AlertController,private modalCtrl:ModalController) {
    this.activity = this.navParams.get('activity');
  }

  ionViewDidLoad() {
  this._user.getUsername().then(data=>{
    this.usu_codi = data;
  })
  }
close(){
    this.viewCtrl.dismiss();
}
ActivityReject(){

  this.activity.USU_CODI = this.usu_codi;
  console.log(this.activity);
  this._seven.RejectActivity(this.activity).then(response=>{
    let data :any = response;
    if(!data.State){
     this.showAlert('Error cancelando actividad:' + data.Message,'Lo sentimos!');
     return;
    }
       this.showAlert('Actividad Cancelada!','Listo!');
       this.viewCtrl.dismiss();
  }).catch(err=>{
    console.log(err);
     this.showAlert('Error cancelando actividad ','Lo sentimos!');
  })


}
AcitityInvited(){
  console.log("invitado");
  this.activity.Inv_Codi = this.invited.Usu_Codi;
  this.activity.Age_Fech=  this.activity.AGE_FREG
  this._seven.InvitedActivity(this.activity).then(data=>{
    let datos:any = data;
    if(datos.State){
      this.showAlert('El usuario ha sido invitado a la actividad','Listo!')
      return;
    }
    this.showAlert('Error:' + datos.Message,'Lo sentimos!');
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
 openInvited(){
    let modal = this.modalCtrl.create(InvitedPage,{usu_codi:this.usu_codi});
    modal.present();
    modal.onDidDismiss(data=>{
      this.invited = data;
    })
 }
}
