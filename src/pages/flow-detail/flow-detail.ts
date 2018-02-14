import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ViewController,ModalController} from 'ionic-angular';
//providers
import {SevenProvider} from '../../providers/seven/seven';
//pages
import {AttchmentsPage} from '../../pages/attchments/attchments';
/**
 * Generated class for the FlowDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-detail',
  templateUrl: 'flow-detail.html',
})
export class FlowDetailPage {
flow:any;
actions:any;
attchmentCount : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _seven: SevenProvider,
  private alertCtrl:AlertController,private viewCtrl:ViewController,private modal:ModalController) {
    this.flow = navParams.get('flow');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowDetailPage');
    this.GetAttachmentCount();
  }

  flowAprobment(acc_cont:string=""){
if(acc_cont!="")
   this.flow.ACC_CONT = acc_cont;
   this._seven.ApproveFlow(this.flow).then(data=>{
     console.log(data);
     let response:any = data;
     if(response.State){
      this.showAlert('El flujo ha sido aprobado!','Listo!')
       this.close()
      return;
    }
    if(response.Message=="Seleccione una acción."){
      console.log(response);
       this.actions = response.ObjResult
;
       this.showRadioActions()
       return;
    }
    this.showAlert(response.Message,'Lo sentimos!')
   })

  }
  flowReject(){
    this._seven.RejectFlow(this.flow).then(data=>{
      let response:any = data;
      if(response.State){
         this.showAlert('El flujo ha sido rechazado!','Listo!')
         this.close();
         return;
      }
      this.showAlert('Ups!Ocurrió un error!','Lo sentimos!')
    })
  }
  showAlert(mensaje:string, titulo:string) {
  let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: mensaje,
    buttons: ['OK']
  });
  alert.present();
  }

  close(){
    this.viewCtrl.dismiss();
  }
  showRadioActions() {
   let alert = this.alertCtrl.create();
   alert.setTitle('Acciones');

console.log(this.actions);
   for(let action of this.actions){
     alert.addInput({
       type: 'radio',
       label: action.ACC_NOMB,
       value: action.ACC_CONT,
     });
   }


   alert.addButton('Cancelar');
   alert.addButton({
     text: 'OK',
     handler: data => {
      // this.testRadioOpen = false;
      // this.testRadioResult = data;
      this.flowAprobment(data);
     }
   });
   alert.present();
 }
 GetAttachmentCount(){
   this._seven.GetAttachmentCount(this.flow.CAS_CONT).then((data:number)=>{
     this.attchmentCount = data;
   })
 }
 OpenAttchments(){
   let modal = this.modal.create(AttchmentsPage,{flow:this.flow});
   modal.present();

 }
}
