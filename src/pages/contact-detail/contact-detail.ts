import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
    this.contact = navParams.get('contact');
    console.log(this.contact);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailPage');
  }
  close(){
      this.viewCtrl.dismiss();
  }
}
