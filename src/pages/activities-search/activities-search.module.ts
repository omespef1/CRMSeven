import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesSearchPage } from './activities-search';

@NgModule({
  declarations: [
    ActivitiesSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitiesSearchPage),
  ],
})
export class ActivitiesSearchPageModule {}
