import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ModalController} from 'ionic-angular';
//pages
import {NewEventPage} from '../new-event/new-event';
import {ActivityDetailPage} from '../activity-detail/activity-detail';
import * as moment from 'moment';
import {EmployeesPage} from '../employees/employees';

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
replicated:string;
isReplicated:boolean;
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
  this._user.getReplicated().then(data=>{
    if(data){
      this.isReplicated=true;
    }
    else{
        this.isReplicated=false;
    }
  })
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
var startDate = moment(new Date(agend.AGE_FINI),'es').toDate();
var endDate = moment(new Date(agend.AGE_FFIN),'es').toDate();
console.log(startDate + '' + endDate);
let notes = `Actividad:${agend.ACT_NOMB} Asunto:${agend.AGE_ASUN} Contacto:${agend.CON_NOMB}`;
this.calendare.createEvent(agend.ACT_NOMB,'',notes,startDate,endDate).then(resp=>{
this._user.showAlert('Item agregado al calendario del dispostivo!','Listo!');
}).catch(err=>{
  console.log(err);
})
}
showUsers(){
  let modal = this.modal.create(EmployeesPage);
  modal.present();
  modal.onDidDismiss(data=>{
    if(data){
    this.replicated= data;
    this._user.SetReplicated(data);
     this.LoadActivities();
   }
  })

}
removeReplicated(){
  this.replicated = null;
  this._user.removeReplicated();
   this.LoadActivities();
}
}
