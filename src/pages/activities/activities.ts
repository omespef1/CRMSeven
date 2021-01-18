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
replicated:any;
click:boolean=false;
daySelectedString:string;
emp_codi:number;
calendar = {
  mode:'month',
  currentDate: this.selectedDay,
};
nextActivities:any;
inTimeDates : any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController,private modal:ModalController,
  private _seven:SevenProvider,private _user:UserDataProvider,private calendare: Calendar,private digital:DigitalDatePipe) {
this._user.GetBusinessClient().then(data=>{
  this.emp_codi = data.Emp_Codi;
})
  }

  ionViewDidLoad() {
    this.click=true;
    this._user.getReplicated().then(data=>{
      if(data){
        this.replicated = data;
      }
    })

  }
  ionViewWillEnter(){
  this._user.getReplicated().then(data=>{
    if(data)
      this.replicated = data;



  })
  }

  onViewTitleChanged(title:string){
  this.click=true;
this.viewTitle = title;
  }
  onTimeSelected(ev){
   this.selectedDay = ev.selectedTime;
   this.selectedDay.setMinutes(0);
   this.selectedDay.setHours(0);
      if(this.click){
          this.daySelectedString =  moment(this.selectedDay).format('DD/MM/YYYY');
           this.LoadActivities();

      }

  }
  onEventSelected(event){
    // let start = moment(event.startTime).format('LLLL');
    // let end = moment(event.endTime).format('LLLL');
    // let alert = this.alert.create({
    //   title: event.title,
    //   subTitle:'Desde ' + start + '<br>To  :' + end,
    //   buttons: ['OK']
    // });
    // alert.present();
  }
addEvent(event){

let modal = this.modal.create(NewEventPage,{selectedDay:this.selectedDay});
modal.present();
modal.onDidDismiss(data=>{
    this.LoadActivities();
})
}

LoadActivities(){
  setTimeout(()=>{
  this.eventSource = [];
  this.click=false;
  })
  this.inTimeDates = [];
  let fini= moment(new Date(this.selectedDay).setDate(1)).format("YYYY-MM-DD HH:mm:ss");
  //Días que tiene el mes seleccionado
  let  days:number=moment(this.selectedDay).daysInMonth();
  // Días restantes para finalizar el mes seleccionado
  let finalDate:Date = new Date(this.selectedDay);
  finalDate.setDate(days);
  finalDate.setHours(23,59,59);
  //finalDate = this.sumarDias(finalDate,daysToSearh);
  //finalDate.setDate(this.selectedDay.getDate()+7);
  let fina = moment(finalDate).format("YYYY-MM-DD HH:mm:ss")
  this._user.getUsername().then(data=>{
    this._seven.GetUserActivities(data,fini,fina).then(data=>{
      let daySelected = new Date(this.selectedDay);
      let datos:any = data;
      if(datos.State && datos.ObjResult !=undefined){
          this.nextActivities = datos.ObjResult;
          for(let fecha of this.nextActivities){
          // for(let fechaHoy of fecha.Agenda){
          if(moment(fecha.Agenda[0].AGE_FINI).isBetween(new Date(daySelected).setHours(0),new Date(finalDate))){
          this.inTimeDates.push(fecha);
          }
        // }
        }
          let events = this.eventSource;
          for(let group of this.nextActivities){
          let eventData :any = { startTime : new Date(), endTime:new Date()}
          eventData.startTime = new Date(group.Agenda[0].AGE_FINI);
          eventData.endTime =  new Date(group.Agenda[0].AGE_FFIN);
          events.push(eventData);  }
          this.eventSource = [];
          setTimeout(()=>{
          this.eventSource = events;
          this.click=false;
          })}
      else {
        this.nextActivities = null;
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
    activity.EMP_CODI = this.emp_codi;
    this._seven.RejectActivity(activity).then(response=>{
      let data :any = response;
      if(!data.State){
       this._user.showToast('Error cancelando actividad:' + data.Message);
       return;
      }
          this._user.showToast('Actividad Cancelada!');
            this.LoadActivities();

    }).catch(err=>{
       this._user.showToast('Error cancelando actividad');
    })
  })
}
addCalendar(agend:any){
var startDate = moment(new Date(agend.AGE_FINI),'es').toDate();
var endDate = moment(new Date(agend.AGE_FFIN),'es').toDate();
let notes = `Actividad:${agend.ACT_NOMB} Asunto:${agend.AGE_ASUN} Contacto:${agend.CON_NOMB}`;
this.calendare.createEvent(agend.ACT_NOMB,'',notes,startDate,endDate).then(resp=>{
this._user.showAlert('Item agregado al calendario del dispostivo!','Listo!');
}).catch(err=>{
})
}
showUsers(){
  let modal = this.modal.create(EmployeesPage);
  modal.present();
  modal.onDidDismiss(data=>{
    if(data){
        this._user.SetReplicated(data);
    this.replicated= data;

     this.LoadActivities();
   }
  })

}
removeReplicated(){
  this.replicated = undefined;
  this._user.removeReplicated();
   this.LoadActivities();
}
showConfirmReject(activity:any){
  let confirm = this.alert.create({
     title: 'Eliminar?',
     message: 'Está seguro de cancelar esta actividad?Se eliminará de su agenda',
     buttons: [
       {
         text: 'Cancelar',
         handler: () => {
         }
       },
       {
         text: 'Si',
         handler: () => {
           this.RejectActivity(activity)
         }
       }
     ]
   });
   confirm.present();
}
test(){
  this.click=true;
}
}
