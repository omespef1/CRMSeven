webpackJsonp([23],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_browser_tab__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_global__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//providers




//import {SevenProvider} from '../seven/seven';

/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserDataProvider = (function () {
    function UserDataProvider(http, storage, events, callNumber, emailComposer, alertCtrl, toastCtrl, keychain, browserTab) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.keychain = keychain;
        this.browserTab = browserTab;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        console.log('Hello UserDataProvider Provider');
    }
    UserDataProvider.prototype.login = function (username, info, usupass) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        info.password = usupass;
        this.setUserInfo(info);
        this.events.publish('user:login');
    };
    ;
    UserDataProvider.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserDataProvider.prototype.logout = function () {
        console.log("borrando usuario");
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.storage.remove('userinfo');
        this.events.publish('user:logout');
    };
    ;
    UserDataProvider.prototype.setUsername = function (username) {
        this.storage.set('username', username);
        console.log('username guardado');
    };
    ;
    UserDataProvider.prototype.setSecureUser = function (user) {
        this.storage.set('secureUser', user);
    };
    ;
    UserDataProvider.prototype.setUserInfo = function (info) {
        console.log(info);
        this.storage.set('userinfo', info);
    };
    ;
    UserDataProvider.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserDataProvider.prototype.getSecureUser = function () {
        return this.storage.get('secureUser').then(function (value) {
            return value;
        });
    };
    ;
    UserDataProvider.prototype.getUserInfo = function () {
        return this.storage.get('userinfo').then(function (value) {
            return value;
        });
    };
    ;
    UserDataProvider.prototype.SetReplicated = function (replicated) {
        this.storage.set('replicated', replicated);
    };
    UserDataProvider.prototype.getReplicated = function () {
        return this.storage.get('replicated').then(function (value) {
            return value;
        });
    };
    ;
    UserDataProvider.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserDataProvider.prototype.setConnectionsPreference = function (selected) {
        this.storage.set('SettedConnection', selected);
    };
    UserDataProvider.prototype.getConnectionsPreference = function () {
        return this.storage.get('SettedConnection').then(function (value) {
            return value;
        });
    };
    UserDataProvider.prototype.setSavedConnections = function (conex) {
        __WEBPACK_IMPORTED_MODULE_8__assets_global__["a" /* Globals */].ClientUrl = conex;
        this.storage.set('SavedConnection', conex);
    };
    UserDataProvider.prototype.getSavedConnections = function () {
        return this.storage.get('SavedConnection').then(function (value) {
            return value;
        });
    };
    UserDataProvider.prototype.setFaClien = function (data) {
        console.log("faclien almacenados en memoria");
        this.storage.set("faClien", data);
    };
    UserDataProvider.prototype.setBusiness = function (data) {
        this.storage.set("business", data);
    };
    UserDataProvider.prototype.GetBusiness = function () {
        return this.storage.get('business').then(function (value) {
            return value;
        });
    };
    UserDataProvider.prototype.SetBusinessClient = function (client) {
        this.storage.set("businessClient", client);
    };
    UserDataProvider.prototype.GetBusinessClient = function () {
        return this.storage.get('businessClient').then(function (value) {
            console.log(value);
            return value;
        });
    };
    UserDataProvider.prototype.callContact = function (number) {
        this.callNumber.callNumber(number, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    UserDataProvider.prototype.sendEmail = function (to) {
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                //Now we know we can send
            }
        });
        var email = {
            to: to,
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    UserDataProvider.prototype.showAlert = function (mensaje, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    UserDataProvider.prototype.showToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    UserDataProvider.prototype.setBackGround = function (color) {
        this.storage.set('background', color);
    };
    UserDataProvider.prototype.setLogo = function (logo) {
        this.storage.set('logo', logo);
    };
    UserDataProvider.prototype.setLink = function (link) {
        this.storage.set('link', link);
    };
    UserDataProvider.prototype.getBackground = function () {
        return this.storage.get('background').then(function (value) {
            return value;
        });
    };
    UserDataProvider.prototype.getLogo = function () {
        return this.storage.get('logo').then(function (value) {
            return value;
        });
    };
    UserDataProvider.prototype.getLink = function () {
        return this.storage.get('link').then(function (value) {
            return value;
        });
    };
    UserDataProvider.prototype.RemoveTouchID = function () {
        this.storage.remove('secureUser');
        this.keychain.delete('password');
    };
    UserDataProvider.prototype.removeData = function () {
        this.storage.remove('background');
        this.storage.remove('logo');
        this.storage.remove('SavedConnection');
        this.storage.remove('userinfo');
        this.storage.remove('username');
        this.storage.remove('secureUser');
        this.keychain.delete('password');
        this.storage.remove("business");
        this.storage.remove('replicated');
        this.storage.remove("businessClient");
        this.storage.remove("SavedConnection");
        this.logout();
    };
    UserDataProvider.prototype.removeReplicated = function () {
        this.storage.remove('replicated');
    };
    UserDataProvider.prototype.openBrowser = function (url) {
        var _this = this;
        this.browserTab.isAvailable()
            .then(function (isAvailable) {
            if (isAvailable) {
                _this.browserTab.openUrl(url);
            }
            else {
                console.log('navegador no disponible');
            }
        });
    };
    UserDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_browser_tab__["a" /* BrowserTab */]])
    ], UserDataProvider);
    return UserDataProvider;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ActivitiesSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesSearchPage = (function () {
    function ActivitiesSearchPage(navCtrl, navParams, _seven, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
    }
    ActivitiesSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesSearchPage');
        this.LoadActivities();
    };
    ActivitiesSearchPage.prototype.LoadActivities = function () {
        var _this = this;
        // let loading = this.loading.create({
        //   content:'Cargando...'
        // });
        // loading.present();
        this._seven.GetActivities().then(function (data) {
            //  console.log(data);
            _this.activities = data;
            _this.initializeItems();
            // loading.dismiss();
        }).catch(function (err) {
            // loading.dismiss();
        });
    };
    ActivitiesSearchPage.prototype.closeLupa = function (activity) {
        this.viewCtrl.dismiss(activity);
    };
    ActivitiesSearchPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ActivitiesSearchPage.prototype.initializeItems = function () {
        this.activitiesList = this.activities;
    };
    ActivitiesSearchPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.activitiesList = this.activitiesList.filter(function (v) { return v.ACT_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    ActivitiesSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities-search',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities-search\activities-search.html"*/'<!--\n\n  Generated template for the ActivitiesSearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Actividades</ion-title>\n\n    <ion-buttons end>\n\n      <button  class="BigButton" ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar"\n\n    animated="true">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #AcivitiesList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(activity)" *ngFor="let activity of activitiesList">\n\n          <ion-label>\n\n          {{activity.ACT_NOMB}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities-search\activities-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ActivitiesSearchPage);
    return ActivitiesSearchPage;
}());

//# sourceMappingURL=activities-search.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event_new_event__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_detail_activity_detail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employees_employees__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_digital_date_digital_date__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages




//providers



//Pipes

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesPage = (function () {
    function ActivitiesPage(navCtrl, navParams, alert, modal, _seven, _user, calendare, digital) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.modal = modal;
        this._seven = _seven;
        this._user = _user;
        this.calendare = calendare;
        this.digital = digital;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.click = false;
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay,
        };
        this.inTimeDates = [];
        this._user.GetBusinessClient().then(function (data) {
            _this.emp_codi = data.Emp_Codi;
        });
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.click = true;
        this._user.getReplicated().then(function (data) {
            if (data) {
                _this.replicated = data;
            }
        });
    };
    ActivitiesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._user.getReplicated().then(function (data) {
            if (data)
                _this.replicated = data;
        });
    };
    ActivitiesPage.prototype.onViewTitleChanged = function (title) {
        this.click = true;
        this.viewTitle = title;
    };
    ActivitiesPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
        this.selectedDay.setMinutes(0);
        this.selectedDay.setHours(0);
        if (this.click) {
            this.daySelectedString = __WEBPACK_IMPORTED_MODULE_4_moment__(this.selectedDay).format('DD/MM/YYYY');
            this.LoadActivities();
        }
    };
    ActivitiesPage.prototype.onEventSelected = function (event) {
        // let start = moment(event.startTime).format('LLLL');
        // let end = moment(event.endTime).format('LLLL');
        // let alert = this.alert.create({
        //   title: event.title,
        //   subTitle:'Desde ' + start + '<br>To  :' + end,
        //   buttons: ['OK']
        // });
        // alert.present();
    };
    ActivitiesPage.prototype.addEvent = function (event) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__new_event_new_event__["a" /* NewEventPage */], { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.LoadActivities();
        });
    };
    ActivitiesPage.prototype.LoadActivities = function () {
        var _this = this;
        setTimeout(function () {
            _this.eventSource = [];
            _this.click = false;
        });
        this.inTimeDates = [];
        var fini = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date(this.selectedDay).setDate(1)).format("YYYY-MM-DD HH:mm:ss");
        //Días que tiene el mes seleccionado
        var days = __WEBPACK_IMPORTED_MODULE_4_moment__(this.selectedDay).daysInMonth();
        // Días restantes para finalizar el mes seleccionado
        var finalDate = new Date(this.selectedDay);
        finalDate.setDate(days);
        finalDate.setHours(23, 59, 59);
        //finalDate = this.sumarDias(finalDate,daysToSearh);
        //finalDate.setDate(this.selectedDay.getDate()+7);
        var fina = __WEBPACK_IMPORTED_MODULE_4_moment__(finalDate).format("YYYY-MM-DD HH:mm:ss");
        this._user.getUsername().then(function (data) {
            _this._seven.GetUserActivities(data, fini, fina).then(function (data) {
                var daySelected = new Date(_this.selectedDay);
                var datos = data;
                if (datos.State && datos.ObjResult != undefined) {
                    _this.nextActivities = datos.ObjResult;
                    for (var _i = 0, _a = _this.nextActivities; _i < _a.length; _i++) {
                        var fecha = _a[_i];
                        // for(let fechaHoy of fecha.Agenda){
                        if (__WEBPACK_IMPORTED_MODULE_4_moment__(fecha.Agenda[0].AGE_FINI).isBetween(new Date(daySelected).setHours(0), new Date(finalDate))) {
                            _this.inTimeDates.push(fecha);
                        }
                        // }
                    }
                    var events_1 = _this.eventSource;
                    for (var _b = 0, _c = _this.nextActivities; _b < _c.length; _b++) {
                        var group = _c[_b];
                        var eventData = { startTime: new Date(), endTime: new Date() };
                        eventData.startTime = new Date(group.Agenda[0].AGE_FINI);
                        eventData.endTime = new Date(group.Agenda[0].AGE_FFIN);
                        events_1.push(eventData);
                    }
                    _this.eventSource = [];
                    setTimeout(function () {
                        _this.eventSource = events_1;
                        _this.click = false;
                    });
                }
                else {
                    _this.nextActivities = null;
                }
            });
        });
    };
    ActivitiesPage.prototype.openActivity = function (activity) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__activity_detail_activity_detail__["a" /* ActivityDetailPage */], { 'activity': activity });
        modal.present();
        modal.onDidDismiss(function () {
            _this.LoadActivities();
        });
    };
    ActivitiesPage.prototype.RejectActivity = function (activity) {
        var _this = this;
        this._user.getUsername().then(function (data) {
            activity.USU_CODI = data;
            activity.EMP_CODI = _this.emp_codi;
            _this._seven.RejectActivity(activity).then(function (response) {
                var data = response;
                if (!data.State) {
                    _this._user.showToast('Error cancelando actividad:' + data.Message);
                    return;
                }
                _this._user.showToast('Actividad Cancelada!');
                _this.LoadActivities();
            }).catch(function (err) {
                _this._user.showToast('Error cancelando actividad');
            });
        });
    };
    ActivitiesPage.prototype.addCalendar = function (agend) {
        var _this = this;
        var startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date(agend.AGE_FINI), 'es').toDate();
        var endDate = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date(agend.AGE_FFIN), 'es').toDate();
        var notes = "Actividad:" + agend.ACT_NOMB + " Asunto:" + agend.AGE_ASUN + " Contacto:" + agend.CON_NOMB;
        this.calendare.createEvent(agend.ACT_NOMB, '', notes, startDate, endDate).then(function (resp) {
            _this._user.showAlert('Item agregado al calendario del dispostivo!', 'Listo!');
        }).catch(function (err) {
        });
    };
    ActivitiesPage.prototype.showUsers = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__employees_employees__["a" /* EmployeesPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this._user.SetReplicated(data);
                _this.replicated = data;
                _this.LoadActivities();
            }
        });
    };
    ActivitiesPage.prototype.removeReplicated = function () {
        this.replicated = undefined;
        this._user.removeReplicated();
        this.LoadActivities();
    };
    ActivitiesPage.prototype.showConfirmReject = function (activity) {
        var _this = this;
        var confirm = this.alert.create({
            title: 'Eliminar?',
            message: 'Está seguro de cancelar esta actividad?Se eliminará de su agenda',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.RejectActivity(activity);
                    }
                }
            ]
        });
        confirm.present();
    };
    ActivitiesPage.prototype.test = function () {
        this.click = true;
    };
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities\activities.html"*/'<!--\n\n  Generated template for the ActivitiesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{viewTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only  class="BigButton"(click)="addEvent()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n  <calendar (click)="test()" [eventSource]="eventSource"\n\n          [calendarMode]="calendar.mode"\n\n          [currentDate]="calendar.currentDate"\n\n          (onEventSelected)="onEventSelected($event)"\n\n           (onTitleChanged)="onViewTitleChanged($event)"\n\n          (onTimeSelected)="onTimeSelected($event)"\n\n          [noEventsLabel]="Agenda"\n\n          [showEventDetail]=\'false\'\n\n          step="30"\n\n          class="calendar">\n\n        </calendar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item no-lines (click)="showUsers()">\n\n <ion-icon name="eye" item-start></ion-icon>\n\n <ion-label>Visualizar como</ion-label>\n\n <ion-note item-end *ngIf="replicated">\n\n   {{replicated.Usu_Nomb}}\n\n </ion-note>\n\n  </ion-item>\n\n  <ion-item (click)="removeReplicated()" *ngIf="replicated">\n\n    <ion-label>Cancelar visualización de Usuario</ion-label>\n\n    <ion-icon item-start name="remove-circle"></ion-icon>\n\n  </ion-item>\n\n        <ion-list #scheduleList>\n\n          <!-- <div *ngIf="todays.length>0">\n\n            <ion-item-divider>\n\n              <h2>{{daySelectedString}}</h2>\n\n            </ion-item-divider>\n\n          <ion-item-group>\n\n            <ion-item-sliding  *ngFor="let activityToday of todays">\n\n              <button ion-item (click)="openActivity(activityToday)">\n\n                <h3><b>{{activityToday.AGE_FINI | digitalDate}} - {{activityToday.AGE_FFIN | digitalDate}}</b></h3>\n\n                <h4>{{activityToday.PRO_NOMB}}</h4>\n\n               <p text-wrap>{{activityToday.CON_NOMB}} {{activityToday.CON_APEL}} - {{activityToday.AGE_ASUN}} - {{activityToday.ACT_NOMB}}</p>\n\n                <ion-icon name="clock" item-start></ion-icon>\n\n               </button>\n\n               <ion-item-options side="right">\n\n              <button ion-button color="danger" (click)="showConfirmReject(activityToday)" [disabled]="replicated!=undefined">Cancelar</button>\n\n          </ion-item-options>\n\n          <ion-item-options side="left">\n\n          <button ion-button color="primary" (click)="addCalendar(activityToday)" [disabled]="replicated!=undefined" icon-start>\n\n          <ion-icon name="calendar">\n\n          </ion-icon> Añadir al calendario\n\n        </button>\n\n     </ion-item-options>\n\n            </ion-item-sliding>\n\n          </ion-item-group>\n\n        </div> -->\n\n          <ion-list-header>\n\n            <h2>PRÓXIMAS</h2>\n\n          </ion-list-header>\n\n          <div *ngFor="let activity of inTimeDates">\n\n          <ion-item-divider>\n\n            <h3>{{activity.GrupoHora}}</h3>\n\n          </ion-item-divider>\n\n            <ion-item-group>\n\n              <ion-item-sliding  *ngFor="let agend of activity.Agenda">\n\n                <button ion-item (click)="openActivity(agend)">\n\n                  <h3><b>{{agend.AGE_FINI | digitalDate}} - {{agend.AGE_FFIN | digitalDate}}</b></h3>\n\n                  <h4>{{agend.PRO_NOMB}}</h4>\n\n                 <p text-wrap>{{agend.CON_NOMB}} {{agend.CON_APEL}} - {{agend.AGE_ASUN}} - {{agend.ACT_NOMB}}</p>\n\n                  <ion-icon name="clock" item-start></ion-icon>\n\n                 </button>\n\n                 <ion-item-options side="right">\n\n                <button ion-button color="danger" (click)="showConfirmReject(agend)" [disabled]="replicated!=undefined">Cancelar</button>\n\n            </ion-item-options>\n\n            <ion-item-options side="left">\n\n            <button ion-button color="primary" (click)="addCalendar(agend)" [disabled]="replicated!=undefined" icon-start>\n\n            <ion-icon name="calendar">\n\n            </ion-icon> Añadir al calendario\n\n          </button>\n\n       </ion-item-options>\n\n              </ion-item-sliding>\n\n            </ion-item-group>\n\n          </div>\n\n\n\n        </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities\activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_9__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lupa_lupa__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activities_search_activities_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stages_search_stages_search__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invited_invited__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_search_contact_search__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_seven_seven__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//pages





//providers


/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewEventPage = (function () {
    // client : any;
    function NewEventPage(navCtrl, navParams, viewCtrl, modal, _user, _seven, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this._user = _user;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this.event = { startTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        this.client = {};
        this.activity = {};
        this.user = {};
        this.newActivity = {};
        this.stage = {};
        var dateSelected = new Date(this.navParams.get('selectedDay')).setHours(6);
        var preSelectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(dateSelected).format();
        this.newActivity.Age_Fech = preSelectedDate;
        this._user.GetBusinessClient().then(function (data) {
            _this.emp_codi = data.Emp_Codi;
        });
        this.LoadInfo();
    }
    NewEventPage.prototype.ionViewDidLoad = function () {
        this.newActivity.Age_Dura = "0.5";
    };
    NewEventPage.prototype.LoadInfo = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this.user.usu_codi = data;
        });
    };
    NewEventPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    NewEventPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NewEventPage.prototype.openLupa = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__lupa_lupa__["a" /* LupaPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.client = data;
        });
    };
    NewEventPage.prototype.openLupaActivities = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__activities_search_activities_search__["a" /* ActivitiesSearchPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.activity = data;
        });
    };
    NewEventPage.prototype.openContacts = function (contacts) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_7__contact_search_contact_search__["a" /* ContactSearchPage */], { contacts: contacts });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.contact = data;
        });
    };
    NewEventPage.prototype.openLupaStages = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__stages_search_stages_search__["a" /* StagesSearchPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.stage = data;
        });
    };
    NewEventPage.prototype.CreateActivity = function () {
        var _this = this;
        var response;
        if (this.validEvent()) {
            this.newActivity.Usu_Codi = this.user.usu_codi;
            this.newActivity.Usu_Ejec = this.user.usu_codi;
            this.newActivity.Act_Codi = this.activity.ACT_CODI;
            this.newActivity.Pro_Cont = this.client.PRO_CONT;
            this.newActivity.Eta_Codi = this.stage.ETA_CODI;
            this.newActivity.Dpr_Codi = this.client.cdpros.DPR_CODI;
            this.newActivity.Con_Codi = this.contact.CON_CODI;
            this.newActivity.age_obse = this.observations;
            this.newActivity.Emp_Codi = this.emp_codi;
            if (this.newActivity.age_obse == undefined) {
                this.showAlert("Debe especificar una observación", 'Lo sentimos!');
                return;
            }
            //this.newActivity.Age_Fech = new Date();
            // if(this.invited.Usu_Codi !=null){
            //   this.newActivity.Inv_Codi = this.invited.Usu_Codi
            // }
            this._seven.SaveActivity(this.newActivity).then(function (data) {
                response = data;
                if (response.State) {
                    _this.showAlert('Actividad Guardada correctamente', 'Perfecto!');
                    _this.viewCtrl.dismiss();
                    return;
                }
                _this.showAlert('Error:' + response.Message, 'Lo sentimos!');
            });
        }
    };
    NewEventPage.prototype.openInvited = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__invited_invited__["a" /* InvitedPage */], { usu_codi: this.usu_codi });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.invited = data;
        });
    };
    NewEventPage.prototype.showAlert = function (mensaje, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    NewEventPage.prototype.validEvent = function () {
        if (this.newActivity.Age_Asun == "" || this.newActivity.Age_Asun == null) {
            this.showAlert('Debe especificar un asunto', 'Lo sentimos');
            return false;
        }
        if (this.client.PRO_CONT == null) {
            this.showAlert('Debe seleccionar un cliente ', 'Lo sentimos');
            return false;
        }
        if (this.client.cdpros.DPR_CODI == null) {
            this.showAlert('Debe seleccionar un detalle ', 'Lo sentimos');
            return false;
        }
        if (this.contact == null) {
            this.showAlert('Debe seleccionar un contacto ', 'Lo sentimos');
            return false;
        }
        if (this.activity == null) {
            this.showAlert('Debe seleccionar una actividad', 'Lo sentimos');
            return false;
        }
        if (this.stage == undefined) {
            this.showAlert('Debe seleccionar una etapa, si la actividad no posee etapa, seleccione SIN ETAPA', 'Lo sentimos');
            return false;
        }
        if (this.newActivity.Age_Dura == "") {
            this.showAlert('Debe seleccionar horas ', 'Lo sentimos');
            return false;
        }
        return true;
    };
    NewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-event',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\new-event\new-event.html"*/'<!--\n\n  Generated template for the NewEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Nueva actividad</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item text-wrap button (click)="openLupa()">\n\n      <ion-icon name="person" item-start></ion-icon>\n\n     <ion-label>Cliente</ion-label>\n\n     <ion-note class="note"  item-end *ngIf="client">\n\n     {{client.PRO_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name="home" item-start></ion-icon>\n\n      <ion-label>Detalle cliente</ion-label>\n\n      <ion-note class="note" item-end *ngIf="client && client.cdpros">\n\n       {{client.cdpros.DPR_NOMB}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item button (click)="openLupaActivities()">\n\n        <ion-icon name="link" item-start></ion-icon>\n\n     <ion-label>Actividad</ion-label>\n\n     <ion-note class="note" item-end *ngIf="activity">\n\n     {{activity.ACT_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="openContacts(client.conpr)">\n\n        <ion-icon name="contact" item-start></ion-icon>\n\n      <ion-label>Contacto</ion-label>\n\n      <ion-note class="note" item-end *ngIf="contact">\n\n      {{contact.CON_NOMB}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item button (click)="openLupaStages()">\n\n        <ion-icon name="git-network" item-start></ion-icon>\n\n     <ion-label>Etapa proceso</ion-label>\n\n     <ion-note class="note" item-end *ngIf="stage">\n\n     {{stage.ETA_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input  type="text" placeholder = "Asunto" [(ngModel)] ="newActivity.Age_Asun"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="alarm" item-start></ion-icon>\n\n      <ion-label>Inicio</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat ="HH:mm" min="06:00" [(ngModel)] = "newActivity.Age_Fech"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name="alarm" item-start></ion-icon>\n\n      <ion-label>Horas</ion-label>\n\n      <ion-input  type="number" placeholder = "Horas" [(ngModel)] ="newActivity.Age_Dura"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name="paper" item-start></ion-icon>\n\n      <ion-label>\n\n            Observaciones\n\n      </ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea [(ngModel)]="observations"  placeholder="Ingrese sus observaciones aquí"></ion-textarea>\n\n    </ion-item>\n\n    <!-- <ion-item (click)="openInvited()">\n\n      <ion-label>Invitar</ion-label>\n\n      <ion-note item-end *ngIf="invited">\n\n        {{invited.Usu_Nomb}}\n\n      </ion-note>\n\n     </ion-item> -->\n\n    <ion-item>\n\n      <ion-label>Todo el día?</ion-label>\n\n    <ion-toggle [(ngModel)] = "event.allDay"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n<button ion-button full icon-left (click) = "CreateActivity()">\n\n  <ion-icon name ="checkmark"></ion-icon>Añadir evento\n\n</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\new-event\new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StagesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StagesSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StagesSearchPage = (function () {
    function StagesSearchPage(navCtrl, navParams, _seven, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
    }
    StagesSearchPage.prototype.ionViewDidLoad = function () {
        this.LoadStages();
        console.log('ionViewDidLoad StagesSearchPage');
    };
    StagesSearchPage.prototype.LoadStages = function () {
        var _this = this;
        //   let loading = this.loading.create({
        //   content:'Cargando...'
        // });
        // loading.present();
        this._seven.GetStages().then(function (data) {
            _this.stages = data;
            _this.initializeItems();
            // loading.dismiss();
        }).catch(function (err) {
            // loading.dismiss();
        });
    };
    StagesSearchPage.prototype.closeLupa = function (stage) {
        this.viewCtrl.dismiss(stage);
    };
    StagesSearchPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    StagesSearchPage.prototype.initializeItems = function () {
        this.stagesList = this.stages;
    };
    StagesSearchPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.stagesList = this.stagesList.filter(function (v) { return v.ETA_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    StagesSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-stages-search',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\stages-search\stages-search.html"*/'<!--\n\n  Generated template for the StagesSearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Etapas</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #AcivitiesList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(stage)" *ngFor="let stage of stagesList">\n\n          <ion-label>\n\n          {{stage.ETA_NOMB}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\stages-search\stages-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], StagesSearchPage);
    return StagesSearchPage;
}());

//# sourceMappingURL=stages-search.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers

/**
 * Generated class for the ContactSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactSearchPage = (function () {
    function ContactSearchPage(navCtrl, navParams, viewCtrl, _user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._user = _user;
        this.contacts = navParams.get('contacts');
        this.initializeItems();
    }
    ContactSearchPage.prototype.ionViewDidLoad = function () {
    };
    ContactSearchPage.prototype.closeLupa = function (contact) {
        this.viewCtrl.dismiss(contact);
    };
    ContactSearchPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ContactSearchPage.prototype.initializeItems = function () {
        this.contactsList = this.contacts;
    };
    ContactSearchPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.contactsList = this.contactsList.filter(function (v) { return v.CON_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.CON_CARG.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    ContactSearchPage.prototype.seeDetail = function (contact) {
        this._user.showAlert(contact.CON_CARG, contact.CON_NOMB);
    };
    ContactSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-search',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact-search\contact-search.html"*/'<!--\n\n  Generated template for the Contact-search page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Contactos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #contactList>\n\n      <ion-item-group>\n\n        <ion-item-sliding  *ngFor="let contact of contactsList">\n\n          <button ion-item (click)="closeLupa(contact)">\n\n            <ion-label>\n\n                {{contact.CON_NOMB}}\n\n            </ion-label>\n\n              <ion-icon name=\'person\' item-start></ion-icon>\n\n              <ion-note class="detalle" item-end>\n\n              <ion-label> {{contact.CON_CARG}}</ion-label>\n\n              </ion-note>\n\n          </button>\n\n        <ion-item-options side="right">\n\n           <button ion-button color="primary" (click)="seeDetail(contact)">Detalles</button>\n\n       </ion-item-options>\n\n     </ion-item-sliding>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact-search\contact-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ContactSearchPage);
    return ContactSearchPage;
}());

//# sourceMappingURL=contact-search.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invited_invited__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_detail_client_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages



//providers


/**
 * Generated class for the ActivityDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivityDetailPage = (function () {
    function ActivityDetailPage(navCtrl, navParams, viewCtrl, _seven, _user, alertCtrl, modalCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._seven = _seven;
        this._user = _user;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.invited = {};
        this.activity = this.navParams.get('activity');
        console.log(this.activity);
    }
    ActivityDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this.usu_codi = data.toUpperCase();
            _this.activity.USU_PLAN = _this.activity.USU_PLAN.toUpperCase();
            _this._user.getReplicated().then(function (data) {
                if (data)
                    _this.replicated = data;
                _this.GetActivityInviteds();
            });
        });
    };
    ActivityDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ActivityDetailPage.prototype.ActivityReject = function () {
        var _this = this;
        this.activity.USU_CODI = this.usu_codi;
        this._seven.RejectActivity(this.activity).then(function (response) {
            var data = response;
            if (!data.State) {
                _this.showAlert('Error cancelando actividad:' + data.Message, 'Lo sentimos!');
                return;
            }
            _this.showAlert('Actividad Cancelada!', 'Listo!');
            _this.viewCtrl.dismiss();
        }).catch(function (err) {
            console.log(err);
            _this.showAlert('Error cancelando actividad ', 'Lo sentimos!');
        });
    };
    ActivityDetailPage.prototype.showAlert = function (mensaje, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    ActivityDetailPage.prototype.openInvited = function () {
        var _this = this;
        console.log(this.activity);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__invited_invited__["a" /* InvitedPage */], { activity: this.activity });
        modal.present();
        modal.onDidDismiss(function () {
            _this.GetActivityInviteds();
        });
    };
    ActivityDetailPage.prototype.showContact = function (contact) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__["a" /* ContactDetailPage */], { contact: contact });
        modal.present();
        // modal.onDidDismiss(data=>{
        //   this.invited = data;
        // })
    };
    ActivityDetailPage.prototype.showClient = function (client) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__client_detail_client_detail__["a" /* ClientDetailPage */], { contact: client });
        modal.present();
    };
    ActivityDetailPage.prototype.showStates = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Estado',
            buttons: [
                {
                    text: 'Ejecutada',
                    icon: 'checkmark-circle',
                    handler: function () {
                        _this.setState('Ejecutada');
                    }
                },
                {
                    text: 'Programada',
                    icon: 'clock',
                    handler: function () {
                        _this.setState('Programada');
                    }
                },
                {
                    text: 'Cancelada',
                    icon: 'close-circle',
                    handler: function () {
                        _this.setState('Cancelada');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ActivityDetailPage.prototype.setState = function (state) {
        this.activity.AGE_ESTA = state;
    };
    ActivityDetailPage.prototype.setResult = function (result) {
        this.activity.AGE_RESU = result;
    };
    ActivityDetailPage.prototype.showResults = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Resultado',
            buttons: [
                {
                    text: 'Satisfactoria',
                    icon: 'checkmark-circle',
                    handler: function () {
                        _this.setResult('Satisfactoria');
                    }
                },
                {
                    text: 'Insatisfactoria',
                    icon: 'close-circle',
                    handler: function () {
                        _this.setResult('Insatisfactoria');
                    }
                },
                {
                    text: 'Resolver',
                    icon: 'key',
                    handler: function () {
                        _this.setResult('Resolver');
                    },
                },
                {
                    text: 'Incompleta',
                    icon: 'information-circle',
                    handler: function () {
                        _this.setResult('Incompleta');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ActivityDetailPage.prototype.UpdateAgend = function () {
        var _this = this;
        this._seven.UpdateActivity(this.activity).then(function (result) {
            if (!result.State) {
                _this._user.showAlert(result.Message, "Lo sentimos!");
                return;
            }
            _this._user.showAlert("La agenda ha sido actualzada", "Listo!");
        });
    };
    ActivityDetailPage.prototype.GetActivityInviteds = function () {
        var _this = this;
        this._seven.GetActivityInviteds(this.activity).then(function (data) {
            if (data) {
                console.log(data);
                _this.inviteds = data.ObjResult;
                console.log(_this.inviteds);
                _this.invitedCount = _this.inviteds.length - 1;
            }
        });
    };
    ActivityDetailPage.prototype.ShowInvites = function () {
        var subtitle = "";
        for (var _i = 0, _a = this.inviteds; _i < _a.length; _i++) {
            var invited = _a[_i];
            subtitle += '-' + invited.Usu_Nomb + '<br>';
        }
        var alert = this.alertCtrl.create({
            title: 'Invitados a esta actividad',
            subTitle: subtitle,
            buttons: ['OK']
        });
        alert.present();
    };
    ActivityDetailPage.prototype.openConsultoryFiles = function () {
        var _this = this;
        this._user.getUserInfo().then(function (info) {
            console.log(info);
            var urlConsultoria = "http://actas.digitalware.co?rsu=" + info.Usu_Codi + "&alc=" + info.password + "&pme=" + _this.activity.PRO_CONT;
            _this._user.openBrowser(urlConsultoria);
        });
    };
    ActivityDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activity-detail\activity-detail.html"*/'<!--\n\n  Generated template for the ActivityDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{activity.AGE_ASUN}}</ion-title>\n\n    <ion-buttons end>\n\n      <button class="BigButton" ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-divider text-center>\n\n      DETALLES\n\n    </ion-item-divider>\n\n    <ion-item>\n\n      <ion-icon name="alarm" item-start></ion-icon>\n\n      <ion-label>Inicio</ion-label>\n\n      <ion-note item-end>\n\n      {{activity.AGE_FINI | digitalDate}}\n\n      </ion-note>\n\n     </ion-item>\n\n     <ion-item>\n\n     <ion-icon name="alarm" item-start></ion-icon>\n\n     <ion-label>Fin</ion-label>\n\n     <ion-note item-end>\n\n       {{activity.AGE_FFIN | digitalDate}}\n\n     </ion-note>\n\n    </ion-item>\n\n  <ion-item>\n\n      <ion-icon name="person" item-start></ion-icon>\n\n    <ion-label>Cliente</ion-label>\n\n    <ion-note item-end (click)="showClient(activity)">\n\n    {{activity.PRO_NOMB}}\n\n    </ion-note>\n\n   </ion-item>\n\n   <ion-item>\n\n       <ion-icon name="contact" item-start></ion-icon>\n\n     <ion-label>Contacto</ion-label>\n\n     <ion-note   item-end class="wrap-text"  (click)="showContact(activity)">\n\n     {{activity.CON_NOMB}}  {{activity.CON_APEL}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n         <ion-icon name="create" item-start></ion-icon>\n\n      <ion-label>Actividad</ion-label>\n\n      <ion-note item-end>\n\n    {{activity.ACT_NOMB}}\n\n      </ion-note>\n\n     </ion-item>\n\n     <ion-item *ngIf="invitedCount>0" (click)="ShowInvites()">\n\n     <ion-icon name="contacts" item-start></ion-icon>\n\n     Invitados\n\n     <ion-badge item-end>{{invitedCount}}</ion-badge>\n\n   </ion-item>\n\n     <ion-item>\n\n         <ion-icon name="create" item-start></ion-icon>\n\n       <ion-label>Asunto</ion-label>\n\n       <ion-note item-end>\n\n    {{activity.AGE_ASUN}}\n\n       </ion-note>\n\n      </ion-item>\n\n      <ion-item-divider text-center>\n\n        DILIGENCIAR\n\n      </ion-item-divider>\n\n      <ion-item (click)="showStates()">\n\n       <ion-icon name="information-circle" item-start></ion-icon>\n\n        <ion-label>\n\n          Estado\n\n        </ion-label>\n\n        <ion-note item-end>\n\n          {{activity.AGE_ESTA}}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item (click)="showResults()">\n\n          <ion-icon name="thumbs-up" item-start></ion-icon>\n\n\n\n        <ion-label>\n\n              Resultado\n\n        </ion-label>\n\n        <ion-note item-end>\n\n          {{activity.AGE_RESU}}\n\n        </ion-note>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-icon name="clipboard" item-start></ion-icon>\n\n        <ion-label>\n\n              Observaciones\n\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-textarea [(ngModel)]="activity.AGE_OBSE"  placeholder="Ingrese sus comentarios sobre la actividad"></ion-textarea>\n\n      </ion-item>\n\n      <!-- <ion-item button (click)="openInvited()" *ngIf="activity.USU_PLAN == activity.USU_EJEC">\n\n        <ion-label>Invitar</ion-label>\n\n        <ion-note item-end>\n\n          {{invited.Usu_Nomb}}\n\n        </ion-note>\n\n       </ion-item> -->\n\n\n\n</ion-list>\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button *ngIf="activity.EMP_CODI==\'1\'" ion-button block color="primary" (click)="openConsultoryFiles()">\n\n        <ion-icon name="clipboard"></ion-icon>&nbsp;Actas de Consultoría\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button block color="primary" (click)="openInvited()">\n\n        <ion-icon name="contacts"></ion-icon>&nbsp;Invitar\n\n      </button>\n\n    </ion-col>\n\n    <!-- <ion-col>\n\n      <button ion-button block color="danger" (click)="ActivityReject()">\n\n            <ion-icon name="remove-circle"></ion-icon>&nbsp;Cancelar\n\n      </button>\n\n    </ion-col> -->\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button block color="primary" (click)="UpdateAgend()" [disabled]="replicated!=undefined">\n\n      <ion-icon name="checkmark-circle" icon-left>\n\n      </ion-icon>&nbsp;Hecho\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activity-detail\activity-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActivityDetailPage);
    return ActivityDetailPage;
}());

//# sourceMappingURL=activity-detail.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers


//pages
/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientDetailPage = (function () {
    function ClientDetailPage(navCtrl, navParams, viewCtrl, _user, _seven) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._user = _user;
        this._seven = _seven;
        this.client = navParams.get('contact');
        console.log(this.client);
    }
    ClientDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientDetailPage');
        this.OpenLastActivities();
    };
    ClientDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClientDetailPage.prototype.callContact = function (number) {
        this._user.callContact(number);
    };
    ClientDetailPage.prototype.openMail = function (email) {
        this._user.sendEmail(email);
        // let modal = this.modalCtrl.create(EmailPage,{'email':email});
        // modal.present();
        // window.open(`mailto:${email}`, '_system');
    };
    ClientDetailPage.prototype.openUrl = function (url) {
        this._user.openBrowser(url);
    };
    ClientDetailPage.prototype.OpenLastActivities = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this._seven.GetActivitiesForProspect(data, _this.client.PRO_CONT).then(function (resp) {
                var activitiesProsp = resp;
                _this.LastActivities = activitiesProsp.ObjResult;
                console.log(resp);
            });
        });
    };
    ClientDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\client-detail\client-detail.html"*/'<!--\n\n  Generated template for the ClientDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle Cliente</ion-title>\n\n    <ion-buttons end>\n\n      <button class="BigButton" ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n        <ion-icon name="person" item-start></ion-icon>\n\n      <ion-label>Nombre</ion-label>\n\n      <ion-note item-end>\n\n     {{client.CR_DPROS.DPR_NOMB}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name="call" item-start></ion-icon>\n\n      <ion-label>Teléfono</ion-label>\n\n      <ion-note item-end *ngIf="client.CR_DPROS.DPR_NTEL" (click)="callContact(client.CR_DPROS.DPR_NTEL)">\n\n       {{client.CR_DPROS.DPR_NTEL}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name="mail" item-start></ion-icon>\n\n      <ion-label>Email</ion-label>\n\n      <ion-note item-end *ngIf="client.CR_DPROS.DPR_MAIL" (click)="openMail(client.CR_DPROS.DPR_MAIL)">\n\n       {{client.CR_DPROS.DPR_MAIL}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name="locate" item-start></ion-icon>\n\n      <ion-label>Direccion</ion-label>\n\n      <ion-note item-end>\n\n       {{client.CR_DPROS.DPR_DIRE}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="globe" item-start></ion-icon>\n\n      <ion-label>Página Web</ion-label>\n\n      <ion-note *ngIf="client.PRO_SWEB" item-end (click)="openUrl(client.PRO_SWEB)">\n\n       {{client.PRO_SWEB}}\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list #scheduleList>\n\n    <ion-list-header>\n\n      <h2>Anteriores</h2>\n\n    </ion-list-header>\n\n    <div *ngFor="let activity of LastActivities">\n\n    <ion-item-divider>\n\n      <h3>{{activity.GrupoHora}}</h3>\n\n    </ion-item-divider>\n\n      <ion-item-group>\n\n        <ion-item *ngFor="let agend of activity.Agenda">\n\n          <button ion-item detail-none>\n\n            <h3><b>{{agend.AGE_FINI | digitalDate}} - {{agend.AGE_FFIN | digitalDate}}</b></h3>\n\n            <h4>{{agend.PRO_NOMB}}</h4>\n\n           <p text-wrap>{{agend.CON_NOMB}} {{agend.CON_APEL}} - {{agend.AGE_ASUN}} - {{agend.ACT_NOMB}}</p>\n\n            <ion-icon name="clock" item-start></ion-icon>\n\n           </button>\n\n        </ion-item>\n\n      </ion-item-group>\n\n    </div>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\client-detail\client-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */]])
    ], ClientDetailPage);
    return ClientDetailPage;
}());

