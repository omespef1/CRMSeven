import { Component } from '@angular/core';

import {SettingsPage} from '../settings/settings';
import {FlowsPage} from '../flows/flows';
import {ActivitiesPage} from '../activities/activities';
import {SearchPage} from '../search/search';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActivitiesPage;
  tab2Root = FlowsPage;
  tab3Root = SearchPage;
  tab4Root = SettingsPage;
  constructor() {

  }

}
