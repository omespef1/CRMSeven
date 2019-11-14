webpackJsonp([24],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_browser_tab__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_global__ = __webpack_require__(88);
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





/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserDataProvider = /** @class */ (function () {
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
    UserDataProvider.prototype.loginBiometric = function () {
        this.storage.set(this.HAS_LOGGED_IN, true);
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
        // this.storage.remove('username');
        // this.storage.remove('userinfo');
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_browser_tab__["a" /* BrowserTab */]])
    ], UserDataProvider);
    return UserDataProvider;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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
var ActivitiesSearchPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-activities-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities-search/activities-search.html"*/'<!--\n  Generated template for the ActivitiesSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Actividades</ion-title>\n    <ion-buttons end>\n      <button  class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar"\n    animated="true">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #AcivitiesList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(activity)" *ngFor="let activity of activitiesList">\n            <ion-icon item-start name="flash"></ion-icon>\n          <ion-label>\n          {{activity.ACT_NOMB}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities-search/activities-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ActivitiesSearchPage);
    return ActivitiesSearchPage;
}());

//# sourceMappingURL=activities-search.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event_new_event__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_detail_activity_detail__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employees_employees__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_seven_seven__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_digital_date_digital_date__ = __webpack_require__(319);
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
var ActivitiesPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/'<!--\n  Generated template for the ActivitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{viewTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  class="BigButton"(click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <calendar (click)="test()" [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n           (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          [noEventsLabel]="Agenda"\n          [showEventDetail]=\'false\'\n          step="30"\n          class="calendar">\n        </calendar>\n</ion-header>\n\n\n<ion-content>\n  <ion-item no-lines (click)="showUsers()">\n <ion-icon name="eye" item-start></ion-icon>\n <ion-label>Visualizar como</ion-label>\n <ion-note item-end *ngIf="replicated">\n   {{replicated.Usu_Nomb}}\n </ion-note>\n  </ion-item>\n  <ion-item (click)="removeReplicated()" *ngIf="replicated">\n    <ion-label>Cancelar visualización de Usuario</ion-label>\n    <ion-icon item-start name="remove-circle"></ion-icon>\n  </ion-item>\n        <ion-list #scheduleList>\n          <!-- <div *ngIf="todays.length>0">\n            <ion-item-divider>\n              <h2>{{daySelectedString}}</h2>\n            </ion-item-divider>\n          <ion-item-group>\n            <ion-item-sliding  *ngFor="let activityToday of todays">\n              <button ion-item (click)="openActivity(activityToday)">\n                <h3><b>{{activityToday.AGE_FINI | digitalDate}} - {{activityToday.AGE_FFIN | digitalDate}}</b></h3>\n                <h4>{{activityToday.PRO_NOMB}}</h4>\n               <p text-wrap>{{activityToday.CON_NOMB}} {{activityToday.CON_APEL}} - {{activityToday.AGE_ASUN}} - {{activityToday.ACT_NOMB}}</p>\n                <ion-icon name="clock" item-start></ion-icon>\n               </button>\n               <ion-item-options side="right">\n              <button ion-button color="danger" (click)="showConfirmReject(activityToday)" [disabled]="replicated!=undefined">Cancelar</button>\n          </ion-item-options>\n          <ion-item-options side="left">\n          <button ion-button color="primary" (click)="addCalendar(activityToday)" [disabled]="replicated!=undefined" icon-start>\n          <ion-icon name="calendar">\n          </ion-icon> Añadir al calendario\n        </button>\n     </ion-item-options>\n            </ion-item-sliding>\n          </ion-item-group>\n        </div> -->\n          <ion-list-header>\n            <h2>PRÓXIMAS</h2>\n          </ion-list-header>\n          <div *ngFor="let activity of inTimeDates">\n          <ion-item-divider>\n            <h3>{{activity.GrupoHora}}</h3>\n          </ion-item-divider>\n            <ion-item-group>\n              <ion-item-sliding  *ngFor="let agend of activity.Agenda">\n                <button ion-item (click)="openActivity(agend)">\n                  <h3><b>{{agend.AGE_FINI | digitalDate}} - {{agend.AGE_FFIN | digitalDate}}</b></h3>\n                  <h4>{{agend.PRO_NOMB}}</h4>\n                 <p text-wrap>{{agend.CON_NOMB}} {{agend.CON_APEL}} - {{agend.AGE_ASUN}} - {{agend.ACT_NOMB}}</p>\n                  <ion-icon name="clock" item-start></ion-icon>\n                 </button>\n                 <ion-item-options side="right">\n                <button ion-button color="danger" (click)="showConfirmReject(agend)" [disabled]="replicated!=undefined">Cancelar</button>\n            </ion-item-options>\n            <ion-item-options side="left">\n            <button ion-button color="primary" (click)="addCalendar(agend)" [disabled]="replicated!=undefined" icon-start>\n            <ion-icon name="calendar">\n            </ion-icon> Añadir al calendario\n          </button>\n       </ion-item-options>\n              </ion-item-sliding>\n            </ion-item-group>\n          </div>\n\n        </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_calendar__["a" /* Calendar */], __WEBPACK_IMPORTED_MODULE_9__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lupa_lupa__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activities_search_activities_search__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stages_search_stages_search__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invited_invited__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_search_contact_search__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terce_search_terce_search__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_seven_seven__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__client_points_client_points__ = __webpack_require__(58);
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
var NewEventPage = /** @class */ (function () {
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
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__lupa_lupa__["a" /* LupaPage */], { 'all': true });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.client = data;
            var details = _this.client.dprosList;
            if (details.length > 0) {
                _this.client.cdpros = details[0];
            }
            console.log(data);
        });
    };
    NewEventPage.prototype.OpenSearchDetail = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_11__client_points_client_points__["a" /* ClientPointsPage */], { details: this.client.dprosList });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.client.cdpros = data;
            _this.contact = undefined;
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
    NewEventPage.prototype.openLupaTerce = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_8__terce_search_terce_search__["a" /* TerceSearchPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.terce = data;
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
            this.newActivity.Ter_Codi = this.terce.ter_codi;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-new-event',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/'<!--\n  Generated template for the NewEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nueva actividad</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item text-wrap button (click)="openLupa()" detail-push tappable>\n      <ion-icon name="person" item-start></ion-icon>\n     <ion-label>Cliente</ion-label>\n     <ion-note class="note"  item-end *ngIf="client">\n     {{client.PRO_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item (click)="OpenSearchDetail()" *ngIf="client" detail-push tappable>\n        <ion-icon name="home" item-start></ion-icon>\n      <ion-label>Sucursal</ion-label>\n      <ion-note class="note" item-end *ngIf="client && client.cdpros">\n        {{client.cdpros.DPR_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item button (click)="openLupaActivities()" detail-push tappable>\n        <ion-icon name="link" item-start></ion-icon>\n     <ion-label>Actividad</ion-label>\n     <ion-note class="note" item-end *ngIf="activity">\n     {{activity.ACT_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item (click)="openContacts(client.cdpros.conpr)" detail-push tappable>\n        <ion-icon name="contact" item-start></ion-icon>\n      <ion-label>Contacto</ion-label>\n      <ion-note class="note" item-end *ngIf="contact">\n      {{contact.CON_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item button (click)="openLupaStages()" detail-push tappable>\n        <ion-icon name="git-network" item-start></ion-icon>\n     <ion-label>Etapa proceso</ion-label>\n     <ion-note class="note" item-end *ngIf="stage">\n     {{stage.ETA_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item button (click)="openLupaTerce()" detail-push tappable>\n        <ion-icon name="person" item-start></ion-icon>\n     <ion-label>Tercero Asociado</ion-label>\n     <ion-note class="note" item-end *ngIf="terce">\n     {{terce.ter_noco}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Digite el asunto aquí" [(ngModel)] ="newActivity.Age_Asun"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="alarm" item-start></ion-icon>\n      <ion-label>Inicio</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat ="HH:mm" min="06:00" [(ngModel)] = "newActivity.Age_Fech"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="alarm" item-start></ion-icon>\n      <ion-label>Horas</ion-label>\n      <ion-input  type="number" placeholder = "Horas" [(ngModel)] ="newActivity.Age_Dura"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="paper" item-start></ion-icon>\n      <ion-label>\n            Observaciones\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="observations"  placeholder="Ingrese sus observaciones aquí"></ion-textarea>\n    </ion-item>\n    <!-- <ion-item (click)="openInvited()">\n      <ion-label>Invitar</ion-label>\n      <ion-note item-end *ngIf="invited">\n        {{invited.Usu_Nomb}}\n      </ion-note>\n     </ion-item> -->\n    <ion-item>\n      <ion-label>Todo el día?</ion-label>\n    <ion-toggle [(ngModel)] = "event.allDay"></ion-toggle>\n    </ion-item>\n  </ion-list>\n<button ion-button full icon-left (click) = "CreateActivity()">\n  <ion-icon name ="checkmark"></ion-icon>Añadir evento\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StagesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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
var StagesSearchPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-stages-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/stages-search/stages-search.html"*/'<!--\n  Generated template for the StagesSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Etapas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #AcivitiesList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(stage)" *ngFor="let stage of stagesList">\n            <ion-icon item-start name="git-compare"></ion-icon>\n          <ion-label>\n          {{stage.ETA_NOMB}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/stages-search/stages-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], StagesSearchPage);
    return StagesSearchPage;
}());