//# sourceMappingURL=client-detail.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeesPage = (function () {
    function EmployeesPage(navCtrl, navParams, viewCtrl, _seven, _user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._seven = _seven;
        this._user = _user;
    }
    EmployeesPage.prototype.ionViewDidLoad = function () {
        this.GetUsers();
    };
    EmployeesPage.prototype.GetUsers = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this._seven.GetEmployees(data).then(function (employees) {
                if (employees)
                    _this.employees = employees.ObjResult;
                _this.initializeItems();
            });
        });
    };
    EmployeesPage.prototype.initializeItems = function () {
        this.employeesList = this.employees;
    };
    EmployeesPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.employeesList = this.employeesList.filter(function (v) { return v.Usu_Nomb.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    EmployeesPage.prototype.closeLupa = function (employee) {
        this.viewCtrl.dismiss(employee);
    };
    EmployeesPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EmployeesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employees',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\employees\employees.html"*/'<!--\n\n  Generated template for the EmployeesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Empleados</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n\n\n        <ion-item (click)="closeLupa(employee)"  *ngFor="let employee of employeesList">          \n\n            <ion-label>\n\n                {{employee.Usu_Nomb}}\n\n            </ion-label>\n\n              <ion-icon name=\'person\' item-start></ion-icon>\n\n     </ion-item>\n\n  \n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\employees\employees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], EmployeesPage);
    return EmployeesPage;
}());

