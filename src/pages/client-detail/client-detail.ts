import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
    this.client = navParams.get('contact');
    console.log(this.client);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientDetailPage');
  }
  close(){
      this.viewCtrl.dismiss();
  }
}
