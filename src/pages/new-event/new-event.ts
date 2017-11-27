import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import * as moment from 'moment';


/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {
event ={ startTime:new Date().toISOString(),endTime : new Date().toISOString(),allDay:false};
minDate = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
    let preSelectedDate = moment( this.navParams.get('selectedDay')).format();
    this.event.startTime = preSelectedDate;
    this.event.endTime = preSelectedDate;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }
save(){
  this.viewCtrl.dismiss(this.event)
}
close(){
    this.viewCtrl.dismiss();
}
}
