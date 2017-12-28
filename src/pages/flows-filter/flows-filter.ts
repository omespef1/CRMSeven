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
 tracks: Array<{name: string, isChecked: boolean,value:string}> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let excludedTrackNames = this.navParams.data;
    let trackNames:any[] = Globals.tracks;
    trackNames.forEach(trackName => {
      this.tracks.push({
        name: trackName,
        isChecked: (excludedTrackNames.indexOf(trackName) === -1)
      });
});
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

  applyFilters() {
    // Pass back a new array of track names to exclude
    let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
}
}