//# sourceMappingURL=employees.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttchmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AttchmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AttchmentsPage = (function () {
    function AttchmentsPage(navCtrl, navParams, _seven, _user, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this._user = _user;
        this.viewCtrl = viewCtrl;
        this.flow = navParams.get('flow');
    }
    AttchmentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AttchmentsPage');
        this.GetAttchments();
    };
    AttchmentsPage.prototype.GetAttchments = function () {
        var _this = this;
        this._seven.GetAttachment(this.flow.CAS_CONT).then(function (data) {
            console.log(data);
            _this.attachments = data.ObjResult;
        });
    };
    AttchmentsPage.prototype.OpenAttachment = function (attachment) {
        var _this = this;
        this._user.getSavedConnections().then(function (data) {
            //data="http://132.147.157.88/SevenCRMApi/api/";
            var download = data.replace("api/", "");
            download += "Download/" + attachment.adj_nomb;
            console.log(download);
            _this._user.openBrowser(download);
        });
    };
    AttchmentsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AttchmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attchments',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\attchments\attchments.html"*/'<!--\n\n  Generated template for the AttchmentsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Adjuntos</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only  class="BigButton" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item *ngFor="let attachment of attachments" (click)="OpenAttachment(attachment)">\n\n<ion-icon  name="attach" item-start></ion-icon>\n\n  {{attachment.adj_nomb}}\n\n</ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\attchments\attchments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], AttchmentsPage);
    return AttchmentsPage;
}());

