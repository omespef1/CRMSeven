import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttchmentsPage } from './attchments';

@NgModule({
  declarations: [
    AttchmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AttchmentsPage),
  ],
})
export class AttchmentsPageModule {}
