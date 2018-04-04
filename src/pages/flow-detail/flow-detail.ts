import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,ViewController,ModalController} from 'ionic-angular';
//providers
import {SevenProvider} from '../../providers/seven/seven';
import {FlowsProvider} from '../../providers/flows/flows-provider';
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
attchmentCount : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _seven: SevenProvider,
  private alertCtrl:AlertController,private viewCtrl:ViewController,private modal:ModalController,
private _flow: FlowsProvider) {
    this.flow = navParams.get('flow');
  }

  ionViewDidLoad() {

    this.GetAttachmentCount();


  }

  flowAprobment(){
   this._seven.ApproveFlow(this.flow).then(data=>{
     console.log(data);
     let response:any = data;
     if(response.State){
      this.showAlert('El flujo ha sido aprobado!','Listo!')
       this.close()
      return;
    }
    this.showAlert(response.Message,'Lo sentimos!')
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

 GetAttachmentCount(){
   this._seven.GetAttachmentCount(this.flow.CAS_CONT).then((data:number)=>{
     this.attchmentCount = data;
   })
 }
 OpenAttchments(){
   let modal = this.modal.create(AttchmentsPage,{flow:this.flow});
   modal.present();

 }
 flowNextTracing(){
   this._flow.FlowEndTracing(this.flow).then(()=>{
     this.close();
   })
 }
 flowReject(){
   this._flow.flowReject(this.flow).then(()=>{
     this.close();
   })
 }
 // flowReject(){
 //   this._seven.RejectFlow(this.flow).then(data=>{
 //     let response:any = data;
 //     if(response.State){
 //        this.showAlert('El flujo ha sido rechazado!','Listo!')
 //        this.close();
 //        return;
 //     }
 //     this.showAlert('Ups!Ocurrió un error!','Lo sentimos!')
 //   })
 // }
//  showRadioActions() {
//    var promise = new Promise((resolve,reject)=>{
//      let countActions:any[] = this.flow.ACCIONES;
//      if(countActions.length==0)
//        resolve(' ');
//      if(countActions.length==1)
//        resolve(countActions[0].ACC_CONT);
//      let alert = this.alertCtrl.create();
//      alert.setTitle('Acciones');
//      for(let action of this.flow.ACCIONES){
//        alert.addInput({
//          type: 'radio',
//          label: action.ACC_NOMB,
//          value: action.ACC_CONT,
//        });
//      }
//      alert.addButton({
//        text:'Cancelar',
//        handler: data=>{
//          reject();
//        }
//      });
//      alert.addButton({
//        text: 'OK',
//        handler: (data:any) => {
//          resolve(data.ACC_CONT);
//        }
//      });
//      alert.present();
//    })
//    return promise;
// }
 // FlowEndTracing(){
 //   this._seven.GetStagesFlow(this.flow).then((data:any)=>{
 //      if(data.State){
 //          this.flow.ACCIONES = data.ObjResult;
 //          this.showRadioActions().then(data=>{
 //            this.flow.ACC_CONT = data;
 //            this._seven.GetExecutionTypesFlow(this.flow).then((executors:any)=>{
 //              if(executors.State){
 //                  let executionUsers :any[] = executors.execution;
 //                  let message:string = 'Esta etapa requiere que el ejecutor sea seleccionado ahora';
 //                   this.showExecutionUsers('Selecciones en ejecución',message,executionUsers).then((data:any)=>{
 //                     this.flow.SelExec = data.Usu_Codi;
 //                     let tracingUsers :any[] = executors.tracing;
 //                     this.showExecutionUsers('Selecciones en ejecución para seguimiento',message,tracingUsers).then((data:any)=>{
 //                       this.flow.SelExecSeg = data.Usu_Codi;
 //                     })
 //              })
 //            }
 //            })
 //          })
 //      }
 //   })
 //  }


 // showExecutionUsers(title:string,subTitle:string,options:any){
 //   let promise = new Promise((resolve,reject)=>{
 //     if(options.length==0)
 //      resolve('');
 //      if(options.lenght==1)
 //        resolve(options[0].Usu_Codi);
 //     let alert = this.alertCtrl.create();
 //     alert.setTitle(title);
 //     alert.setSubTitle(subTitle);
 //     for(let executionUser of options){
 //       alert.addInput({
 //         type: 'radio',
 //         label: options.Usu_Nomb,
 //         value: options.Usu_Codi,
 //       });
 //     };
 //     alert.addButton({
 //       text:'Cancelar',
 //       handler: data=>{
 //         reject();
 //       }
 //     });
 //     alert.addButton({
 //       text: 'OK',
 //       handler: data => {
 //         resolve(data.Usu_Codi);
 //       }
 //     });
 //     alert.present();
 //   })
 //   return promise;
 //
 // }


}
