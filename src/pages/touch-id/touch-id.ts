import { Component } from '@angular/core';
import { IonicPage, ViewController} from 'ionic-angular';
//providers
import {UserDataProvider} from '../../providers/user-data/user-data';

/**
 * Generated class for the TouchIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-touch-id',
  templateUrl: 'touch-id.html',
})
export class TouchIdPage {

  constructor( private viewCtrl:ViewController, private _user:UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TouchIdPage');
  }
close(){
this.viewCtrl.dismiss();
}
remove(){
  this._user.RemoveTouchID();
  this.viewCtrl.dismiss();
}
}