//# sourceMappingURL=stages-search.js.map

/***/ }),

/***/ 117:
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
var ContactSearchPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact-search/contact-search.html"*/'<!--\n  Generated template for the Contact-search page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contactos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #contactList>\n      <ion-item-group>\n        <ion-item-sliding  *ngFor="let contact of contactsList">\n          <button ion-item (click)="closeLupa(contact)">\n            <ion-label>\n                {{contact.CON_NOMB}}\n            </ion-label>\n              <ion-icon name=\'person\' item-start></ion-icon>\n              <ion-note class="detalle" item-end>\n              <ion-label> {{contact.CON_CARG}}</ion-label>\n              </ion-note>\n          </button>\n        <ion-item-options side="right">\n           <button ion-button color="primary" (click)="seeDetail(contact)">Detalles</button>\n       </ion-item-options>\n     </ion-item-sliding>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact-search/contact-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ContactSearchPage);
    return ContactSearchPage;
}());

//# sourceMappingURL=contact-search.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerceSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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

/**
 * Generated class for the TerceSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TerceSearchPage = /** @class */ (function () {
    function TerceSearchPage(navCtrl, navParams, _seven, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
    }
    TerceSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StagesSearchPage');
    };
    TerceSearchPage.prototype.loadTerce = function (value) {
        var _this = this;
        //   let loading = this.loading.create({
        //   content:'Cargando...'
        // });
        // loading.present();
        if (value.length < 3)
            return;
        this._seven.GetGnTerce(value).then(function (data) {
            _this.terce = data;
            _this.initializeItems();
            // loading.dismiss();
        }).catch(function (err) {
            // loading.dismiss();
        });
    };
    TerceSearchPage.prototype.closeLupa = function (stage) {
        this.viewCtrl.dismiss(stage);
    };
    TerceSearchPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TerceSearchPage.prototype.initializeItems = function () {
        this.terceList = this.terce;
    };
    TerceSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-terce-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/terce-search/terce-search.html"*/'<!--\n  Generated template for the StagesSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Terceros</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="loadTerce($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(terce)" *ngFor="let terce of terceList">\n          <ion-icon name="person" item-start></ion-icon>\n          <ion-label>\n          {{terce.ter_noco}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/terce-search/terce-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], TerceSearchPage);
    return TerceSearchPage;
}());

//# sourceMappingURL=terce-search.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invited_invited__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_detail_client_detail__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__ = __webpack_require__(13);
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
var ActivityDetailPage = /** @class */ (function () {
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
    ActivityDetailPage.prototype.showTercero = function (third) {
        this._user.showAlert("Documento:" + third.TER_CODA, third.TER_NOCO);
    };
    ActivityDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-activity-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activity-detail/activity-detail.html"*/'<!--\n  Generated template for the ActivityDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{activity.AGE_ASUN}}</ion-title>\n    <ion-buttons end>\n      <button class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item-divider text-center>\n      DETALLES\n    </ion-item-divider>\n    <ion-item>\n      <ion-icon name="alarm" item-start></ion-icon>\n      <ion-label>Inicio</ion-label>\n      <ion-note item-end>\n      {{activity.AGE_FINI | digitalDate}}\n      </ion-note>\n     </ion-item>\n     <ion-item>\n     <ion-icon name="alarm" item-start></ion-icon>\n     <ion-label>Fin</ion-label>\n     <ion-note item-end>\n       {{activity.AGE_FFIN | digitalDate}}\n     </ion-note>\n    </ion-item>\n  <ion-item detail-push>\n      <ion-icon name="person" item-start></ion-icon>\n    <ion-label>Cliente</ion-label>\n    <ion-note item-end (click)="showClient(activity)">\n    {{activity.PRO_NOMB}}\n    </ion-note>\n   </ion-item>\n     <ion-item detail-push>\n       <ion-icon name="contact" item-start></ion-icon>\n     <ion-label>Contacto</ion-label>\n     <ion-note   item-end class="wrap-text"  (click)="showContact(activity)">\n     {{activity.CON_NOMB}}  {{activity.CON_APEL}}\n     </ion-note>\n    </ion-item>\n    <ion-item *ngIf="activity.TER_NOCO && activity.TER_CODI!=\'0\'" (click)="showTercero(activity)">\n         <ion-icon name="person" item-start></ion-icon>\n      <ion-label>Tercero asociado</ion-label>\n      <ion-note item-end>\n    {{activity.TER_NOCO}}\n      </ion-note>\n       <ion-icon name="information-circle" color="danger" item-end></ion-icon>\n     </ion-item>\n    <ion-item>\n         <ion-icon name="create" item-start></ion-icon>\n      <ion-label>Actividad</ion-label>\n      <ion-note item-end>\n    {{activity.ACT_NOMB}}\n      </ion-note>\n     </ion-item>\n     <ion-item *ngIf="invitedCount>0" (click)="ShowInvites()">\n     <ion-icon name="contacts" item-start></ion-icon>\n     Invitados\n     <ion-badge item-end>{{invitedCount}}</ion-badge>\n   </ion-item>\n     <ion-item>\n         <ion-icon name="create" item-start></ion-icon>\n       <ion-label>Asunto</ion-label>\n       <ion-note item-end>\n    {{activity.AGE_ASUN}}\n       </ion-note>\n      </ion-item>\n      <ion-item-divider text-center>\n        DILIGENCIAR\n      </ion-item-divider>\n      <ion-item (click)="showStates()">\n       <ion-icon name="information-circle" item-start></ion-icon>\n        <ion-label>\n          Estado\n        </ion-label>\n        <ion-note item-end>\n          {{activity.AGE_ESTA}}\n        </ion-note>\n      </ion-item>\n      <ion-item (click)="showResults()">\n          <ion-icon name="thumbs-up" item-start></ion-icon>\n\n        <ion-label>\n              Resultado\n        </ion-label>\n        <ion-note item-end>\n          {{activity.AGE_RESU}}\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="clipboard" item-start></ion-icon>\n        <ion-label>\n              Observaciones\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-textarea [(ngModel)]="activity.AGE_OBSE"  placeholder="Ingrese sus comentarios sobre la actividad"></ion-textarea>\n      </ion-item>\n      <!-- <ion-item button (click)="openInvited()" *ngIf="activity.USU_PLAN == activity.USU_EJEC">\n        <ion-label>Invitar</ion-label>\n        <ion-note item-end>\n          {{invited.Usu_Nomb}}\n        </ion-note>\n       </ion-item> -->\n\n</ion-list>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <button *ngIf="activity.EMP_CODI==\'1\'" ion-button block color="primary" (click)="openConsultoryFiles()">\n        <ion-icon name="clipboard"></ion-icon>&nbsp;Actas de Consultoría\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button block color="primary" (click)="openInvited()">\n        <ion-icon name="contacts"></ion-icon>&nbsp;Invitar\n      </button>\n    </ion-col>\n    <!-- <ion-col>\n      <button ion-button block color="danger" (click)="ActivityReject()">\n            <ion-icon name="remove-circle"></ion-icon>&nbsp;Cancelar\n      </button>\n    </ion-col> -->\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button block color="primary" (click)="UpdateAgend()" [disabled]="replicated!=undefined">\n      <ion-icon name="checkmark-circle" icon-left>\n      </ion-icon>&nbsp;Hecho\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activity-detail/activity-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActivityDetailPage);
    return ActivityDetailPage;
}());

