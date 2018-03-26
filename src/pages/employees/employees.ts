import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {SevenProvider} from '../../providers/seven/seven';
import { UserDataProvider} from '../../providers/user-data/user-data';
/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
employees:any;
employeesList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,private _seven:SevenProvider,
  private _user:UserDataProvider) {
  }

  ionViewDidLoad() {
  this.GetUsers();
  }
  GetUsers(){
    this._user.getUsername().then(data=>{
      this._seven.GetEmployees(data).then((employees:any)=>{
        if(employees)
          this.employees = employees.ObjResult;
          this.initializeItems();
      });
    })

  }
  initializeItems(): void {
   this.employeesList = this.employees;
  }
  getItems(q: string) {
  //Reseteo los items a su estado original
  this.initializeItems();
  //Si el valor es vacío ni filtra ndada
  if (!q || q.trim() === '') {
  return;
  }
  //Realiza el filtrado
  this.employeesList = this.employeesList.filter((v) =>  v.Usu_Nomb.toLowerCase().indexOf(q.toLowerCase()) > -1);
  }
  closeLupa(employee:any){
    this.viewCtrl.dismiss(employee);
  }
  close(){
    this.viewCtrl.dismiss();
  }
}
