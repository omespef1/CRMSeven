import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
  email:string;
  to:string;
  cc:string;
  body:string;
  subject:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl :ViewController) {
    this.email = navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }

close(){
    this.viewCtrl.dismiss();
}

}
