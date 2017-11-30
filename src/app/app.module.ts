//Plugins
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Calendar } from '@ionic-native/calendar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import {NgCalendarModule} from 'ionic2-calendar';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
//pages
import {SettingsPage} from '../pages/settings/settings';
import {ActivitiesPage } from '../pages/activities/activities';
import {FlowsPage} from '../pages/flows/flows';
import {FlowDetailPage} from '../pages/flow-detail/flow-detail';
import {NewEventPage} from '../pages/new-event/new-event';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {LupaPage} from '../pages/lupa/lupa';
import {ActivitiesSearchPage} from '../pages/activities-search/activities-search';
import {StagesSearchPage} from '../pages/stages-search/stages-search';
import {ActivityDetailPage} from '../pages/activity-detail/activity-detail';
import {InvitedPage} from '../pages/invited/invited';
//providers
import { SevenProvider } from '../providers/seven/seven';
import { UserDataProvider } from '../providers/user-data/user-data';
//Pipes
import {FlowsPipe} from '../pipes/flows/flows';
//Plugins
import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
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
    NewEventPage,
    LoginPage,
    LupaPage,
    ActivitiesSearchPage,
    StagesSearchPage,
    ActivityDetailPage,
    InvitedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgCalendarModule,
     IonicStorageModule.forRoot()
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
    NewEventPage,
    LoginPage,
    LupaPage,
    ActivitiesSearchPage,
    StagesSearchPage,
    ActivityDetailPage,
    InvitedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SevenProvider,
    UserDataProvider,
    KeychainTouchId,
    FingerprintAIO
  ]
})
export class AppModule {}
