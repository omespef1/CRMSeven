import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';
import {SevenProvider} from '../../providers/seven/seven';
import {UserDataProvider} from '../../providers/user-data/user-data';
/**
 * Generated class for the AttchmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attchments',
  templateUrl: 'attchments.html',
})
export class AttchmentsPage {
flow:any;
attachments:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private _seven:SevenProvider,
  private _user:UserDataProvider,private viewCtrl:ViewController) {
    this.flow = navParams.get('flow');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttchmentsPage');
    this.GetAttchments();
  }
GetAttchments(){
  this._seven.GetAttachment(this.flow.CAS_CONT).then((data:any)=>{
    console.log(data);
    this.attachments = data.ObjResult;

  })
}
OpenAttachment(attachment:any){
  this._user.getSavedConnections().then((data:string)=>{
    //data="http://132.147.157.88/SevenCRMApi/api/";
    let download:string  =  data.replace("api/","");
    download+="Download/"+attachment.adj_nomb;
    console.log(download);
  this._user.openBrowser(download);

  })
}
close(){
  this.viewCtrl.dismiss();
}
}
