import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowsFilterPage } from './flows-filter';

@NgModule({
  declarations: [
    FlowsFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowsFilterPage),
  ],
})
export class FlowsFilterPageModule {}