//# sourceMappingURL=activity-detail.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(13);
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
var ClientDetailPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-client-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/client-detail/client-detail.html"*/'<!--\n  Generated template for the ClientDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle Cliente</ion-title>\n    <ion-buttons end>\n      <button class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n        <ion-icon name="person" item-start></ion-icon>\n      <ion-label>Nombre</ion-label>\n      <ion-note item-end>\n     {{client.CR_DPROS.DPR_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="call" item-start></ion-icon>\n      <ion-label>Teléfono</ion-label>\n      <ion-note item-end *ngIf="client.CR_DPROS.DPR_NTEL" (click)="callContact(client.CR_DPROS.DPR_NTEL)">\n       {{client.CR_DPROS.DPR_NTEL}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="mail" item-start></ion-icon>\n      <ion-label>Email</ion-label>\n      <ion-note item-end *ngIf="client.CR_DPROS.DPR_MAIL" (click)="openMail(client.CR_DPROS.DPR_MAIL)">\n       {{client.CR_DPROS.DPR_MAIL}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name="locate" item-start></ion-icon>\n      <ion-label>Direccion</ion-label>\n      <ion-note item-end>\n       {{client.CR_DPROS.DPR_DIRE}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="globe" item-start></ion-icon>\n      <ion-label>Página Web</ion-label>\n      <ion-note *ngIf="client.PRO_SWEB" item-end (click)="openUrl(client.PRO_SWEB)">\n       {{client.PRO_SWEB}}\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list #scheduleList>\n    <ion-list-header>\n      <h2>Anteriores</h2>\n    </ion-list-header>\n    <div *ngFor="let activity of LastActivities">\n    <ion-item-divider>\n      <h3>{{activity.GrupoHora}}</h3>\n    </ion-item-divider>\n      <ion-item-group>\n        <ion-item *ngFor="let agend of activity.Agenda">\n          <button ion-item detail-none>\n            <h3><b>{{agend.AGE_FINI | digitalDate}} - {{agend.AGE_FFIN | digitalDate}}</b></h3>\n            <h4>{{agend.PRO_NOMB}}</h4>\n           <p text-wrap>{{agend.CON_NOMB}} {{agend.CON_APEL}} - {{agend.AGE_ASUN}} - {{agend.ACT_NOMB}}</p>\n            <ion-icon name="clock" item-start></ion-icon>\n           </button>\n        </ion-item>\n      </ion-item-group>\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/client-detail/client-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */]])
    ], ClientDetailPage);
    return ClientDetailPage;
}());

//# sourceMappingURL=client-detail.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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
var EmployeesPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-employees',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/employees/employees.html"*/'<!--\n  Generated template for the EmployeesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Empleados</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n        <ion-item (click)="closeLupa(employee)"  *ngFor="let employee of employeesList">          \n            <ion-label>\n                {{employee.Usu_Nomb}}\n            </ion-label>\n              <ion-icon name=\'person\' item-start></ion-icon>\n     </ion-item>\n  \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/employees/employees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], EmployeesPage);
    return EmployeesPage;
}());

//# sourceMappingURL=employees.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttchmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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
var AttchmentsPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-attchments',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/attchments/attchments.html"*/'<!--\n  Generated template for the AttchmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adjuntos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  class="BigButton" (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item *ngFor="let attachment of attachments" (click)="OpenAttachment(attachment)">\n<ion-icon  name="attach" item-start></ion-icon>\n  {{attachment.adj_nomb}}\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/attchments/attchments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], AttchmentsPage);
    return AttchmentsPage;
}());

//# sourceMappingURL=attchments.js.map

/***/ }),

/***/ 123:
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
var BusinessPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-business',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/business/business.html"*/'<!--\n  Generated template for the BusinessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Seleccione su empresa</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(client)" *ngFor="let client of businessList">\n          <ion-label>\n          {{client.Emp_Nomb}}\n          </ion-label>\n          <ion-icon name=\'ios-home\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/business/business.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], BusinessPage);
    return BusinessPage;
}());

//# sourceMappingURL=business.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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
var ConexPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-conex',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/conex/conex.html"*/'<!--\n  Generated template for the ConexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Conexiones</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(conection)" *ngFor="let conection of connections">\n          <ion-label>\n          {{conection.CNX_NOMB}}\n          </ion-label>\n          <ion-icon name=\'wifi\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/conex/conex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ConexPage);
    return ConexPage;
}());

//# sourceMappingURL=conex.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_global__ = __webpack_require__(88);
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
var FlowsFilterPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-flows-filter',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows-filter/flows-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cerrar</button>\n    </ion-buttons>\n\n    <ion-title>\n    Filtrar por prioridad\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Aplicar</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Prioridades</ion-list-header>\n\n     <ion-item *ngFor="let track of tracks">\n      <span item-start class="dot"></span>\n     <ion-label>{{track.name}}</ion-label>\n     <ion-toggle [color]="track.color" ></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Restablecer filtros\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows-filter/flows-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], FlowsFilterPage);
    return FlowsFilterPage;
}());

//# sourceMappingURL=flows-filter.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_flows_flows_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__flows_filter_flows_filter__ = __webpack_require__(125);
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
var FlowsPage = /** @class */ (function () {
    function FlowsPage(navCtrl, _seven, toast, _user, modal, _flows) {
        this.navCtrl = navCtrl;
        this._seven = _seven;
        this.toast = toast;
        this._user = _user;
        this.modal = modal;
        this._flows = _flows;
        this.value = '';
        this.replicated = false;
    }
    FlowsPage.prototype.ionViewDidLoad = function () {
    };
    FlowsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
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
            _this._seven.getFlows(data, false).then(function (data) {
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
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__flows_filter_flows_filter__["a" /* FlowsFilterPage */], this.flowList);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.flowList = data;
            }
        });
    };
    FlowsPage.prototype.flowAprobment = function (flow) {
        var _this = this;
        this._flows.FlowEndTracing(flow).then(function () {
            _this.getFlows();
        });
        // this._seven.ApproveFlow(flow).then(data=>{
        //   let response:any = data;
        //   if(response.State){
        //    this._user.showToast('El flujo ha sido aprobado!')
        //       this.ionViewDidLoad();
        //    return;
        //  }
        //    this.getFlows();
        //    this._user.showToast(response.Message)
        // })
    };
    FlowsPage.prototype.flowReject = function (flow) {
        var _this = this;
        this._flows.flowReject(flow).then(function () {
            _this.getFlows();
        });
        // this._seven.RejectFlow(flow).then(data=>{
        //   let response:any = data;
        //   if(response.State){
        //     this._user.showToast('El flujo ha sido rechazado!')
        //       this.getFlows();
        //      return;
        //   }
        //   this._user.showToast(response.Message)
        // })
    };
    FlowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-flows',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/'<!--\n  Generated template for the FlowsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Flujos\n    </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content>\n  </ion-refresher-content>\n  </ion-refresher>\n  <ion-list #scheduleList no-lines>\n      <ion-item-group no-border>\n        <ion-item-sliding #slidingItem  class="flujo" [class]= "flow.SEG_PRIO | flows" *ngFor="let flow of flowList">\n          <button ion-item (click)="goDetailsFlow(flow)" [disabled]="replicated">\n        <h3>Caso {{flow.CAS_CONT}}</h3>\n        <p>\n        {{flow.CAS_DESC}}\n        </p>\n      </button>\n      <ion-item-options side="right">\n     <button ion-button color="danger" (click)="flowReject(flow)" [disabled]="replicated" >Rechazar</button>\n </ion-item-options>\n <ion-item-options side="left">\n<button ion-button color="primary" (click)="flowAprobment(flow)" [disabled]="replicated">Aprobar</button>\n</ion-item-options>\n        </ion-item-sliding>\n\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_flows_flows_provider__["a" /* FlowsProvider */]])
    ], FlowsPage);
    return FlowsPage;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_flows_flows_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_attchments_attchments__ = __webpack_require__(122);
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
var FlowDetailPage = /** @class */ (function () {
    function FlowDetailPage(navCtrl, navParams, _seven, alertCtrl, viewCtrl, modal, _flow) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this._flow = _flow;
        this.flow = navParams.get('flow');
    }
    FlowDetailPage.prototype.ionViewDidLoad = function () {
        this.GetAttachmentCount();
    };
    FlowDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FlowDetailPage.prototype.GetAttachmentCount = function () {
        var _this = this;
        this._seven.GetAttachmentCount(this.flow.CAS_CONT).then(function (data) {
            _this.attchmentCount = data;
        });
    };
    FlowDetailPage.prototype.OpenAttchments = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__pages_attchments_attchments__["a" /* AttchmentsPage */], { flow: this.flow });
        modal.present();
    };
    FlowDetailPage.prototype.flowNextTracing = function () {
        var _this = this;
        this._flow.FlowEndTracing(this.flow).then(function () {
            _this.close();
        });
        // this._flow.ValidTypeStage(this.flow).then(()=>{
        // this.close();
    };
    FlowDetailPage.prototype.flowReject = function () {
        var _this = this;
        this._flow.flowReject(this.flow).then(function () {
            _this.close();
        });
    };
    FlowDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-flow-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/'<!--\n  Generated template for the FlowDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Caso {{flow.CAS_CONT}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  class="BigButton" (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-icon name ="podium" item-start></ion-icon>\n     <ion-label>Prioridad</ion-label>\n     <ion-note item-end>\n    {{flow.SEG_PRIO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name ="eye" item-start></ion-icon>\n     <ion-label>Seguimiento</ion-label>\n     <ion-note item-end>\n  {{flow.SEG_CONT}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name ="clipboard" item-start></ion-icon>\n     <ion-label>Asunto</ion-label>\n     <ion-note item-end>\n     {{flow.SEG_SUBJ}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name ="person" item-start></ion-icon>\n     <ion-label>Quién registra</ion-label>\n     <ion-note item-end>\n      {{flow.USU_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name ="person" item-start></ion-icon>\n     <ion-label>Tercero Asociado</ion-label>\n     <ion-note item-end>\n      {{flow.TER_NOCO}}\n     </ion-note>\n    </ion-item>\n    <ion-item (click)="OpenAttchments()" *ngIf="attchmentCount>0">\n  <ion-icon name="attach" item-start></ion-icon>\n  Adjuntos\n  <ion-badge item-end>{{attchmentCount}}</ion-badge>\n</ion-item>\n    <ion-item>\n        <ion-icon name ="person" item-start></ion-icon>\n     <ion-label>Solicitado para</ion-label>\n     <ion-note item-end>\n    {{flow.SOLICITADO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n   <ion-icon name ="alarm" item-start></ion-icon>\n     <ion-label>Recibido</ion-label>\n     <ion-note item-end>\n   {{flow.SEG_FREC| date: \'dd/MM/yyyy\' }} &nbsp;{{flow.SEG_HREC | date: \'h:mm:ss a\'}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n        <ion-icon name ="alarm" item-start></ion-icon>\n     <ion-label>Límite</ion-label>\n     <ion-note item-end>\n     {{flow.SEG_FLIM | date: \'dd/MM/yyyy\'}} &nbsp;{{flow.SEG_HLIM | date: \'h:mm:ss a\'}}\n     </ion-note>\n    </ion-item>\n    <ion-item *ngIf="flow.ADICIO">\n        <ion-icon name ="twitch" item-start></ion-icon>\n     <ion-label>Datos adicionales</ion-label>\n     <ion-note item-end>\n       {{flow.ADICIO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n    <ion-icon name ="create" item-start></ion-icon>\n    <ion-label>Descripción</ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n        <p ion-text text-wrap>  {{flow.CAS_DESC}}</p>\n    </ion-item>\n    <ion-item>\n        <ion-icon name ="clipboard" item-start></ion-icon>\n    <ion-label>Comentarios para el ejecutor</ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n        <p text-wrap>    {{flow.SEG_COME}}</p>\n    </ion-item>\n    <ion-item>\n        <ion-icon name ="create" item-start></ion-icon>\n    <ion-label>Comentarios para el segundo ejecutor</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="flow.COMENTARIOS"  placeholder="Ingrese sus comentarios aquí"></ion-textarea>\n    </ion-item>\n  </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button block color="primary" (click)="flowNextTracing()">\n              <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Aprobar\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button block color="danger" (click)="flowReject()">\n                  <ion-icon name="remove-circle"></ion-icon>&nbsp;Rechazar\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_flows_flows_provider__["a" /* FlowsProvider */]])
    ], FlowDetailPage);
    return FlowDetailPage;
}());

