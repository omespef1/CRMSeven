webpackJsonp([16],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            console.log(data);
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
            selector: 'page-activities-search',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities-search\activities-search.html"*/'<!--\n\n  Generated template for the ActivitiesSearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Actividades</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #AcivitiesList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(activity)" *ngFor="let activity of activitiesList">\n\n          <ion-label>\n\n          {{activity.ACT_NOMB}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities-search\activities-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], ActivitiesSearchPage);
    return ActivitiesSearchPage;
}());

//# sourceMappingURL=activities-search.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event_new_event__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_detail_activity_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(23);
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
        this.selectedDay.setMinutes(0);
        this.selectedDay.setHours(0);
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
        finalDate.setDate(this.selectedDay.getDate() + 7);
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
            selector: 'page-activities',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities\activities.html"*/'<!--\n\n  Generated template for the ActivitiesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{viewTitle}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only  class="BigButton"(click)="addEvent()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <calendar [eventSource]="eventSource"\n\n          [calendarMode]="calendar.mode"\n\n          [currentDate]="calendar.currentDate"\n\n          (onEventSelected)="onEventSelected($event)"\n\n           (onTitleChanged)="onViewTitleChanged($event)"\n\n          (onTimeSelected)="onTimeSelected($event)"\n\n          [noEventsLabel]="Agenda"\n\n          step="30"\n\n          class="calendar">\n\n        </calendar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n        <ion-list #scheduleList>\n\n          <ion-list-header>\n\n            <h2>Próximas</h2>\n\n          </ion-list-header>\n\n          <div *ngFor="let activity of nextActivities">\n\n          <ion-item-divider>\n\n            <h3>{{activity.GrupoHora}}</h3>\n\n          </ion-item-divider>\n\n            <ion-item-group>\n\n              <ion-item-sliding  *ngFor="let agend of activity.Agenda" (click)="openActivity(agend)">\n\n                <button ion-item>\n\n\n\n                 <h3><b>{{agend.AGE_ASUN}}</b></h3>\n\n                 <h4>{{agend.AGE_FINI | digitalDate}} - {{agend.AGE_FFIN | digitalDate}}</h4>\n\n                 <p text-wrap> {{agend.PRO_NOMB}} - {{agend.CON_NOMB}} {{agend.CON_APEL}} - {{agend.ACT_NOMB}}</p>\n\n                  <ion-icon name="clock" item-start></ion-icon>\n\n                 </button>\n\n              </ion-item-sliding>\n\n            </ion-item-group>\n\n          </div>\n\n        </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activities\activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lupa_lupa__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activities_search_activities_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stages_search_stages_search__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invited_invited__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_seven_seven__ = __webpack_require__(14);
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
        this.client = {};
        this.activity = {};
        this.user = {};
        this.newActivity = {};
        this.stage = {};
        var preSelectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.newActivity.Age_Fech = preSelectedDate;
        this.LoadInfo();
    }
    NewEventPage.prototype.ionViewDidLoad = function () {
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
        if (this.validEvent()) {
            this.newActivity.Usu_Codi = this.user.usu_codi;
            this.newActivity.Usu_Ejec = this.user.usu_codi;
            this.newActivity.Act_Codi = this.activity.ACT_CODI;
            this.newActivity.Pro_Cont = this.client.PRO_CONT;
            this.newActivity.Eta_Codi = this.stage.ETA_CODI;
            this.newActivity.Dpr_Codi = this.client.cdpros.DPR_CODI;
            this.newActivity.Con_Codi = this.client.conpr.CON_CODI;
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
        if (this.client.conpr.CON_CODI == null) {
            this.showAlert('Debe seleccionar un contacto ', 'Lo sentimos');
            return false;
        }
        if (this.activity.ACT_CODI == null) {
            this.showAlert('Debe seleccionar una actividad', 'Lo sentimos');
            return false;
        }
        if (this.stage.ETA_CODI == null) {
            this.showAlert('Debe seleccionar una etapa ', 'Lo sentimos');
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
            selector: 'page-new-event',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\new-event\new-event.html"*/'<!--\n\n  Generated template for the NewEventPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Nueva actividad</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()" class="BigButton">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input  type="text" placeholder = "Asunto" [(ngModel)] ="newActivity.Age_Asun"></ion-input>\n\n    </ion-item>\n\n    <ion-item text-wrap button (click)="openLupa()">\n\n     <ion-label>Cliente</ion-label>\n\n     <ion-note  item-end *ngIf="client">\n\n     {{client.PRO_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Detalle cliente</ion-label>\n\n      <ion-note item-end *ngIf="client && client.cdpros">\n\n       {{client.cdpros.DPR_NOMB}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Contacto</ion-label>\n\n      <ion-note item-end *ngIf="client && client.conpr">\n\n      {{client.conpr.CON_NOMB}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item button (click)="openLupaActivities()">\n\n     <ion-label>Actividad</ion-label>\n\n     <ion-note item-end *ngIf="activity">\n\n     {{activity.ACT_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item button (click)="openLupaStages()">\n\n     <ion-label>Etapa proceso</ion-label>\n\n     <ion-note item-end *ngIf="stage">\n\n     {{stage.ETA_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Inicio</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat ="DD/MM/YYYY HH:mm" [(ngModel)] = "newActivity.Age_Fech"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Horas</ion-label>\n\n      <ion-input  type="number" placeholder = "Horas" [(ngModel)] ="newActivity.Age_Dura"></ion-input>\n\n    </ion-item>\n\n    <!-- <ion-item (click)="openInvited()">\n\n      <ion-label>Invitar</ion-label>\n\n      <ion-note item-end *ngIf="invited">\n\n        {{invited.Usu_Nomb}}\n\n      </ion-note>\n\n     </ion-item> -->\n\n    <ion-item>\n\n      <ion-label>Todo el día?</ion-label>\n\n    <ion-toggle [(ngModel)] = "event.allDay"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n<button ion-button full icon-left (click) = "CreateActivity()">\n\n  <ion-icon name ="checkmark"></ion-icon>Añadir evento\n\n</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\new-event\new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LupaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    }
    LupaPage.prototype.terminado = function () {
        console.log('termino');
    };
    LupaPage.prototype.ionViewDidLoad = function () {
    };
    LupaPage.prototype.loadClients = function (value) {
        var _this = this;
        if (value != "") {
            return this._seven.GetFaClien(this.value).then(function (data) {
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
        //Si el valor es vacío ni filtra ndada
        if (!q || q.trim() === '') {
            return;
        }
        //Realiza el filtrado
        this.clientesList = this.clientesList.filter(function (v) { return v.PRO_NOMB.toLowerCase().indexOf(q.toLowerCase()) > -1; });
    };
    LupaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lupa',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\lupa\lupa.html"*/'<!--\n\n  Generated template for the LupaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Clientes</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    [debounce]="500"\n\n    (ionChange)="loadClients($event.value)"\n\n    [showCancelButton]="true"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #clientsList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(client)" *ngFor="let client of clientesList">\n\n          <ion-label>\n\n          {{client.PRO_NOMB}}\n\n          </ion-label>\n\n          <ion-icon name=\'person\' item-start></ion-icon>\n\n        </ion-item>\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\lupa\lupa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], LupaPage);
    return LupaPage;
}());

//# sourceMappingURL=lupa.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StagesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-stages-search',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\stages-search\stages-search.html"*/'<!--\n\n  Generated template for the StagesSearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Etapas</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #AcivitiesList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(stage)" *ngFor="let stage of stagesList">\n\n          <ion-label>\n\n          {{stage.ETA_NOMB}}\n\n          </ion-label>\n\n        </ion-item>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\stages-search\stages-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], StagesSearchPage);
    return StagesSearchPage;
}());

//# sourceMappingURL=stages-search.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invited_invited__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_detail_client_detail__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(23);
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
        console.log(this.activity);
    }
    ActivityDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._user.getUsername().then(function (data) {
            _this.usu_codi = data.toUpperCase();
            console.log(_this.usu_codi);
            _this.activity.USU_PLAN = _this.activity.USU_PLAN.toUpperCase();
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
        var _this = this;
        console.log("invitado");
        this.activity.Inv_Codi = this.invited.Usu_Codi;
        this.activity.Age_Fech = this.activity.AGE_FREG;
        //  this.activity.AGE_FEJE = this.activity.AGE_FREG;
        this._seven.InvitedActivity(this.activity).then(function (data) {
            var datos = data;
            if (datos.State) {
                _this.showAlert('El usuario ha sido invitado a la actividad', 'Listo!');
                return;
            }
            _this.showAlert('Error:' + datos.Message, 'Lo sentimos!');
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
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__invited_invited__["a" /* InvitedPage */], { usu_codi: this.usu_codi });
        modal.present();
        modal.onDidDismiss(function (data) {
            _this.invited = data;
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
    ActivityDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activity-detail\activity-detail.html"*/'<!--\n\n  Generated template for the ActivityDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{activity.AGE_ASUN}}</ion-title>\n\n    <ion-buttons end>\n\n      <button class="BigButton" ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Inicio</ion-label>\n\n      <ion-note item-end>\n\n      {{activity.AGE_FINI | digitalDate}}\n\n      </ion-note>\n\n     </ion-item>\n\n     <ion-item>\n\n     <ion-label>Fin</ion-label>\n\n     <ion-note item-end>\n\n       {{activity.AGE_FFIN | digitalDate}}\n\n     </ion-note>\n\n    </ion-item>\n\n  <ion-item>\n\n    <ion-label>Cliente</ion-label>\n\n    <ion-note item-end (click)="showClient(activity)">\n\n    {{activity.PRO_NOMB}}\n\n    </ion-note>\n\n   </ion-item>\n\n   <ion-item>\n\n     <ion-label>Contacto</ion-label>\n\n     <ion-note   item-end class="wrap-text"  (click)="showContact(activity)">\n\n     {{activity.CON_NOMB}}  {{activity.CON_APEL}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Actividad</ion-label>\n\n      <ion-note item-end>\n\n    {{activity.ACT_NOMB}}\n\n      </ion-note>\n\n     </ion-item>\n\n     <ion-item>\n\n       <ion-label>Asunto</ion-label>\n\n       <ion-note item-end>\n\n    {{activity.AGE_ASUN}}\n\n       </ion-note>\n\n      </ion-item>\n\n      <ion-item button (click)="openInvited()" *ngIf="activity.USU_PLAN == activity.USU_EJEC">\n\n        <ion-label>Invitar</ion-label>\n\n        <ion-note item-end>\n\n          {{invited.Usu_Nomb}}\n\n        </ion-note>\n\n       </ion-item>\n\n\n\n</ion-list>\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button *ngIf="invited" ion-button block color="primary" (click)="AcitityInvited()" [disabled]="activity.USU_PLAN != activity.USU_EJEC">\n\n        <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Invitar\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button block color="danger" (click)="ActivityReject()">\n\n            <ion-icon name="remove-circle"></ion-icon>&nbsp;Cancelar\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\activity-detail\activity-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ActivityDetailPage);
    return ActivityDetailPage;
}());

//# sourceMappingURL=activity-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailPage; });
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


/**
 * Generated class for the ClientDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientDetailPage = (function () {
    function ClientDetailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.client = navParams.get('contact');
        console.log(this.client);
    }
    ClientDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientDetailPage');
    };
    ClientDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClientDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\client-detail\client-detail.html"*/'<!--\n\n  Generated template for the ClientDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle Cliente</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Nombre</ion-label>\n\n      <ion-note item-end>\n\n     {{client.DPR_NOMB}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Teléfono</ion-label>\n\n      <ion-note item-end>\n\n       {{client.PRO_TELE}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Email</ion-label>\n\n      <ion-note item-end>\n\n       {{client.PRO_MAIL}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Direccion</ion-label>\n\n      <ion-note item-end>\n\n       {{client.PRO_DIRE}}\n\n      </ion-note>\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\client-detail\client-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], ClientDetailPage);
    return ClientDetailPage;
}());

//# sourceMappingURL=client-detail.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_email_email__ = __webpack_require__(116);
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
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactDetailPage = (function () {
    function ContactDetailPage(navCtrl, navParams, viewCtrl, callNumber, emailComposer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.modalCtrl = modalCtrl;
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
        this.callNumber.callNumber(number, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ContactDetailPage.prototype.openMail = function (email) {
        var _this = this;
        this.emailComposer.isAvailable().then(function (available) {
            if (available) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_email_email__["a" /* EmailPage */], { 'email': email });
                modal.present();
                //Now we know we can send
            }
        });
    };
    ContactDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact-detail\contact-detail.html"*/'<!--\n\n  Generated template for the ContactDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Detalle Contacto</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Nombre</ion-label>\n\n      <ion-note item-end>\n\n     {{contact.CON_NOMB}} {{contact.CON_APEL}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Cargo</ion-label>\n\n      <ion-note item-end>\n\n       {{contact.CON_CARG}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Email</ion-label>\n\n      <ion-note item-end (click)="openMail(contact.CON_EMAI)">\n\n       {{contact.CON_EMAI}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Teléfono</ion-label>\n\n      <ion-note item-end>\n\n       {{contact.CON_TEL}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Celular</ion-label>\n\n      <ion-note item-end *ngIf="contact.CON_CELU" (clikc)="callContact(contact.CON_CELU)">\n\n       {{contact.CON_CELU}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Dirección</ion-label>\n\n      <ion-note item-end>\n\n       {{contact.CON_DIRE}}\n\n      </ion-note>\n\n    </ion-item>\n\n    <!-- <ion-item (click)="openInvited()">\n\n      <ion-label>Invitar</ion-label>\n\n      <ion-note item-end *ngIf="invited">\n\n        {{invited.Usu_Nomb}}\n\n      </ion-note>\n\n     </ion-item> -->\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact-detail\contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
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
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\email\email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>email</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\email\email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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


//providers

/**
 * Generated class for the ConexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConexPage = (function () {
    function ConexPage(navCtrl, navParams, _seven, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], ConexPage);
    return ConexPage;
}());

//# sourceMappingURL=conex.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-flow-detail',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flow-detail\flow-detail.html"*/'<!--\n\n  Generated template for the FlowDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Caso {{flow.CAS_CONT}}</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only  class="BigButton" (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n     <ion-label>Prioridad</ion-label>\n\n     <ion-note item-end>\n\n    {{flow.SEG_PRIO}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n     <ion-label>Seguimiento</ion-label>\n\n     <ion-note item-end>\n\n  {{flow.SEG_CONT}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n     <ion-label>Asunto</ion-label>\n\n     <ion-note item-end>\n\n     {{flow.SEG_SUBJ}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n     <ion-label>Quién registra</ion-label>\n\n     <ion-note item-end>\n\n      {{flow.USU_NOMB}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n     <ion-label>Solicitado para</ion-label>\n\n     <ion-note item-end>\n\n    {{flow.SOLICITADO}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n     <ion-label>Recibido</ion-label>\n\n     <ion-note item-end>\n\n   {{flow.SEG_FREC| date: \'dd/MM/yyyy\' }} &nbsp;{{flow.SEG_HREC | date: \'h:mm:ss a\'}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n     <ion-label>Límite</ion-label>\n\n     <ion-note item-end>\n\n     {{flow.SEG_FLIM | date: \'dd/MM/yyyy\'}} &nbsp;{{flow.SEG_HLIM | date: \'h:mm:ss a\'}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item *ngIf="flow.ADICIO">\n\n     <ion-label>Datos adicionales</ion-label>\n\n     <ion-note item-end>\n\n       {{flow.ADICIO}}\n\n     </ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Descripción</ion-label>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n        <p ion-text text-wrap>  {{flow.CAS_DESC}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Comentarios para el ejecutor</ion-label>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n\n        <p text-wrap>    {{flow.SEG_COME}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label>Comentarios para el segundo ejecutor</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea [(ngModel)]="flow.COMENTARIOS"  placeholder="Ingrese sus comentarios aquí"></ion-textarea>\n\n    </ion-item>\n\n  </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button block color="primary" (click)="flowAprobment()">\n\n              <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Aprobar\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button block color="danger" (click)="flowReject()">\n\n                  <ion-icon name="remove-circle"></ion-icon>&nbsp;Rechazar\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flow-detail\flow-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], FlowDetailPage);
    return FlowDetailPage;
}());

//# sourceMappingURL=flow-detail.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(23);
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
    function FlowsPage(navCtrl, _seven, toast, _user, modal) {
        this.navCtrl = navCtrl;
        this._seven = _seven;
        this.toast = toast;
        this._user = _user;
        this.modal = modal;
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
            selector: 'page-flows',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flows\flows.html"*/'<!--\n\n  Generated template for the FlowsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      Flujos\n\n    </ion-title>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentFilter()">\n\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n  <ion-refresher-content>\n\n  </ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list #scheduleList>\n\n      <ion-item-group>\n\n        <ion-item-sliding #slidingItem (click)="goDetailsFlow(flow)" class="flujo" [class]= "flow.SEG_PRIO | flows" *ngFor="let flow of flowList">\n\n          <button ion-item>\n\n        <h3>Caso {{flow.CAS_CONT}}</h3>\n\n        <p>\n\n        {{flow.CAS_DESC}}\n\n        </p>\n\n      </button>\n\n        </ion-item-sliding>\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\flows\flows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], FlowsPage);
    return FlowsPage;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conex_conex__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keychain_touch_id__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fingerprint_aio__ = __webpack_require__(299);
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
    function LoginPage(navCtrl, navParams, _seven, alertCtrl, _user, keychainTouchId, platform, faio, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.alertCtrl = alertCtrl;
        this._user = _user;
        this.keychainTouchId = keychainTouchId;
        this.platform = platform;
        this.faio = faio;
        this.modalCtrl = modalCtrl;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.verifyConnections();
        this.GetAccessTouchID();
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        this.TryAccess();
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
            _this.VerifyTouchID();
            _this._user.login(_this.login.username, datos.ObjResult);
        }).catch(function (err) {
            _this.showAlert(err, "Lo sentimos!");
        });
    };
    LoginPage.prototype.GetAccessTouchID = function () {
        var _this = this;
        console.log('entro a get');
        if (this.platform.is("cordova")) {
            this.keychainTouchId.has("password").then(function () {
                _this.touchID = true;
                console.log('clave disponible');
                _this.keychainTouchId.verify("password", "Ingrese su huella dactilar para ingresar").then(function (pass) {
                    console.log('password obtenido');
                    _this._user.getSecureUser().then(function (user) {
                        _this.login.username = user;
                        _this.login.password = pass;
                        console.log('todo ok');
                        _this.TryAccess();
                    });
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
    LoginPage.prototype.verifyConnections = function () {
        var _this = this;
        this._user.getConnectionsPreference().then(function (data) {
            if (!data) {
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__conex_conex__["a" /* ConexPage */]);
                modal.present();
                modal.onDidDismiss(function (conex) {
                    if (conex)
                        _this._user.setConnectionsPreference(true);
                    _this._user.setSavedConnections(conex.CNX_IPSR);
                    _this._seven.setConnection(conex.CNX_IPSR);
                });
            }
            else {
                _this._user.getSavedConnections().then(function (data) {
                    _this._seven.setConnection(data);
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
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-grid>\n\n<ion-row>\n\n	<ion-col class="loginCol">\n\n		<img class="logo" src="assets/imgs/logoseven.png"/>\n\n		<h1>CRM</h1>\n\n	</ion-col>\n\n</ion-row>\n\n	<form  #registerForm="ngForm" class="loginForm">\n\n		<ion-row>\n\n			<ion-col>\n\n					<ion-item>\n\n						<ion-label><ion-icon name="ios-person"></ion-icon></ion-label>\n\n						<ion-input type="text" placeholder="Usuario" name="email" [(ngModel)]="login.username" required></ion-input>\n\n					</ion-item>\n\n\n\n					<ion-item>\n\n						<ion-label><ion-icon name="ios-lock"></ion-icon></ion-label>\n\n						<ion-input type="password" placeholder="Contraseña" name="password" [(ngModel)]="login.password" required></ion-input>\n\n					</ion-item>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col>\n\n				<button ion-button class="submit-btn" full (click)="onLogin()" [disabled]="!registerForm.form.valid">Ingresar</button>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col text-center>\n\n				<div  class="fingerprint" button tappable (click)="GetAccessTouchID()" *ngIf="touchID">\n\n				<img src="assets/imgs/fingerprint.svg">\n\n			</div>\n\n			</ion-col>\n\n		</ion-row>\n\n	</form>\n\n</ion-grid>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<!-- <div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n\n	</div> -->\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(23);
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
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\settings\settings.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Ajustes</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list no-border>\n\n    <ion-list-header>\n\n      Perfil\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-avatar item-start *ngIf="user.Usu_Foto">\n\n      <img [src]="\'data:image/jpg;base64,\'+user.Usu_Foto" />\n\n    </ion-avatar>\n\n    <ion-note item-end>\n\n     {{user.Usu_Nomb}}\n\n    </ion-note>\n\n    </ion-item>\n\n    <ion-list-header>\n\n      Cuenta\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n      <ion-label>\n\n        Notificaciones\n\n      </ion-label>\n\n      <ion-icon name=\'notifications\' item-start></ion-icon>\n\n    </ion-item>\n\n    <ion-item (click)="logOut()">\n\n      <ion-icon name=\'log-out\' item-start></ion-icon>\n\n      Salir\n\n      <ion-note item-end>\n\n      Cerrar sesión\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SevenProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_global__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__ = __webpack_require__(23);
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
  Generated class for the SevenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SevenProvider = (function () {
    function SevenProvider(http, load, _storage, _userdata) {
        this.http = http;
        this.load = load;
        this._storage = _storage;
        this._userdata = _userdata;
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
    SevenProvider.prototype.GetFaClien = function (value) {
        var _this = this;
        // return  this._storage.get("faClien").then(value=>{
        // console.log(value);
        // if(value!=undefined && !refresh){
        //   console.log("speakers leídos de memoria");
        //   return value;
        // }
        return this.getData('Actividades/cargarClientescrm?filter=' + value)
            .then(function (data) {
            _this._userdata.setFaClien(data);
            console.log("clientes leídos de bd");
            return data;
        })
            .catch(function (error) {
            return undefined;
        });
        //
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
    SevenProvider.prototype.setConnection = function (connection) {
        console.log(connection);
        __WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl = connection;
    };
    SevenProvider.prototype.getData = function (apiAction) {
        var _this = this;
        var load = this.load.create({
            content: 'cargando...'
        });
        load.present();
        return new Promise(function (resolve) {
            console.log(apiAction);
            console.log(__WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__assets_global__["a" /* Globals */].ClientUrl + apiAction).subscribe(function (data) {
                resolve(data);
                load.dismiss();
            }, function (err) {
                console.log(err);
                load.dismiss();
            });
        });
    };
    SevenProvider.prototype.postData = function (data, apiAction) {
        var _this = this;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], SevenProvider);
    return SevenProvider;
}());

//# sourceMappingURL=seven.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activities-search/activities-search.module": [
		444,
		15
	],
	"../pages/activities/activities.module": [
		445,
		14
	],
	"../pages/activity-detail/activity-detail.module": [
		446,
		13
	],
	"../pages/client-detail/client-detail.module": [
		447,
		12
	],
	"../pages/conex/conex.module": [
		448,
		11
	],
	"../pages/contact-detail/contact-detail.module": [
		449,
		10
	],
	"../pages/email/email.module": [
		450,
		9
	],
	"../pages/flow-detail/flow-detail.module": [
		451,
		8
	],
	"../pages/flows/flows.module": [
		452,
		7
	],
	"../pages/invited/invited.module": [
		453,
		6
	],
	"../pages/login/login.module": [
		454,
		5
	],
	"../pages/lupa/lupa.module": [
		455,
		4
	],
	"../pages/new-event/new-event.module": [
		456,
		3
	],
	"../pages/settings/settings.module": [
		457,
		2
	],
	"../pages/stages-search/stages-search.module": [
		458,
		1
	],
	"../pages/touch-id/touch-id.module": [
		459,
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
webpackAsyncContext.id = 175;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(85);
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
    UserDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], UserDataProvider);
    return UserDataProvider;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flows_flows__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities__ = __webpack_require__(109);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Flujos" tabIcon="git-network"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Ajustes" tabIcon="cog"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchIdPage; });
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


/**
 * Generated class for the TouchIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TouchIdPage = (function () {
    function TouchIdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TouchIdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TouchIdPage');
    };
    TouchIdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-touch-id',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\touch-id\touch-id.html"*/'<!--\n\n  Generated template for the TouchIdPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col text-center>\n\n        <div  class="fingerprint">\n\n        <img src="assets/imgs/fingerprint.svg">\n\n      </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-label text-wrap>\n\n          Tu dispositivo posee lector de huellas.Mediante esta autenticación podrás ingresar a la aplicación directamente.\n\n        </ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n\n\n      <ion-col>\n\n        <button ion-button block color="danger" icon-left>\n\n            <ion-icon name="alarm"></ion-icon>\n\n          Más tarde\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block color="primary" icon-left>\n\n          <ion-icon name="checkmark-circle"></ion-icon>\n\n          Entendido\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\touch-id\touch-id.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TouchIdPage);
    return TouchIdPage;
}());

//# sourceMappingURL=touch-id.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_calendar__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_flows_flows__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_flow_detail_flow_detail__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_conex_conex__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_touch_id_touch_id__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_contact_detail_contact_detail__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_client_detail_client_detail__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_email_email__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_user_data_user_data__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_flows_flows__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_digital_date_digital_date__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_keychain_touch_id__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_fingerprint_aio__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_call_number__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_email_composer__ = __webpack_require__(297);
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
                __WEBPACK_IMPORTED_MODULE_32__pipes_flows_flows__["a" /* FlowsPipe */],
                __WEBPACK_IMPORTED_MODULE_33__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */],
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
                __WEBPACK_IMPORTED_MODULE_29__pages_email_email__["a" /* EmailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activities-search/activities-search.module#ActivitiesSearchPageModule', name: 'ActivitiesSearchPage', segment: 'activities-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-detail/activity-detail.module#ActivityDetailPageModule', name: 'ActivityDetailPage', segment: 'activity-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-detail/client-detail.module#ClientDetailPageModule', name: 'ClientDetailPage', segment: 'client-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conex/conex.module#ConexPageModule', name: 'ConexPage', segment: 'conex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-detail/contact-detail.module#ContactDetailPageModule', name: 'ContactDetailPage', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flow-detail/flow-detail.module#FlowDetailPageModule', name: 'FlowDetailPage', segment: 'flow-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows/flows.module#FlowsPageModule', name: 'FlowsPage', segment: 'flows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invited/invited.module#InvitedPageModule', name: 'InvitedPage', segment: 'invited', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lupa/lupa.module#LupaPageModule', name: 'LupaPage', segment: 'lupa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stages-search/stages-search.module#StagesSearchPageModule', name: 'StagesSearchPage', segment: 'stages-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/touch-id/touch-id.module#TouchIdPageModule', name: 'TouchIdPage', segment: 'touch-id', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__["a" /* InvitedPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_conex_conex__["a" /* ConexPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_touch_id_touch_id__["a" /* TouchIdPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_contact_detail_contact_detail__["a" /* ContactDetailPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_client_detail_client_detail__["a" /* ClientDetailPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_email_email__["a" /* EmailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_seven_seven__["a" /* SevenProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_email_composer__["a" /* EmailComposer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var Globals = (function () {
    function Globals() {
    }
    Globals.CentralizationUrl = 'http://consultoria.digitalware.co/seven_crm/centralizacion/api/GnConex/GetConnections';
    return Globals;
}());

;
//# sourceMappingURL=global.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 176,
	"./af.js": 176,
	"./ar": 177,
	"./ar-dz": 178,
	"./ar-dz.js": 178,
	"./ar-kw": 179,
	"./ar-kw.js": 179,
	"./ar-ly": 180,
	"./ar-ly.js": 180,
	"./ar-ma": 181,
	"./ar-ma.js": 181,
	"./ar-sa": 182,
	"./ar-sa.js": 182,
	"./ar-tn": 183,
	"./ar-tn.js": 183,
	"./ar.js": 177,
	"./az": 184,
	"./az.js": 184,
	"./be": 185,
	"./be.js": 185,
	"./bg": 186,
	"./bg.js": 186,
	"./bm": 187,
	"./bm.js": 187,
	"./bn": 188,
	"./bn.js": 188,
	"./bo": 189,
	"./bo.js": 189,
	"./br": 190,
	"./br.js": 190,
	"./bs": 191,
	"./bs.js": 191,
	"./ca": 192,
	"./ca.js": 192,
	"./cs": 193,
	"./cs.js": 193,
	"./cv": 194,
	"./cv.js": 194,
	"./cy": 195,
	"./cy.js": 195,
	"./da": 196,
	"./da.js": 196,
	"./de": 197,
	"./de-at": 198,
	"./de-at.js": 198,
	"./de-ch": 199,
	"./de-ch.js": 199,
	"./de.js": 197,
	"./dv": 200,
	"./dv.js": 200,
	"./el": 201,
	"./el.js": 201,
	"./en-au": 202,
	"./en-au.js": 202,
	"./en-ca": 203,
	"./en-ca.js": 203,
	"./en-gb": 204,
	"./en-gb.js": 204,
	"./en-ie": 205,
	"./en-ie.js": 205,
	"./en-nz": 206,
	"./en-nz.js": 206,
	"./eo": 207,
	"./eo.js": 207,
	"./es": 208,
	"./es-do": 209,
	"./es-do.js": 209,
	"./es-us": 210,
	"./es-us.js": 210,
	"./es.js": 208,
	"./et": 211,
	"./et.js": 211,
	"./eu": 212,
	"./eu.js": 212,
	"./fa": 213,
	"./fa.js": 213,
	"./fi": 214,
	"./fi.js": 214,
	"./fo": 215,
	"./fo.js": 215,
	"./fr": 216,
	"./fr-ca": 217,
	"./fr-ca.js": 217,
	"./fr-ch": 218,
	"./fr-ch.js": 218,
	"./fr.js": 216,
	"./fy": 219,
	"./fy.js": 219,
	"./gd": 220,
	"./gd.js": 220,
	"./gl": 221,
	"./gl.js": 221,
	"./gom-latn": 222,
	"./gom-latn.js": 222,
	"./gu": 223,
	"./gu.js": 223,
	"./he": 224,
	"./he.js": 224,
	"./hi": 225,
	"./hi.js": 225,
	"./hr": 226,
	"./hr.js": 226,
	"./hu": 227,
	"./hu.js": 227,
	"./hy-am": 228,
	"./hy-am.js": 228,
	"./id": 229,
	"./id.js": 229,
	"./is": 230,
	"./is.js": 230,
	"./it": 231,
	"./it.js": 231,
	"./ja": 232,
	"./ja.js": 232,
	"./jv": 233,
	"./jv.js": 233,
	"./ka": 234,
	"./ka.js": 234,
	"./kk": 235,
	"./kk.js": 235,
	"./km": 236,
	"./km.js": 236,
	"./kn": 237,
	"./kn.js": 237,
	"./ko": 238,
	"./ko.js": 238,
	"./ky": 239,
	"./ky.js": 239,
	"./lb": 240,
	"./lb.js": 240,
	"./lo": 241,
	"./lo.js": 241,
	"./lt": 242,
	"./lt.js": 242,
	"./lv": 243,
	"./lv.js": 243,
	"./me": 244,
	"./me.js": 244,
	"./mi": 245,
	"./mi.js": 245,
	"./mk": 246,
	"./mk.js": 246,
	"./ml": 247,
	"./ml.js": 247,
	"./mr": 248,
	"./mr.js": 248,
	"./ms": 249,
	"./ms-my": 250,
	"./ms-my.js": 250,
	"./ms.js": 249,
	"./mt": 251,
	"./mt.js": 251,
	"./my": 252,
	"./my.js": 252,
	"./nb": 253,
	"./nb.js": 253,
	"./ne": 254,
	"./ne.js": 254,
	"./nl": 255,
	"./nl-be": 256,
	"./nl-be.js": 256,
	"./nl.js": 255,
	"./nn": 257,
	"./nn.js": 257,
	"./pa-in": 258,
	"./pa-in.js": 258,
	"./pl": 259,
	"./pl.js": 259,
	"./pt": 260,
	"./pt-br": 261,
	"./pt-br.js": 261,
	"./pt.js": 260,
	"./ro": 262,
	"./ro.js": 262,
	"./ru": 263,
	"./ru.js": 263,
	"./sd": 264,
	"./sd.js": 264,
	"./se": 265,
	"./se.js": 265,
	"./si": 266,
	"./si.js": 266,
	"./sk": 267,
	"./sk.js": 267,
	"./sl": 268,
	"./sl.js": 268,
	"./sq": 269,
	"./sq.js": 269,
	"./sr": 270,
	"./sr-cyrl": 271,
	"./sr-cyrl.js": 271,
	"./sr.js": 270,
	"./ss": 272,
	"./ss.js": 272,
	"./sv": 273,
	"./sv.js": 273,
	"./sw": 274,
	"./sw.js": 274,
	"./ta": 275,
	"./ta.js": 275,
	"./te": 276,
	"./te.js": 276,
	"./tet": 277,
	"./tet.js": 277,
	"./th": 278,
	"./th.js": 278,
	"./tl-ph": 279,
	"./tl-ph.js": 279,
	"./tlh": 280,
	"./tlh.js": 280,
	"./tr": 281,
	"./tr.js": 281,
	"./tzl": 282,
	"./tzl.js": 282,
	"./tzm": 283,
	"./tzm-latn": 284,
	"./tzm-latn.js": 284,
	"./tzm.js": 283,
	"./uk": 285,
	"./uk.js": 285,
	"./ur": 286,
	"./ur.js": 286,
	"./uz": 287,
	"./uz-latn": 288,
	"./uz-latn.js": 288,
	"./uz.js": 287,
	"./vi": 289,
	"./vi.js": 289,
	"./x-pseudo": 290,
	"./x-pseudo.js": 290,
	"./yo": 291,
	"./yo.js": 291,
	"./zh-cn": 292,
	"./zh-cn.js": 292,
	"./zh-hk": 293,
	"./zh-hk.js": 293,
	"./zh-tw": 294,
	"./zh-tw.js": 294
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
webpackContext.id = 400;

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(23);
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
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
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
                console.log('entro logueado');
                _this._userdata.getUsername().then(function (user) {
                    _this._userdata.getUserInfo().then(function (info) {
                        _this._userdata.login(user, info);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 439:
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
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 440:
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
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 441:
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 442:
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

/***/ 443:
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
        console.log(value);
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

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the InvitedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitedPage = (function () {
    function InvitedPage(navCtrl, navParams, _seven, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._seven = _seven;
        this.viewCtrl = viewCtrl;
        this.user = navParams.get('usu_codi');
    }
    InvitedPage.prototype.ionViewDidLoad = function () {
        this.LoadUsers();
    };
    InvitedPage.prototype.LoadUsers = function () {
        var _this = this;
        // let loading = this.loading.create({
        //   content:'Cargando...'
        // });
        // loading.present();
        this._seven.GetUsers(this.user).then(function (data) {
            console.log(data);
            _this.users = data;
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
    InvitedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invited',template:/*ion-inline-start:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\invited\invited.html"*/'<!--\n\n  Generated template for the InvitedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Invitar</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="close()">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-searchbar\n\n    [(ngModel)]="value"\n\n    (ionChange)="getItems($event.value)"\n\n    [showCancelButton]="shouldShowCancel"\n\n    placeholder="Buscar">\n\n  </ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list #clientsList>\n\n      <ion-item-group>\n\n        <ion-item (click)="closeLupa(user)" *ngFor="let user of usersList">\n\n          <ion-label>\n\n          {{user.Usu_Nomb}}\n\n          </ion-label>\n\n          <ion-icon name=\'person\' item-start></ion-icon>\n\n        </ion-item>\n\n      </ion-item-group>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\omarp\Documents\GitHub\CRMSeven\src\pages\invited\invited.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], InvitedPage);
    return InvitedPage;
}());

//# sourceMappingURL=invited.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map