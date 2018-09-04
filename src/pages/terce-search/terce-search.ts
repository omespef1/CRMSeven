import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
//Providers
import {SevenProvider} from '../../providers/seven/seven';

/**
 * Generated class for the TerceSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terce-search',
  templateUrl: 'terce-search.html',
})
export class TerceSearchPage {
   terce:any;
   terceList:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private _seven:SevenProvider,
    private viewCtrl:ViewController) {
  }


    ionViewDidLoad() {
      console.log('ionViewDidLoad StagesSearchPage');
    }
  loadTerce(value:string){
  //   let loading = this.loading.create({
  //   content:'Cargando...'
  // });
  // loading.present();
  if(value.length<3)
  return ;
    this._seven.GetGnTerce(value).then(data=>{
      this.terce = data;
      this.initializeItems();
      // loading.dismiss();
    }).catch(err=>{
      // loading.dismiss();
    })
  }
  closeLupa(stage:any){
   this.viewCtrl.dismiss(stage);
  }
  close(){
     this.viewCtrl.dismiss();
  }
  initializeItems(): void {
   this.terceList = this.terce;
  }

}