// flowAprobment(){
//  this._seven.ApproveFlow(this.flow).then(data=>{
//    console.log(data);
//    let response:any = data;
//    if(response.State){
//     this.showAlert('El flujo ha sido aprobado!','Listo!')
//      this.close()
//     return;
//   }
//   this.showAlert(response.Message,'Lo sentimos!')
//  })
//
// }
// showAlert(mensaje:string, titulo:string) {
// let alert = this.alertCtrl.create({
//   title: titulo,
//   subTitle: mensaje,
//   buttons: ['OK']
// });
// alert.present();
// }
// flowReject(){
//   this._seven.RejectFlow(this.flow).then(data=>{
//     let response:any = data;
//     if(response.State){
//        this.showAlert('El flujo ha sido rechazado!','Listo!')
//        this.close();
//        return;
//     }
//     this.showAlert('Ups!Ocurrió un error!','Lo sentimos!')
//   })
// }
//  showRadioActions() {
//    var promise = new Promise((resolve,reject)=>{
//      let countActions:any[] = this.flow.ACCIONES;
//      if(countActions.length==0)
//        resolve(' ');
//      if(countActions.length==1)
//        resolve(countActions[0].ACC_CONT);
//      let alert = this.alertCtrl.create();
//      alert.setTitle('Acciones');
//      for(let action of this.flow.ACCIONES){
//        alert.addInput({
//          type: 'radio',
//          label: action.ACC_NOMB,
//          value: action.ACC_CONT,
//        });
//      }
//      alert.addButton({
//        text:'Cancelar',
//        handler: data=>{
//          reject();
//        }
//      });
//      alert.addButton({
//        text: 'OK',
//        handler: (data:any) => {
//          resolve(data.ACC_CONT);
//        }
//      });
//      alert.present();
//    })
//    return promise;
// }
// FlowEndTracing(){
//   this._seven.GetStagesFlow(this.flow).then((data:any)=>{
//      if(data.State){
//          this.flow.ACCIONES = data.ObjResult;
//          this.showRadioActions().then(data=>{
//            this.flow.ACC_CONT = data;
//            this._seven.GetExecutionTypesFlow(this.flow).then((executors:any)=>{
//              if(executors.State){
//                  let executionUsers :any[] = executors.execution;
//                  let message:string = 'Esta etapa requiere que el ejecutor sea seleccionado ahora';
//                   this.showExecutionUsers('Selecciones en ejecución',message,executionUsers).then((data:any)=>{
//                     this.flow.SelExec = data.Usu_Codi;
//                     let tracingUsers :any[] = executors.tracing;
//                     this.showExecutionUsers('Selecciones en ejecución para seguimiento',message,tracingUsers).then((data:any)=>{
//                       this.flow.SelExecSeg = data.Usu_Codi;
//                     })
//              })
//            }
//            })
//          })
//      }
//   })
//  }
// showExecutionUsers(title:string,subTitle:string,options:any){
//   let promise = new Promise((resolve,reject)=>{
//     if(options.length==0)
//      resolve('');
//      if(options.lenght==1)
//        resolve(options[0].Usu_Codi);
//     let alert = this.alertCtrl.create();
//     alert.setTitle(title);
//     alert.setSubTitle(subTitle);
//     for(let executionUser of options){
//       alert.addInput({
//         type: 'radio',
//         label: options.Usu_Nomb,
//         value: options.Usu_Codi,
//       });
//     };
//     alert.addButton({
//       text:'Cancelar',
//       handler: data=>{
//         reject();
//       }
//     });
//     alert.addButton({
//       text: 'OK',
//       handler: data => {
//         resolve(data.Usu_Codi);
//       }
//     });
//     alert.present();
//   })
//   return promise;
//
// }
//# sourceMappingURL=flow-detail.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conex_conex__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_business_business__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_seven_seven__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//providers