//# sourceMappingURL=attchments.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusinessPage = (function () {
    function BusinessPage(navCtrl, navParams, _user, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._user = _user;
        this.viewCtrl = viewCtrl;
        this._user.GetBusiness().then(function (data) {
            _this.business = data;
            _this.businessList = data;
        });
    }
    BusinessPage.prototype.ionViewDidLoad = function () {
        this.initializeItems();
        console.log('ionViewDidLoad BusinessPage');
    };
    BusinessPage.prototype.initializeItems = function () {
        this.businessList = this.business;
    };
    BusinessPage.prototype.closeLupa = function (client) {
        this.viewCtrl.dismiss(client);
    };
    BusinessPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.businessList = this.businessList.filter(function (v) { return v.Emp_Nomb.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.Emp_Codi.toString().indexOf(q.toLowerCase()) > -1; });
    };
    BusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-business',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\business\business.html"*/'<!--\n\n  Generated template for the BusinessPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Seleccione su empresa</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(client)" *ngFor="let client of businessList">\n\n          <ion-label>\n\n          {{client.Emp_Nomb}}\n\n          </ion-label>\n\n          <ion-icon name=\'ios-home\' item-start></ion-icon>\n\n        </ion-item>\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\business\business.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], BusinessPage);
    return BusinessPage;
}());

//# sourceMappingURL=business.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientPointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClientPointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientPointsPage = (function () {
    function ClientPointsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.details = navParams.get('details');
    }
    ClientPointsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientPointsPage');
        this.initializeItems();
    };
    ClientPointsPage.prototype.closeLupa = function (detail) {
        this.viewCtrl.dismiss(detail);
    };
    ClientPointsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClientPointsPage.prototype.initializeItems = function () {
        this.detailsList = this.details;
    };
    ClientPointsPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.detailsList = this.detailsList.filter(function (v) { return v.DPR_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    ClientPointsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-points',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\client-points\client-points.html"*/'<!--\n\n  Generated template for the ClientPointsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle Cliente</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(detail)" *ngFor="let detail of detailsList">\n\n          <ion-icon name="home" item-start></ion-icon>\n\n          <ion-label>\n\n          {{detail.DPR_NOMB}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\client-points\client-points.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ClientPointsPage);
    return ClientPointsPage;
}());

//# sourceMappingURL=client-points.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages
//providers


/**
 * Generated class for the ConexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConexPage = (function () {
    function ConexPage(navCtrl, navParams, _seven, viewCtrl, modalCtrl, _user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this._user = _user;
    }
    ConexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConexPage');
        this.GetConnections();
    };
    ConexPage.prototype.GetConnections = function () {
        var _this = this;
        this._seven.getDataConex().then(function (data) {
            var datos = data;
            console.log(data);
            if (datos) {
                _this.connections = datos.ObjResult;
            }
        });
    };
    ConexPage.prototype.closeLupa = function (connection) {
        this.viewCtrl.dismiss(connection);
    };
    ConexPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ConexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-conex',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\conex\conex.html"*/'<!--\n\n  Generated template for the ConexPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Conexiones</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #clientsList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(conection)" *ngFor="let conection of connections">\n\n          <ion-label>\n\n          {{conection.CNX_NOMB}}\n\n          </ion-label>\n\n          <ion-icon name=\'wifi\' item-start></ion-icon>\n\n        </ion-item>\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\conex\conex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ConexPage);
    return ConexPage;
}());

//# sourceMappingURL=conex.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_attchments_attchments__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers

//pages

/**
 * Generated class for the FlowDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlowDetailPage = (function () {
    function FlowDetailPage(navCtrl, navParams, _seven, alertCtrl, viewCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this.flow = navParams.get('flow');
    }
    FlowDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowDetailPage');
        this.GetAttachmentCount();
    };
    FlowDetailPage.prototype.flowAprobment = function (acc_cont) {
        var _this = this;
        if (acc_cont === void 0) { acc_cont = ""; }
        if (acc_cont != "")
            this.flow.ACC_CONT = acc_cont;
        this._seven.ApproveFlow(this.flow).then(function (data) {
            console.log(data);
            var response = data;
            if (response.State) {
                _this.showAlert('El flujo ha sido aprobado!', 'Listo!');
                _this.close();
                return;
            }
            if (response.Message == "Seleccione una acción.") {
                console.log(response);
                _this.actions = response.ObjResult;
                _this.showRadioActions();
                return;
            }
            if (response.Message == "EJECUTORES_REQUERIDOS") {
                _this._seven.GetNextExecutors(_this.flow).then(function (data) {
                });
            }
            _this.showAlert(response.Message, 'Lo sentimos!');
        });
    };
    FlowDetailPage.prototype.flowReject = function () {
        var _this = this;
        this._seven.RejectFlow(this.flow).then(function (data) {
            var response = data;
            if (response.State) {
                _this.showAlert('El flujo ha sido rechazado!', 'Listo!');
                _this.close();
                return;
            }
            _this.showAlert('Ups!Ocurrió un error!', 'Lo sentimos!');
        });
    };
    FlowDetailPage.prototype.showAlert = function (mensaje, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    FlowDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FlowDetailPage.prototype.showRadioActions = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Acciones');
        console.log(this.actions);
        for (var _i = 0, _a = this.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            alert.addInput({
                type: 'radio',
                label: action.ACC_NOMB,
                value: action.ACC_CONT,
            });
        }
        alert.addButton('Cancelar');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
                _this.flowAprobment(data);
            }
        });
        alert.present();
    };
    FlowDetailPage.prototype.GetAttachmentCount = function () {
        var _this = this;
        this._seven.GetAttachmentCount(this.flow.CAS_CONT).then(function (data) {
            _this.attchmentCount = data;
        });
    };
    FlowDetailPage.prototype.OpenAttchments = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__pages_attchments_attchments__["a" /* AttchmentsPage */], { flow: this.flow });
        modal.present();
    };
    FlowDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flow-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flow-detail\flow-detail.html"*/'<!--\n\n  Generated template for the FlowDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Caso {{flow.CAS_CONT}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only  class="BigButton" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name ="podium" item-start></ion-icon>\n\n     <ion-label>Prioridad</ion-label>\n\n     <ion-note item-end>\n\n    {{flow.SEG_PRIO}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="eye" item-start></ion-icon>\n\n     <ion-label>Seguimiento</ion-label>\n\n     <ion-note item-end>\n\n  {{flow.SEG_CONT}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="clipboard" item-start></ion-icon>\n\n     <ion-label>Asunto</ion-label>\n\n     <ion-note item-end>\n\n     {{flow.SEG_SUBJ}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="person" item-start></ion-icon>\n\n     <ion-label>Quién registra</ion-label>\n\n     <ion-note item-end>\n\n      {{flow.USU_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="person" item-start></ion-icon>\n\n     <ion-label>Tercero Asociado</ion-label>\n\n     <ion-note item-end>\n\n      {{flow.TER_NOCO}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="OpenAttchments()" *ngIf="attchmentCount>0">\n\n  <ion-icon name="attach" item-start></ion-icon>\n\n  Adjuntos\n\n  <ion-badge item-end>{{attchmentCount}}</ion-badge>\n\n</ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="person" item-start></ion-icon>\n\n     <ion-label>Solicitado para</ion-label>\n\n     <ion-note item-end>\n\n    {{flow.SOLICITADO}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n   <ion-icon name ="alarm" item-start></ion-icon>\n\n     <ion-label>Recibido</ion-label>\n\n     <ion-note item-end>\n\n   {{flow.SEG_FREC| date: \'dd/MM/yyyy\' }} &nbsp;{{flow.SEG_HREC | date: \'h:mm:ss a\'}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="alarm" item-start></ion-icon>\n\n     <ion-label>Límite</ion-label>\n\n     <ion-note item-end>\n\n     {{flow.SEG_FLIM | date: \'dd/MM/yyyy\'}} &nbsp;{{flow.SEG_HLIM | date: \'h:mm:ss a\'}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item *ngIf="flow.ADICIO">\n\n        <ion-icon name ="twitch" item-start></ion-icon>\n\n     <ion-label>Datos adicionales</ion-label>\n\n     <ion-note item-end>\n\n       {{flow.ADICIO}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-icon name ="create" item-start></ion-icon>\n\n    <ion-label>Descripción</ion-label>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n        <p ion-text text-wrap>  {{flow.CAS_DESC}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="clipboard" item-start></ion-icon>\n\n    <ion-label>Comentarios para el ejecutor</ion-label>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n        <p text-wrap>    {{flow.SEG_COME}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-icon name ="create" item-start></ion-icon>\n\n    <ion-label>Comentarios para el segundo ejecutor</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea [(ngModel)]="flow.COMENTARIOS"  placeholder="Ingrese sus comentarios aquí"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button block color="primary" (click)="flowNextTracing()">\n\n              <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Aprobar\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button block color="danger" (click)="flowReject()">\n\n                  <ion-icon name="remove-circle"></ion-icon>&nbsp;Rechazar\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flow-detail\flow-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], FlowDetailPage);
    return FlowDetailPage;
}());

