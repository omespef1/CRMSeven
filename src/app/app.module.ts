import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Calendar } from '@ionic-native/calendar';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//pages
import {SettingsPage} from '../pages/settings/settings';
import {ActivitiesPage } from '../pages/activities/activities';
import {FlowsPage} from '../pages/flows/flows';
import {FlowDetailPage} from '../pages/flow-detail/flow-detail';
import {NewEventPage} from '../pages/new-event/new-event';

//providers
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { SevenProvider } from '../providers/seven/seven';
import {NgCalendarModule} from 'ionic2-calendar';
//PipesModule
import {FlowsPipe} from '../pipes/flows/flows';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    FlowsPage,
    ActivitiesPage,
    FlowDetailPage,
    FlowsPipe,
    NewEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    FlowsPage,
    ActivitiesPage,
    FlowDetailPage,
    NewEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SevenProvider
  ]
})
export class AppModule {}