//plugins

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
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
        this.passwordIcon = "eye";
        this.passwordType = "password";
        this.version = Date.now();
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.verifyConnections()];
                    case 1:
                        _a.sent();
                        this.GetAccessTouchID();
                        return [2 /*return*/];
                }
            });
        });
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
                _this.keychainTouchId.isAvailable().then(function (type) {
                    console.log('tipo de autenticación es ');
                    console.log(type);
                    _this.showIconBiometric(type);
                });
                _this.keychainTouchId.verify("password", "Ingrese su huella dactilar para ingresar").then(function (pass) {
                    _this._user.loginBiometric();
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
            this.keychainTouchId.isAvailable().then(function (type) {
                console.log('tipo de autenticación es ');
                console.log(type);
                _this.showIconBiometric(type);
                _this.keychainTouchId.has("password").catch(function (err) {
                    console.log('no hay huella');
                    _this.SetAccessTouchID();
                });
            });
        }
    };
    LoginPage.prototype.showIconBiometric = function (biometricType) {
        if (biometricType == 'face')
            this.faceID = true;
        else
            this.touchID = true;
    };
    LoginPage.prototype.verifyConnections = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._user.getSavedConnections()];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__conex_conex__["a" /* ConexPage */]);
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
                            this._user.getBackground().then(function (data) {
                                _this.background = data;
                            });
                            this._user.getLogo().then(function (data) {
                                _this.logo = data;
                            });
                            this._user.getLink().then(function (data) {
                                _this.url = data;
                            });
                            this._user.getSavedConnections().then(function (data) {
                                _this._user.setSavedConnections(data);
                            });
                            this._user.GetBusiness().then(function (data) {
                                _this.businessList = data;
                            });
                        }
                        return [2 /*return*/];
                }
            });
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
    LoginPage.prototype.showKey = function () {
        //Controla el icono de visualizar contraseña
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/login/login.html"*/'<ion-content [style.background-color]="background">\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<div class="logodiv">\n					<img class="logoM" [src]="logo" (click)="openUrl()" />\n				</div>\n				<h1>CRM</h1>\n			</ion-col>\n\n		</ion-row>\n		<form #registerForm="ngForm" class="loginForm">\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label>\n							<ion-icon name="ios-person"></ion-icon>\n						</ion-label>\n						<ion-input type="text" placeholder="Usuario" name="email" [(ngModel)]="login.username" required></ion-input>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label>\n							<ion-icon name="ios-lock"></ion-icon>\n						</ion-label>\n						<ion-input #password [type]="passwordType" placeholder="Contraseña" name="password" [(ngModel)]="login.password" required></ion-input>\n						<button type="button" ion-button icon-only clear item-right tappable (tap)="showKey()">\n							<ion-icon item-end [name]="passwordIcon"></ion-icon>\n						</button>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<button ion-button class="submit-btn" full (click)="onLogin()" [disabled]="!registerForm.form.valid">\n						<ion-icon name="log-in"></ion-icon>&nbsp;Ingresar\n					</button>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<button *ngIf="businessList && businessList.length>1" ion-button class="submit-btn" full (click)="changeBusiness()">\n						<ion-icon name="undo"></ion-icon>&nbsp;Cambiar empresa\n					</button>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col class="loginCol">\n					<div class="logodiv">\n						<img class="logoM" src="assets/imgs/logoseven.png" />\n					</div>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col text-center>\n					<div class="fingerprint" button tappable (click)="GetAccessTouchID()">\n						<img *ngIf="touchID" src="assets/imgs/fingerprint.svg">\n						<img *ngIf="faceID" src="assets/imgs/faceid.svg">\n					</div>\n\n				</ion-col>\n			</ion-row>\n		</form>\n	</ion-grid>\n</ion-content>\n<ion-footer text-center>\n	<p>SEVEN ERP©1992-{{version | date: \'yyyy\'}} DigitalWare</p>\n	<p>Versión 19.0.11.0</p>\n</ion-footer>'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lupa_lupa__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_points_client_points__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__ = __webpack_require__(59);
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
var SearchPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Consultar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)="OpenSearchClient()">\n      <ion-icon name ="man" item-start>\n      </ion-icon>\n     <ion-label>Cliente</ion-label>\n     <ion-note class="note"  item-end *ngIf="client">\n     {{client.PRO_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item (click)="OpenSearchDetail()" *ngIf="client">\n      <ion-icon name ="home" item-start>\n      </ion-icon>\n     <ion-label>Sucursal</ion-label>\n     <ion-note class="note"  item-end *ngIf="client && client.cdpros">\n     {{client.cdpros.DPR_NOMB}}\n     </ion-note>\n    </ion-item>\n    <div *ngIf="client && contactList">\n\n    <ion-item-divider>\n      Contactos\n    </ion-item-divider>\n\n      <ion-searchbar\n      [(ngModel)]="value"\n      (ionChange)="getItems($event.value)"\n      [showCancelButton]="shouldShowCancel"\n      placeholder="Buscar contactos">\n    </ion-searchbar>\n\n     <ion-item *ngFor="let contact of contactList" (click)="openContact(contact)">\n       <ion-icon item-start name="person"></ion-icon>\n       <ion-label>{{contact.CON_NOMB}}</ion-label>\n     </ion-item>\n   </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SevenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_global__ = __webpack_require__(88);
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
var SevenProvider = /** @class */ (function () {
    function SevenProvider(http, load, _userdata) {
        this.http = http;
        this.load = load;
        this._userdata = _userdata;
        console.log('Hello SevenProvider Provider');
    }
    SevenProvider.prototype.getFlows = function (usu_codi, showLoad) {
        var _this = this;
        if (showLoad === void 0) { showLoad = true; }
        return this._userdata.getReplicated().then(function (data) {
            console.log(data);
            if (data) {
                return _this.getData("Flujos/FlujosAdm?usu_codi=" + data.Usu_Codi, showLoad);
            }
            else {
                return _this.getData("Flujos/FlujosAdm?usu_codi=" + usu_codi, showLoad);
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
    SevenProvider.prototype.GetExecutionUsersMultiStage = function (flow) {
        return this.postData(flow, 'Flujos/GetExecutionUsersMultiStage');
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
    SevenProvider.prototype.GetGnTerce = function (value) {
        return this.getData("GnTerce/GetGnTerce?filter=" + value);
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
        return this.postData(flow, 'Flujos/GetExecutionUsers');
    };
    SevenProvider.prototype.GetStagesFlow = function (flow) {
        return this.getData("Flujos/GetAcciones?flu_cont=" + flow.FLU_CONT + "&eta_cont=" + flow.ETA_CONT);
    };
    SevenProvider.prototype.getData = function (apiAction, showLoad) {
        // Globals.ClientUrl ='http://132.147.157.140/SevenCRMApi/api/';
        // Globals.ClientUrl ='http://localhost/SevenCRMApi/api/';
        var _this = this;
        if (showLoad === void 0) { showLoad = true; }
        var load = this.load.create({
            content: 'cargando...'
        });
        if (showLoad)
            load.present();
        return new Promise(function (resolve) {
            _this._userdata.GetBusinessClient().then(function (data) {
                _this.businessClient = data;
                if (data == null)
                    _this.businessClient = 0;
                console.log(apiAction);
                console.log(__WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl);
                var uri = "" + __WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl + apiAction + "&emp_codi=" + _this.businessClient.Emp_Codi;
                //  let uri =`${Globals.ClientUrl}${apiAction}&emp_codi=${1}`;
                console.log(uri);
                _this.http.get(uri).subscribe(function (data) {
                    load.dismiss();
                    resolve(data);
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
        //Globals.ClientUrl ='http://132.147.157.140/SevenCRMApi/api/';
        //  Globals.ClientUrl ='http://localhost/SevenCRMApi/api/';
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], SevenProvider);
    return SevenProvider;
}());

//# sourceMappingURL=seven.js.map

/***/ }),

/***/ 130:
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
var SettingsPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list no-border>\n    <ion-list-header>\n      Perfil\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar item-start *ngIf="user.Usu_Foto">\n      <img [src]="\'data:image/jpg;base64,\'+user.Usu_Foto" />\n    </ion-avatar>\n    <ion-note item-end>\n     {{user.Usu_Nomb}}\n    </ion-note>\n    </ion-item>\n    <ion-list-header>\n      Soporte\n    </ion-list-header>\n    <ion-item (click)="sendMail(\'sevensoporte@digitalware.com.co\')">\n      <ion-icon name ="mail" item-start>\n      </ion-icon>\n    Enviar correo a soporte\n      <!-- <ion-note (click)="sendMail(sevensoporte@digitalware.com.co)">\n        sevensoporte@digitalware.com.co\n      </ion-note> -->\n    </ion-item>\n    <ion-list-header>\n      Cuenta\n    </ion-list-header>\n    <!-- <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Notificaciones\n      </ion-label>\n      <ion-icon name=\'notifications\' item-start></ion-icon>\n    </ion-item> -->\n    <ion-item>\n      <ion-label>\n      Almacenamiento\n      </ion-label>\n      <ion-icon name=\'trash\' item-start></ion-icon>\n      <ion-note item-end (click)="remove()">\n     Borrar datos de usuario\n      </ion-note>\n    </ion-item>\n    <ion-item (click)="logOut()">\n      <ion-icon name=\'log-out\' item-start></ion-icon>\n      Salir\n      <ion-note item-end>\n      Cerrar sesión\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 142:
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
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activities-search/activities-search.module": [
		462,
		23
	],
	"../pages/activities/activities.module": [
		463,
		22
	],
	"../pages/activity-detail/activity-detail.module": [
		464,
		21
	],
	"../pages/attchments/attchments.module": [
		465,
		20
	],
	"../pages/business/business.module": [
		466,
		19
	],
	"../pages/client-detail/client-detail.module": [
		467,
		18
	],
	"../pages/client-points/client-points.module": [
		468,
		17
	],
	"../pages/conex/conex.module": [
		469,
		16
	],
	"../pages/contact-detail/contact-detail.module": [
		470,
		15
	],
	"../pages/contact-search/contact-search.module": [
		471,
		14
	],
	"../pages/email/email.module": [
		472,
		13
	],
	"../pages/employees/employees.module": [
		473,
		12
	],
	"../pages/flow-detail/flow-detail.module": [
		477,
		11
	],
	"../pages/flows-filter/flows-filter.module": [
		474,
		10
	],
	"../pages/flows/flows.module": [
		475,
		9
	],
	"../pages/invited/invited.module": [
		476,
		8
	],
	"../pages/login/login.module": [
		478,
		7
	],
	"../pages/lupa/lupa.module": [
		479,
		6
	],
	"../pages/new-event/new-event.module": [
		482,
		5
	],
	"../pages/search/search.module": [
		480,
		4
	],
	"../pages/settings/settings.module": [
		481,
		3
	],
	"../pages/stages-search/stages-search.module": [
		484,
		2
	],
	"../pages/terce-search/terce-search.module": [
		483,
		1
	],
	"../pages/touch-id/touch-id.module": [
		485,
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
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
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
var DigitalDatePipe = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'digitalDate',
        })
    ], DigitalDatePipe);
    return DigitalDatePipe;
}());

//# sourceMappingURL=digital-date.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralProvider; });
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


/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GeneralProvider = /** @class */ (function () {
    function GeneralProvider(_toastCtrl, alertCtrl) {
        this._toastCtrl = _toastCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello GeneralProvider Provider');
    }
    GeneralProvider.prototype.showToast = function (mensaje) {
        var toast = this._toastCtrl.create({
            message: mensaje,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    GeneralProvider.prototype.showAlert = function (mensaje, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    GeneralProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GeneralProvider);
    return GeneralProvider;
}());

//# sourceMappingURL=general-provider.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flows_flows__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__activities_activities__["a" /* ActivitiesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__flows_flows__["a" /* FlowsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Flujos" tabIcon="git-network"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Buscar" tabIcon="search"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Ajustes" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 363:
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
var EmailPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/email/email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Enviar Email</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Para" [(ngModel)] ="to"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Copia" [(ngModel)] ="cc"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Asunto" [(ngModel)] ="subject"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea max="500"  type="text" placeholder  = "Mensaje" [(ngModel)] ="body"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <button ion-button icon-left full (click)="sendEmail()">\n    <ion-icon name="mail"></ion-icon> Enviar\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 364:
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
var TouchIdPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-touch-id',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/touch-id/touch-id.html"*/'<!--\n  Generated template for the TouchIdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <div  class="fingerprint">\n        <img src="assets/imgs/fingerprint.svg">\n      </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label text-wrap>\n          Tu dispositivo posee lector de huellas.Mediante esta autenticación podrás ingresar a la aplicación directamente.\n          Deseas utilizar este método de acceso?\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col>\n        <button ion-button block color="danger" icon-left (click)="remove()">\n            <ion-icon name="alarm"></ion-icon>\n          No\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="primary" icon-left close()>\n          <ion-icon name="checkmark-circle"></ion-icon>\n          Listo\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/touch-id/touch-id.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], TouchIdPage);
    return TouchIdPage;
}());

//# sourceMappingURL=touch-id.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_calendar__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_flows_flows__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_flow_detail_flow_detail__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_conex_conex__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_touch_id_touch_id__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_contact_detail_contact_detail__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_client_detail_client_detail__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_email_email__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_flows_filter_flows_filter__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_contact_search_contact_search__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_search_search__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_client_points_client_points__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_employees_employees__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_attchments_attchments__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_business_business__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_terce_search_terce_search__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_seven_seven__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_user_data_user_data__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_flows_flows__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_digital_date_digital_date__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pipes_image_image__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_keychain_touch_id__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_call_number__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_email_composer__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_browser_tab__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_flows_flows_provider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_general_general_provider__ = __webpack_require__(320);
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






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
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
                __WEBPACK_IMPORTED_MODULE_40__pipes_flows_flows__["a" /* FlowsPipe */],
                __WEBPACK_IMPORTED_MODULE_41__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */],
                __WEBPACK_IMPORTED_MODULE_42__pipes_image_image__["a" /* ImagePipe */],
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
                __WEBPACK_IMPORTED_MODULE_36__pages_business_business__["a" /* BusinessPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terce_search_terce_search__["a" /* TerceSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            // These options are available in ionic-angular@2.0.0-beta.2 and up.
                            scrollAssist: true,
                            autoFocusAssist: true,
                            statusbarPadding: true,
                            scrollPadding: true
                        }
                        // http://ionicframework.com/docs/v2/api/config/Config/)
                    }
                }, {
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
                        { loadChildren: '../pages/flows-filter/flows-filter.module#FlowsFilterPageModule', name: 'FlowsFilterPage', segment: 'flows-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows/flows.module#FlowsPageModule', name: 'FlowsPage', segment: 'flows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invited/invited.module#InvitedPageModule', name: 'InvitedPage', segment: 'invited', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flow-detail/flow-detail.module#FlowDetailPageModule', name: 'FlowDetailPage', segment: 'flow-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lupa/lupa.module#LupaPageModule', name: 'LupaPage', segment: 'lupa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terce-search/terce-search.module#TerceSearchPageModule', name: 'TerceSearchPage', segment: 'terce-search', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_36__pages_business_business__["a" /* BusinessPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_terce_search_terce_search__["a" /* TerceSearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_38__providers_seven_seven__["a" /* SevenProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_41__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */],
                __WEBPACK_IMPORTED_MODULE_47__providers_flows_flows_provider__["a" /* FlowsProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_general_general_provider__["a" /* GeneralProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 191,
	"./af.js": 191,
	"./ar": 192,
	"./ar-dz": 193,
	"./ar-dz.js": 193,
	"./ar-kw": 194,
	"./ar-kw.js": 194,
	"./ar-ly": 195,
	"./ar-ly.js": 195,
	"./ar-ma": 196,
	"./ar-ma.js": 196,
	"./ar-sa": 197,
	"./ar-sa.js": 197,
	"./ar-tn": 198,
	"./ar-tn.js": 198,
	"./ar.js": 192,
	"./az": 199,
	"./az.js": 199,
	"./be": 200,
	"./be.js": 200,
	"./bg": 201,
	"./bg.js": 201,
	"./bm": 202,
	"./bm.js": 202,
	"./bn": 203,
	"./bn.js": 203,
	"./bo": 204,
	"./bo.js": 204,
	"./br": 205,
	"./br.js": 205,
	"./bs": 206,
	"./bs.js": 206,
	"./ca": 207,
	"./ca.js": 207,
	"./cs": 208,
	"./cs.js": 208,
	"./cv": 209,
	"./cv.js": 209,
	"./cy": 210,
	"./cy.js": 210,
	"./da": 211,
	"./da.js": 211,
	"./de": 212,
	"./de-at": 213,
	"./de-at.js": 213,
	"./de-ch": 214,
	"./de-ch.js": 214,
	"./de.js": 212,
	"./dv": 215,
	"./dv.js": 215,
	"./el": 216,
	"./el.js": 216,
	"./en-SG": 217,
	"./en-SG.js": 217,
	"./en-au": 218,
	"./en-au.js": 218,
	"./en-ca": 219,
	"./en-ca.js": 219,
	"./en-gb": 220,
	"./en-gb.js": 220,
	"./en-ie": 221,
	"./en-ie.js": 221,
	"./en-il": 222,
	"./en-il.js": 222,
	"./en-nz": 223,
	"./en-nz.js": 223,
	"./eo": 224,
	"./eo.js": 224,
	"./es": 225,
	"./es-do": 226,
	"./es-do.js": 226,
	"./es-us": 227,
	"./es-us.js": 227,
	"./es.js": 225,
	"./et": 228,
	"./et.js": 228,
	"./eu": 229,
	"./eu.js": 229,
	"./fa": 230,
	"./fa.js": 230,
	"./fi": 231,
	"./fi.js": 231,
	"./fo": 232,
	"./fo.js": 232,
	"./fr": 233,
	"./fr-ca": 234,
	"./fr-ca.js": 234,
	"./fr-ch": 235,
	"./fr-ch.js": 235,
	"./fr.js": 233,
	"./fy": 236,
	"./fy.js": 236,
	"./ga": 237,
	"./ga.js": 237,
	"./gd": 238,
	"./gd.js": 238,
	"./gl": 239,
	"./gl.js": 239,
	"./gom-latn": 240,
	"./gom-latn.js": 240,
	"./gu": 241,
	"./gu.js": 241,
	"./he": 242,
	"./he.js": 242,
	"./hi": 243,
	"./hi.js": 243,
	"./hr": 244,
	"./hr.js": 244,
	"./hu": 245,
	"./hu.js": 245,
	"./hy-am": 246,
	"./hy-am.js": 246,
	"./id": 247,
	"./id.js": 247,
	"./is": 248,
	"./is.js": 248,
	"./it": 249,
	"./it-ch": 250,
	"./it-ch.js": 250,
	"./it.js": 249,
	"./ja": 251,
	"./ja.js": 251,
	"./jv": 252,
	"./jv.js": 252,
	"./ka": 253,
	"./ka.js": 253,
	"./kk": 254,
	"./kk.js": 254,
	"./km": 255,
	"./km.js": 255,
	"./kn": 256,
	"./kn.js": 256,
	"./ko": 257,
	"./ko.js": 257,
	"./ku": 258,
	"./ku.js": 258,
	"./ky": 259,
	"./ky.js": 259,
	"./lb": 260,
	"./lb.js": 260,
	"./lo": 261,
	"./lo.js": 261,
	"./lt": 262,
	"./lt.js": 262,
	"./lv": 263,
	"./lv.js": 263,
	"./me": 264,
	"./me.js": 264,
	"./mi": 265,
	"./mi.js": 265,
	"./mk": 266,
	"./mk.js": 266,
	"./ml": 267,
	"./ml.js": 267,
	"./mn": 268,
	"./mn.js": 268,
	"./mr": 269,
	"./mr.js": 269,
	"./ms": 270,
	"./ms-my": 271,
	"./ms-my.js": 271,
	"./ms.js": 270,
	"./mt": 272,
	"./mt.js": 272,
	"./my": 273,
	"./my.js": 273,
	"./nb": 274,
	"./nb.js": 274,
	"./ne": 275,
	"./ne.js": 275,
	"./nl": 276,
	"./nl-be": 277,
	"./nl-be.js": 277,
	"./nl.js": 276,
	"./nn": 278,
	"./nn.js": 278,
	"./pa-in": 279,
	"./pa-in.js": 279,
	"./pl": 280,
	"./pl.js": 280,
	"./pt": 281,
	"./pt-br": 282,
	"./pt-br.js": 282,
	"./pt.js": 281,
	"./ro": 283,
	"./ro.js": 283,
	"./ru": 284,
	"./ru.js": 284,
	"./sd": 285,
	"./sd.js": 285,
	"./se": 286,
	"./se.js": 286,
	"./si": 287,
	"./si.js": 287,
	"./sk": 288,
	"./sk.js": 288,
	"./sl": 289,
	"./sl.js": 289,
	"./sq": 290,
	"./sq.js": 290,
	"./sr": 291,
	"./sr-cyrl": 292,
	"./sr-cyrl.js": 292,
	"./sr.js": 291,
	"./ss": 293,
	"./ss.js": 293,
	"./sv": 294,
	"./sv.js": 294,
	"./sw": 295,
	"./sw.js": 295,
	"./ta": 296,
	"./ta.js": 296,
	"./te": 297,
	"./te.js": 297,
	"./tet": 298,
	"./tet.js": 298,
	"./tg": 299,
	"./tg.js": 299,
	"./th": 300,
	"./th.js": 300,
	"./tl-ph": 301,
	"./tl-ph.js": 301,
	"./tlh": 302,
	"./tlh.js": 302,
	"./tr": 303,
	"./tr.js": 303,
	"./tzl": 304,
	"./tzl.js": 304,
	"./tzm": 305,
	"./tzm-latn": 306,
	"./tzm-latn.js": 306,
	"./tzm.js": 305,
	"./ug-cn": 307,
	"./ug-cn.js": 307,
	"./uk": 308,
	"./uk.js": 308,
	"./ur": 309,
	"./ur.js": 309,
	"./uz": 310,
	"./uz-latn": 311,
	"./uz-latn.js": 311,
	"./uz.js": 310,
	"./vi": 312,
	"./vi.js": 312,
	"./x-pseudo": 313,
	"./x-pseudo.js": 313,
	"./yo": 314,
	"./yo.js": 314,
	"./zh-cn": 315,
	"./zh-cn.js": 315,
	"./zh-hk": 316,
	"./zh-hk.js": 316,
	"./zh-tw": 317,
	"./zh-tw.js": 317
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
webpackContext.id = 427;

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(128);
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

var MyApp = /** @class */ (function () {
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
                // this.validLogin();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 457:
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 458:
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


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 459:
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 460:
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
var FlowsPipe = /** @class */ (function () {
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
        return color;
    };
    FlowsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'flows',
        })
    ], FlowsPipe);
    return FlowsPipe;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 461:
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


var ImagePipe = /** @class */ (function () {
    function ImagePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ImagePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    ImagePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'image' }),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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
var LupaPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lupa',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/lupa/lupa.html"*/'<!--\n  Generated template for the LupaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Clientes</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    [debounce]="500"\n    (ionChange)="loadClients($event.value)"\n    [showCancelButton]="true"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(client)" *ngFor="let client of clientesList">\n          <ion-label>\n          {{client.PRO_NOMB}}\n          </ion-label>\n          <ion-icon name=\'person\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/lupa/lupa.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
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
var InvitedPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-invited',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/invited/invited.html"*/'<!--\n  Generated template for the InvitedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Invitar</ion-title>\n    <ion-buttons end>\n      <button class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="ShowConfirmInvited(user)" *ngFor="let user of usersList">\n          <ion-label>\n          {{user.Usu_Nomb}}\n          </ion-label>\n          <ion-icon name=\'person\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/invited/invited.html"*/,
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
var ClientPointsPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-client-points',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/client-points/client-points.html"*/'<!--\n  Generated template for the ClientPointsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle Cliente</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(detail)" *ngFor="let detail of detailsList">\n          <ion-icon name="home" item-start></ion-icon>\n          <ion-label>\n          {{detail.DPR_NOMB}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/client-points/client-points.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ClientPointsPage);
    return ClientPointsPage;
}());

