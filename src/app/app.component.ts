import { Component,ViewChild } from '@angular/core';
import { Platform,Events ,ToastController,NavController ,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {SettingsPage} from '../pages/settings/settings';
import {TouchIdPage} from '../pages/touch-id/touch-id';
import { Keyboard } from '@ionic-native/keyboard';


//Providers
import {UserDataProvider} from '../providers/user-data/user-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, private toast:ToastController,
  private _userdata:UserDataProvider,private _key:Keyboard) {
    platform.ready().then(() => {
      if(platform.is("ios")){
        this._key.disableScroll(true);
      }
   
      statusBar.styleDefault();
      

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();

      this._userdata.hasLoggedIn().then((hasLoggedIn) => {
      //  this.enableMenu(true);
        this.listenToLoginEvents();
       // this.validLogin();
      });
    });

  }
  validLogin(){
  this._userdata.hasLoggedIn().then(log=>{
    if(log){
        this._userdata.getUsername().then(user=>{
        this._userdata.getUserInfo().then(info=>{
          console.log(info);
           this._userdata.login(user,info,info.password);
        })
      });
    }


  })
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
