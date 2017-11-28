import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login = { username: '', password: '' };
  submitted = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
    // this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }

  onSignup() {
    // this.navCtrl.push(SignupPage);
  }
}
