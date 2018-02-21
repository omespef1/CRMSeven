import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
//pages
import {LupaPage} from '../lupa/lupa';
import {ClientPointsPage} from '../client-points/client-points';
import {ContactDetailPage} from '../contact-detail/contact-detail';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
 client:any;
 detail:any;
 contacts:any;
 contactList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
OpenSearchClient(){
   this.contactList =[];
  let modal = this.modalCtrl.create(LupaPage,{'all':true});
  modal.present();
  modal.onDidDismiss((data:any)=>{
     this.client = data;
     console.log(data);

  })
}
OpenSearchDetail(){
  let modal = this.modalCtrl.create(ClientPointsPage,{details:this.client.dprosList});
  modal.present();
  modal.onDidDismiss((data:any)=>{
    console.log(data);
    this.client.cdpros = data;
    this.contacts =   this.client.cdpros.conpr;
    this.initializeItems()
  })
}
openContact(contact:any){
  let modal = this.modalCtrl.create(ContactDetailPage,{contact:contact});
  modal.present();
}
initializeItems(): void {
  console.log(this.contactList);
 this.contactList = this.contacts;
}
getItems(q: string) {
  console.log('entra');
//Reseteo los items a su estado original
this.initializeItems();
//Si el valor es vacío no filtra ndada
if (!q || q.trim() === '') {
return;
}
console.log('llega');
//Realiza el filtrado
this.contactList = this.contactList.filter((v) =>  v.CON_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1);

}
}
