import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientPointsPage } from './client-points';

@NgModule({
  declarations: [
    ClientPointsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientPointsPage),
  ],
})
export class ClientPointsPageModule {}