//# sourceMappingURL=flow-detail.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_global__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FlowsFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlowsFilterPage = (function () {
    function FlowsFilterPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var excludedTrackNames = this.navParams.data;
        this.tracks = __WEBPACK_IMPORTED_MODULE_2__assets_global__["a" /* Globals */].tracks;
    }
    FlowsFilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowsFilterPage');
    };
    FlowsFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    FlowsFilterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FlowsFilterPage.prototype.applyFilters = function () {
        this.viewCtrl.dismiss();
        // Pass back a new array of track names to exclude
        //  let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
        //this.dismiss(excludedTrackNames);
    };
    FlowsFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flows-filter',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flows-filter\flows-filter.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Cerrar</button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>\n\n    Filtrar por prioridad\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="applyFilters()" strong>Aplicar</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Prioridades</ion-list-header>\n\n\n\n     <ion-item *ngFor="let track of tracks">\n\n      <span item-start class="dot"></span>\n\n     <ion-label>{{track.name}}</ion-label>\n\n     <ion-toggle [color]="track.color" ></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n\n      Restablecer filtros\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flows-filter\flows-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], FlowsFilterPage);
    return FlowsFilterPage;
}());

//# sourceMappingURL=flows-filter.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flows_filter_flows_filter__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//providers


//pages

/**
 * Generated class for the FlowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlowsPage = (function () {
    function FlowsPage(navCtrl, _seven, toast, _user, modal) {
        this.navCtrl = navCtrl;
        this._seven = _seven;
        this.toast = toast;
        this._user = _user;
        this.modal = modal;
        this.value = '';
        this.replicated = false;
    }
    FlowsPage.prototype.ionViewDidLoad = function () {
    };
    FlowsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad FlowsPage');
        this._user.getReplicated().then(function (data) {
            if (data) {
                _this.replicated = true;
                _this.getFlows();
            }
            else {
                _this.replicated = false;
                _this.getFlows();
            }
        });
    };
    FlowsPage.prototype.goDetailsFlow = function (flow) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__["a" /* FlowDetailPage */], { 'flow': flow });
        modal.present();
        modal.onDidDismiss(function () {
            _this.getFlows();
        });
    };
    FlowsPage.prototype.getFlows = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this._seven.getFlows(data).then(function (data) {
                _this.flows = data;
                _this.initializeItems();
                // loading.dismiss();
            }).catch(function (err) {
                console.log(err);
                // loading.dismiss();
                //Error
            });
        });
    };
    FlowsPage.prototype.initializeItems = function () {
        this.flowList = this.flows;
    };
    FlowsPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.flowList = this.flowList.filter(function (v) { return v.CAS_DESC.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.CAS_CONT.toString().indexOf(q.toLowerCase()) > -1; });
    };
    FlowsPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this._seven.getFlows(data).then(function (data) {
                console.log(data);
                _this.flows = data;
                _this.initializeItems();
                refresher.complete();
                _this._user.showToast('Flujos actualizados!');
            }).catch(function (err) {
                console.log(err);
                //Error
            });
        });
    };
    FlowsPage.prototype.showMessage = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 3000
        }).present();
    };
    FlowsPage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__flows_filter_flows_filter__["a" /* FlowsFilterPage */], this.flowList);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.flowList = data;
            }
        });
    };
    FlowsPage.prototype.flowAprobment = function (flow) {
        var _this = this;
        this._seven.ApproveFlow(flow).then(function (data) {
            var response = data;
            if (response.State) {
                _this._user.showToast('El flujo ha sido aprobado!');
                _this.ionViewDidLoad();
                return;
            }
            _this.getFlows();
            _this._user.showToast(response.Message);
        });
    };
    FlowsPage.prototype.flowReject = function (flow) {
        var _this = this;
        this._seven.RejectFlow(flow).then(function (data) {
            var response = data;
            if (response.State) {
                _this._user.showToast('El flujo ha sido rechazado!');
                _this.ionViewDidLoad();
                return;
            }
            _this.getFlows();
            _this._user.showToast(response.Message);
        });
    };
    FlowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flows',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flows\flows.html"*/'<!--\n\n  Generated template for the FlowsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      Flujos\n\n    </ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentFilter()">\n\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n  <ion-refresher-content>\n\n  </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list #scheduleList no-lines>\n\n      <ion-item-group no-border>\n\n        <ion-item-sliding #slidingItem  class="flujo" [class]= "flow.SEG_PRIO | flows" *ngFor="let flow of flowList">\n\n          <button ion-item (click)="goDetailsFlow(flow)" [disabled]="replicated">\n\n        <h3>Caso {{flow.CAS_CONT}}</h3>\n\n        <p>\n\n        {{flow.CAS_DESC}}\n\n        </p>\n\n      </button>\n\n      <ion-item-options side="right">\n\n     <button ion-button color="danger" (click)="flowReject(flow)" [disabled]="replicated" >Rechazar</button>\n\n </ion-item-options>\n\n <ion-item-options side="left">\n\n<button ion-button color="primary" (click)="flowAprobment(flow)" [disabled]="replicated">Aprobar</button>\n\n</ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flows\flows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], FlowsPage);
    return FlowsPage;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conex_conex__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_business_business__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//providers


