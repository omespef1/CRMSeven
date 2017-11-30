import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//providers
import {UserDataProvider}  from '../../providers/user-data/user-data';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
 user:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, private _user:UserDataProvider) {
  }

  ionViewDidLoad() {
   this._user.getUserInfo().then(data=>{
     console.log(data);
     this.user = data;
   })
  }
logOut(){
  this._user.logout();
}
}
