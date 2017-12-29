import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

//pages
import {EmailPage} from '../../pages/email/email';
//providers
import {UserDataProvider} from '../../providers/user-data/user-data';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,
  private _user:UserDataProvider) {
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
    this._user.callContact(number);
  }

  openMail(email:string){
  this._user.sendEmail(email);
     // window.open(`mailto:${email}`, '_system');
  }


}
