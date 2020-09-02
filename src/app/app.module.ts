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
import {ConexPage} from '../pages/conex/conex';
import {TouchIdPage} from '../pages/touch-id/touch-id';
import {ContactDetailPage} from '../pages/contact-detail/contact-detail';
import {ClientDetailPage} from '../pages/client-detail/client-detail';
import {EmailPage} from '../pages/email/email';
import {FlowsFilterPage} from '../pages/flows-filter/flows-filter';
import {ContactSearchPage} from '../pages/contact-search/contact-search';
import { SearchPage} from '../pages/search/search';
import {ClientPointsPage} from '../pages/client-points/client-points';
import {EmployeesPage} from '../pages/employees/employees';
import {AttchmentsPage} from '../pages/attchments/attchments';
import { BusinessPage} from '../pages/business/business';
import {TerceSearchPage} from '../pages/terce-search/terce-search';
//providers
import { SevenProvider } from '../providers/seven/seven';
import { UserDataProvider } from '../providers/user-data/user-data';

//Pipes
import {FlowsPipe} from '../pipes/flows/flows';
import {DigitalDatePipe} from '../pipes/digital-date/digital-date';
import {ImagePipe} from '../pipes/image/image';
//Plugins
import { KeychainTouchId } from '@ionic-native/keychain-touch-id';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { BrowserTab } from '@ionic-native/browser-tab';
import { FlowsProvider } from '../providers/flows/flows-provider';
import { GeneralProvider } from '../providers/general/general-provider';
import { GoogleCalendarProvider } from '../providers/google-calendar/google-calendar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TestCalendarPage } from '../pages/test-calendar/test-calendar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
 const firebaseConfig = {
  apiKey: "AIzaSyCjDEPwGI4MfIgCJ1D7TQQpKJuKfvfeD8Y",
    authDomain: "networking-digitalware.firebaseapp.com",
    databaseURL: "https://networking-digitalware.firebaseio.com",
    projectId: "networking-digitalware",
    storageBucket: "networking-digitalware.appspot.com",
    messagingSenderId: "640444190374",
    appId: "1:640444190374:web:6403a526aa3c5b90356e67"
  };
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
    DigitalDatePipe,
    ImagePipe,
    NewEventPage,
    LoginPage,
    LupaPage,
    ActivitiesSearchPage,
    StagesSearchPage,
    ActivityDetailPage,
    InvitedPage,
    ConexPage,
    TouchIdPage,
    ContactDetailPage,
    ClientDetailPage,
    EmailPage,
    FlowsFilterPage,
    ContactSearchPage,
    SearchPage,
    ClientPointsPage,
    EmployeesPage,
    AttchmentsPage,
     BusinessPage,
    TerceSearchPage,
    TestCalendarPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    IonicModule.forRoot(MyApp, {
      platforms : {
        ios : {
          // These options are available in ionic-angular@2.0.0-beta.2 and up.
          scrollAssist: true,    // Valid options appear to be [true, false]
          autoFocusAssist: true , // Valid options appear to be ['instant', 'delay', false]
          statusbarPadding: true,
          scrollPadding: true
        }
        // http://ionicframework.com/docs/v2/api/config/Config/)
      }
    }),
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
    InvitedPage,
    ConexPage,
    TouchIdPage,
    ContactDetailPage,
    ClientDetailPage,
    EmailPage,
    FlowsFilterPage,
    ContactSearchPage,
    SearchPage,
    ClientPointsPage,
    EmployeesPage,
    AttchmentsPage,
    BusinessPage,
    TerceSearchPage,
    TestCalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SevenProvider,
    UserDataProvider,
    KeychainTouchId,
    CallNumber,
    EmailComposer,
    BrowserTab,
    Calendar,
    DigitalDatePipe,
    FlowsProvider,
    GeneralProvider,
    GoogleCalendarProvider,
    InAppBrowser
  ]
})
export class AppModule {}
