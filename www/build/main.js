webpackJsonp([11],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(17);
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
    function ActivitiesSearchPage(navCtrl, navParams, _seven, viewCtrl, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
    }
    ActivitiesSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesSearchPage');
        this.LoadActivities();
    };
    ActivitiesSearchPage.prototype.LoadActivities = function () {
        var _this = this;
        var loading = this.loading.create({
            content: 'Cargando...'
        });
        loading.present();
        this._seven.GetActivities().then(function (data) {
            console.log(data);
            _this.activities = data;
            _this.initializeItems();
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
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
            selector: 'page-activities-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities-search/activities-search.html"*/'<!--\n  Generated template for the ActivitiesSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Actividades</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #AcivitiesList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(activity)" *ngFor="let activity of activitiesList">\n          <ion-label>\n          {{activity.ACT_NOMB}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities-search/activities-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ActivitiesSearchPage);
    return ActivitiesSearchPage;
}());

//# sourceMappingURL=activities-search.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event_new_event__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_detail_activity_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(32);
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
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesPage = (function () {
    function ActivitiesPage(navCtrl, navParams, alert, modal, _seven, _user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.modal = modal;
        this._seven = _seven;
        this._user = _user;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay,
        };
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesPage');
    };
    ActivitiesPage.prototype.ionViewWillEnter = function () {
    };
    ActivitiesPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ActivitiesPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
        this.LoadActivities();
    };
    ActivitiesPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_4_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_4_moment__(event.endTime).format('LLLL');
        var alert = this.alert.create({
            title: event.title,
            subTitle: 'Desde ' + start + '<br>To  :' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    ActivitiesPage.prototype.addEvent = function (event) {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_2__new_event_new_event__["a" /* NewEventPage */], { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.LoadActivities();
            // if(data){
            //   let eventData =  data;
            //       eventData.startTime = new Date(data.startTime);
            //       eventData.endTime = new Date(data.endTime);
            //       let events = this.eventSource;
            //       events.push(eventData);
            //       this.eventSource =[];
            //       setTimeout(()=>{
            //         this.eventSource = events;
            //       })
            // }
        });
    };
    ActivitiesPage.prototype.LoadActivities = function () {
        var _this = this;
        var fini = __WEBPACK_IMPORTED_MODULE_4_moment__(this.selectedDay).format("YYYY-MM-DD HH:mm:ss");
        var finalDate = new Date();
        finalDate.setDate(this.selectedDay.getDate() + 3);
        var fina = __WEBPACK_IMPORTED_MODULE_4_moment__(finalDate).format("YYYY-MM-DD HH:mm:ss");
        this._user.getUsername().then(function (data) {
            _this._seven.GetUserActivities(data, fini, fina).then(function (data) {
                var datos = data;
                if (datos.State) {
                    _this.nextActivities = datos.ObjResult;
                    console.log(_this.nextActivities);
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
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/'<!--\n  Generated template for the ActivitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{viewTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n           (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          step="30"\n          class="calendar">\n        </calendar>\n</ion-header>\n\n\n<ion-content>\n\n\n        <ion-list #scheduleList>\n          <ion-list-header>\n            <h2>Próximas</h2>\n          </ion-list-header>\n          <div *ngFor="let activity of nextActivities">\n          <ion-item-divider>\n            <h3>{{activity.GrupoHora}}</h3>\n          </ion-item-divider>\n            <ion-item-group>\n              <ion-item-sliding  *ngFor="let agend of activity.Agenda" (click)="openActivity(agend)">\n                <button ion-item>\n\n                 <h3><b>{{agend.AGE_ASUN}}</b></h3>\n                 <h4>{{agend.AGE_FINI | date: \'h:mm:ss a\'}} - {{agend.AGE_FFIN | date: \'h:mm:ss a\'}}</h4>\n                 <p text-wrap> {{agend.PRO_NOMB}} - {{agend.CON_NOMB}} {{agend.CON_APEL}} - {{agend.ACT_NOMB}}</p>\n                  <ion-icon name="clock" item-start></ion-icon>\n                 </button>\n              </ion-item-sliding>\n            </ion-item-group>\n          </div>\n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lupa_lupa__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activities_search_activities_search__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stages_search_stages_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_seven_seven__ = __webpack_require__(17);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modal = modal;
        this._user = _user;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this.event = { startTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        this.user = {};
        this.newActivity = {};
        var preSelectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.newActivity.Age_Fech = preSelectedDate;
    }
    NewEventPage.prototype.ionViewDidLoad = function () {
        this.LoadInfo();
        console.log('ionViewDidLoad NewEventPage');
    };
    NewEventPage.prototype.LoadInfo = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            console.log(data);
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
            console.log(data);
            _this.client = data;
        });
    };
    NewEventPage.prototype.openLupaActivities = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__activities_search_activities_search__["a" /* ActivitiesSearchPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.activity = data;
        });
    };
    NewEventPage.prototype.openLupaStages = function () {
        var _this = this;
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_5__stages_search_stages_search__["a" /* StagesSearchPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.stage = data;
        });
    };
    NewEventPage.prototype.CreateActivity = function () {
        var _this = this;
        var response;
        this.newActivity.Usu_Codi = this.user.usu_codi;
        this.newActivity.Usu_Ejec = this.user.usu_codi;
        this.newActivity.Act_Codi = this.activity.ACT_CODI;
        this.newActivity.Pro_Cont = this.client.PRO_CONT;
        this.newActivity.Eta_Codi = this.stage.ETA_CODI;
        this.newActivity.Dpr_Codi = this.client.cdpros.DPR_CODI;
        this.newActivity.Con_Codi = this.client.conpr.CON_CODI;
        this._seven.SaveActivity(this.newActivity).then(function (data) {
            response = data;
            if (response.State) {
                _this.showAlert('Actividad Guardada correctamente', 'Perfecto!');
                _this.viewCtrl.dismiss();
                return;
            }
            _this.showAlert('Ocurrió un error', 'Lo sentimos!');
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
    NewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-event',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/'<!--\n  Generated template for the NewEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle de actividad</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Asunto" [(ngModel)] ="newActivity.Age_Asun"></ion-input>\n    </ion-item>\n    <ion-item button (click)="openLupa()">\n     <ion-label>Cliente</ion-label>\n     <ion-note item-end *ngIf="client">\n     {{client.PRO_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Detalle cliente</ion-label>\n      <ion-note item-end *ngIf="client">\n       {{client.cdpros.DPR_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contacto</ion-label>\n      <ion-note item-end *ngIf="client">\n      {{client.conpr.CON_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item button (click)="openLupaActivities()">\n     <ion-label>Actividad</ion-label>\n     <ion-note item-end *ngIf="activity">\n     {{activity.ACT_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item button (click)="openLupaStages()">\n     <ion-label>Etapa proceso</ion-label>\n     <ion-note item-end *ngIf="stage">\n     {{stage.ETA_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Inicio</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat ="DD/MM/YYYY HH:mm" [(ngModel)] = "newActivity.Age_Fech"></ion-datetime>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label>Fin</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat ="MM/DD/YYYY HH:mm" [(ngModel)] = "newActivity.Age_Tiem" [min] ="minDate"></ion-datetime>\n    </ion-item> -->\n    <ion-item>\n      <ion-label>Horas</ion-label>\n      <ion-input  type="number" placeholder = "Horas" [(ngModel)] ="newActivity.Age_Dura"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Todo el día?</ion-label>\n    <ion-toggle [(ngModel)] = "event.allDay"></ion-toggle>\n    </ion-item>\n  </ion-list>\n<button ion-button full icon-left (click) = "CreateActivity()">\n  <ion-icon name ="checkmark"></ion-icon>Añadir evento\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LupaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(17);
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
    function LupaPage(navCtrl, navParams, _seven, viewCtrl, load) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
        this.load = load;
    }
    LupaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LupaPage');
        this.loadClients();
    };
    LupaPage.prototype.loadClients = function () {
        var _this = this;
        var loading = this.load.create({
            content: 'Cargando...'
        });
        loading.present();
        this._seven.GetFaClien().then(function (data) {
            _this.clients = data;
            _this.initializeItems();
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
        });
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
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.clientesList = this.clientesList.filter(function (v) { return v.PRO_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    LupaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lupa',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/lupa/lupa.html"*/'<!--\n  Generated template for the LupaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Clientes</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(client)" *ngFor="let client of clientesList">\n          <ion-label>\n          {{client.PRO_NOMB}}\n          </ion-label>\n          <ion-icon name=\'person\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/lupa/lupa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LupaPage);
    return LupaPage;
}());

//# sourceMappingURL=lupa.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StagesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(17);
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
    function StagesSearchPage(navCtrl, navParams, _seven, viewCtrl, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
    }
    StagesSearchPage.prototype.ionViewDidLoad = function () {
        this.LoadStages();
        console.log('ionViewDidLoad StagesSearchPage');
    };
    StagesSearchPage.prototype.LoadStages = function () {
        var _this = this;
        var loading = this.loading.create({
            content: 'Cargando...'
        });
        loading.present();
        this._seven.GetStages().then(function (data) {
            _this.stages = data;
            _this.initializeItems();
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
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
            selector: 'page-stages-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/stages-search/stages-search.html"*/'<!--\n  Generated template for the StagesSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Etapas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #AcivitiesList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(stage)" *ngFor="let stage of stagesList">\n          <ion-label>\n          {{stage.ETA_NOMB}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/stages-search/stages-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], StagesSearchPage);
    return StagesSearchPage;
}());

//# sourceMappingURL=stages-search.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invited_invited__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(32);
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
    function ActivityDetailPage(navCtrl, navParams, viewCtrl, _seven, _user, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._seven = _seven;
        this._user = _user;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.invited = {};
        this.activity = this.navParams.get('activity');
    }
    ActivityDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this.usu_codi = data;
        });
    };
    ActivityDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ActivityDetailPage.prototype.ActivityReject = function () {
        var _this = this;
        this.activity.USU_CODI = this.usu_codi;
        console.log(this.activity);
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
    ActivityDetailPage.prototype.AcitityInvited = function () {
        console.log("invitado");
        this.activity.Inv_Codi = this.invited.Usu_Codi;
        this.activity.Age_Fech = this.activity.AGE_FREG;
        this._seven.InvitedActivity(this.activity);
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__invited_invited__["a" /* InvitedPage */], { usu_codi: this.usu_codi });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.invited = data;
        });
    };
    ActivityDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activity-detail/activity-detail.html"*/'<!--\n  Generated template for the ActivityDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{activity.AGE_ASUN}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Inicio</ion-label>\n      <ion-note item-end>\n      {{activity.AGE_FINI | date: \'h:mm:ss a\'}}\n      </ion-note>\n     </ion-item>\n     <ion-item>\n     <ion-label>Fin</ion-label>\n     <ion-note item-end>\n       {{activity.AGE_FFIN | date: \'h:mm:ss a\'}}\n     </ion-note>\n    </ion-item>\n  <ion-item>\n    <ion-label>Cliente</ion-label>\n    <ion-note item-end>\n    {{activity.PRO_NOMB}}\n    </ion-note>\n   </ion-item>\n   <ion-item>\n     <ion-label>Contacto</ion-label>\n     <ion-note item-end>\n     {{activity.CON_NOMB}}  {{activity.CON_APEL}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Actividad</ion-label>\n      <ion-note item-end>\n    {{activity.ACT_NOMB}}\n      </ion-note>\n     </ion-item>\n     <ion-item>\n       <ion-label>Asunto</ion-label>\n       <ion-note item-end>\n    {{activity.AGE_ASUN}}\n       </ion-note>\n      </ion-item>\n      <ion-item (click)="openInvited()">\n        <ion-label>Invitar</ion-label>\n        <ion-note item-end *ngIf="invited">\n          {{invited.Usu_Nomb}}\n        </ion-note>\n       </ion-item>\n\n</ion-list>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <button *ngIf="invited" ion-button block color="primary" (click)="AcitityInvited()">\n        <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Invitar\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button block color="danger" (click)="ActivityReject()">\n            <ion-icon name="remove-circle"></ion-icon>&nbsp;Cancelar\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activity-detail/activity-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ActivityDetailPage);
    return ActivityDetailPage;
}());

