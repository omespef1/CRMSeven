import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
//providers
import { SevenProvider } from '../../providers/seven/seven';
import { GeneralProvider } from '../../providers/general/general-provider';
/*
  Generated class for the FlowsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlowsProvider {

  constructor(private _seven: SevenProvider, private alertCtrl: AlertController, private _general: GeneralProvider) {

  }
  FlowEndTracing(flow: any) {
    let promise = new Promise((resolve, reject) => {
      this._seven.GetStagesFlow(flow).then((data: any) => {

        flow.ACCIONES = data.ObjResult;
        this.showRadioActions(flow).then(data => {

          //Muestra dialogo de acciones, si no hay ninguna se selecciona " ";
          if(flow.ETA_MACC=="N"){
          flow.ACC_CONT = data;
          }
          if(flow.ETA_MACC=="S"){
          flow.ACC_CONT_LIST = data;
          }
          this._seven.GetExecutionTypesFlow(flow).then((executors: any) => {

            console.log(executors);
            //Carga todos los ejecutores de seguimiento y de etapa
            if (executors.State && executors.ObjResult != null) {
              let message: string = `Esta etapa requiere que el ejecutor sea seleccionado ahora`;
              let tracingUsers: any[] = executors.ObjResult.tracing;
              console.log(executors.ObjResult.tracing);
              this.showExecutionUsers(`ETAPA:${executors.ObjResult.eta_asun_s}.<br> Selecciones en ejecución para seguimiento`, message, tracingUsers).then((data: any) => {
                //Muestra dialogos de ejecutores de seguimiento, si no se selecciona nada trae vacio
               flow.SelExecSeg = data;
               this.validExecutionUsers(executors.ObjResult).then(usuariosEjecutores=>{

                 //Muestra todos los ejecutores de etapa, si no se seleccionad nada, trae vacío.
                flow.SelExec = usuariosEjecutores;
                this.flowAprobment(flow).then(() => {

                  resolve();
                })
              })
              }).catch(err=>console.log(err))
            }
            else{
              this._general.showToast(executors.Message);
            }
          })
        }).catch(err=>console.log(err))

      })
    })
    return promise;
  }
  validExecutionUsers(executors:any){
    var promise = new Promise((resolve,reject)=>{
      let count:number = 0;
      let SelExec ="";
      if(executors.execution == null || executors.execution.length==0)
      resolve('');
    for(let grupo of executors.execution ){
        let message: string = `ETAPA:${grupo.eta_asun}.Esta etapa requiere que el ejecutor sea seleccionado ahora`;
      let executionUsers: any[] = grupo.usersExecution;
      this.showExecutionUsers('Selecciones en ejecución', message, executionUsers).then((data: any) => {
        SelExec += `${data},${grupo.eta_cont};`;
        count+=1;
        if(count== executors.execution.length)  {
          resolve(SelExec);
        }
      }).catch(err=>console.log(err))
    }
    })
     return promise;
  }
  showRadioActions(flow: any) {
    var promise = new Promise((resolve, reject) => {
      let countActions: any[] = flow.ACCIONES;
      if (countActions == null)
        resolve(' ');
      // if (countActions.length == 1)
      //   resolve(countActions[0].ACC_CONT);
      let alert = this.alertCtrl.create();
      alert.setTitle('Acciones');
      if(flow.ETA_MACC=="N"){
      for (let action of flow.ACCIONES) {
        alert.addInput({
          type: 'radio',
          label: action.ACC_NOMB,
          value: action.ACC_CONT,
        });
      }
    }
      if(flow.ETA_MACC=="S"){
      for (let action of flow.ACCIONES) {
        alert.addInput({
          type: 'checkbox',
          label: action.ACC_NOMB,
          value: action.ACC_CONT,
        });
      }
      }
      alert.addButton({
        text: 'Cancelar',
        handler: () => {

        }
      });
      alert.addButton({
        text: 'OK',
        handler: (data: any) => {
          if(data!=undefined)
           resolve(data);
           if(data==undefined)
           reject(null);

        }
      });
      alert.present();
    })
    return promise;
  }

  showExecutionUsers(title: string, subTitle: string, options: any[]) {
    let promise = new Promise((resolve, reject) => {
      if (options==null || options.length == 0) {
        resolve('');
        return;
      }
      let alert = this.alertCtrl.create();
      alert.setTitle(title);
      alert.setSubTitle(subTitle);
      for (let executionUser of options) {
        alert.addInput({
          type: 'radio',
          label: executionUser.Usu_Nomb,
          value:  executionUser.Usu_Codi,
        });
      };
      alert.addButton({
        text: 'Cancelar',
        handler: () => {
        }
      });
      alert.addButton({
        text: 'OK',
        handler: data => {
        if(data!=undefined)
          resolve(data);
          if(data==undefined)
            reject(null);
        }
      });
      alert.present();
    })
    return promise;

  }
  private flowAprobment(flow: any) {
    return this._seven.ApproveFlow(flow).then(data => {
      let response: any = data;
      if (response.State) {
        this._general.showToast('El flujo ha sido aprobado!')
        //this.close()
        return;
      }
      this._general.showAlert(response.Message, 'Lo sentimos!')
    })

  }
  flowReject(flow: any) {
    let promise = new Promise((resolve, reject) => {
      this._seven.RejectFlow(flow).then(data => {
        let response: any = data;
        if (response.State) {
          this._general.showToast('El flujo ha sido rechazado!')
          resolve();
          return;
        }
        this._general.showAlert(response.Message, 'Lo sentimos!')
      })
    })
    return promise;
  }
  }
  //
  // showCheckActions(flow: any) {
  //   var promise = new Promise((resolve, reject) => {
  //     let alert = this.alertCtrl.create();
  //     alert.setTitle('Acciones');
  //     if(flow.ACCIONES ==null || flow.ACCIONES.length==0)
  //     resolve(' ');
  //     for (let action of flow.ACCIONES) {
  //       alert.addInput({
  //         type: 'checkbox',
  //         label: action.ACC_NOMB,
  //         value: action.ACC_CONT,
  //       });
  //     }
  //     alert.addButton({
  //       text: 'Cancelar',
  //       handler: () => {
  //
  //       }
  //     });
  //     alert.addButton({
  //       text: 'OK',
  //       handler: (data: any) => {
  //         if(data!=undefined)
  //          resolve(data);
  //          if(data==undefined)
  //          reject(null);
  //       }
  //     });
  //     alert.present();
  //   })
  //   return promise;
  // }
  // ValidTypeStage(flow:any){
  //   if(flow.ETA_MACC=='S'){
  //    return    this.flowEndTracigMultiStage(flow);
  //   //return  this.FlowEndTracing(flow);
  //
  //   }
  //   else {
  //         return  this.FlowEndTracing(flow);
  //   }
  // }
//   flowEndTracigMultiStage(flow:any){
// let promise = new Promise((resolve,reject)=>{
//   this._seven.GetExecutionUsersMultiStage(flow).then((data:any)=>{
//    if(data.State){
//    flow.ACCIONES = data.ObjResult;
//    this.showCheckActions(flow).then((dataCheck:any[])=>{
//      this.validTracingUsers(flow,dataCheck).then((data:any)=>{
//      flow.SelExecSeg = data;
//     let  numberSelected = 0;
//     if(dataCheck)
//         for(let actionFlow of dataCheck){
//            // let actionSelected = flow.ACCIONES.where(a=>a.ACC_CONT==actionFlow);
//            let actionSelected= flow.ACCIONES.filter(a=>a.ACC_CONT ==actionFlow);
//            console.log(actionSelected);
//           if (actionSelected!= null) {
//             console.log(actionSelected);
//             let executionUsers: any[] = actionSelected[0].EXECUTORS.execution;
//             let message: string = `Etapa:${actionSelected[0].EXECUTORS.eta_asun}.Esta etapa requiere que el ejecutor sea seleccionado ahora`;
//             this.showExecutionUsers('Selecciones en ejecución', message, executionUsers).then((data: any) => {
//               flow.SelExec+= `${data},${actionSelected[0].EXECUTORS.eta_cont};`
//               numberSelected+=1;
//               if(numberSelected == dataCheck.length){
//                 this.flowAprobment(flow).then(() => {
//                   resolve();
//                 })
//               }
//             }).catch(err=>console.log(err))
//           }
//         }
//      })
//
//    })
//  }
//  else{
//     this._general.showToast('No se encontraron ejecutores para las acciones asociadas a este flujo');
//  }
//
//  })
// })
// return promise;
//
//   }

//   validTracingUsers(flow:any,data:any[]){
//     var promise = new Promise((resolve,reject)=>{
//       let actionSelected= flow.ACCIONES.filter(a=>a.ACC_CONT ==data[0]);
//        let tracingUsers: any[] = actionSelected[0].EXECUTORS.tracing;
//        let message: string = `Etapa:${actionSelected[0].EXECUTORS.eta_asun_s}. <br>Esta etapa requiere que el usuario de seguimiento sea seleccionado ahora`;
//        this.showExecutionUsers(`Selecciones en ejecución para seguimiento`, message, tracingUsers).then((data: any) => {
//           resolve(data);
//        }).catch(err=>console.log(err))
//     })
// return promise;
//   }
