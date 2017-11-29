import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController } from 'ionic-angular';
import {SevenProvider} from '../../providers/seven/seven';
/**
 * Generated class for the StagesSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stages-search',
  templateUrl: 'stages-search.html',
})
export class StagesSearchPage {
stages:any;
stagesList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _seven:SevenProvider, private viewCtrl:ViewController,
  private loading:LoadingController) {
  }

  ionViewDidLoad() {
    this.LoadStages();
    console.log('ionViewDidLoad StagesSearchPage');
  }
LoadStages(){
  let loading = this.loading.create({
  content:'Cargando...'
});
loading.present();
  this._seven.GetStages().then(data=>{
    this.stages = data;
    this.initializeItems();
    loading.dismiss();
  }).catch(err=>{
    loading.dismiss();
  })
}
closeLupa(stage:any){
 this.viewCtrl.dismiss(stage);
}
close(){
   this.viewCtrl.dismiss();
}
initializeItems(): void {
 this.stagesList = this.stages;
}
getItems(q: string) {
//Reseteo los items a su estado original
this.initializeItems();
//Si el valor es vacío ni filtra ndada
if (!q || q.trim() === '') {
return;
}
//Realiza el filtrado
this.stagesList = this.stagesList.filter((v) =>  v.ETA_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1);
}
}