//plugins

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, _seven, alertCtrl, _user, keychainTouchId, platform, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this._user = _user;
        this.keychainTouchId = keychainTouchId;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.verifyConnections();
        this.GetAccessTouchID();
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        this.TryAccess();
    };
    LoginPage.prototype.TryAccess = function () {
        var _this = this;
        try {
            this._seven.GetValidationUser(this.login.username, this.login.password).then(function (data) {
                var datos;
                datos = data;
                if (!datos.State) {
                    _this.showAlert(datos.Message, 'Lo sentimos');
                    return;
                }
                _this.VerifyTouchID();
                _this._user.login(_this.login.username, datos.ObjResult, _this.login.password);
            }).catch(function (err) {
                _this.showAlert(err, "Lo sentimos!");
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    LoginPage.prototype.GetAccessTouchID = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.keychainTouchId.has("password").then(function () {
                _this.touchID = true;
                _this.keychainTouchId.verify("password", "Ingrese su huella dactilar para ingresar").then(function (pass) {
                    console.log('keychain');
                    console.log(pass);
                    _this._user.getSecureUser().then(function (user) {
                        _this.login.username = user;
                        _this.login.password = pass;
                        _this.TryAccess();
                    });
                }).catch(function () {
                });
            });
        }
    };
    LoginPage.prototype.SetAccessTouchID = function () {
        if (this.platform.is("cordova")) {
            this._user.setSecureUser(this.login.username);
            this.keychainTouchId.save("password", this.login.password);
        }
    };
    LoginPage.prototype.VerifyTouchID = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.keychainTouchId.isAvailable().then(function () {
                _this.touchID = true;
                _this.keychainTouchId.has("password").catch(function (err) {
                    console.log('no hay huella');
                    _this.SetAccessTouchID();
                    // console.log('setea touch');
                    //   let modalT= this.modalCtrl.create(TouchIdPage);
                    //    modalT.present();
                    //    modalT.onDidDismiss(()=>{
                    //      console.log('resuelvo');
                    //       resolve(true);
                    //    })
                });
            });
        }
    };
    LoginPage.prototype.verifyConnections = function () {
        var _this = this;
        this._user.getSavedConnections().then(function (data) {
            if (!data) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__conex_conex__["a" /* ConexPage */]);
                modal.present();
                modal.onDidDismiss(function (conex) {
                    if (conex)
                        // this._user.setConnectionsPreference(true);
                        _this._user.setSavedConnections(conex.CNX_IPSR);
                    // this._seven.setConnection(conex.CNX_IPSR);
                    _this._user.setBackGround(conex.CNX_BACK);
                    _this._user.setLogo(conex.CNX_LOGO);
                    _this._user.setLink(conex.CNX_LINK);
                    _this.background = conex.CNX_BACK;
                    _this.logo = conex.CNX_LOGO;
                    _this.url = conex.CNX_LINK;
                    _this._seven.GetGnEmpre().then(function (empresasObj) {
                        console.log(empresasObj);
                        _this.businessList = empresasObj.ObjResult;
                        if (_this.businessList.length > 1) {
                            _this._user.setBusiness(_this.businessList);
                            var modal_1 = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_business_business__["a" /* BusinessPage */]);
                            modal_1.present();
                            modal_1.onDidDismiss(function (data) {
                                console.log(data);
                                _this._user.SetBusinessClient(data);
                            });
                        }
                        if (_this.businessList.length < 2) {
                            _this._user.SetBusinessClient(_this.businessList[0]);
                        }
                    });
                });
            }
            else {
                _this._user.getBackground().then(function (data) {
                    _this.background = data;
                });
                _this._user.getLogo().then(function (data) {
                    _this.logo = data;
                });
                _this._user.getLink().then(function (data) {
                    _this.url = data;
                });
                _this._user.getSavedConnections().then(function (data) {
                    _this._user.setSavedConnections(data);
                });
                _this._user.GetBusiness().then(function (data) {
                    _this.businessList = data;
                });
            }
        });
    };
    LoginPage.prototype.showAlert = function (mensaje, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.openUrl = function () {
        this._user.openBrowser(this.url);
    };
    LoginPage.prototype.changeBusiness = function () {
        var _this = this;
        this._seven.GetGnEmpre().then(function (empresasObj) {
            var empresas;
            empresas = empresasObj.ObjResult;
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_business_business__["a" /* BusinessPage */]);
            modal.present();
            modal.onDidDismiss(function (data) {
                console.log(data);
                _this._user.SetBusinessClient(data);
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-grid>\n\n<ion-row>\n\n	<ion-col class="loginColM">\n\n		<div  class="logodiv">\n\n		 <img  class="logoM" [src]="logo" (click)="openUrl()" />\n\n	 </div>\n\n		<h1>CRM</h1>\n\n	</ion-col>\n\n\n\n</ion-row>\n\n	<form  #registerForm="ngForm" class="loginForm">\n\n		<ion-row>\n\n			<ion-col>\n\n					<ion-item>\n\n						<ion-label><ion-icon name="ios-person"></ion-icon></ion-label>\n\n						<ion-input type="text" placeholder="Usuario" name="email" [(ngModel)]="login.username" required></ion-input>\n\n					</ion-item>\n\n\n\n					<ion-item>\n\n						<ion-label>\n\n							<ion-icon name="ios-lock"></ion-icon>\n\n						</ion-label>\n\n						<ion-input type="password" placeholder="Contraseña" name="password" [(ngModel)]="login.password" required></ion-input>\n\n					</ion-item>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col>\n\n				<button ion-button class="submit-btn" full (click)="onLogin()" [disabled]="!registerForm.form.valid">\n\n				<ion-icon name="log-in"></ion-icon>&nbsp;Ingresar\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row *ngIf="businessList && businessList.length>1">\n\n			<ion-col>\n\n				<button ion-button class="submit-btn" full (click)="changeBusiness()">\n\n				<ion-icon name="undo"></ion-icon>&nbsp;Cambiar empresa\n\n				</button>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col class="loginCol">\n\n				<div class="logodiv">\n\n				<img class="logoM" src="assets/imgs/logoseven.png"/>\n\n			</div>\n\n\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col text-center>\n\n			<div  class="fingerprint" button tappable (click)="GetAccessTouchID()" *ngIf="touchID"> \n\n				<img src="assets/imgs/fingerprint.svg">\n\n			</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</form>\n\n</ion-grid>\n\n</ion-header>\n\n\n\n<ion-content [style.background-color] ="background">\n\n\n\n\n\n</ion-content>\n\n<ion-footer text-center>\n\n	<p>SEVEN ERP©1992-2018 DigitalWare</p>\n\n    <p>Versión 18.3.1.0</p>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lupa_lupa__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_points_client_points__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages



/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.OpenSearchClient = function () {
        var _this = this;
        this.contactList = [];
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__lupa_lupa__["a" /* LupaPage */], { 'all': true });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.client = data;
            console.log(data);
        });
    };
    SearchPage.prototype.OpenSearchDetail = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__client_points_client_points__["a" /* ClientPointsPage */], { details: this.client.dprosList });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.client.cdpros = data;
            _this.contacts = _this.client.cdpros.conpr;
            _this.initializeItems();
        });
    };
    SearchPage.prototype.openContact = function (contact) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__["a" /* ContactDetailPage */], { contact: contact });
        modal.present();
    };
    SearchPage.prototype.initializeItems = function () {
        console.log(this.contactList);
        this.contactList = this.contacts;
    };
    SearchPage.prototype.getItems = function (q) {
        console.log('entra');
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío no filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        console.log('llega');
        //Realiza el filtrado
        this.contactList = this.contactList.filter(function (v) { return v.CON_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Consultar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item (click)="OpenSearchClient()">\n\n      <ion-icon name ="man" item-start>\n\n      </ion-icon>\n\n     <ion-label>Cliente</ion-label>\n\n     <ion-note class="note"  item-end *ngIf="client">\n\n     {{client.PRO_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="OpenSearchDetail()" *ngIf="client">\n\n      <ion-icon name ="home" item-start>\n\n      </ion-icon>\n\n     <ion-label>Sucursal</ion-label>\n\n     <ion-note class="note"  item-end *ngIf="client && client.cdpros">\n\n     {{client.cdpros.DPR_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <div *ngIf="client && contactList">\n\n\n\n    <ion-item-divider>\n\n      Contactos\n\n    </ion-item-divider>\n\n\n\n      <ion-searchbar\n\n      [(ngModel)]="value"\n\n      (ionChange)="getItems($event.value)"\n\n      [showCancelButton]="shouldShowCancel"\n\n      placeholder="Buscar contactos">\n\n    </ion-searchbar>\n\n\n\n     <ion-item *ngFor="let contact of contactList" (click)="openContact(contact)">\n\n       <ion-icon item-start name="person"></ion-icon>\n\n       <ion-label>{{contact.CON_NOMB}}</ion-label>\n\n     </ion-item>\n\n   </div>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, _user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._user = _user;
        this.user = {};
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._user.getUserInfo().then(function (data) {
            console.log(data);
            _this.user = data;
        });
    };
    SettingsPage.prototype.logOut = function () {
        this._user.logout();
    };
    SettingsPage.prototype.sendMail = function (email) {
        this._user.sendEmail(email);
    };
    SettingsPage.prototype.remove = function () {
        this._user.removeData();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\settings\settings.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Ajustes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list no-border>\n\n    <ion-list-header>\n\n      Perfil\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-avatar item-start *ngIf="user.Usu_Foto">\n\n      <img [src]="\'data:image/jpg;base64,\'+user.Usu_Foto" />\n\n    </ion-avatar>\n\n    <ion-note item-end>\n\n     {{user.Usu_Nomb}}\n\n    </ion-note>\n\n    </ion-item>\n\n    <ion-list-header>\n\n      Soporte\n\n    </ion-list-header>\n\n    <ion-item (click)="sendMail(\'sevensoporte@digitalware.com.co\')">\n\n      <ion-icon name ="mail" item-start>\n\n      </ion-icon>\n\n    Enviar correo a soporte\n\n      <!-- <ion-note (click)="sendMail(sevensoporte@digitalware.com.co)">\n\n        sevensoporte@digitalware.com.co\n\n      </ion-note> -->\n\n    </ion-item>\n\n    <ion-list-header>\n\n      Cuenta\n\n    </ion-list-header>\n\n    <!-- <ion-item>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n      <ion-label>\n\n        Notificaciones\n\n      </ion-label>\n\n      <ion-icon name=\'notifications\' item-start></ion-icon>\n\n    </ion-item> -->\n\n    <ion-item>\n\n      <ion-label>\n\n      Almacenamiento\n\n      </ion-label>\n\n      <ion-icon name=\'trash\' item-start></ion-icon>\n\n      <ion-note item-end (click)="remove()">\n\n     Borrar datos de usuario\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="logOut()">\n\n      <ion-icon name=\'log-out\' item-start></ion-icon>\n\n      Salir\n\n      <ion-note item-end>\n\n      Cerrar sesión\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SevenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_global__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SevenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SevenProvider = (function () {
    function SevenProvider(http, load, _userdata) {
        this.http = http;
        this.load = load;
        this._userdata = _userdata;
        console.log('Hello SevenProvider Provider');
    }
    SevenProvider.prototype.getFlows = function (usu_codi) {
        var _this = this;
        return this._userdata.getReplicated().then(function (data) {
            console.log(data);
            if (data) {
                return _this.getData("Flujos/FlujosAdm?usu_codi=" + data.Usu_Codi);
            }
            else {
                return _this.getData("Flujos/FlujosAdm?usu_codi=" + usu_codi);
            }
        });
    };
    SevenProvider.prototype.GetValidationUser = function (user, pass) {
        return this.getData("GnUsuar/ValidateUser?user=" + user + "&pass=" + pass);
    };
    SevenProvider.prototype.GetGnEmpre = function () {
        return this.getData("GnEmpre/GetEmpresas?");
    };
    SevenProvider.prototype.ApproveFlow = function (flujo) {
        return this.postData(flujo, 'Flujos/FlujosAdm');
    };
    SevenProvider.prototype.GetFaClien = function (value, all) {
        var _this = this;
        if (all === void 0) { all = false; }
        console.log(all);
        var url = 'Actividades/cargarClientescrm?filter=' + value;
        if (all)
            url += '&all=true';
        return this.getData(url)
            .then(function (data) {
            _this._userdata.setFaClien(data);
            console.log("clientes leídos de bd");
            return data;
        })
            .catch(function (error) {
            return undefined;
        });
    };
    SevenProvider.prototype.GetActivities = function () {
        return this.getData('Actividades/ListarActividades?');
    };
    SevenProvider.prototype.GetStages = function () {
        return this.getData('Actividades/ListarEtapas?');
    };
    SevenProvider.prototype.GetUserActivities = function (usu_codi, fini, fina) {
        var _this = this;
        return this._userdata.getReplicated().then(function (data) {
            if (data) {
                return _this.getData("CrAgend/ListaActividades?usu_codi=" + data.Usu_Codi + "&fini=" + fini + "&fina=" + fina);
            }
            else {
                return _this.getData("CrAgend/ListaActividades?usu_codi=" + usu_codi + "&fini=" + fini + "&fina=" + fina);
            }
        });
    };
    SevenProvider.prototype.GetActivitiesForProspect = function (usu_codi, pro_cont) {
        return this.getData("CrAgend/ListaActividadesProsp?usu_codi=" + usu_codi + "&pro_cont=" + pro_cont);
    };
    SevenProvider.prototype.GetEmployees = function (usu_codi) {
        return this.getData("Actividades/ListarEmpleados?usu_codi=" + usu_codi);
    };
    SevenProvider.prototype.GetNextExecutors = function (flujo) {
        return this.getData("Flujos/nextExecutors?emp_codi=" + flujo.emp_codi + "&eta_cont=" + flujo.eta_cont + "&flu_cont=" + flujo.flu_cont);
    };
    SevenProvider.prototype.RejectFlow = function (flujo) {
        var param = { objResult: null };
        param.objResult = flujo;
        return this.postData(param, 'Flujos/FlujoDetalleRe');
    };
    SevenProvider.prototype.SaveActivity = function (activity) {
        return this.postData(activity, 'Actividades/guardarActividad');
    };
    SevenProvider.prototype.RejectActivity = function (activity) {
        return this.postData(activity, 'CrAgend/CancelarActividad');
    };
    SevenProvider.prototype.InvitedActivity = function (activity) {
        return this.postData(activity, 'Actividades/invitarActividad');
    };
    SevenProvider.prototype.UpdateActivity = function (agend) {
        return this.postData(agend, 'CrAgend/ActualizarActividad');
    };
    SevenProvider.prototype.GetUsers = function (usu_codi) {
        return this.getData("Actividades/ListarEmpleados?usu_codi=" + usu_codi);
    };
    SevenProvider.prototype.GetAttachment = function (cas_cont) {
        return this.getData("Flujos/FlujosAdj?cas_cont=" + cas_cont);
    };
    SevenProvider.prototype.GetAttachmentCount = function (cas_cont) {
        return this.getData("Flujos/FlujosAdjCount?cas_cont=" + cas_cont);
    };
    SevenProvider.prototype.GetActivityInviteds = function (agend) {
        return this.postData(agend, 'CrAgend/invitadosAgenda');
    };
    SevenProvider.prototype.GetExecutionTypesFlow = function (flow) {
        return this.getData("Flujos/GetExecutionUsers?flu_cont=" + flow.FLU_CONT + "&eta_cont=" + flow.ETA_CONT + "&acc_cont=" + flow.ACC_CONT);
    };
    SevenProvider.prototype.GetStagesFlow = function (flow) {
        return this.getData("Flujos/GetAcciones?flu_cont=" + flow.FLU_CONT + "&eta_cont=" + flow.ETA_CONT);
    };
    // setConnection(connection:string){
    //   console.log(connection);
    //    Globals.ClientUrl = connection;
    // }
    SevenProvider.prototype.getData = function (apiAction) {
        //Globals.ClientUrl ='http://132.147.157.88/SevenCRMApi/api/';
        //Globals.ClientUrl ='http://localhost/SevenCRMApi/api/';
        var _this = this;
        var load = this.load.create({
            content: 'cargando...'
        });
        load.present();
        return new Promise(function (resolve) {
            _this._userdata.GetBusinessClient().then(function (data) {
                console.log('lee empresas');
                _this.businessClient = data;
                console.log(data);
                if (data == null)
                    _this.businessClient = 0;
                console.log(apiAction);
                console.log(__WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl);
                var uri = "" + __WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl + apiAction + "&emp_codi=" + _this.businessClient.Emp_Codi;
                //     let uri =`${Globals.ClientUrl}${apiAction}&emp_codi=${102}`;
                console.log(uri);
                _this.http.get(uri).subscribe(function (data) {
                    resolve(data);
                    load.dismiss();
                }, function (err) {
                    console.log(err);
                    load.dismiss();
                });
            });
        });
    };
    SevenProvider.prototype.postData = function (data, apiAction) {
        var _this = this;
        //Comentarear para produccion
        //Globals.ClientUrl ='http://132.147.157.88/SevenCRMApi/api/';
        //Globals.ClientUrl ='http://localhost/SevenCRMApi/api/';
        var loading = this.load.create({
            content: 'Cargando...'
        });
        loading.present();
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl + apiAction, data)
                .subscribe(function (res) {
                resolve(res);
                loading.dismiss();
            }, function (err) {
                reject(err);
                loading.dismiss();
            });
        });
    };
    SevenProvider.prototype.getDataConex = function () {
        var _this = this;
        var load = this.load.create({
            content: 'cargando...'
        });
        load.present();
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].CentralizationUrl).subscribe(function (data) {
                //this.http.get('http://132.147.157.88/sevencentralizacion/api/GnConex/GetConnections').subscribe(data => {
                resolve(data);
                load.dismiss();
            }, function (err) {
                console.log(err);
                load.dismiss();
            });
        });
    };
    SevenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */]) === "function" && _c || Object])
    ], SevenProvider);
    return SevenProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=seven.js.map

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activities-search/activities-search.module": [
		456,
		22
	],
	"../pages/activities/activities.module": [
		457,
		21
	],
	"../pages/activity-detail/activity-detail.module": [
		458,
		20
	],
	"../pages/attchments/attchments.module": [
		459,
		19
	],
	"../pages/business/business.module": [
		460,
		18
	],
	"../pages/client-detail/client-detail.module": [
		461,
		17
	],
	"../pages/client-points/client-points.module": [
		462,
		16
	],
	"../pages/conex/conex.module": [
		463,
		15
	],
	"../pages/contact-detail/contact-detail.module": [
		464,
		14
	],
	"../pages/contact-search/contact-search.module": [
		465,
		13
	],
	"../pages/email/email.module": [
		466,
		12
	],
	"../pages/employees/employees.module": [
		467,
		11
	],
	"../pages/flow-detail/flow-detail.module": [
		468,
		10
	],
	"../pages/flows-filter/flows-filter.module": [
		469,
		9
	],
	"../pages/flows/flows.module": [
		470,
		8
	],
	"../pages/invited/invited.module": [
		471,
		7
	],
	"../pages/login/login.module": [
		472,
		6
	],
	"../pages/lupa/lupa.module": [
		473,
		5
	],
	"../pages/new-event/new-event.module": [
		474,
		4
	],
	"../pages/search/search.module": [
		475,
		3
	],
	"../pages/settings/settings.module": [
		476,
		2
	],
	"../pages/stages-search/stages-search.module": [
		477,
		1
	],
	"../pages/touch-id/touch-id.module": [
		478,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the DigitalDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var DigitalDatePipe = (function () {
    function DigitalDatePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    DigitalDatePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        value = __WEBPACK_IMPORTED_MODULE_1_moment__(value).format("HH:mm:ss a");
        return value;
    };
    DigitalDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'digitalDate',
        })
    ], DigitalDatePipe);
    return DigitalDatePipe;
}());

