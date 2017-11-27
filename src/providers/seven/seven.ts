import { HttpClient } from '@angular/common/http';
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

getFlows(emp_codi:string,usu_codi:string){
   return    this.getData('Flujos/FlujosAdm?emp_codi=102&usu_codi=seven12');
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
  postData(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/users', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
}
