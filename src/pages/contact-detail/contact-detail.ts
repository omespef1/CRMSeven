import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,ModalController} from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
//pages
import {EmailPage} from '../../pages/email/email';

/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-detail',
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {
contact:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,private callNumber: CallNumber,
    private emailComposer: EmailComposer,private modalCtrl:ModalController) {
    this.contact = navParams.get('contact');
    console.log(this.contact);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }
  close(){
      this.viewCtrl.dismiss();
  }
  callContact(number:string){
    this.callNumber.callNumber(number, true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
  }
  openMail(email:string){
    this.emailComposer.isAvailable().then((available: boolean) =>{
 if(available) {
  let modal = this.modalCtrl.create(EmailPage,{'email':email});
  modal.present();
   //Now we know we can send
 }
});
  }


}
