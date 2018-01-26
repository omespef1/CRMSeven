import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ContactSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-search',
  templateUrl: 'contact-search.html',
})
export class ContactSearchPage {
 contacts:any;
 contactsList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
  this.contacts = navParams.get('contacts');
    this.initializeItems();
  }

  ionViewDidLoad() {

  }
closeLupa(contact:any){
  this.viewCtrl.dismiss(contact);
}
close(){
  this.viewCtrl.dismiss();
}
initializeItems(): void {
 this.contactsList = this.contacts;
}
getItems(q: string) {
//Reseteo los items a su estado original
this.initializeItems();
//Si el valor es vacío ni filtra ndada
if (!q || q.trim() === '') {
return;
}
//Realiza el filtrado
this.contactsList = this.contactsList.filter((v) =>  v.CON_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1);
}

}
