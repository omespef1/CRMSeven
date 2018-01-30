import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import {SevenProvider} from '../../providers/seven/seven';
/**
 * Generated class for the ActivitiesSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities-search',
  templateUrl: 'activities-search.html',
})
export class ActivitiesSearchPage {
activities:any;
activitiesList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesSearchPage');
    this.LoadActivities();
  }

  LoadActivities(){
    // let loading = this.loading.create({
    //   content:'Cargando...'
    // });
    // loading.present();
    this._seven.GetActivities().then(data=>{
    //  console.log(data);
      this.activities = data;
      this.initializeItems();
      // loading.dismiss();
    }).catch(err=>{
        // loading.dismiss();
    })
  }
closeLupa(activity:any){
  this.viewCtrl.dismiss(activity);
}
close(){
  this.viewCtrl.dismiss();
}
initializeItems(): void {
 this.activitiesList = this.activities;
}
getItems(q: string) {
//Reseteo los items a su estado original
this.initializeItems();
//Si el valor es vacío ni filtra ndada
if (!q || q.trim() === '') {
return;
}
//Realiza el filtrado
this.activitiesList = this.activitiesList.filter((v) =>  v.ACT_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1);
}
}
