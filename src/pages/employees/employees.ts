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
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController,private _seven:SevenProvider,
  private _user:UserDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesPage');
  }
  GetUsers(){
    this._user.getUsername().then(data=>{
      this._seven.GetEmployees(data).then((employees:any)=>{
        if(employees)
        this.employees = employees;
      });
    })

  }
  closeLupa(contact:any){
    this.viewCtrl.dismiss(contact);
  }
  close(){
    this.viewCtrl.dismiss();
  }
}
