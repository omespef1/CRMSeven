webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event_new_event__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesPage = (function () {
    function ActivitiesPage(navCtrl, navParams, alert, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.modal = modal;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesPage');
    };
    ActivitiesPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ActivitiesPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    ActivitiesPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_3_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_3_moment__(event.endTime).format('LLLL');
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
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/'<!--\n  Generated template for the ActivitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{viewTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n           (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          step="30"\n          class="calendar">\n        </calendar>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
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
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewEventPage = (function () {
    function NewEventPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        var preSelectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preSelectedDate;
        this.event.endTime = preSelectedDate;
    }
    NewEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewEventPage');
    };
    NewEventPage.prototype.save = function () {
        this.viewCtrl.dismiss(this.event);
    };
    NewEventPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NewEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-event',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/'<!--\n  Generated template for the NewEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>    \n    <ion-title>Detalle de actividad</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Título" [(ngModel)] ="event.title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Inicio </ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat ="MM/DD/YYYY HH:mm" [(ngModel)] = "event.startTime" [min] ="minDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Fin</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat ="MM/DD/YYYY HH:mm" [(ngModel)] = "event.endTime" [min] ="minDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Todo el día?</ion-label>\n    <ion-toggle [(ngModel)] = "event.allDay"></ion-toggle>\n    </ion-item>\n  </ion-list>\n<button ion-button full icon-left (click) = "save()">\n  <ion-icon name ="checkmark"></ion-icon>Añadir evento\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the FlowDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlowDetailPage = (function () {
    function FlowDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flow = navParams.get('flow');
    }
    FlowDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowDetailPage');
    };
    FlowDetailPage.prototype.flowAprobment = function () {
    };
    FlowDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flow-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/'<!--\n  Generated template for the FlowDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Caso {{flow.CAS_CONT}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n\n      <ion-item-divider>\n\n        <b>Prioridad:&nbsp;</b> {{flow.SEG_PRIO}}<br>\n        <b>Seguimiento:&nbsp;</b>  {{flow.SEG_CONT}}<br>\n        <b>Asunto:&nbsp;</b>{{flow.SEG_SUBJ}}<br>\n        <b>Quién registra:&nbsp;</b>{{flow.USU_NOMB}}\n        <b *ngIf="flow.SOLICITADO">Solicitado para:&nbsp;</b> <p> {{flow.SOLICITADO}}</p>\n        <b>Descripción:&nbsp;</b>\n\n          <p text-wrap>  {{flow.CAS_DESC}}</p>\n\n        <b>Fecha de recibido:&nbsp;</b> {{flow.SEG_FREC| date: \'dd/MM/yyyy\' }} &nbsp;{{flow.SEG_HREC | date: \'h:mm:ss a\'}} <br>\n        <b>Fecha Límite:&nbsp;</b>{{flow.SEG_FLIM | date: \'dd/MM/yyyy\'}} &nbsp;{{flow.SEG_HLIM | date: \'h:mm:ss a\'}}<br />\n        <h3 *ngIf="flow.ADICIO">Datos Adicionales:&nbsp;</h3> {{flow.ADICIO}}<br>\n\n      </ion-item-divider>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-item-divider sticky>\nComentarios para el ejecutor\n      </ion-item-divider>\n      <ion-item>\n        <p text-wrap>    {{flow.SEG_COME}}</p>\n      </ion-item>\n\n      <ion-item-divider>\n\n        <ion-textarea placeholder="Comentarios para el siguiente ejecutor"></ion-textarea>\n      </ion-item-divider>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button block color="primary">\n              <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Aprobar\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button block color="danger">\n  <ion-icon name="remove-circle"></ion-icon>&nbsp;Rechazar\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FlowDetailPage);
    return FlowDetailPage;
}());

