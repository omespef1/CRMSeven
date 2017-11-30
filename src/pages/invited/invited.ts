import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import {SevenProvider} from '../../providers/seven/seven';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,private viewCtrl:ViewController) {
    this.user = navParams.get('usu_codi');
  }

  ionViewDidLoad() {
this.LoadUsers();
  }
 LoadUsers(){
   // let loading = this.loading.create({
   //   content:'Cargando...'
   // });
   // loading.present();
    this._seven.GetUsers(this.user).then(data=>{
      console.log(data);
      this.users = data;
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
}