//# sourceMappingURL=client-points.js.map

/***/ }),

/***/ 59:
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
var ContactDetailPage = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact-detail/contact-detail.html"*/'<!--\n  Generated template for the ContactDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle Contacto</ion-title>\n    <ion-buttons end>\n      <button class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n       <ion-icon name="school" item-start></ion-icon>\n      <ion-label>Título</ion-label>\n      <ion-note item-end>\n       {{contact.ITE_TITU}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n       <ion-icon name="person" item-start></ion-icon>\n      <ion-label>Nombre</ion-label>\n      <ion-note item-end>\n     {{contact.CON_NOMB}} {{contact.CON_APEL}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n       <ion-icon name="ribbon" item-start></ion-icon>\n      <ion-label>Cargo</ion-label>\n      <ion-note item-end>\n       {{contact.CON_CARG}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n       <ion-icon name="mail" item-start></ion-icon>\n      <ion-label>Email</ion-label>\n      <ion-note item-end (click)="openMail(contact.CON_EMAI)">\n       {{contact.CON_EMAI}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n       <ion-icon name="call" item-start></ion-icon>\n      <ion-label>Teléfono</ion-label>\n      <ion-note item-end  *ngIf="contact.CON_TEL" (click)="callContact(contact.CON_TEL)">\n       {{contact.CON_TEL}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n       <ion-icon name="phone-portrait" item-start></ion-icon>\n      <ion-label>Trabajo</ion-label>\n      <ion-note item-end *ngIf="contact.CON_CELU" (click)="callContact(contact.CON_CELU)">\n       {{contact.CON_CELU}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n       <ion-icon name="phone-portrait" item-start></ion-icon>\n      <ion-label>Personal</ion-label>\n      <ion-note item-end *ngIf="contact.CON_TELT"  (click)="callContact(contact.CON_TELT)">\n       {{contact.CON_TELT}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n       <ion-icon name="pin" item-start></ion-icon>\n      <ion-label>Dirección</ion-label>\n      <ion-note item-end>\n       {{contact.CON_DIRE}}\n      </ion-note>\n    </ion-item>\n    <!-- <ion-item (click)="openInvited()">\n      <ion-label>Invitar</ion-label>\n      <ion-note item-end *ngIf="invited">\n        {{invited.Usu_Nomb}}\n      </ion-note>\n     </ion-item> -->\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact-detail/contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var Globals = /** @class */ (function () {
    function Globals() {
    }
    Globals.CentralizationUrl = 'https://sac.digitalware.co:442/Seven_Crm/Centralizacion/api/GnConex/GetConnections';
    Globals.tracks = [{ name: 'Alta', value: 'A', color: 'hight' }, { name: 'Media', value: 'M', color: 'medium' }, { name: 'Baja', value: '', color: 'low' }];
    return Globals;
}());