//# sourceMappingURL=flow-detail.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(280);
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
    function FlowsPage(navCtrl, _seven, toast) {
        this.navCtrl = navCtrl;
        this._seven = _seven;
        this.toast = toast;
        this.value = '';
    }
    FlowsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowsPage');
        this.getFlows();
    };
    FlowsPage.prototype.goDetailsFlow = function (flow) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__["a" /* FlowDetailPage */], { 'flow': flow });
    };
    FlowsPage.prototype.getFlows = function () {
        var _this = this;
        this._seven.getFlows('102', 'seven12').then(function (data) {
            console.log(data);
            _this.flows = data;
            _this.initializeItems();
        }).catch(function (err) {
            console.log(err);
            //Error
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
        this._seven.getFlows('102', 'seven12').then(function (data) {
            console.log(data);
            _this.flows = data;
            _this.initializeItems();
            refresher.complete();
            _this.showMessage('Flujos actualizados!');
        }).catch(function (err) {
            console.log(err);
            //Error
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
            selector: 'page-flows',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/'<!--\n  Generated template for the FlowsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Flujos\n    </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content>\n  </ion-refresher-content>\n  </ion-refresher>\n  <ion-list #scheduleList>\n      <ion-item-group *ngFor="let flow of flowList">\n        <ion-item-sliding #slidingItem (click)="goDetailsFlow(flow)" class="flujo" [class]= "flow.SEG_PRIO | flows">\n          <button ion-item>\n        <h3>Caso {{flow.CAS_CONT}}</h3>\n        <p>\n        {{flow.CAS_DESC}}\n        </p>\n      </button>\n        </ion-item-sliding>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], FlowsPage);
    return FlowsPage;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-border>\n\n    <ion-list-header>\n      Cuenta\n    </ion-list-header>\n\n\n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Notificaciones\n      </ion-label>\n      <ion-icon name=\'notifications\' item-start></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'log-out\' item-start></ion-icon>\n      Salir\n      <ion-note item-end>\n      Cerrar sesión\n      </ion-note>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-icon name=\'wine\' item-start></ion-icon>\n      Mead Drinking\n      <ion-note item-end>Yes please</ion-note>\n    </ion-item>\n\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      Friends\n    </ion-list-header>\n\n\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activities/activities.module": [
		421,
		5
	],
	"../pages/flow-detail/flow-detail.module": [
		422,
		4
	],
	"../pages/flows/flows.module": [
		423,
		3
	],
	"../pages/login/login.module": [
		424,
		0
	],
	"../pages/new-event/new-event.module": [
		425,
		2
	],
	"../pages/settings/settings.module": [
		426,
		1
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SevenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(281);
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
    SevenProvider.prototype.getFlows = function (emp_codi, usu_codi) {
        return this.getData('Flujos/FlujosAdm?emp_codi=102&usu_codi=seven12');
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
    SevenProvider.prototype.postData = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users', JSON.stringify(data))
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

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flows_flows__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities__ = __webpack_require__(103);
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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_activities_activities__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_flows_flows__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_flow_detail_flow_detail__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_new_event_new_event__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_seven_seven__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic2_calendar__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_flows_flows__ = __webpack_require__(420);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//pages








//PipesModule

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_flows_flows__["a" /* FlowsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_flow_detail_flow_detail__["a" /* FlowDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_flows_flows__["a" /* FlowsPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pages_new_event_new_event__["a" /* NewEventPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flow-detail/flow-detail.module#FlowDetailPageModule', name: 'FlowDetailPage', segment: 'flow-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows/flows.module#FlowsPageModule', name: 'FlowsPage', segment: 'flows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_18_ionic2_calendar__["a" /* NgCalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_flows_flows__["a" /* FlowsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_flow_detail_flow_detail__["a" /* FlowDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_new_event_new_event__["a" /* NewEventPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_seven_seven__["a" /* SevenProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 162,
	"./af.js": 162,
	"./ar": 163,
	"./ar-dz": 164,
	"./ar-dz.js": 164,
	"./ar-kw": 165,
	"./ar-kw.js": 165,
	"./ar-ly": 166,
	"./ar-ly.js": 166,
	"./ar-ma": 167,
	"./ar-ma.js": 167,
	"./ar-sa": 168,
	"./ar-sa.js": 168,
	"./ar-tn": 169,
	"./ar-tn.js": 169,
	"./ar.js": 163,
	"./az": 170,
	"./az.js": 170,
	"./be": 171,
	"./be.js": 171,
	"./bg": 172,
	"./bg.js": 172,
	"./bm": 173,
	"./bm.js": 173,
	"./bn": 174,
	"./bn.js": 174,
	"./bo": 175,
	"./bo.js": 175,
	"./br": 176,
	"./br.js": 176,
	"./bs": 177,
	"./bs.js": 177,
	"./ca": 178,
	"./ca.js": 178,
	"./cs": 179,
	"./cs.js": 179,
	"./cv": 180,
	"./cv.js": 180,
	"./cy": 181,
	"./cy.js": 181,
	"./da": 182,
	"./da.js": 182,
	"./de": 183,
	"./de-at": 184,
	"./de-at.js": 184,
	"./de-ch": 185,
	"./de-ch.js": 185,
	"./de.js": 183,
	"./dv": 186,
	"./dv.js": 186,
	"./el": 187,
	"./el.js": 187,
	"./en-au": 188,
	"./en-au.js": 188,
	"./en-ca": 189,
	"./en-ca.js": 189,
	"./en-gb": 190,
	"./en-gb.js": 190,
	"./en-ie": 191,
	"./en-ie.js": 191,
	"./en-nz": 192,
	"./en-nz.js": 192,
	"./eo": 193,
	"./eo.js": 193,
	"./es": 194,
	"./es-do": 195,
	"./es-do.js": 195,
	"./es-us": 196,
	"./es-us.js": 196,
	"./es.js": 194,
	"./et": 197,
	"./et.js": 197,
	"./eu": 198,
	"./eu.js": 198,
	"./fa": 199,
	"./fa.js": 199,
	"./fi": 200,
	"./fi.js": 200,
	"./fo": 201,
	"./fo.js": 201,
	"./fr": 202,
	"./fr-ca": 203,
	"./fr-ca.js": 203,
	"./fr-ch": 204,
	"./fr-ch.js": 204,
	"./fr.js": 202,
	"./fy": 205,
	"./fy.js": 205,
	"./gd": 206,
	"./gd.js": 206,
	"./gl": 207,
	"./gl.js": 207,
	"./gom-latn": 208,
	"./gom-latn.js": 208,
	"./gu": 209,
	"./gu.js": 209,
	"./he": 210,
	"./he.js": 210,
	"./hi": 211,
	"./hi.js": 211,
	"./hr": 212,
	"./hr.js": 212,
	"./hu": 213,
	"./hu.js": 213,
	"./hy-am": 214,
	"./hy-am.js": 214,
	"./id": 215,
	"./id.js": 215,
	"./is": 216,
	"./is.js": 216,
	"./it": 217,
	"./it.js": 217,
	"./ja": 218,
	"./ja.js": 218,
	"./jv": 219,
	"./jv.js": 219,
	"./ka": 220,
	"./ka.js": 220,
	"./kk": 221,
	"./kk.js": 221,
	"./km": 222,
	"./km.js": 222,
	"./kn": 223,
	"./kn.js": 223,
	"./ko": 224,
	"./ko.js": 224,
	"./ky": 225,
	"./ky.js": 225,
	"./lb": 226,
	"./lb.js": 226,
	"./lo": 227,
	"./lo.js": 227,
	"./lt": 228,
	"./lt.js": 228,
	"./lv": 229,
	"./lv.js": 229,
	"./me": 230,
	"./me.js": 230,
	"./mi": 231,
	"./mi.js": 231,
	"./mk": 232,
	"./mk.js": 232,
	"./ml": 233,
	"./ml.js": 233,
	"./mr": 234,
	"./mr.js": 234,
	"./ms": 235,
	"./ms-my": 236,
	"./ms-my.js": 236,
	"./ms.js": 235,
	"./my": 237,
	"./my.js": 237,
	"./nb": 238,
	"./nb.js": 238,
	"./ne": 239,
	"./ne.js": 239,
	"./nl": 240,
	"./nl-be": 241,
	"./nl-be.js": 241,
	"./nl.js": 240,
	"./nn": 242,
	"./nn.js": 242,
	"./pa-in": 243,
	"./pa-in.js": 243,
	"./pl": 244,
	"./pl.js": 244,
	"./pt": 245,
	"./pt-br": 246,
	"./pt-br.js": 246,
	"./pt.js": 245,
	"./ro": 247,
	"./ro.js": 247,
	"./ru": 248,
	"./ru.js": 248,
	"./sd": 249,
	"./sd.js": 249,
	"./se": 250,
	"./se.js": 250,
	"./si": 251,
	"./si.js": 251,
	"./sk": 252,
	"./sk.js": 252,
	"./sl": 253,
	"./sl.js": 253,
	"./sq": 254,
	"./sq.js": 254,
	"./sr": 255,
	"./sr-cyrl": 256,
	"./sr-cyrl.js": 256,
	"./sr.js": 255,
	"./ss": 257,
	"./ss.js": 257,
	"./sv": 258,
	"./sv.js": 258,
	"./sw": 259,
	"./sw.js": 259,
	"./ta": 260,
	"./ta.js": 260,
	"./te": 261,
	"./te.js": 261,
	"./tet": 262,
	"./tet.js": 262,
	"./th": 263,
	"./th.js": 263,
	"./tl-ph": 264,
	"./tl-ph.js": 264,
	"./tlh": 265,
	"./tlh.js": 265,
	"./tr": 266,
	"./tr.js": 266,
	"./tzl": 267,
	"./tzl.js": 267,
	"./tzm": 268,
	"./tzm-latn": 269,
	"./tzm-latn.js": 269,
	"./tzm.js": 268,
	"./uk": 270,
	"./uk.js": 270,
	"./ur": 271,
	"./ur.js": 271,
	"./uz": 272,
	"./uz-latn": 273,
	"./uz-latn.js": 273,
	"./uz.js": 272,
	"./vi": 274,
	"./vi.js": 274,
	"./x-pseudo": 275,
	"./x-pseudo.js": 275,
	"./yo": 276,
	"./yo.js": 276,
	"./zh-cn": 277,
	"./zh-cn.js": 277,
	"./zh-hk": 278,
	"./zh-hk.js": 278,
	"./zh-tw": 279,
	"./zh-tw.js": 279
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
webpackContext.id = 373;

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(324);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
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

},[325]);
//# sourceMappingURL=main.js.map