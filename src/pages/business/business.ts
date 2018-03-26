import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { UserDataProvider} from '../../providers/user-data/user-data';

/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {
  business:any[];
  businessList:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private _user:UserDataProvider,
  private viewCtrl:ViewController) {
  this._user.GetBusiness().then(data=>{
        this.business = data;
        this.businessList = data;
    })
  }

  ionViewDidLoad() {
    this.initializeItems();
    console.log('ionViewDidLoad BusinessPage');
  }
  initializeItems(): void {
   this.businessList = this.business;
  }
  closeLupa(client:any){
    this.viewCtrl.dismiss(client);
  }
  getItems(q: string) {
  //Reseteo los items a su estado original
  this.initializeItems();
  //Si el valor es vacío ni filtra ndada
  if (!q || q.trim() === '') {
  return;
  }
  //Realiza el filtrado
  this.businessList = this.businessList.filter((v) =>  v.Emp_Nomb.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.Emp_Codi.toString().indexOf(q.toLowerCase()) > -1 );
  }
}
