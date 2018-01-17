import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Refresher ,ToastController,ModalController} from 'ionic-angular';
import {FlowDetailPage} from '../flow-detail/flow-detail';
//providers
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';
//PipesModule
import{FlowsPipe} from '../../pipes/flows/flows';
//pages
import {FlowsFilterPage} from '../flows-filter/flows-filter';
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
  user:any;
  constructor(public navCtrl: NavController , private _seven:SevenProvider,private toast:ToastController,private _user:UserDataProvider,
  private modal:ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowsPage');
    this.getFlows();

  }
  goDetailsFlow(flow:any){
  let modal =  this.modal.create(FlowDetailPage,{'flow':flow})
  modal.present();
  modal.onDidDismiss(()=>{
     this.getFlows();
  });
  }
  getFlows(){
    this._user.getUsername().then(data=>{
        this._seven.getFlows(data).then(data=>{
          this.flows = data;
          this.initializeItems();
          // loading.dismiss();
        }).catch(err=>{
          console.log(err);
          // loading.dismiss();
          //Error
        })
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
    this._user.getUsername().then(data=>{
      this._seven.getFlows(data).then(data=>{
        console.log(data);
        this.flows = data;
        this.initializeItems();
        refresher.complete();
        this.showMessage('Flujos actualizados!')
      }).catch(err=>{
        console.log(err);
        //Error
      })
    })


  }
  showMessage(msg:string){
    const toast = this.toast.create({
     message: msg,
     duration: 3000
   }).present();
  }
  presentFilter() {
  let modal = this.modal.create(FlowsFilterPage, this.flowList);
  modal.present();

  modal.onWillDismiss((data: any[]) => {
    if (data) {
      this.flowList = data;
    }
  });

}
flowAprobment(flow:any){

 this._seven.ApproveFlow(flow).then(data=>{
   let response:any = data;
   if(response.State){
    this._user.showToast('El flujo ha sido aprobado!')
       this.ionViewDidLoad();
    return;
  }
    this._user.showToast(response.Message)
 })

}
flowReject(flow:any){
  this._seven.RejectFlow(flow).then(data=>{
    let response:any = data;
    if(response.State){
      this._user.showToast('El flujo ha sido rechazado!')
       this.ionViewDidLoad();
       return;
    }
    this._user.showToast(response.Message)
  })
}
}
