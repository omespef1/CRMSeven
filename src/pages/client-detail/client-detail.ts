import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
//providers
import {UserDataProvider} from '../../providers/user-data/user-data';
//pages

/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-detail',
  templateUrl: 'client-detail.html',
})
export class ClientDetailPage {
client:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,
  private _user:UserDataProvider) {
    this.client = navParams.get('contact');
    console.log(this.client);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailPage');
  }
  close(){
      this.viewCtrl.dismiss();
  }
  callContact(number:string){
    this._user.callContact(number);
  }
  openMail(email:string){
    this._user.sendEmail(email);
    // let modal = this.modalCtrl.create(EmailPage,{'email':email});
    // modal.present();
     // window.open(`mailto:${email}`, '_system');
  }
  openUrl(url:string){
    this._user.openBrowser(url);
  }
}