;
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_general_general_provider__ = __webpack_require__(320);
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


/*
  Generated class for the FlowsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FlowsProvider = /** @class */ (function () {
    function FlowsProvider(_seven, alertCtrl, _general) {
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this._general = _general;
    }
    FlowsProvider.prototype.FlowEndTracing = function (flow) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._seven.GetStagesFlow(flow).then(function (data) {
                flow.ACCIONES = data.ObjResult;
                _this.showRadioActions(flow).then(function (data) {
                    //Muestra dialogo de acciones, si no hay ninguna se selecciona " ";
                    if (flow.ETA_MACC == "N") {
                        flow.ACC_CONT = data;
                    }
                    if (flow.ETA_MACC == "S") {
                        flow.ACC_CONT_LIST = data;
                    }
                    _this._seven.GetExecutionTypesFlow(flow).then(function (executors) {
                        console.log(executors);
                        //Carga todos los ejecutores de seguimiento y de etapa
                        if (executors.State && executors.ObjResult != null) {
                            var message = "Esta etapa requiere que el ejecutor sea seleccionado ahora";
                            var tracingUsers = executors.ObjResult.tracing;
                            console.log(executors.ObjResult.tracing);
                            _this.showExecutionUsers("ETAPA:" + executors.ObjResult.eta_asun_s + ".<br> Selecciones en ejecuci\u00F3n para seguimiento", message, tracingUsers).then(function (data) {
                                //Muestra dialogos de ejecutores de seguimiento, si no se selecciona nada trae vacio
                                flow.SelExecSeg = data;
                                _this.validExecutionUsers(executors.ObjResult).then(function (usuariosEjecutores) {
                                    //Muestra todos los ejecutores de etapa, si no se seleccionad nada, trae vacío.
                                    flow.SelExec = usuariosEjecutores;
                                    _this.flowAprobment(flow).then(function () {
                                        resolve();
                                    });
                                });
                            }).catch(function (err) { return console.log(err); });
                        }
                        else {
                            _this._general.showToast(executors.Message);
                        }
                    });
                }).catch(function (err) { return console.log(err); });
            });
        });
        return promise;
    };
    FlowsProvider.prototype.validExecutionUsers = function (executors) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var count = 0;
            var SelExec = "";
            if (executors.execution == null || executors.execution.length == 0)
                resolve('');
            var _loop_1 = function (grupo) {
                var message = "ETAPA:" + grupo.eta_asun + ".Esta etapa requiere que el ejecutor sea seleccionado ahora";
                var executionUsers = grupo.usersExecution;
                _this.showExecutionUsers('Selecciones en ejecución', message, executionUsers).then(function (data) {
                    SelExec += data + "," + grupo.eta_cont + ";";
                    count += 1;
                    if (count == executors.execution.length) {
                        resolve(SelExec);
                    }
                }).catch(function (err) { return console.log(err); });
            };
            for (var _i = 0, _a = executors.execution; _i < _a.length; _i++) {
                var grupo = _a[_i];
                _loop_1(grupo);
            }
        });
        return promise;
    };
    FlowsProvider.prototype.showRadioActions = function (flow) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var countActions = flow.ACCIONES;
            if (countActions == null)
                resolve(' ');
            // if (countActions.length == 1)
            //   resolve(countActions[0].ACC_CONT);
            var alert = _this.alertCtrl.create();
            alert.setTitle('Acciones');
            if (flow.ETA_MACC == "N") {
                for (var _i = 0, _a = flow.ACCIONES; _i < _a.length; _i++) {
                    var action = _a[_i];
                    alert.addInput({
                        type: 'radio',
                        label: action.ACC_NOMB,
                        value: action.ACC_CONT,
                    });
                }
            }
            if (flow.ETA_MACC == "S") {
                for (var _b = 0, _c = flow.ACCIONES; _b < _c.length; _b++) {
                    var action = _c[_b];
                    alert.addInput({
                        type: 'checkbox',
                        label: action.ACC_NOMB,
                        value: action.ACC_CONT,
                    });
                }
            }
            alert.addButton({
                text: 'Cancelar',
                handler: function () {
                }
            });
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    if (data != undefined)
                        resolve(data);
                    if (data == undefined)
                        reject(null);
                }
            });
            alert.present();
        });
        return promise;
    };
    FlowsProvider.prototype.showExecutionUsers = function (title, subTitle, options) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (options == null || options.length == 0) {
                resolve('');
                return;
            }
            var alert = _this.alertCtrl.create();
            alert.setTitle(title);
            alert.setSubTitle(subTitle);
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var executionUser = options_1[_i];
                alert.addInput({
                    type: 'radio',
                    label: executionUser.Usu_Nomb,
                    value: executionUser.Usu_Codi,
                });
            }
            ;
            alert.addButton({
                text: 'Cancelar',
                handler: function () {
                }
            });
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    if (data != undefined)
                        resolve(data);
                    if (data == undefined)
                        reject(null);
                }
            });
            alert.present();
        });
        return promise;
    };
    FlowsProvider.prototype.flowAprobment = function (flow) {
        var _this = this;
        return this._seven.ApproveFlow(flow).then(function (data) {
            var response = data;
            if (response.State) {
                _this._general.showToast('El flujo ha sido aprobado!');
                //this.close()
                return;
            }
            _this._general.showAlert(response.Message, 'Lo sentimos!');
        });
    };
    FlowsProvider.prototype.flowReject = function (flow) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this._seven.RejectFlow(flow).then(function (data) {
                var response = data;
                if (response.State) {
                    _this._general.showToast('El flujo ha sido rechazado!');
                    resolve();
                    return;
                }
                _this._general.showAlert(response.Message, 'Lo sentimos!');
            });
        });
        return promise;
    };
    FlowsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_general_general_provider__["a" /* GeneralProvider */]])
    ], FlowsProvider);
    return FlowsProvider;
}());