//# sourceMappingURL=digital-date.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flows_flows__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__activities_activities__["a" /* ActivitiesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__flows_flows__["a" /* FlowsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Flujos" tabIcon="git-network"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Buscar" tabIcon="search"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Ajustes" tabIcon="cog"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailPage = (function () {
    function EmailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.email = navParams.get('email');
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\email\email.html"*/'<!--\n\n  Generated template for the EmailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Enviar Email</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input  type="text" placeholder = "Para" [(ngModel)] ="to"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input  type="text" placeholder = "Copia" [(ngModel)] ="cc"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input  type="text" placeholder = "Asunto" [(ngModel)] ="subject"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea max="500"  type="text" placeholder  = "Mensaje" [(ngModel)] ="body"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button icon-left full (click)="sendEmail()">\n\n    <ion-icon name="mail"></ion-icon> Enviar\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\email\email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers

/**
 * Generated class for the TouchIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TouchIdPage = (function () {
    function TouchIdPage(viewCtrl, _user) {
        this.viewCtrl = viewCtrl;
        this._user = _user;
    }
    TouchIdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TouchIdPage');
    };
    TouchIdPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TouchIdPage.prototype.remove = function () {
        this._user.RemoveTouchID();
        this.viewCtrl.dismiss();
    };
    TouchIdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-touch-id',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\touch-id\touch-id.html"*/'<!--\n\n  Generated template for the TouchIdPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <div  class="fingerprint">\n\n        <img src="assets/imgs/fingerprint.svg">\n\n      </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label text-wrap>\n\n          Tu dispositivo posee lector de huellas.Mediante esta autenticación podrás ingresar a la aplicación directamente.\n\n          Deseas utilizar este método de acceso?\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n\n\n      <ion-col>\n\n        <button ion-button block color="danger" icon-left (click)="remove()">\n\n            <ion-icon name="alarm"></ion-icon>\n\n          No\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="primary" icon-left close()>\n\n          <ion-icon name="checkmark-circle"></ion-icon>\n\n          Listo\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\touch-id\touch-id.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], TouchIdPage);
    return TouchIdPage;
}());

//# sourceMappingURL=touch-id.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_calendar__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_flows_flows__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_flow_detail_flow_detail__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_conex_conex__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_touch_id_touch_id__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_contact_detail_contact_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_client_detail_client_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_email_email__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_flows_filter_flows_filter__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_contact_search_contact_search__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_search_search__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_client_points_client_points__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_employees_employees__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_attchments_attchments__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_business_business__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_flows_flows__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_digital_date_digital_date__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_image_image__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_keychain_touch_id__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_call_number__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_email_composer__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_browser_tab__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Plugins










//pages



























//providers


//Pipes



//Plugins




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_flows_flows__["a" /* FlowsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_flow_detail_flow_detail__["a" /* FlowDetailPage */],
                __WEBPACK_IMPORTED_MODULE_39__pipes_flows_flows__["a" /* FlowsPipe */],
                __WEBPACK_IMPORTED_MODULE_40__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */],
                __WEBPACK_IMPORTED_MODULE_41__pipes_image_image__["a" /* ImagePipe */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__["a" /* LupaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__["a" /* ActivitiesSearchPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__["a" /* StagesSearchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__["a" /* ActivityDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__["a" /* InvitedPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_conex_conex__["a" /* ConexPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_touch_id_touch_id__["a" /* TouchIdPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_client_detail_client_detail__["a" /* ClientDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_flows_filter_flows_filter__["a" /* FlowsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_search_contact_search__["a" /* ContactSearchPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_client_points_client_points__["a" /* ClientPointsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_employees_employees__["a" /* EmployeesPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_attchments_attchments__["a" /* AttchmentsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_business_business__["a" /* BusinessPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activities-search/activities-search.module#ActivitiesSearchPageModule', name: 'ActivitiesSearchPage', segment: 'activities-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-detail/activity-detail.module#ActivityDetailPageModule', name: 'ActivityDetailPage', segment: 'activity-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attchments/attchments.module#AttchmentsPageModule', name: 'AttchmentsPage', segment: 'attchments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/business/business.module#BusinessPageModule', name: 'BusinessPage', segment: 'business', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-detail/client-detail.module#ClientDetailPageModule', name: 'ClientDetailPage', segment: 'client-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-points/client-points.module#ClientPointsPageModule', name: 'ClientPointsPage', segment: 'client-points', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conex/conex.module#ConexPageModule', name: 'ConexPage', segment: 'conex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-detail/contact-detail.module#ContactDetailPageModule', name: 'ContactDetailPage', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-search/contact-search.module#ContactSearchPageModule', name: 'ContactSearchPage', segment: 'contact-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employees/employees.module#EmployeesPageModule', name: 'EmployeesPage', segment: 'employees', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flow-detail/flow-detail.module#FlowDetailPageModule', name: 'FlowDetailPage', segment: 'flow-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows-filter/flows-filter.module#FlowsFilterPageModule', name: 'FlowsFilterPage', segment: 'flows-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows/flows.module#FlowsPageModule', name: 'FlowsPage', segment: 'flows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invited/invited.module#InvitedPageModule', name: 'InvitedPage', segment: 'invited', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lupa/lupa.module#LupaPageModule', name: 'LupaPage', segment: 'lupa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stages-search/stages-search.module#StagesSearchPageModule', name: 'StagesSearchPage', segment: 'stages-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/touch-id/touch-id.module#TouchIdPageModule', name: 'TouchIdPage', segment: 'touch-id', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_flows_flows__["a" /* FlowsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_flow_detail_flow_detail__["a" /* FlowDetailPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__["a" /* LupaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__["a" /* ActivitiesSearchPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__["a" /* StagesSearchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__["a" /* ActivityDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__["a" /* InvitedPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_conex_conex__["a" /* ConexPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_touch_id_touch_id__["a" /* TouchIdPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_client_detail_client_detail__["a" /* ClientDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_email_email__["a" /* EmailPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_flows_filter_flows_filter__["a" /* FlowsFilterPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_search_contact_search__["a" /* ContactSearchPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_client_points_client_points__["a" /* ClientPointsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_employees_employees__["a" /* EmployeesPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_attchments_attchments__["a" /* AttchmentsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_business_business__["a" /* BusinessPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_37__providers_seven_seven__["a" /* SevenProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_40__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 188,
	"./af.js": 188,
	"./ar": 189,
	"./ar-dz": 190,
	"./ar-dz.js": 190,
	"./ar-kw": 191,
	"./ar-kw.js": 191,
	"./ar-ly": 192,
	"./ar-ly.js": 192,
	"./ar-ma": 193,
	"./ar-ma.js": 193,
	"./ar-sa": 194,
	"./ar-sa.js": 194,
	"./ar-tn": 195,
	"./ar-tn.js": 195,
	"./ar.js": 189,
	"./az": 196,
	"./az.js": 196,
	"./be": 197,
	"./be.js": 197,
	"./bg": 198,
	"./bg.js": 198,
	"./bm": 199,
	"./bm.js": 199,
	"./bn": 200,
	"./bn.js": 200,
	"./bo": 201,
	"./bo.js": 201,
	"./br": 202,
	"./br.js": 202,
	"./bs": 203,
	"./bs.js": 203,
	"./ca": 204,
	"./ca.js": 204,
	"./cs": 205,
	"./cs.js": 205,
	"./cv": 206,
	"./cv.js": 206,
	"./cy": 207,
	"./cy.js": 207,
	"./da": 208,
	"./da.js": 208,
	"./de": 209,
	"./de-at": 210,
	"./de-at.js": 210,
	"./de-ch": 211,
	"./de-ch.js": 211,
	"./de.js": 209,
	"./dv": 212,
	"./dv.js": 212,
	"./el": 213,
	"./el.js": 213,
	"./en-au": 214,
	"./en-au.js": 214,
	"./en-ca": 215,
	"./en-ca.js": 215,
	"./en-gb": 216,
	"./en-gb.js": 216,
	"./en-ie": 217,
	"./en-ie.js": 217,
	"./en-il": 218,
	"./en-il.js": 218,
	"./en-nz": 219,
	"./en-nz.js": 219,
	"./eo": 220,
	"./eo.js": 220,
	"./es": 221,
	"./es-do": 222,
	"./es-do.js": 222,
	"./es-us": 223,
	"./es-us.js": 223,
	"./es.js": 221,
	"./et": 224,
	"./et.js": 224,
	"./eu": 225,
	"./eu.js": 225,
	"./fa": 226,
	"./fa.js": 226,
	"./fi": 227,
	"./fi.js": 227,
	"./fo": 228,
	"./fo.js": 228,
	"./fr": 229,
	"./fr-ca": 230,
	"./fr-ca.js": 230,
	"./fr-ch": 231,
	"./fr-ch.js": 231,
	"./fr.js": 229,
	"./fy": 232,
	"./fy.js": 232,
	"./gd": 233,
	"./gd.js": 233,
	"./gl": 234,
	"./gl.js": 234,
	"./gom-latn": 235,
	"./gom-latn.js": 235,
	"./gu": 236,
	"./gu.js": 236,
	"./he": 237,
	"./he.js": 237,
	"./hi": 238,
	"./hi.js": 238,
	"./hr": 239,
	"./hr.js": 239,
	"./hu": 240,
	"./hu.js": 240,
	"./hy-am": 241,
	"./hy-am.js": 241,
	"./id": 242,
	"./id.js": 242,
	"./is": 243,
	"./is.js": 243,
	"./it": 244,
	"./it.js": 244,
	"./ja": 245,
	"./ja.js": 245,
	"./jv": 246,
	"./jv.js": 246,
	"./ka": 247,
	"./ka.js": 247,
	"./kk": 248,
	"./kk.js": 248,
	"./km": 249,
	"./km.js": 249,
	"./kn": 250,
	"./kn.js": 250,
	"./ko": 251,
	"./ko.js": 251,
	"./ky": 252,
	"./ky.js": 252,
	"./lb": 253,
	"./lb.js": 253,
	"./lo": 254,
	"./lo.js": 254,
	"./lt": 255,
	"./lt.js": 255,
	"./lv": 256,
	"./lv.js": 256,
	"./me": 257,
	"./me.js": 257,
	"./mi": 258,
	"./mi.js": 258,
	"./mk": 259,
	"./mk.js": 259,
	"./ml": 260,
	"./ml.js": 260,
	"./mn": 261,
	"./mn.js": 261,
	"./mr": 262,
	"./mr.js": 262,
	"./ms": 263,
	"./ms-my": 264,
	"./ms-my.js": 264,
	"./ms.js": 263,
	"./mt": 265,
	"./mt.js": 265,
	"./my": 266,
	"./my.js": 266,
	"./nb": 267,
	"./nb.js": 267,
	"./ne": 268,
	"./ne.js": 268,
	"./nl": 269,
	"./nl-be": 270,
	"./nl-be.js": 270,
	"./nl.js": 269,
	"./nn": 271,
	"./nn.js": 271,
	"./pa-in": 272,
	"./pa-in.js": 272,
	"./pl": 273,
	"./pl.js": 273,
	"./pt": 274,
	"./pt-br": 275,
	"./pt-br.js": 275,
	"./pt.js": 274,
	"./ro": 276,
	"./ro.js": 276,
	"./ru": 277,
	"./ru.js": 277,
	"./sd": 278,
	"./sd.js": 278,
	"./se": 279,
	"./se.js": 279,
	"./si": 280,
	"./si.js": 280,
	"./sk": 281,
	"./sk.js": 281,
	"./sl": 282,
	"./sl.js": 282,
	"./sq": 283,
	"./sq.js": 283,
	"./sr": 284,
	"./sr-cyrl": 285,
	"./sr-cyrl.js": 285,
	"./sr.js": 284,
	"./ss": 286,
	"./ss.js": 286,
	"./sv": 287,
	"./sv.js": 287,
	"./sw": 288,
	"./sw.js": 288,
	"./ta": 289,
	"./ta.js": 289,
	"./te": 290,
	"./te.js": 290,
	"./tet": 291,
	"./tet.js": 291,
	"./tg": 292,
	"./tg.js": 292,
	"./th": 293,
	"./th.js": 293,
	"./tl-ph": 294,
	"./tl-ph.js": 294,
	"./tlh": 295,
	"./tlh.js": 295,
	"./tr": 296,
	"./tr.js": 296,
	"./tzl": 297,
	"./tzl.js": 297,
	"./tzm": 298,
	"./tzm-latn": 299,
	"./tzm-latn.js": 299,
	"./tzm.js": 298,
	"./ug-cn": 300,
	"./ug-cn.js": 300,
	"./uk": 301,
	"./uk.js": 301,
	"./ur": 302,
	"./ur.js": 302,
	"./uz": 303,
	"./uz-latn": 304,
	"./uz-latn.js": 304,
	"./uz.js": 303,
	"./vi": 305,
	"./vi.js": 305,
	"./x-pseudo": 306,
	"./x-pseudo.js": 306,
	"./yo": 307,
	"./yo.js": 307,
	"./zh-cn": 308,
	"./zh-cn.js": 308,
	"./zh-hk": 309,
	"./zh-hk.js": 309,
	"./zh-tw": 310,
	"./zh-tw.js": 310
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 421;

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//Providers

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, toast, _userdata) {
        var _this = this;
        this.events = events;
        this.toast = toast;
        this._userdata = _userdata;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            splashScreen.hide();
            _this._userdata.hasLoggedIn().then(function (hasLoggedIn) {
                //  this.enableMenu(true);
                _this.listenToLoginEvents();
                _this.validLogin();
            });
        });
    }
    MyApp.prototype.validLogin = function () {
        var _this = this;
        this._userdata.hasLoggedIn().then(function (log) {
            if (log) {
                _this._userdata.getUsername().then(function (user) {
                    _this._userdata.getUserInfo().then(function (info) {
                        console.log(info);
                        _this._userdata.login(user, info, info.password);
                    });
                });
            }
        });
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:logout', function () {
            _this.showMessage('Su sesión se ha cerrado!');
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
        });
        this.events.subscribe('user:login', function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
        });
    };
    MyApp.prototype.showMessage = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 3000
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FlowsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FlowsPipe = (function () {
    function FlowsPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    FlowsPipe.prototype.transform = function (value) {
        var color;
        switch (value) {
            case "A":
                color = "FlowRed";
                break;
            case "M":
                color = "FlowBlue";
                break;
            case "B":
                color = "FlowGreen";
                break;
        }
        console.log(color);
        return color;
    };
    FlowsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'flows',
        })
    ], FlowsPipe);
    return FlowsPipe;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImagePipe = (function () {
    function ImagePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ImagePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    ImagePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'image' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ImagePipe);
    return ImagePipe;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LupaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LupaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LupaPage = (function () {
    function LupaPage(navCtrl, navParams, _seven, load, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.load = load;
        this.viewCtrl = viewCtrl;
        this.all = false;
        this.all = navParams.get('all');
        console.log(this.all);
    }
    LupaPage.prototype.terminado = function () {
        console.log('termino');
    };
    LupaPage.prototype.ionViewDidLoad = function () {
    };
    LupaPage.prototype.loadClients = function (value) {
        var _this = this;
        if (value != "" && value.length > 2) {
            console.log(this.all);
            return this._seven.GetFaClien(this.value, this.all).then(function (data) {
                _this.clients = data;
                _this.initializeItems();
                console.log('cargado');
            }).catch(function (err) {
                // loading.dismiss();
            });
        }
    };
    LupaPage.prototype.closeLupa = function (client) {
        this.viewCtrl.dismiss(client);
    };
    LupaPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LupaPage.prototype.initializeItems = function () {
        this.clientesList = this.clients;
    };
    LupaPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío no filtra ndada
        if (q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.clientesList = this.clientesList.filter(function (v) { return v.PRO_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    LupaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lupa',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\lupa\lupa.html"*/'<!--\n\n  Generated template for the LupaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Clientes</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    [debounce]="500"\n\n    (ionChange)="loadClients($event.value)"\n\n    [showCancelButton]="true"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #clientsList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(client)" *ngFor="let client of clientesList">\n\n          <ion-label>\n\n          {{client.PRO_NOMB}}\n\n          </ion-label>\n\n          <ion-icon name=\'person\' item-start></ion-icon>\n\n        </ion-item>\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\lupa\lupa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], LupaPage);
    return LupaPage;
}());