//# sourceMappingURL=activity-detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(17);
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
    function InvitedPage(navCtrl, navParams, _seven, viewCtrl, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
        this.loading = loading;
        this.user = navParams.get('usu_codi');
    }
    InvitedPage.prototype.ionViewDidLoad = function () {
        this.LoadUsers();
    };
    InvitedPage.prototype.LoadUsers = function () {
        var _this = this;
        var loading = this.loading.create({
            content: 'Cargando...'
        });
        loading.present();
        this._seven.GetUsers(this.user).then(function (data) {
            console.log(data);
            _this.users = data;
            _this.initializeItems();
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
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
    InvitedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invited',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/invited/invited.html"*/'<!--\n  Generated template for the InvitedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Invitar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(user)" *ngFor="let user of usersList">\n          <ion-label>\n          {{user.Usu_Nomb}}\n          </ion-label>\n          <ion-icon name=\'person\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/invited/invited.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], InvitedPage);
    return InvitedPage;
}());

//# sourceMappingURL=invited.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(17);
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
 * Generated class for the FlowDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlowDetailPage = (function () {
    function FlowDetailPage(navCtrl, navParams, _seven, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.flow = navParams.get('flow');
    }
    FlowDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowDetailPage');
    };
    FlowDetailPage.prototype.flowAprobment = function () {
        var _this = this;
        this._seven.ApproveFlow(this.flow).then(function (data) {
            var response = data;
            if (response.State) {
                _this.showAlert('El flujo ha sido aprobado!', 'Listo!');
                _this.close();
                return;
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
    FlowDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flow-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/'<!--\n  Generated template for the FlowDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Caso {{flow.CAS_CONT}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n     <ion-label>Prioridad</ion-label>\n     <ion-note item-end>\n    {{flow.SEG_PRIO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Seguimiento</ion-label>\n     <ion-note item-end>\n  {{flow.SEG_CONT}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Asunto</ion-label>\n     <ion-note item-end>\n     {{flow.SEG_SUBJ}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Quién registra</ion-label>\n     <ion-note item-end>\n      {{flow.USU_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Solicitado para</ion-label>\n     <ion-note item-end>\n    {{flow.SOLICITADO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Recibido</ion-label>\n     <ion-note item-end>\n   {{flow.SEG_FREC| date: \'dd/MM/yyyy\' }} &nbsp;{{flow.SEG_HREC | date: \'h:mm:ss a\'}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Límite</ion-label>\n     <ion-note item-end>\n     {{flow.SEG_FLIM | date: \'dd/MM/yyyy\'}} &nbsp;{{flow.SEG_HLIM | date: \'h:mm:ss a\'}}\n     </ion-note>\n    </ion-item>\n    <ion-item *ngIf="flow.ADICIO">\n     <ion-label>Datos adicionales</ion-label>\n     <ion-note item-end>\n       {{flow.ADICIO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n    <ion-label>Descripción</ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n        <p ion-text text-wrap>  {{flow.CAS_DESC}}</p>\n    </ion-item>\n    <ion-item>\n    <ion-label>Comentarios para el ejecutor</ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n        <p text-wrap>    {{flow.SEG_COME}}</p>\n    </ion-item>\n    <ion-item>\n    <ion-label>Comentarios para el segundo ejecutor</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="flow.COMENTARIOS"  placeholder="Ingrese sus comentarios aquí"></ion-textarea>\n    </ion-item>\n  </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button block color="primary" (click)="flowAprobment()">\n              <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Aprobar\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button block color="danger" (click)="flowReject()">\n                  <ion-icon name="remove-circle"></ion-icon>&nbsp;Rechazar\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], FlowDetailPage);
    return FlowDetailPage;
}());

//# sourceMappingURL=flow-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(32);
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
 * Generated class for the FlowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlowsPage = (function () {
    function FlowsPage(navCtrl, _seven, toast, _user, modal, loading) {
        this.navCtrl = navCtrl;
        this._seven = _seven;
        this.toast = toast;
        this._user = _user;
        this.modal = modal;
        this.loading = loading;
        this.value = '';
    }
    FlowsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowsPage');
        this.getFlows();
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
        var loading = this.loading.create({
            content: 'Cargando...'
        });
        loading.present();
        this._user.getUsername().then(function (data) {
            _this.user = data;
            console.log(data);
            _this._seven.getFlows(_this.user).then(function (data) {
                console.log(data);
                _this.flows = data;
                _this.initializeItems();
                loading.dismiss();
            }).catch(function (err) {
                console.log(err);
                loading.dismiss();
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
                _this.showMessage('Flujos actualizados!');
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
    FlowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flows',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/'<!--\n  Generated template for the FlowsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Flujos\n    </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content>\n  </ion-refresher-content>\n  </ion-refresher>\n  <ion-list #scheduleList>\n      <ion-item-group>\n        <ion-item-sliding #slidingItem (click)="goDetailsFlow(flow)" class="flujo" [class]= "flow.SEG_PRIO | flows" *ngFor="let flow of flowList">\n          <button ion-item>\n        <h3>Caso {{flow.CAS_CONT}}</h3>\n        <p>\n        {{flow.CAS_DESC}}\n        </p>\n      </button>\n        </ion-item-sliding>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], FlowsPage);
    return FlowsPage;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keychain_touch_id__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fingerprint_aio__ = __webpack_require__(292);
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
    function LoginPage(navCtrl, navParams, _seven, alertCtrl, _user, keychainTouchId, platform, faio) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this._user = _user;
        this.keychainTouchId = keychainTouchId;
        this.platform = platform;
        this.faio = faio;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.GetAccessTouchID();
    };
    LoginPage.prototype.onLogin = function (form) {
        if (form.valid) {
            this.submitted = true;
            this.TryAccess();
        }
    };
    LoginPage.prototype.TryAccess = function () {
        var _this = this;
        this._seven.GetValidationUser(this.login.username, this.login.password).then(function (data) {
            var datos;
            datos = data;
            if (!datos.State) {
                _this.showAlert('Usuario o contraseña incorrectos', 'Lo sentimos');
                return;
            }
            _this._user.login(_this.login.username, datos.Usu_Nomb);
        }).catch(function (err) {
            _this.showAlert(err, "Lo sentimos!");
        });
    };
    LoginPage.prototype.GetAccessTouchID = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.keychainTouchId.has("passwordCodeAssistant").then(function () {
                _this.keychainTouchId.verify("passwordCodeAssistant", "Ingrese su huella dactilar para ingresar").then(function (pass) {
                    _this._user.getSecureUser().then(function (user) {
                        _this.login.username = user;
                        _this.login.password = pass;
                        _this.TryAccess();
                    });
                });
            });
        }
    };
    LoginPage.prototype.SetAccessTouchID = function () {
        if (this.platform.is("cordova")) {
            this._user.setSecureUser(this.login.username);
            this.keychainTouchId.save("passwordCodeAssistant", this.login.password);
        }
    };
    LoginPage.prototype.VerifyTouchID = function () {
        var _this = this;
        if (this.platform.is("cordova")) {
            this.keychainTouchId.has("passwordCodeAssistant").catch(function (err) {
                _this.keychainTouchId.isAvailable().then(function () {
                    _this.faio.show({
                        clientId: 'TouchIDConfirmation',
                        localizedReason: 'Autentícate para ingresar con tu huella'
                    })
                        .then(function (result) { return _this.SetAccessTouchID(); })
                        .catch(function (error) { return console.log(error); });
                });
            });
        }
    };
    LoginPage.prototype.showAlert = function (mensaje, titulo) {
        var alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<!-- <div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n	</div> -->\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label floating color="primary">Usuario</ion-label>\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Usuario requerido\n			</p>\n			<ion-item>\n				<ion-label floating color="primary">Contraseña</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Contraseña requerida\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Registro</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(32);
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
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.logOut = function () {
        this._user.logout();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-border>\n    <ion-list-header>\n      Cuenta\n    </ion-list-header>\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Notificaciones\n      </ion-label>\n      <ion-icon name=\'notifications\' item-start></ion-icon>\n    </ion-item>\n    <ion-item (click)="logOut()">\n      <ion-icon name=\'log-out\' item-start></ion-icon>\n      Salir\n      <ion-note item-end>\n      Cerrar sesión\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\'wine\' item-start></ion-icon>\n      Mead Drinking\n      <ion-note item-end>Yes please</ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      Friends\n    </ion-list-header>\n\n\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SevenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
    function SevenProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost/SevenCRMApi/api/';
        console.log('Hello SevenProvider Provider');
    }
    SevenProvider.prototype.getFlows = function (usu_codi) {
        return this.getData("Flujos/FlujosAdm?usu_codi=" + usu_codi);
    };
    SevenProvider.prototype.GetValidationUser = function (user, pass) {
        return this.getData("GnUsuar/ValidateUser?user=" + user + "&pass=" + pass);
    };
    SevenProvider.prototype.ApproveFlow = function (flujo) {
        return this.postData(flujo, 'Flujos/FlujosAdm');
    };
    SevenProvider.prototype.GetFaClien = function () {
        return this.getData('Actividades/cargarClientesCrm');
    };
    SevenProvider.prototype.GetActivities = function () {
        return this.getData('Actividades/ListarActividades');
    };
    SevenProvider.prototype.GetStages = function () {
        return this.getData('Actividades/ListarEtapas');
    };
    SevenProvider.prototype.GetUserActivities = function (usu_codi, fini, fina) {
        return this.getData("CrAgend/ListaActividades?usu_codi=" + usu_codi + "&fini=" + fini + "&fina=" + fina);
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
    SevenProvider.prototype.GetUsers = function (usu_codi) {
        return this.getData("Actividades/ListarEmpleados?usu_codi=" + usu_codi);
    };
    SevenProvider.prototype.getData = function (apiAction) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + apiAction).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SevenProvider.prototype.postData = function (data, apiAction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + apiAction, data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    SevenProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SevenProvider);
    return SevenProvider;
}());

//# sourceMappingURL=seven.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activities-search/activities-search.module": [
		434,
		10
	],
	"../pages/activities/activities.module": [
		435,
		9
	],
	"../pages/activity-detail/activity-detail.module": [
		436,
		8
	],
	"../pages/flow-detail/flow-detail.module": [
		437,
		7
	],
	"../pages/flows/flows.module": [
		438,
		6
	],
	"../pages/invited/invited.module": [
		439,
		5
	],
	"../pages/login/login.module": [
		440,
		4
	],
	"../pages/lupa/lupa.module": [
		441,
		3
	],
	"../pages/new-event/new-event.module": [
		442,
		2
	],
	"../pages/settings/settings.module": [
		443,
		1
	],
	"../pages/stages-search/stages-search.module": [
		444,
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
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
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
  Generated class for the UserDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserDataProvider = (function () {
    function UserDataProvider(http, storage, events) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        console.log('Hello UserDataProvider Provider');
    }
    UserDataProvider.prototype.login = function (username, info) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
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
    };
    ;
    UserDataProvider.prototype.setSecureUser = function (user) {
        this.storage.set('secureUser', user);
    };
    ;
    UserDataProvider.prototype.setUserInfo = function (info) {
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
    UserDataProvider.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], UserDataProvider);
    return UserDataProvider;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flows_flows__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities__ = __webpack_require__(107);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__flows_flows__["a" /* FlowsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__activities_activities__["a" /* ActivitiesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Flujos" tabIcon="git-network"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Ajustes" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_calendar__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_flows_flows__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_flow_detail_flow_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_seven_seven__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_data_user_data__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_flows_flows__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_keychain_touch_id__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_fingerprint_aio__ = __webpack_require__(292);
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
                __WEBPACK_IMPORTED_MODULE_27__pipes_flows_flows__["a" /* FlowsPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__["a" /* NewEventPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__["a" /* LupaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__["a" /* ActivitiesSearchPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__["a" /* StagesSearchPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__["a" /* ActivityDetailPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__["a" /* InvitedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activities-search/activities-search.module#ActivitiesSearchPageModule', name: 'ActivitiesSearchPage', segment: 'activities-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-detail/activity-detail.module#ActivityDetailPageModule', name: 'ActivityDetailPage', segment: 'activity-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flow-detail/flow-detail.module#FlowDetailPageModule', name: 'FlowDetailPage', segment: 'flow-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows/flows.module#FlowsPageModule', name: 'FlowsPage', segment: 'flows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invited/invited.module#InvitedPageModule', name: 'InvitedPage', segment: 'invited', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lupa/lupa.module#LupaPageModule', name: 'LupaPage', segment: 'lupa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stages-search/stages-search.module#StagesSearchPageModule', name: 'StagesSearchPage', segment: 'stages-search', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__["a" /* InvitedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_seven_seven__["a" /* SevenProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 171,
	"./af.js": 171,
	"./ar": 172,
	"./ar-dz": 173,
	"./ar-dz.js": 173,
	"./ar-kw": 174,
	"./ar-kw.js": 174,
	"./ar-ly": 175,
	"./ar-ly.js": 175,
	"./ar-ma": 176,
	"./ar-ma.js": 176,
	"./ar-sa": 177,
	"./ar-sa.js": 177,
	"./ar-tn": 178,
	"./ar-tn.js": 178,
	"./ar.js": 172,
	"./az": 179,
	"./az.js": 179,
	"./be": 180,
	"./be.js": 180,
	"./bg": 181,
	"./bg.js": 181,
	"./bm": 182,
	"./bm.js": 182,
	"./bn": 183,
	"./bn.js": 183,
	"./bo": 184,
	"./bo.js": 184,
	"./br": 185,
	"./br.js": 185,
	"./bs": 186,
	"./bs.js": 186,
	"./ca": 187,
	"./ca.js": 187,
	"./cs": 188,
	"./cs.js": 188,
	"./cv": 189,
	"./cv.js": 189,
	"./cy": 190,
	"./cy.js": 190,
	"./da": 191,
	"./da.js": 191,
	"./de": 192,
	"./de-at": 193,
	"./de-at.js": 193,
	"./de-ch": 194,
	"./de-ch.js": 194,
	"./de.js": 192,
	"./dv": 195,
	"./dv.js": 195,
	"./el": 196,
	"./el.js": 196,
	"./en-au": 197,
	"./en-au.js": 197,
	"./en-ca": 198,
	"./en-ca.js": 198,
	"./en-gb": 199,
	"./en-gb.js": 199,
	"./en-ie": 200,
	"./en-ie.js": 200,
	"./en-nz": 201,
	"./en-nz.js": 201,
	"./eo": 202,
	"./eo.js": 202,
	"./es": 203,
	"./es-do": 204,
	"./es-do.js": 204,
	"./es-us": 205,
	"./es-us.js": 205,
	"./es.js": 203,
	"./et": 206,
	"./et.js": 206,
	"./eu": 207,
	"./eu.js": 207,
	"./fa": 208,
	"./fa.js": 208,
	"./fi": 209,
	"./fi.js": 209,
	"./fo": 210,
	"./fo.js": 210,
	"./fr": 211,
	"./fr-ca": 212,
	"./fr-ca.js": 212,
	"./fr-ch": 213,
	"./fr-ch.js": 213,
	"./fr.js": 211,
	"./fy": 214,
	"./fy.js": 214,
	"./gd": 215,
	"./gd.js": 215,
	"./gl": 216,
	"./gl.js": 216,
	"./gom-latn": 217,
	"./gom-latn.js": 217,
	"./gu": 218,
	"./gu.js": 218,
	"./he": 219,
	"./he.js": 219,
	"./hi": 220,
	"./hi.js": 220,
	"./hr": 221,
	"./hr.js": 221,
	"./hu": 222,
	"./hu.js": 222,
	"./hy-am": 223,
	"./hy-am.js": 223,
	"./id": 224,
	"./id.js": 224,
	"./is": 225,
	"./is.js": 225,
	"./it": 226,
	"./it.js": 226,
	"./ja": 227,
	"./ja.js": 227,
	"./jv": 228,
	"./jv.js": 228,
	"./ka": 229,
	"./ka.js": 229,
	"./kk": 230,
	"./kk.js": 230,
	"./km": 231,
	"./km.js": 231,
	"./kn": 232,
	"./kn.js": 232,
	"./ko": 233,
	"./ko.js": 233,
	"./ky": 234,
	"./ky.js": 234,
	"./lb": 235,
	"./lb.js": 235,
	"./lo": 236,
	"./lo.js": 236,
	"./lt": 237,
	"./lt.js": 237,
	"./lv": 238,
	"./lv.js": 238,
	"./me": 239,
	"./me.js": 239,
	"./mi": 240,
	"./mi.js": 240,
	"./mk": 241,
	"./mk.js": 241,
	"./ml": 242,
	"./ml.js": 242,
	"./mr": 243,
	"./mr.js": 243,
	"./ms": 244,
	"./ms-my": 245,
	"./ms-my.js": 245,
	"./ms.js": 244,
	"./my": 246,
	"./my.js": 246,
	"./nb": 247,
	"./nb.js": 247,
	"./ne": 248,
	"./ne.js": 248,
	"./nl": 249,
	"./nl-be": 250,
	"./nl-be.js": 250,
	"./nl.js": 249,
	"./nn": 251,
	"./nn.js": 251,
	"./pa-in": 252,
	"./pa-in.js": 252,
	"./pl": 253,
	"./pl.js": 253,
	"./pt": 254,
	"./pt-br": 255,
	"./pt-br.js": 255,
	"./pt.js": 254,
	"./ro": 256,
	"./ro.js": 256,
	"./ru": 257,
	"./ru.js": 257,
	"./sd": 258,
	"./sd.js": 258,
	"./se": 259,
	"./se.js": 259,
	"./si": 260,
	"./si.js": 260,
	"./sk": 261,
	"./sk.js": 261,
	"./sl": 262,
	"./sl.js": 262,
	"./sq": 263,
	"./sq.js": 263,
	"./sr": 264,
	"./sr-cyrl": 265,
	"./sr-cyrl.js": 265,
	"./sr.js": 264,
	"./ss": 266,
	"./ss.js": 266,
	"./sv": 267,
	"./sv.js": 267,
	"./sw": 268,
	"./sw.js": 268,
	"./ta": 269,
	"./ta.js": 269,
	"./te": 270,
	"./te.js": 270,
	"./tet": 271,
	"./tet.js": 271,
	"./th": 272,
	"./th.js": 272,
	"./tl-ph": 273,
	"./tl-ph.js": 273,
	"./tlh": 274,
	"./tlh.js": 274,
	"./tr": 275,
	"./tr.js": 275,
	"./tzl": 276,
	"./tzl.js": 276,
	"./tzm": 277,
	"./tzm-latn": 278,
	"./tzm-latn.js": 278,
	"./tzm.js": 277,
	"./uk": 279,
	"./uk.js": 279,
	"./ur": 280,
	"./ur.js": 280,
	"./uz": 281,
	"./uz-latn": 282,
	"./uz-latn.js": 282,
	"./uz.js": 281,
	"./vi": 283,
	"./vi.js": 283,
	"./x-pseudo": 284,
	"./x-pseudo.js": 284,
	"./yo": 285,
	"./yo.js": 285,
	"./zh-cn": 286,
	"./zh-cn.js": 286,
	"./zh-hk": 287,
	"./zh-hk.js": 287,
	"./zh-tw": 288,
	"./zh-tw.js": 288
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
webpackContext.id = 388;

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events, toast) {
        var _this = this;
        this.events = events;
        this.toast = toast;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.listenToLoginEvents();
        });
    }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-about',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-contact',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Welcome to Ionic!</h2>\n  <p>\n    This starter project comes with simple tabs-based layout for apps\n    that are going to primarily use a Tabbed UI.\n  </p>\n  <p>\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n    update any existing page or create new pages.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 433:
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

/***/ })

},[335]);
//# sourceMappingURL=main.js.map