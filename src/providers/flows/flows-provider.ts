import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController} from 'ionic-angular';

//providers
import {SevenProvider} from '../../providers/seven/seven';
/*
  Generated class for the FlowsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlowsProvider {

  constructor(private _seven:SevenProvider, private alertCtrl:AlertController) {
    console.log('Hello FlowsProvider Provider');
  }
  FlowEndTracing(flow:any){
    let promise = new Promise((resolve,reject)=>{
      this._seven.GetStagesFlow(flow).then((data:any)=>{
        console.log(data);
             flow.ACCIONES = data.ObjResult;
             this.showRadioActions(flow).then(data=>{
               flow.ACC_CONT = data;
               this._seven.GetExecutionTypesFlow(flow).then((executors:any)=>{
                 console.log(executors);
                 if(executors.State && executors.ObjResult!=null){
                     let executionUsers :any[] = executors.ObjResult.execution;
                     let message:string = 'Esta etapa requiere que el ejecutor sea seleccionado ahora';
                      this.showExecutionUsers('Selecciones en ejecución',message,executionUsers).then((data:any)=>{
                        flow.SelExec = data;
                        console.log(flow.SelExec);
                        let tracingUsers :any[] = executors.ObjResult.tracing;
                        this.showExecutionUsers('Selecciones en ejecución para seguimiento',message,tracingUsers).then((data:any)=>{
                          flow.SelExecSeg = data.Usu_Codi;
                          this.flowAprobment(flow).then(()=>{
                            resolve();
                          })
                        })
                 }).catch()
               }
               })
             })

      })
    })
return promise;
   }

   showRadioActions(flow:any) {
     var promise = new Promise((resolve,reject)=>{
       let countActions:any[] = flow.ACCIONES;
       if(countActions==null)
         resolve(' ');
       if(countActions.length==1)
         resolve(countActions[0].ACC_CONT);
       let alert = this.alertCtrl.create();
       alert.setTitle('Acciones');
       for(let action of flow.ACCIONES){
         alert.addInput({
           type: 'radio',
           label: action.ACC_NOMB,
           value: action.ACC_CONT,
         });
       }
       alert.addButton({
         text:'Cancelar',
         handler: data=>{
           reject();
         }
       });
       alert.addButton({
         text: 'OK',
         handler: (data:any) => {
           resolve(data.ACC_CONT);
         }
       });
       alert.present();
     })
     return promise;
  }
  showExecutionUsers(title:string,subTitle:string,options:any[]){
    let promise = new Promise((resolve,reject)=>{
      if(options.length==0){
       resolve('');
       return;
     }
       console.log(options)
      let alert = this.alertCtrl.create();
      alert.setTitle(title);
      alert.setSubTitle(subTitle);
      for(let executionUser of options){
        alert.addInput({
          type: 'radio',
          label: executionUser.Usu_Nomb,
          value: executionUser.Usu_Codi
        });
      };
      alert.addButton({
        text:'Cancelar',
        handler: ()=>{
        }
      });
      alert.addButton({
        text: 'OK',
        handler: data => {
          console.log(data);
          resolve(data);
        }
      });
      alert.present();
    })
    return promise;

  }
  flowAprobment(flow:any){
     console.log(flow);
  return this._seven.ApproveFlow(flow).then(data=>{
     console.log(data);
     let response:any = data;
     if(response.State){
      this.showAlert('El flujo ha sido aprobado!','Listo!')
       //this.close()
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
  flowReject(flow:any){
    let promise = new Promise((resolve,reject)=>{
      this._seven.RejectFlow(flow).then(data=>{
        let response:any = data;
        if(response.State){
           this.showAlert('El flujo ha sido rechazado!','Listo!')
           resolve();
           return;
        }
        this.showAlert('Ups!Ocurrió un error!','Lo sentimos!')
      })
    })
return promise;
  }
}
