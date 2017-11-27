import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Refresher ,ToastController} from 'ionic-angular';
import {FlowDetailPage} from '../flow-detail/flow-detail';
//providers
import {SevenProvider} from '../../providers/seven/seven';
//PipesModule
import{FlowsPipe} from '../../pipes/flows/flows';
/**
 * Generated class for the FlowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flows',
  templateUrl: 'flows.html',
})
export class FlowsPage {
  flows:any;
  value = '';
  flowList:any;
  constructor(public navCtrl: NavController , private _seven:SevenProvider,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowsPage');
    this.getFlows();

  }
  goDetailsFlow(flow:any){
    this.navCtrl.push(FlowDetailPage,{'flow':flow});
  }
  getFlows(){
   this._seven.getFlows('102','seven12').then(data=>{
     console.log(data);
     this.flows = data;
     this.initializeItems();
   }).catch(err=>{
     console.log(err);
     //Error
   })
  }
  initializeItems(): void {
   this.flowList = this.flows;
}
  getItems(q: string) {
  //Reseteo los items a su estado original
  this.initializeItems();
//Si el valor es vacío ni filtra ndada
  if (!q || q.trim() === '') {
  return;
  }
  //Realiza el filtrado
  this.flowList = this.flowList.filter((v) =>  v.CAS_DESC.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.CAS_CONT.toString().indexOf(q.toLowerCase()) > -1 );
}
  doRefresh(refresher: Refresher) {
    this._seven.getFlows('102','seven12').then(data=>{
      console.log(data);
      this.flows = data;
      this.initializeItems();
      refresher.complete();
      this.showMessage('Flujos actualizados!')
    }).catch(err=>{
      console.log(err);
      //Error
    })

  }
  showMessage(msg:string){
    const toast = this.toast.create({
     message: msg,
     duration: 3000
   }).present();
  }
}