//# sourceMappingURL=lupa.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InvitedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitedPage = (function () {
    function InvitedPage(navCtrl, navParams, _seven, viewCtrl, _user, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
        this._user = _user;
        this.alertCtrl = alertCtrl;
        this.activity = navParams.get('activity');
    }
    InvitedPage.prototype.ionViewDidLoad = function () {
        this.LoadUsers();
    };
    InvitedPage.prototype.LoadUsers = function () {
        var _this = this;
        this._seven.GetUsers(this.activity.USU_CODI).then(function (data) {
            console.log(data);
            _this.users = data.ObjResult;
            _this.initializeItems();
            // loading.dismiss();
        }).catch(function (err) {
            // loading.dismiss();
        });
    };
    InvitedPage.prototype.closeLupa = function (invited) {
        this.viewCtrl.dismiss(invited);
    };
    InvitedPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    InvitedPage.prototype.initializeItems = function () {
        this.usersList = this.users;
    };
    InvitedPage.prototype.getItems = function (q) {
        //Reseteo los items a su estado original
        this.initializeItems();
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.usersList = this.usersList.filter(function (v) { return v.Usu_Nomb.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    InvitedPage.prototype.AcitityInvited = function (invited) {
        var _this = this;
        // let newActivity :any;
        // newActivity.Act_Codi = this.activity.ACT_CODI;
        // newActivity.Emp_codi = this.activity.EMP_CODI;
        // newActivity.Pro_Cont = this.activity.PRO_CONT;
        // newActivity.Inv_Codi = invited.Usu_Codi;
        // newActivity.Usu_Codi = this.activity.USU_CODI;
        // newActivity.age_cont = this.activity.AGE_CONT;
        // newActivity.age_fini = this.activity.AGE_FINI;
        this.activity.invi_codi = invited.Usu_Codi;
        this._seven.InvitedActivity(this.activity).then(function (data) {
            var datos = data;
            if (datos.State) {
                _this._user.showAlert('El usuario ha sido invitado a la actividad', 'Listo!');
                return;
            }
            _this._user.showAlert('Error:' + datos.Message, 'Lo sentimos!');
        });
    };
    InvitedPage.prototype.ShowConfirmInvited = function (invited) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Invitar?',
            message: "Se invitar\u00E1 al usuario " + invited.Usu_Nomb + " a la actividad, est\u00E1 seguro?",
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                },
                {
                    text: 'Si',
                    handler: function () {
                        _this.AcitityInvited(invited);
                    }
                }
            ]
        });
        confirm.present();
    };
    InvitedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invited',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\invited\invited.html"*/'<!--\n\n  Generated template for the InvitedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Invitar</ion-title>\n\n    <ion-buttons end>\n\n      <button class="BigButton" ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #clientsList>\n\n      <ion-item-group>\n\n        <ion-item (click)="ShowConfirmInvited(user)" *ngFor="let user of usersList">\n\n          <ion-label>\n\n          {{user.Usu_Nomb}}\n\n          </ion-label>\n\n          <ion-icon name=\'person\' item-start></ion-icon>\n\n        </ion-item>\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\invited\invited.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], InvitedPage);
    return InvitedPage;
}());

//# sourceMappingURL=invited.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers

/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactDetailPage = (function () {
    function ContactDetailPage(navCtrl, navParams, viewCtrl, _user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._user = _user;
        this.contact = navParams.get('contact');
        console.log(this.contact);
    }
    ContactDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactDetailPage');
    };
    ContactDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ContactDetailPage.prototype.callContact = function (number) {
        this._user.callContact(number);
    };
    ContactDetailPage.prototype.openMail = function (email) {
        this._user.sendEmail(email);
        // window.open(`mailto:${email}`, '_system');
    };
    ContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact-detail\contact-detail.html"*/'<!--\n\n  Generated template for the ContactDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle Contacto</ion-title>\n\n    <ion-buttons end>\n\n      <button class="BigButton" ion-button icon-only (click)="close()">\n\n        <ion-icon name="close" ></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n       <ion-icon name="school" item-start></ion-icon>\n\n      <ion-label>Título</ion-label>\n\n      <ion-note item-end>\n\n       {{contact.ITE_TITU}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="person" item-start></ion-icon>\n\n      <ion-label>Nombre</ion-label>\n\n      <ion-note item-end>\n\n     {{contact.CON_NOMB}} {{contact.CON_APEL}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="ribbon" item-start></ion-icon>\n\n      <ion-label>Cargo</ion-label>\n\n      <ion-note item-end>\n\n       {{contact.CON_CARG}}\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-icon name="mail" item-start></ion-icon>\n\n      <ion-label>Email</ion-label>\n\n      <ion-note item-end (click)="openMail(contact.CON_EMAI)">\n\n       {{contact.CON_EMAI}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="call" item-start></ion-icon>\n\n      <ion-label>Teléfono</ion-label>\n\n      <ion-note item-end  *ngIf="contact.CON_TEL" (click)="callContact(contact.CON_TEL)">\n\n       {{contact.CON_TEL}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="phone-portrait" item-start></ion-icon>\n\n      <ion-label>Trabajo</ion-label>\n\n      <ion-note item-end *ngIf="contact.CON_CELU" (click)="callContact(contact.CON_CELU)">\n\n       {{contact.CON_CELU}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="phone-portrait" item-start></ion-icon>\n\n      <ion-label>Personal</ion-label>\n\n      <ion-note item-end *ngIf="contact.CON_TELT"  (click)="callContact(contact.CON_TELT)">\n\n       {{contact.CON_TELT}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n       <ion-icon name="pin" item-start></ion-icon>\n\n      <ion-label>Dirección</ion-label>\n\n      <ion-note item-end>\n\n       {{contact.CON_DIRE}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <!-- <ion-item (click)="openInvited()">\n\n      <ion-label>Invitar</ion-label>\n\n      <ion-note item-end *ngIf="invited">\n\n        {{invited.Usu_Nomb}}\n\n      </ion-note>\n\n     </ion-item> -->\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact-detail\contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var Globals = (function () {
    function Globals() {
    }
    Globals.CentralizationUrl = 'http://consultoria.digitalware.co/seven_crm/centralizacion/api/GnConex/GetConnections';
    Globals.tracks = [{ name: 'Alta', value: 'A', color: 'hight' }, { name: 'Media', value: 'M', color: 'medium' }, { name: 'Baja', value: '', color: 'low' }];
    return Globals;
}());

;
//# sourceMappingURL=global.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map