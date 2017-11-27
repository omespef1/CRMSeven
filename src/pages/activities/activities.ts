import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ModalController} from 'ionic-angular';
import {NewEventPage} from '../new-event/new-event';
import * as moment from 'moment';


/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {
eventSource=[];
viewTitle:string;
selectedDay= new Date();
calendar = {
  mode:'month',
  currentDate: this.selectedDay
};
  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController,private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }
  onViewTitleChanged(title:string){
this.viewTitle = title;
  }
  onTimeSelected(ev){
this.selectedDay = ev.selectedTime;
  }
  onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    let alert = this.alert.create({
      title: event.title,
      subTitle:'Desde ' + start + '<br>To  :' + end,
      buttons: ['OK']
    });
    alert.present();
  }
addEvent(event){
let modal = this.modal.create(NewEventPage,{selectedDay:this.selectedDay});
modal.present();
modal.onDidDismiss(data=>{
  if(data){
    let eventData =  data;
    eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource =[];
        setTimeout(()=>{
          this.eventSource = events;
        })
  }
})
}
}
