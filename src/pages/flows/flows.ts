import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FlowDetailPage} from '../flow-detail/flow-detail';

/**
 * Generated class for the FlowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flows',
  templateUrl: 'flows.html',
})
export class FlowsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowsPage');
  }
  goDetailsFlow(){
    this.navCtrl.push(FlowDetailPage);
  }

}
