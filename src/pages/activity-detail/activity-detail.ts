import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController,ModalController,ActionSheetController } from 'ionic-angular';
//pages
import {InvitedPage} from '../invited/invited';
import {ClientDetailPage} from '../client-detail/client-detail';
import {ContactDetailPage} from '../contact-detail/contact-detail';
//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';
//pipes
import {DigitalDatePipe} from '../../pipes/digital-date/digital-date';
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
replicated:any;
invitedCount:number;
inviteds:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,private _seven:SevenProvider,
  private _user:UserDataProvider, private alertCtrl:AlertController,private modalCtrl:ModalController,private actionSheetCtrl:ActionSheetController) {
    this.activity = this.navParams.get('activity');
    console.log(this.activity);
  }

  ionViewDidLoad() {
  this._user.getUsername().then(data=>{
    this.usu_codi = data.toUpperCase();
    this.activity.USU_PLAN =  this.activity.USU_PLAN.toUpperCase();
    this._user.getReplicated().then(data=>{
      if(data)
      this.replicated = data;
      this.GetActivityInviteds();
    })
  })
  }
close(){
    this.viewCtrl.dismiss();
}
ActivityReject(){

  this.activity.USU_CODI = this.usu_codi;
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

showAlert(mensaje:string, titulo:string) {
let alert = this.alertCtrl.create({
  title: titulo,
  subTitle: mensaje,
  buttons: ['OK']
});
alert.present();
}
 openInvited(){
   console.log(this.activity);
    let modal = this.modalCtrl.create(InvitedPage,{activity:this.activity});
    modal.present();
    modal.onDidDismiss(()=>{
      this.GetActivityInviteds();
    })

 }
 showContact(contact:any){
   let modal = this.modalCtrl.create(ContactDetailPage,{contact:contact});
   modal.present();
   // modal.onDidDismiss(data=>{
   //   this.invited = data;
   // })
 }
 showClient(client:any){
   let modal = this.modalCtrl.create(ClientDetailPage,{contact:client});
   modal.present();
 }
 showStates(){
  let actionSheet= this.actionSheetCtrl.create({
     title:'Estado',
     buttons:
     [
       {
         text:'Ejecutada',
         icon:'checkmark-circle',
         handler:()=>{
           this.setState('Ejecutada')
         }
       },
       {
         text:'Programada',
         icon:'clock',
         handler:()=>{
           this.setState('Programada')
         }
       },
       {
         text:'Cancelada',
         icon:'close-circle',
         handler:()=>{
           this.setState('Cancelada')
         }
       }
     ]
   })
   actionSheet.present();
 }
 setState(state:string){
    this.activity.AGE_ESTA = state;
 }
 setResult(result:string){
this.activity.AGE_RESU = result;
 }
 showResults(){
   let actionSheet= this.actionSheetCtrl.create({
      title:'Resultado',
      buttons:
      [
        {
          text:'Satisfactoria',
          icon:'checkmark-circle',
          handler:()=>{
            this.setResult('Satisfactoria')
          }
        },
        {
          text:'Insatisfactoria',
          icon:'close-circle',
          handler:()=>{
            this.setResult('Insatisfactoria')
          }
        },
        {
          text:'Resolver',
          icon:'key',
          handler:()=>{
            this.setResult('Resolver')
          },

        },
        {
          text:'Incompleta',
          icon:'information-circle',
          handler:()=>{
            this.setResult('Incompleta')
          }
        }
      ]
    })
    actionSheet.present();
 }
 UpdateAgend(){
    this._seven.UpdateActivity(this.activity).then((result:any)=>{
      if(!result.State){
        this._user.showAlert(result.Message,"Lo sentimos!");
        return;
      }
        this._user.showAlert("La agenda ha sido actualzada","Listo!")
    })
 }
 GetActivityInviteds(){
   this._seven.GetActivityInviteds(this.activity).then((data:any)=>{
     if(data){
       console.log(data);
       this.inviteds = data.ObjResult;
       console.log(this.inviteds);
       this.invitedCount = this.inviteds.length-1;
     }
   });
 }
 ShowInvites(){
  let subtitle:string="";
   for(let invited of this.inviteds){
     subtitle += '-' +invited.Usu_Nomb +'<br>'
   }
   let alert = this.alertCtrl.create({
     title:'Invitados a esta actividad',
     subTitle :subtitle,
     buttons: ['OK']

   })
   alert.present();
 }
 openConsultoryFiles(){
  this._user.getUserInfo().then(info=>{
    console.log(info);
    let urlConsultoria:string = `http://actas.digitalware.co?rsu=${info.Usu_Codi}&alc=${info.password}&pme=${this.activity.PRO_CONT}`;
  this._user.openBrowser(urlConsultoria);
  })
 }
}
