import { HttpClient ,HttpHeaders,HttpRequest} from '@angular/common/http';
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
  constructor(public http: HttpClient, private load:LoadingController,private _storage:Storage,private _userdata:UserDataProvider) {
    console.log('Hello SevenProvider Provider');
  }

getFlows(usu_codi:string){
   return    this.getData(`Flujos/FlujosAdm?usu_codi=${usu_codi}`);
}
GetValidationUser(user:string, pass:string){
  return this.getData(`GnUsuar/ValidateUser?user=${user}&pass=${pass}`);
}
ApproveFlow(flujo:any){
  return this.postData(flujo,'Flujos/FlujosAdm')
}
GetFaClien(value:string){
  // return  this._storage.get("faClien").then(value=>{
  // console.log(value);
  // if(value!=undefined && !refresh){
  //   console.log("speakers leídos de memoria");
  //   return value;
  // }
  return this.getData('Actividades/cargarClientescrm?filter=' + value)
    .then(data => {
      this._userdata.setFaClien(data);
       console.log("clientes leídos de bd");
        return data;
    })
    .catch(error =>{
      return undefined;
    })

  //
}
GetActivities(){
    return this.getData('Actividades/ListarActividades');
}
GetStages(){
  return this.getData('Actividades/ListarEtapas');
}
GetUserActivities(usu_codi:string,fini:string,fina:string){
  return this.getData(`CrAgend/ListaActividades?usu_codi=${usu_codi}&fini=${fini}&fina=${fina}`)
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
GetUsers(usu_codi:string){
    return this.getData(`Actividades/ListarEmpleados?usu_codi=${usu_codi}`);
}
setConnection(connection:string){
  console.log(connection);
   Globals.ClientUrl = connection;
}

  getData(apiAction:string) {
    let load = this.load.create({
      content:'cargando...'
    })
    load.present();
    return new Promise(resolve => {
      console.log(apiAction);
      console.log(Globals.ClientUrl);
      this.http.get(Globals.ClientUrl + apiAction).subscribe(data => {
        resolve(data);
        load.dismiss();
      }, err => {
        console.log(err);
          load.dismiss();
      });
    });
  }
  postData(data,apiAction:string) {
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
      resolve(data);
      load.dismiss();
    }, err => {
      console.log(err);
        load.dismiss();
    });
  });
}
}
