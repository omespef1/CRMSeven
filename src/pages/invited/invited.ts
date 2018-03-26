import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,AlertController} from 'ionic-angular';
import { SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';
/**
 * Generated class for the InvitedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invited',
  templateUrl: 'invited.html',
})
export class InvitedPage {
  user:any;
  users:any;
  usersList:any;
  activity:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,private viewCtrl:ViewController,
  private _user:UserDataProvider,private alertCtrl:AlertController) {
    this.activity = navParams.get('activity');
  }

  ionViewDidLoad() {
this.LoadUsers();
  }
 LoadUsers(){
    this._seven.GetUsers(this.activity.USU_CODI).then((data:any)=>{
      console.log(data);
      this.users = data.ObjResult;
      this.initializeItems();
      // loading.dismiss();
    }).catch(err=>{
      // loading.dismiss();
    })
 }
 closeLupa(invited:any){
   this.viewCtrl.dismiss(invited);
 }
 close(){
   this.viewCtrl.dismiss();
 }
 initializeItems(): void {
  this.usersList = this.users;
 }
 getItems(q: string) {
 //Reseteo los items a su estado original
 this.initializeItems();
 //Si el valor es vacío ni filtra ndada
 if (!q || q.trim() === '') {
 return;
 }
 //Realiza el filtrado
 this.usersList = this.usersList.filter((v) =>  v.Usu_Nomb.toLowerCase().indexOf(q.toLowerCase()) > -1);
 }
 AcitityInvited(invited:any){
   // let newActivity :any;
   // newActivity.Act_Codi = this.activity.ACT_CODI;
   // newActivity.Emp_codi = this.activity.EMP_CODI;
   // newActivity.Pro_Cont = this.activity.PRO_CONT;
   // newActivity.Inv_Codi = invited.Usu_Codi;
   // newActivity.Usu_Codi = this.activity.USU_CODI;
   // newActivity.age_cont = this.activity.AGE_CONT;
   // newActivity.age_fini = this.activity.AGE_FINI;
   this.activity.invi_codi = invited.Usu_Codi;
   this._seven.InvitedActivity(this.activity).then(data=>{
     let datos:any = data;
     if(datos.State){
       this._user.showAlert('El usuario ha sido invitado a la actividad','Listo!')
       return;
     }
     this._user.showAlert('Error:' + datos.Message,'Lo sentimos!');
   })
 }
 ShowConfirmInvited(invited:any){
   let confirm = this.alertCtrl.create({
      title: 'Invitar?',
      message:  `Se invitará al usuario ${invited.Usu_Nomb} a la actividad, está seguro?`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.AcitityInvited(invited)
          }
        }

      ]
    });
    confirm.present();
 }
}
