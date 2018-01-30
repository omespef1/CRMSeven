import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ModalController} from 'ionic-angular';
//pages
import {NewEventPage} from '../new-event/new-event';
import {ActivityDetailPage} from '../activity-detail/activity-detail';
import * as moment from 'moment';

//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';
import { Calendar } from '@ionic-native/calendar';

//Pipes
import {DigitalDatePipe} from '../../pipes/digital-date/digital-date';


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
  private _seven:SevenProvider,private _user:UserDataProvider,private calendare: Calendar,private digital:DigitalDatePipe) {

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
   this.selectedDay.setMinutes(0);
   this.selectedDay.setHours(0);
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
 convertUTCDateToLocalDate(date) {
    var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
}
openActivity(activity:any){
  let modal = this.modal.create(ActivityDetailPage,{'activity':activity});
  modal.present();
  modal.onDidDismiss(()=>{
    this.LoadActivities();
  })
}
RejectActivity(activity:any){
  this._user.getUsername().then(data=>{
    activity.USU_CODI = data;
    this._seven.RejectActivity(activity).then(response=>{
      let data :any = response;
      if(!data.State){
       this._user.showToast('Error cancelando actividad:' + data.Message);
       return;
      }
          this._user.showToast('Actividad Cancelada!');
            this.LoadActivities();

    }).catch(err=>{
      console.log(err);
       this._user.showToast('Error cancelando actividad');
    })
  })
}
addCalendar(agend:any){
// let init:Date= new Date(agend.AGE_FINI).to;
// let fin :Date = agend.AGE_FFIN;
// console.log(init
// console.log(fin);
//console.log(agend.AGE_FINI);
let init = this.convertUTCDateToLocalDate(new Date(agend.AGE_FINI));
console.log(init);
// console.log(init);
//  var startDate = new Date(init);
//  console.log(startDate);
//
//  let d = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDay(),startDate.getHours(),startDate.getMinutes(),0,0);
//  console.log(d);
//  let v = moment(agend.AGE_FINI).locale('es').toDate();
//  console.log(v);
//   var futureStartAtDate = new Date(moment(agend.AGE_FINI).locale("es").add(1, 'd').format("MMM DD, YYYY HH:MM"))
//   console.log(futureStartAtDate);
  //let d = new Date(startDate.getFullYear(),startDate.getMonth(),startDate.getDay(),startDate.getHours(),startDate.getMinutes(),0,0);
// var startDate  = new Date(init.getFullYear(),init.getMonth(),init.getDay(),init.getHours(),init.getMinutes(),0,0);
//  let fin= new Date(agend.AGE_FFIN);
//  var endDate = new Date(fin.getFullYear(),fin.getMonth(),fin.getDay(),fin.getHours(),fin.getMinutes(),0,0);
//

var startDate = new Date(agend.AGE_FINI); // beware: month 0 = january, 11 = december
 var endDate = new Date(agend.AGE_FFIN);
let notes = `Actividad:${agend.ACT_NOMB} Asunto:${agend.AGE_ASUN} Contacto:${agend.CON_NOMB}`;
this.calendare.createEvent(agend.ACT_NOMB,'',notes,startDate,startDate).then(resp=>{
this._user.showAlert('Item agregado al calendario del dispostivo!','Listo!');
}).catch(err=>{
  console.log(err);
})
}
}