//
// showCheckActions(flow: any) {
//   var promise = new Promise((resolve, reject) => {
//     let alert = this.alertCtrl.create();
//     alert.setTitle('Acciones');
//     if(flow.ACCIONES ==null || flow.ACCIONES.length==0)
//     resolve(' ');
//     for (let action of flow.ACCIONES) {
//       alert.addInput({
//         type: 'checkbox',
//         label: action.ACC_NOMB,
//         value: action.ACC_CONT,
//       });
//     }
//     alert.addButton({
//       text: 'Cancelar',
//       handler: () => {
//
//       }
//     });
//     alert.addButton({
//       text: 'OK',
//       handler: (data: any) => {
//         if(data!=undefined)
//          resolve(data);
//          if(data==undefined)
//          reject(null);
//       }
//     });
//     alert.present();
//   })
//   return promise;
// }
// ValidTypeStage(flow:any){
//   if(flow.ETA_MACC=='S'){
//    return    this.flowEndTracigMultiStage(flow);
//   //return  this.FlowEndTracing(flow);
//
//   }
//   else {
//         return  this.FlowEndTracing(flow);
//   }
// }
//   flowEndTracigMultiStage(flow:any){
// let promise = new Promise((resolve,reject)=>{
//   this._seven.GetExecutionUsersMultiStage(flow).then((data:any)=>{
//    if(data.State){
//    flow.ACCIONES = data.ObjResult;
//    this.showCheckActions(flow).then((dataCheck:any[])=>{
//      this.validTracingUsers(flow,dataCheck).then((data:any)=>{
//      flow.SelExecSeg = data;
//     let  numberSelected = 0;
//     if(dataCheck)
//         for(let actionFlow of dataCheck){
//            // let actionSelected = flow.ACCIONES.where(a=>a.ACC_CONT==actionFlow);
//            let actionSelected= flow.ACCIONES.filter(a=>a.ACC_CONT ==actionFlow);
//            console.log(actionSelected);
//           if (actionSelected!= null) {
//             console.log(actionSelected);
//             let executionUsers: any[] = actionSelected[0].EXECUTORS.execution;
//             let message: string = `Etapa:${actionSelected[0].EXECUTORS.eta_asun}.Esta etapa requiere que el ejecutor sea seleccionado ahora`;
//             this.showExecutionUsers('Selecciones en ejecución', message, executionUsers).then((data: any) => {
//               flow.SelExec+= `${data},${actionSelected[0].EXECUTORS.eta_cont};`
//               numberSelected+=1;
//               if(numberSelected == dataCheck.length){
//                 this.flowAprobment(flow).then(() => {
//                   resolve();
//                 })
//               }
//             }).catch(err=>console.log(err))
//           }
//         }
//      })
//
//    })
//  }
//  else{
//     this._general.showToast('No se encontraron ejecutores para las acciones asociadas a este flujo');
//  }
//
//  })
// })
// return promise;
//
//   }
//   validTracingUsers(flow:any,data:any[]){
//     var promise = new Promise((resolve,reject)=>{
//       let actionSelected= flow.ACCIONES.filter(a=>a.ACC_CONT ==data[0]);
//        let tracingUsers: any[] = actionSelected[0].EXECUTORS.tracing;
//        let message: string = `Etapa:${actionSelected[0].EXECUTORS.eta_asun_s}. <br>Esta etapa requiere que el usuario de seguimiento sea seleccionado ahora`;
//        this.showExecutionUsers(`Selecciones en ejecución para seguimiento`, message, tracingUsers).then((data: any) => {
//           resolve(data);
//        }).catch(err=>console.log(err))
//     })
// return promise;
//   }
//# sourceMappingURL=flows-provider.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map