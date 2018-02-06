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
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
OpenSearchClient(){
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
  })
}
openContact(contact:any){
  let modal = this.modalCtrl.create(ContactDetailPage,{contact:contact});
  modal.present();
}
}
