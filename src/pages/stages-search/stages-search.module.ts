import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StagesSearchPage } from './stages-search';

@NgModule({
  declarations: [
    StagesSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(StagesSearchPage),
  ],
})
export class StagesSearchPageModule {}
