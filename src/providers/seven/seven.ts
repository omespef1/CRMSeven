import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController} from 'ionic-angular'
import  {Globals} from '../../assets/global';
//providers
import { Storage } from '@ionic/storage';
import {UserDataProvider} from '../../providers/user-data/user-data';
/*
  Generated class for the SevenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SevenProvider {
  businessClient :any;
  constructor(public http: HttpClient, private load:LoadingController,private _userdata:UserDataProvider) {
    console.log('Hello SevenProvider Provider');

  }

getFlows(usu_codi:string,showLoad:boolean=true){
return  this._userdata.getReplicated().then(data=>{
  console.log(data);
    if(data){
       return    this.getData(`Flujos/FlujosAdm?usu_codi=${data.Usu_Codi}`,showLoad);
    }
    else{
         return    this.getData(`Flujos/FlujosAdm?usu_codi=${usu_codi}`,showLoad);
    }
  })
}
GetValidationUser(user:string, pass:string){
  return this.getData(`GnUsuar/ValidateUser?user=${user}&pass=${pass}`);
}
GetGnEmpre(){
    return this.getData(`GnEmpre/GetEmpresas?`);
}
ApproveFlow(flujo:any){
  return this.postData(flujo,'Flujos/FlujosAdm')
}
GetExecutionUsersMultiStage(flow:any){
  return this.postData(flow,'Flujos/GetExecutionUsersMultiStage')
}

GetFaClien(value:string,all:boolean =false){
  console.log(all);
 let url : string = 'Actividades/cargarClientescrm?filter=' + value;
 if(all)
 url +='&all=true';
  return this.getData(url)
    .then(data => {
      this._userdata.setFaClien(data);
       console.log("clientes leídos de bd");
        return data;
    })
    .catch(error =>{
      return undefined;
    })

}
GetActivities(){
    return this.getData('Actividades/ListarActividades?');
}
GetStages(){
  return this.getData('Actividades/ListarEtapas?');
}
GetGnTerce(value:string){
  return this.getData(`GnTerce/GetGnTerce?filter=${value}`);
}
GetUserActivities(usu_codi:string,fini:string,fina:string){
  return this._userdata.getReplicated().then(data=>{
    if(data){
    return this.getData(`CrAgend/ListaActividades?usu_codi=${data.Usu_Codi}&fini=${fini}&fina=${fina}`)
  }else {
      return this.getData(`CrAgend/ListaActividades?usu_codi=${usu_codi}&fini=${fini}&fina=${fina}`)
  }
  })

}
GetActivitiesForProspect(usu_codi:string,pro_cont:number){
  return this.getData(`CrAgend/ListaActividadesProsp?usu_codi=${usu_codi}&pro_cont=${pro_cont}`)
}
GetEmployees(usu_codi:string){
    return this.getData(`Actividades/ListarEmpleados?usu_codi=${usu_codi}`);
}
GetNextExecutors(flujo:any){
  return this.getData(`Flujos/nextExecutors?emp_codi=${flujo.emp_codi}&eta_cont=${flujo.eta_cont}&flu_cont=${flujo.flu_cont}`)
}
RejectFlow(flujo:any){
  let param : any = {objResult:null}  ;
  param.objResult = flujo;
  return this.postData(param,'Flujos/FlujoDetalleRe')
}
SaveActivity(activity:any){
    return this.postData(activity,'Actividades/guardarActividad')
}
RejectActivity(activity:any){
    return this.postData(activity,'CrAgend/CancelarActividad')
}
InvitedActivity(activity:any){
    return this.postData(activity,'Actividades/invitarActividad')
}
UpdateActivity(agend:any){
  return this.postData(agend,'CrAgend/ActualizarActividad')
}
GetUsers(usu_codi:string){
    return this.getData(`Actividades/ListarEmpleados?usu_codi=${usu_codi}`);
}
GetAttachment(cas_cont:number){
    return this.getData(`Flujos/FlujosAdj?cas_cont=${cas_cont}`);
}
GetAttachmentCount(cas_cont:number){
    return this.getData(`Flujos/FlujosAdjCount?cas_cont=${cas_cont}`);
}
GetActivityInviteds(agend:any){
  return this.postData(agend,'CrAgend/invitadosAgenda');
}
GetExecutionTypesFlow(flow:any){
    return this.postData(flow,'Flujos/GetExecutionUsers');
}
GetStagesFlow(flow:any){
    return this.getData(`Flujos/GetAcciones?flu_cont=${flow.FLU_CONT}&eta_cont=${flow.ETA_CONT}`);
}

  getData(apiAction:string,showLoad:boolean=true) {
   // Globals.ClientUrl ='http://132.147.157.140/SevenCRMApi/api/';
  // Globals.ClientUrl ='http://localhost/SevenCRMApi/api/';

         let load = this.load.create({
           content:'cargando...'
         })
         if(showLoad)
          load.present();
         return new Promise(resolve => {
           this._userdata.GetBusinessClient().then(data=>{
               this.businessClient = data;
             if(data== null)
             this.businessClient=0;
             console.log(apiAction);
             console.log(Globals.ClientUrl);
      let uri =`${Globals.ClientUrl}${apiAction}&emp_codi=${this.businessClient.Emp_Codi}`;
      //  let uri =`${Globals.ClientUrl}${apiAction}&emp_codi=${1}`;
             console.log(uri);
             this.http.get(uri).subscribe(data => {
              load.dismiss();
               resolve(data);
             }, err => {
               console.log(err);
                 load.dismiss();
             });

           })

         });


  }
  postData(data,apiAction:string) {
    //Comentarear para produccion
//Globals.ClientUrl ='http://132.147.157.140/SevenCRMApi/api/';
//  Globals.ClientUrl ='http://localhost/SevenCRMApi/api/';
    let loading =this.load.create({
      content:'Cargando...'
    })
    loading.present();
  return new Promise((resolve, reject) => {

    this.http.post(Globals.ClientUrl+ apiAction, data)
      .subscribe(res => {
        resolve(res);
        loading.dismiss();
      }, (err) => {
        reject(err);
            loading.dismiss();
      });
  });
}
getDataConex() {
  let load = this.load.create({
    content:'cargando...'
  })
  load.present();
  return new Promise(resolve => {
 this.http.get(Globals.CentralizationUrl).subscribe(data => {
//this.http.get('http://132.147.157.88/sevencentralizacion/api/GnConex/GetConnections').subscribe(data => {
      resolve(data);
      load.dismiss();
    }, err => {
      console.log(err);
        load.dismiss();
    });
  });
}
}
