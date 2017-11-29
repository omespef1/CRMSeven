import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController,AlertController } from 'ionic-angular';
import * as moment from 'moment';
//pages
import {LupaPage} from '../lupa/lupa';
import {ActivitiesSearchPage} from '../activities-search/activities-search';
import {StagesSearchPage} from '../stages-search/stages-search';

//providers
import {UserDataProvider} from '../../providers/user-data/user-data';
import {SevenProvider} from '../../providers/seven/seven';

/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {
event ={ startTime:new Date().toISOString(),allDay:false};
minDate = new Date().toISOString();
client:any;
activity:any;
user:any={};
newActivity:any={};
stage:any;
// client : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,private modal:ModalController,
  private _user:UserDataProvider, private _seven:SevenProvider,private alertCtrl:AlertController) {
    let preSelectedDate = moment( this.navParams.get('selectedDay')).format();
    this.newActivity.Age_Fech = preSelectedDate;
  }
  ionViewDidLoad() {
    this.LoadInfo();
    console.log('ionViewDidLoad NewEventPage');
  }
  LoadInfo(){
    this._user.getUsername().then(data=>{
      console.log(data);
      this.user.usu_codi = data;
    })
  }
save(){
  this.viewCtrl.dismiss(this.event)
}
close(){
    this.viewCtrl.dismiss();
}
openLupa(){
  let modal = this.modal.create(LupaPage);
  modal.present();
  modal.onDidDismiss(data=>{
    console.log(data);
    this.client = data;
  })
}
openLupaActivities(){
  let modal = this.modal.create(ActivitiesSearchPage);
  modal.present();
  modal.onDidDismiss(data=>{
    console.log(data);
    this.activity = data;
  })
}
openLupaStages(){
  let modal = this.modal.create(StagesSearchPage);
  modal.present();
  modal.onDidDismiss(data=>{
    console.log(data);
    this.stage = data;
  })
}
CreateActivity(){
let response :any;
 this.newActivity.Usu_Codi = this.user.usu_codi;
 this.newActivity.Usu_Ejec = this.user.usu_codi;
 this.newActivity.Act_Codi = this.activity.ACT_CODI;
 this.newActivity.Pro_Cont = this.client.PRO_CONT;
 this.newActivity.Eta_Codi = this.stage.ETA_CODI;
 this.newActivity.Dpr_Codi=  this.client.cdpros.DPR_CODI;
 this.newActivity.Con_Codi = this.client.conpr.CON_CODI;
 this._seven.SaveActivity(this.newActivity).then(data=>{
   response = data;
   if(response.State){
      this.showAlert('Actividad Guardada correctamente','Perfecto!')
      this.viewCtrl.dismiss();
      return;
    }
      this.showAlert('Ocurrió un error','Lo sentimos!')
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
