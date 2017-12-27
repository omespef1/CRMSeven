import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController,AlertController } from 'ionic-angular';
import * as moment from 'moment';
//pages
import {LupaPage} from '../lupa/lupa';
import {ActivitiesSearchPage} from '../activities-search/activities-search';
import {StagesSearchPage} from '../stages-search/stages-search';
import {InvitedPage} from '../invited/invited';
import {ContactDetailPage} from '../contact-detail/contact-detail';
import {ClientDetailPage} from '../client-detail/client-detail';

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
client:any={};
activity:any={};
user:any={};
newActivity:any={};
stage:any={};
usu_codi:string;
invited:any;
// client : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,private modal:ModalController,
  private _user:UserDataProvider, private _seven:SevenProvider,private alertCtrl:AlertController) {
    let preSelectedDate = moment( this.navParams.get('selectedDay')).format();
    this.newActivity.Age_Fech = preSelectedDate;
    this.LoadInfo();
  }
  ionViewDidLoad() {

  }
  LoadInfo(){
    this._user.getUsername().then(data=>{
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
if(this.validEvent()){
 this.newActivity.Usu_Codi = this.user.usu_codi;
 this.newActivity.Usu_Ejec = this.user.usu_codi;
 this.newActivity.Act_Codi = this.activity.ACT_CODI;
 this.newActivity.Pro_Cont = this.client.PRO_CONT;
 this.newActivity.Eta_Codi = this.stage.ETA_CODI;
 this.newActivity.Dpr_Codi=  this.client.cdpros.DPR_CODI;
 this.newActivity.Con_Codi = this.client.conpr.CON_CODI;
 //this.newActivity.Age_Fech = new Date();
 // if(this.invited.Usu_Codi !=null){
 //   this.newActivity.Inv_Codi = this.invited.Usu_Codi
 // }
    this._seven.SaveActivity(this.newActivity).then(data=>{
      response = data;
      if(response.State){
         this.showAlert('Actividad Guardada correctamente','Perfecto!')
         this.viewCtrl.dismiss();
         return;
       }
         this.showAlert('Error:' + response.Message,'Lo sentimos!')
    })
  }


}
openInvited(){
   let modal = this.modal.create(InvitedPage,{usu_codi:this.usu_codi});
   modal.present();
   modal.onDidDismiss(data=>{
     this.invited = data;
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
 validEvent() : boolean{
   if( this.newActivity.Age_Asun =="" || this.newActivity.Age_Asun ==null){
      this.showAlert('Debe especificar un asunto','Lo sentimos');
      return false;
    }
    if(this.client.PRO_CONT==null){
       this.showAlert('Debe seleccionar un cliente ','Lo sentimos');
       return false;
     }
     if(this.client.cdpros.DPR_CODI==null){
        this.showAlert('Debe seleccionar un detalle ','Lo sentimos');
        return false;
      }
      if(this.client.conpr.CON_CODI==null){
         this.showAlert('Debe seleccionar un contacto ','Lo sentimos');
         return false;
       }
  if(this.activity.ACT_CODI==null){
     this.showAlert('Debe seleccionar una actividad','Lo sentimos');
     return false;
   }

      if(  this.stage.ETA_CODI==null){
         this.showAlert('Debe seleccionar una etapa ','Lo sentimos');
         return false;
       }


         if( this.newActivity.Age_Dura ==""){
            this.showAlert('Debe seleccionar horas ','Lo sentimos');
            return false;
          }

        return true;


}
showContact(contact:any){
  let modal = this.modal.create(ContactDetailPage,{contact:contact});
  modal.present();
  // modal.onDidDismiss(data=>{
  //   this.invited = data;
  // })
}
showClient(client:any){
  let modal = this.modal.create(ClientDetailPage,{contact:client});
  modal.present();
}
}
