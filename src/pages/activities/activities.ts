import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ModalController} from 'ionic-angular';
//pages
import {NewEventPage} from '../new-event/new-event';
import {ActivityDetailPage} from '../activity-detail/activity-detail';
import * as moment from 'moment';

//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';


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
selectedDayFormat:string;
calendar = {
  mode:'month',
  currentDate: this.selectedDay,
};
nextActivities:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController,private modal:ModalController,
  private _seven:SevenProvider,private _user:UserDataProvider) {

  }

  ionViewDidLoad() {


    console.log('ionViewDidLoad ActivitiesPage');
  }
  ionViewWillEnter(){

  }

  onViewTitleChanged(title:string){
this.viewTitle = title;
  }
  onTimeSelected(ev){
   this.selectedDay = ev.selectedTime;
   this.LoadActivities();
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
    this.LoadActivities();
  // if(data){
  //   let eventData =  data;
  //       eventData.startTime = new Date(data.startTime);
  //       eventData.endTime = new Date(data.endTime);
  //       let events = this.eventSource;
  //       events.push(eventData);
  //       this.eventSource =[];
  //       setTimeout(()=>{
  //         this.eventSource = events;
  //       })
  // }
})
}

LoadActivities(){
  let fini= moment(this.selectedDay).format("YYYY-MM-DD HH:mm:ss");
  let finalDate = new Date();
  finalDate.setDate(this.selectedDay.getDate()+7);
  let fina = moment(finalDate).format("YYYY-MM-DD HH:mm:ss")
  this._user.getUsername().then(data=>{
    this._seven.GetUserActivities(data,fini,fina).then(data=>{
      let datos:any = data;
      if(datos.State){
        this.nextActivities = datos.ObjResult;
          console.log(this.nextActivities);
      }
    })
})

}

openActivity(activity:any){
  let modal = this.modal.create(ActivityDetailPage,{'activity':activity});
  modal.present();
  modal.onDidDismiss(()=>{
    this.LoadActivities();
  })
}
}
