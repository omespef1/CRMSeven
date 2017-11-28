import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FlowDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flow-detail',
  templateUrl: 'flow-detail.html',
})
export class FlowDetailPage {
flow:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flow = navParams.get('flow');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowDetailPage');
  }

  flowAprobment(){
    
  }

}
