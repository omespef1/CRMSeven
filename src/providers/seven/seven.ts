import { HttpClient ,HttpHeaders,HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the SevenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SevenProvider {
 apiUrl:string = 'http://localhost/SevenCRMApi/api/';
  constructor(public http: HttpClient) {
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
GetFaClien(){
  return this.getData('Actividades/cargarClientesCrm');
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
  getData(apiAction:string) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + apiAction).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  postData(data,apiAction:string) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+ apiAction, data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
