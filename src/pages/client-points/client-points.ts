import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ClientPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-points',
  templateUrl: 'client-points.html',
})
export class ClientPointsPage {
  details:any;
  detailsList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
    this.details = navParams.get('details');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPointsPage');
    this.initializeItems();
  }
  closeLupa(detail:any){
   this.viewCtrl.dismiss(detail);
  }
  close(){
     this.viewCtrl.dismiss();
  }
  initializeItems(): void {
   this.detailsList = this.details;
  }
  getItems(q: string) {
  //Reseteo los items a su estado original
  this.initializeItems();
  //Si el valor es vacío ni filtra ndada
  if (!q || q.trim() === '') {
  return;
  }
  //Realiza el filtrado
  this.detailsList = this.detailsList.filter((v) =>  v.DPR_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1 );
  }
}
