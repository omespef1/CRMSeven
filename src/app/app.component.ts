import { Component,ViewChild } from '@angular/core';
import { Platform,Events ,ToastController,NavController ,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {SettingsPage} from '../pages/settings/settings';
import {TouchIdPage} from '../pages/touch-id/touch-id';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, private toast:ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.listenToLoginEvents();
    });

  }
  listenToLoginEvents() {
    this.events.subscribe('user:logout', () => {
    this.showMessage('Su sesión se ha cerrado!');
      this.nav.setRoot(LoginPage);
    });
    this.events.subscribe('user:login',()=>{
        this.nav.setRoot(TabsPage);
    })
  }
  showMessage(msg:string){
      const toast = this.toast.create({
       message: msg,
       duration: 3000
     }).present();
    }
}
