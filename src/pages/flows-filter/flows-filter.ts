import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import  {Globals} from '../../assets/global';
/**
 * Generated class for the FlowsFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flows-filter',
  templateUrl: 'flows-filter.html',
})
export class FlowsFilterPage {
 tracks: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let excludedTrackNames = this.navParams.data;
    this.tracks = Globals.tracks;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlowsFilterPage');
  }
  resetFilters() {
    // reset all of the toggles to be checked
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }
dismiss(){
    this.viewCtrl.dismiss();
}
  applyFilters() {
    this.viewCtrl.dismiss();
    // Pass back a new array of track names to exclude
  //  let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    //this.dismiss(excludedTrackNames);
}
}
