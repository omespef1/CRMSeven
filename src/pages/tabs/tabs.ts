import { Component } from '@angular/core';

import {SettingsPage} from '../settings/settings';
import {FlowsPage} from '../flows/flows';
import {ActivitiesPage} from '../activities/activities';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FlowsPage;
  tab2Root = ActivitiesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
