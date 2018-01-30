import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController ,LoadingController} from 'ionic-angular';
import {SevenProvider} from '../../providers/seven/seven';
/**
 * Generated class for the LupaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lupa',
  templateUrl: 'lupa.html',
})
export class LupaPage {
  bdData:any;
  clients:any;
  clientesList:any;
  value:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,private load:LoadingController, private viewCtrl:ViewController) {
  }
terminado(){
  console.log('termino');
}
  ionViewDidLoad() {

  }

  loadClients(value:any){
if(value!=""){
  return  this._seven.GetFaClien(this.value).then(data=>{
      this.clients = data;
        this.initializeItems();
          console.log('cargado');

    }).catch(err=>{
        // loading.dismiss();
    })
  }
}
  closeLupa(client:any){
   this.viewCtrl.dismiss(client);
  }
  close(){
     this.viewCtrl.dismiss();
  }
  initializeItems(): void {
   this.clientesList = this.clients;
}
  getItems(q: string) {
  //Reseteo los items a su estado original
  this.initializeItems();
//Si el valor es vacío no filtra ndada
  if (q || q.trim() === '') {
  return;
  }
  //Realiza el filtrado
  this.clientesList = this.clientesList.filter((v) =>  v.PRO_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1);
}
}
