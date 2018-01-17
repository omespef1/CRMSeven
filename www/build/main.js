webpackJsonp([17],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-activities-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities-search/activities-search.html"*/'<!--\n  Generated template for the ActivitiesSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Actividades</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #AcivitiesList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(activity)" *ngFor="let activity of activitiesList">\n          <ion-label>\n          {{activity.ACT_NOMB}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities-search/activities-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ActivitiesSearchPage);
    return ActivitiesSearchPage;
}());

//# sourceMappingURL=activities-search.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invited_invited__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_detail_client_detail__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_detail_contact_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(18);
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
    ActivityDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activity-detail/activity-detail.html"*/'<!--\n  Generated template for the ActivityDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{activity.AGE_ASUN}}</ion-title>\n    <ion-buttons end>\n      <button class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Detalles\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Inicio</ion-label>\n      <ion-note item-end>\n      {{activity.AGE_FINI | digitalDate}}\n      </ion-note>\n     </ion-item>\n     <ion-item>\n     <ion-label>Fin</ion-label>\n     <ion-note item-end>\n       {{activity.AGE_FFIN | digitalDate}}\n     </ion-note>\n    </ion-item>\n  <ion-item>\n    <ion-label>Cliente</ion-label>\n    <ion-note item-end (click)="showClient(activity)">\n    {{activity.PRO_NOMB}}\n    </ion-note>\n   </ion-item>\n   <ion-item>\n     <ion-label>Contacto</ion-label>\n     <ion-note   item-end class="wrap-text"  (click)="showContact(activity)">\n     {{activity.CON_NOMB}}  {{activity.CON_APEL}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Actividad</ion-label>\n      <ion-note item-end>\n    {{activity.ACT_NOMB}}\n      </ion-note>\n     </ion-item>\n     <ion-item>\n       <ion-label>Asunto</ion-label>\n       <ion-note item-end>\n    {{activity.AGE_ASUN}}\n       </ion-note>\n      </ion-item>\n      <ion-list-header>\n        Definir\n      </ion-list-header>\n      <ion-item (click)="showStates()">\n        <ion-label>\n          Estado\n        </ion-label>\n        <ion-note item-end>\n          {{activity.AGE_ESTA}}\n        </ion-note>\n      </ion-item>\n      <ion-item (click)="showResults()">\n        <ion-label>\n              Resultado\n        </ion-label>\n        <ion-note item-end>\n          {{activity.AGE_RESU}}\n        </ion-note>\n      </ion-item>\n      <ion-item button (click)="openInvited()" *ngIf="activity.USU_PLAN == activity.USU_EJEC">\n        <ion-label>Invitar</ion-label>\n        <ion-note item-end>\n          {{invited.Usu_Nomb}}\n        </ion-note>\n       </ion-item>\n\n</ion-list>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <button *ngIf="invited" ion-button block color="primary" (click)="AcitityInvited()" [disabled]="activity.USU_PLAN != activity.USU_EJEC">\n        <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Invitar\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button block color="danger" (click)="ActivityReject()">\n            <ion-icon name="remove-circle"></ion-icon>&nbsp;Cancelar\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <button ion-button block color="primary" (click)="UpdateAgend()">\n      <ion-icon name="checkmark-circle" icon-left>\n      </ion-icon>&nbsp;Hecho\n\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activity-detail/activity-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActivityDetailPage);
    return ActivityDetailPage;
}());

//# sourceMappingURL=activity-detail.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(18);
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
    function ClientDetailPage(navCtrl, navParams, viewCtrl, _user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._user = _user;
        this.client = navParams.get('contact');
        console.log(this.client);
    }
    ClientDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientDetailPage');
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
    ClientDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/client-detail/client-detail.html"*/'<!--\n  Generated template for the ClientDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle Cliente</ion-title>\n    <ion-buttons end>\n      <button class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-note item-end>\n     {{client.DPR_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Teléfono</ion-label>\n      <ion-note item-end *ngIf="client.PRO_TELE" (click)="callContact(client.PRO_TELE)">\n       {{client.PRO_TELE}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-note item-end *ngIf="client.PRO_MAIL" (click)="openMail(client.PRO_MAIL)">\n       {{client.PRO_MAIL}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Direccion</ion-label>\n      <ion-note item-end>\n       {{client.PRO_DIRE}}\n      </ion-note>\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/client-detail/client-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ClientDetailPage);
    return ClientDetailPage;
}());

//# sourceMappingURL=client-detail.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(18);
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
            selector: 'page-contact-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact-detail/contact-detail.html"*/'<!--\n  Generated template for the ContactDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Detalle Contacto</ion-title>\n    <ion-buttons end>\n      <button class="BigButton" ion-button icon-only (click)="close()">\n        <ion-icon name="close" ></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Título</ion-label>\n      <ion-note item-end>\n       {{contact.ITE_TITU}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-note item-end>\n     {{contact.CON_NOMB}} {{contact.CON_APEL}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Cargo</ion-label>\n      <ion-note item-end>\n       {{contact.CON_CARG}}\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-note item-end (click)="openMail(contact.CON_EMAI)">\n       {{contact.CON_EMAI}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Teléfono</ion-label>\n      <ion-note item-end *ngIf="contact.CON_TEL" (click)="callContact(contact.CON_TEL)">\n       {{contact.CON_TEL}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Celular</ion-label>\n      <ion-note item-end *ngIf="contact.CON_CELU" (click)="callContact(contact.CON_CELU)">\n       {{contact.CON_CELU}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dirección</ion-label>\n      <ion-note item-end>\n       {{contact.CON_DIRE}}\n      </ion-note>\n    </ion-item>\n    <!-- <ion-item (click)="openInvited()">\n      <ion-label>Invitar</ion-label>\n      <ion-note item-end *ngIf="invited">\n        {{invited.Usu_Nomb}}\n      </ion-note>\n     </ion-item> -->\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/contact-detail/contact-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
    ], ContactDetailPage);
    return ContactDetailPage;
}());

//# sourceMappingURL=contact-detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_event_new_event__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_detail_activity_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(18);
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
            selector: 'page-activities',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/'<!--\n  Generated template for the ActivitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{viewTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  class="BigButton"(click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n           (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          [noEventsLabel]="Agenda"\n          step="30"\n          class="calendar">\n        </calendar>\n</ion-header>\n\n\n<ion-content>\n\n\n        <ion-list #scheduleList>\n          <ion-list-header>\n            <h2>Próximas</h2>\n          </ion-list-header>\n          <div *ngFor="let activity of nextActivities">\n          <ion-item-divider>\n            <h3>{{activity.GrupoHora}}</h3>\n          </ion-item-divider>\n            <ion-item-group>\n              <ion-item-sliding  *ngFor="let agend of activity.Agenda" (click)="openActivity(agend)">\n                <button ion-item>\n                  <h3><b>{{agend.AGE_FINI | digitalDate}} - {{agend.AGE_FFIN | digitalDate}}</b></h3>\n                  <h4>{{agend.PRO_NOMB}}</h4>\n\n                 <p text-wrap>{{agend.CON_NOMB}} {{agend.CON_APEL}} - {{agend.AGE_ASUN}} - {{agend.ACT_NOMB}}</p>\n                  <ion-icon name="clock" item-start></ion-icon>\n                 </button>\n              </ion-item-sliding>\n            </ion-item-group>\n          </div>\n        </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__["a" /* UserDataProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lupa_lupa__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activities_search_activities_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stages_search_stages_search__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invited_invited__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__ = __webpack_require__(18);
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
            selector: 'page-new-event',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/'<!--\n  Generated template for the NewEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nueva actividad</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Asunto" [(ngModel)] ="newActivity.Age_Asun"></ion-input>\n    </ion-item>\n    <ion-item text-wrap button (click)="openLupa()">\n     <ion-label>Cliente</ion-label>\n     <ion-note  item-end *ngIf="client">\n     {{client.PRO_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Detalle cliente</ion-label>\n      <ion-note item-end *ngIf="client && client.cdpros">\n       {{client.cdpros.DPR_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Contacto</ion-label>\n      <ion-note item-end *ngIf="client && client.conpr">\n      {{client.conpr.CON_NOMB}}\n      </ion-note>\n    </ion-item>\n    <ion-item button (click)="openLupaActivities()">\n     <ion-label>Actividad</ion-label>\n     <ion-note item-end *ngIf="activity">\n     {{activity.ACT_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item button (click)="openLupaStages()">\n     <ion-label>Etapa proceso</ion-label>\n     <ion-note item-end *ngIf="stage">\n     {{stage.ETA_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-label>Inicio</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY HH:mm" pickerFormat ="DD/MM/YYYY HH:mm" [(ngModel)] = "newActivity.Age_Fech"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label>Horas</ion-label>\n      <ion-input  type="number" placeholder = "Horas" [(ngModel)] ="newActivity.Age_Dura"></ion-input>\n    </ion-item>\n    <!-- <ion-item (click)="openInvited()">\n      <ion-label>Invitar</ion-label>\n      <ion-note item-end *ngIf="invited">\n        {{invited.Usu_Nomb}}\n      </ion-note>\n     </ion-item> -->\n    <ion-item>\n      <ion-label>Todo el día?</ion-label>\n    <ion-toggle [(ngModel)] = "event.allDay"></ion-toggle>\n    </ion-item>\n  </ion-list>\n<button ion-button full icon-left (click) = "CreateActivity()">\n  <ion-icon name ="checkmark"></ion-icon>Añadir evento\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/new-event/new-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_data_user_data__["a" /* UserDataProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewEventPage);
    return NewEventPage;
}());

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LupaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-lupa',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/lupa/lupa.html"*/'<!--\n  Generated template for the LupaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Clientes</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    [debounce]="500"\n    (ionChange)="loadClients($event.value)"\n    [showCancelButton]="true"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(client)" *ngFor="let client of clientesList">\n          <ion-label>\n          {{client.PRO_NOMB}}\n          </ion-label>\n          <ion-icon name=\'person\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/lupa/lupa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], LupaPage);
    return LupaPage;
}());

//# sourceMappingURL=lupa.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StagesSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-stages-search',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/stages-search/stages-search.html"*/'<!--\n  Generated template for the StagesSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Etapas</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #AcivitiesList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(stage)" *ngFor="let stage of stagesList">\n          <ion-label>\n          {{stage.ETA_NOMB}}\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/stages-search/stages-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], StagesSearchPage);
    return StagesSearchPage;
}());

//# sourceMappingURL=stages-search.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-conex',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/conex/conex.html"*/'<!--\n  Generated template for the ConexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Conexiones</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(conection)" *ngFor="let conection of connections">\n          <ion-label>\n          {{conection.CNX_NOMB}}\n          </ion-label>\n          <ion-icon name=\'wifi\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/conex/conex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ConexPage);
    return ConexPage;
}());

//# sourceMappingURL=conex.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-flow-detail',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/'<!--\n  Generated template for the FlowDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Caso {{flow.CAS_CONT}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only  class="BigButton" (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n     <ion-label>Prioridad</ion-label>\n     <ion-note item-end>\n    {{flow.SEG_PRIO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Seguimiento</ion-label>\n     <ion-note item-end>\n  {{flow.SEG_CONT}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Asunto</ion-label>\n     <ion-note item-end>\n     {{flow.SEG_SUBJ}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Quién registra</ion-label>\n     <ion-note item-end>\n      {{flow.USU_NOMB}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Solicitado para</ion-label>\n     <ion-note item-end>\n    {{flow.SOLICITADO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Recibido</ion-label>\n     <ion-note item-end>\n   {{flow.SEG_FREC| date: \'dd/MM/yyyy\' }} &nbsp;{{flow.SEG_HREC | date: \'h:mm:ss a\'}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n     <ion-label>Límite</ion-label>\n     <ion-note item-end>\n     {{flow.SEG_FLIM | date: \'dd/MM/yyyy\'}} &nbsp;{{flow.SEG_HLIM | date: \'h:mm:ss a\'}}\n     </ion-note>\n    </ion-item>\n    <ion-item *ngIf="flow.ADICIO">\n     <ion-label>Datos adicionales</ion-label>\n     <ion-note item-end>\n       {{flow.ADICIO}}\n     </ion-note>\n    </ion-item>\n    <ion-item>\n    <ion-label>Descripción</ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n        <p ion-text text-wrap>  {{flow.CAS_DESC}}</p>\n    </ion-item>\n    <ion-item>\n    <ion-label>Comentarios para el ejecutor</ion-label>\n    </ion-item>\n    <ion-item text-wrap>\n        <p text-wrap>    {{flow.SEG_COME}}</p>\n    </ion-item>\n    <ion-item>\n    <ion-label>Comentarios para el segundo ejecutor</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-textarea [(ngModel)]="flow.COMENTARIOS"  placeholder="Ingrese sus comentarios aquí"></ion-textarea>\n    </ion-item>\n  </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <button ion-button block color="primary" (click)="flowAprobment()">\n              <ion-icon name="checkmark-circle"></ion-icon>&nbsp;Aprobar\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button block color="danger" (click)="flowReject()">\n                  <ion-icon name="remove-circle"></ion-icon>&nbsp;Rechazar\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flow-detail/flow-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], FlowDetailPage);
    return FlowDetailPage;
}());

//# sourceMappingURL=flow-detail.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flow_detail_flow_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flows_filter_flows_filter__ = __webpack_require__(119);
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
            _this._user.showToast(response.Message);
        });
    };
    FlowsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flows',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/'<!--\n  Generated template for the FlowsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Flujos\n    </ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n  <ion-refresher-content>\n  </ion-refresher-content>\n  </ion-refresher>\n  <ion-list #scheduleList no-lines>\n      <ion-item-group no-border>\n        <ion-item-sliding #slidingItem  class="flujo" [class]= "flow.SEG_PRIO | flows" *ngFor="let flow of flowList">\n          <button ion-item (click)="goDetailsFlow(flow)">\n        <h3>Caso {{flow.CAS_CONT}}</h3>\n        <p>\n        {{flow.CAS_DESC}}\n        </p>\n      </button>\n      <ion-item-options side="right">\n     <button ion-button color="danger" (click)="flowReject(flow)">Rechazar</button>\n </ion-item-options>\n <ion-item-options side="left">\n<button ion-button color="primary" (click)="flowAprobment(flow)">Aprobar</button>\n</ion-item-options>\n        </ion-item-sliding>\n\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows/flows.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], FlowsPage);
    return FlowsPage;
}());

//# sourceMappingURL=flows.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_global__ = __webpack_require__(176);
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
            selector: 'page-flows-filter',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows-filter/flows-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cerrar</button>\n    </ion-buttons>\n\n    <ion-title>\n    Filtrar por prioridad\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Aplicar</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Prioridades</ion-list-header>\n\n     <ion-item *ngFor="let track of tracks">\n      <span item-start class="dot"></span>\n     <ion-label>{{track.name}}</ion-label>\n     <ion-toggle [color]="track.color" ></ion-toggle>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Restablecer filtros\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/flows-filter/flows-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], FlowsFilterPage);
    return FlowsFilterPage;
}());

//# sourceMappingURL=flows-filter.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conex_conex__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__ = __webpack_require__(18);
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
    LoginPage.prototype.loadBackground = function () {
        this.background = '#814D9C';
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
                    _this._user.setBackGround('#814D9C');
                    _this.background = '#814D9C';
                    console.log('bk from bd');
                });
            }
            else {
                _this._user.getSavedConnections().then(function (data) {
                    _this._seven.setConnection(data);
                    _this._user.getBackground().then(function (data) {
                        if (data) {
                            console.log('bk from memory');
                            _this.background = data;
                        }
                    });
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/login/login.html"*/'<ion-header>\n	<ion-grid>\n<ion-row>\n	<ion-col class="loginColM">\n		<img class="logoM" src="assets/imgs/mintic.png"/>\n		<h1>CRM</h1>\n	</ion-col>\n\n</ion-row>\n	<form  #registerForm="ngForm" class="loginForm">\n		<ion-row>\n			<ion-col>\n					<ion-item>\n						<ion-label><ion-icon name="ios-person"></ion-icon></ion-label>\n						<ion-input type="text" placeholder="Usuario" name="email" [(ngModel)]="login.username" required></ion-input>\n					</ion-item>\n\n					<ion-item>\n						<ion-label><ion-icon name="ios-lock"></ion-icon></ion-label>\n						<ion-input type="password" placeholder="Contraseña" name="password" [(ngModel)]="login.password" required></ion-input>\n					</ion-item>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				<button ion-button class="submit-btn" full (click)="onLogin()" [disabled]="!registerForm.form.valid">Ingresar</button>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="loginCol">\n				<img class="logo" src="assets/imgs/logoseven.png"/>\n\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col text-center>\n				<div  class="fingerprint" button tappable (click)="GetAccessTouchID()" *ngIf="touchID">\n				<img src="assets/imgs/fingerprint.svg">\n			</div>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-grid>\n</ion-header>\n\n<ion-content [style.background-color] ="background">\n	<!-- <div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n	</div> -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_seven_seven__["a" /* SevenProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_data_user_data__["a" /* UserDataProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _j || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__ = __webpack_require__(18);
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
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ajustes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list no-border>\n    <ion-list-header>\n      Perfil\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar item-start *ngIf="user.Usu_Foto">\n      <img [src]="\'data:image/jpg;base64,\'+user.Usu_Foto" />\n    </ion-avatar>\n    <ion-note item-end>\n     {{user.Usu_Nomb}}\n    </ion-note>\n    </ion-item>\n    <ion-list-header>\n      Soporte\n    </ion-list-header>\n    <ion-item (click)="sendMail(\'sevensoporte@digitalware.com.co\')">\n      <ion-icon name ="mail" item-start>\n      </ion-icon>\n    Enviar correo a soporte\n      <!-- <ion-note (click)="sendMail(sevensoporte@digitalware.com.co)">\n        sevensoporte@digitalware.com.co\n      </ion-note> -->\n    </ion-item>\n    <ion-list-header>\n      Cuenta\n    </ion-list-header>\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Notificaciones\n      </ion-label>\n      <ion-icon name=\'notifications\' item-start></ion-icon>\n    </ion-item>\n    <ion-item (click)="logOut()">\n      <ion-icon name=\'log-out\' item-start></ion-icon>\n      Salir\n      <ion-note item-end>\n      Cerrar sesión\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data_user_data__["a" /* UserDataProvider */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_global__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__ = __webpack_require__(18);
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
    SevenProvider.prototype.UpdateActivity = function (agend) {
        return this.postData(agend, 'CrAgend/ActualizarActividad');
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
        //  Globals.ClientUrl ='http://132.147.157.88/SevenCRMApi/api/';
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
        //Comentarear para produccion
        //  Globals.ClientUrl ='http://132.147.157.88/SevenCRMApi/api/';
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__["a" /* UserDataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_data_user_data__["a" /* UserDataProvider */]) === "function" && _d || Object])
    ], SevenProvider);
    return SevenProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=seven.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activities-search/activities-search.module": [
		444,
		16
	],
	"../pages/activities/activities.module": [
		446,
		15
	],
	"../pages/activity-detail/activity-detail.module": [
		445,
		14
	],
	"../pages/client-detail/client-detail.module": [
		447,
		13
	],
	"../pages/conex/conex.module": [
		448,
		12
	],
	"../pages/contact-detail/contact-detail.module": [
		449,
		11
	],
	"../pages/email/email.module": [
		450,
		10
	],
	"../pages/flow-detail/flow-detail.module": [
		451,
		9
	],
	"../pages/flows-filter/flows-filter.module": [
		453,
		8
	],
	"../pages/flows/flows.module": [
		452,
		7
	],
	"../pages/invited/invited.module": [
		456,
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
		458,
		3
	],
	"../pages/settings/settings.module": [
		457,
		2
	],
	"../pages/stages-search/stages-search.module": [
		459,
		1
	],
	"../pages/touch-id/touch-id.module": [
		460,
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

/***/ 176:
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

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__ = __webpack_require__(179);
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
var UserDataProvider = (function () {
    function UserDataProvider(http, storage, events, callNumber, emailComposer, alertCtrl, toastCtrl) {
        this.http = http;
        this.storage = storage;
        this.events = events;
        this.callNumber = callNumber;
        this.emailComposer = emailComposer;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
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
    UserDataProvider.prototype.getBackground = function () {
        return this.storage.get('background').then(function (value) {
            return value;
        });
    };
    UserDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */]) === "function" && _g || Object])
    ], UserDataProvider);
    return UserDataProvider;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flows_flows__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities__ = __webpack_require__(112);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Agenda" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Flujos" tabIcon="git-network"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Ajustes" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/tabs/tabs.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-email',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/email/email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Enviar Email</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()" class="BigButton">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Para" [(ngModel)] ="to"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Copia" [(ngModel)] ="cc"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input  type="text" placeholder = "Asunto" [(ngModel)] ="subject"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-textarea max="500"  type="text" placeholder  = "Mensaje" [(ngModel)] ="body"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <button ion-button icon-left full (click)="sendEmail()">\n    <ion-icon name="mail"></ion-icon> Enviar\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-touch-id',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/touch-id/touch-id.html"*/'<!--\n  Generated template for the TouchIdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <div  class="fingerprint">\n        <img src="assets/imgs/fingerprint.svg">\n      </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-label text-wrap>\n          Tu dispositivo posee lector de huellas.Mediante esta autenticación podrás ingresar a la aplicación directamente.\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col>\n        <button ion-button block color="danger" icon-left>\n            <ion-icon name="alarm"></ion-icon>\n          Más tarde\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block color="primary" icon-left>\n          <ion-icon name="checkmark-circle"></ion-icon>\n          Entendido\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/touch-id/touch-id.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TouchIdPage);
    return TouchIdPage;
}());

//# sourceMappingURL=touch-id.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic2_calendar__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_activities_activities__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_flows_flows__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_flow_detail_flow_detail__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_new_event_new_event__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lupa_lupa__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_activities_search_activities_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_stages_search_stages_search__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_activity_detail_activity_detail__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_invited_invited__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_conex_conex__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_touch_id_touch_id__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_contact_detail_contact_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_client_detail_client_detail__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_email_email__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_flows_filter_flows_filter__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_seven_seven__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_user_data_user_data__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_flows_flows__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_digital_date_digital_date__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_keychain_touch_id__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_fingerprint_aio__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_call_number__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_email_composer__ = __webpack_require__(179);
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
                __WEBPACK_IMPORTED_MODULE_33__pipes_flows_flows__["a" /* FlowsPipe */],
                __WEBPACK_IMPORTED_MODULE_34__pipes_digital_date_digital_date__["a" /* DigitalDatePipe */],
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
                __WEBPACK_IMPORTED_MODULE_30__pages_flows_filter_flows_filter__["a" /* FlowsFilterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activities-search/activities-search.module#ActivitiesSearchPageModule', name: 'ActivitiesSearchPage', segment: 'activities-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity-detail/activity-detail.module#ActivityDetailPageModule', name: 'ActivityDetailPage', segment: 'activity-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/client-detail/client-detail.module#ClientDetailPageModule', name: 'ClientDetailPage', segment: 'client-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/conex/conex.module#ConexPageModule', name: 'ConexPage', segment: 'conex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-detail/contact-detail.module#ContactDetailPageModule', name: 'ContactDetailPage', segment: 'contact-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/email/email.module#EmailPageModule', name: 'EmailPage', segment: 'email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flow-detail/flow-detail.module#FlowDetailPageModule', name: 'FlowDetailPage', segment: 'flow-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows/flows.module#FlowsPageModule', name: 'FlowsPage', segment: 'flows', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flows-filter/flows-filter.module#FlowsFilterPageModule', name: 'FlowsFilterPage', segment: 'flows-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lupa/lupa.module#LupaPageModule', name: 'LupaPage', segment: 'lupa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invited/invited.module#InvitedPageModule', name: 'InvitedPage', segment: 'invited', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_30__pages_flows_filter_flows_filter__["a" /* FlowsFilterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_seven_seven__["a" /* SevenProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_user_data_user_data__["a" /* UserDataProvider */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_keychain_touch_id__["a" /* KeychainTouchId */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_fingerprint_aio__["a" /* FingerprintAIO */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_email_composer__["a" /* EmailComposer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 180,
	"./af.js": 180,
	"./ar": 181,
	"./ar-dz": 182,
	"./ar-dz.js": 182,
	"./ar-kw": 183,
	"./ar-kw.js": 183,
	"./ar-ly": 184,
	"./ar-ly.js": 184,
	"./ar-ma": 185,
	"./ar-ma.js": 185,
	"./ar-sa": 186,
	"./ar-sa.js": 186,
	"./ar-tn": 187,
	"./ar-tn.js": 187,
	"./ar.js": 181,
	"./az": 188,
	"./az.js": 188,
	"./be": 189,
	"./be.js": 189,
	"./bg": 190,
	"./bg.js": 190,
	"./bm": 191,
	"./bm.js": 191,
	"./bn": 192,
	"./bn.js": 192,
	"./bo": 193,
	"./bo.js": 193,
	"./br": 194,
	"./br.js": 194,
	"./bs": 195,
	"./bs.js": 195,
	"./ca": 196,
	"./ca.js": 196,
	"./cs": 197,
	"./cs.js": 197,
	"./cv": 198,
	"./cv.js": 198,
	"./cy": 199,
	"./cy.js": 199,
	"./da": 200,
	"./da.js": 200,
	"./de": 201,
	"./de-at": 202,
	"./de-at.js": 202,
	"./de-ch": 203,
	"./de-ch.js": 203,
	"./de.js": 201,
	"./dv": 204,
	"./dv.js": 204,
	"./el": 205,
	"./el.js": 205,
	"./en-au": 206,
	"./en-au.js": 206,
	"./en-ca": 207,
	"./en-ca.js": 207,
	"./en-gb": 208,
	"./en-gb.js": 208,
	"./en-ie": 209,
	"./en-ie.js": 209,
	"./en-nz": 210,
	"./en-nz.js": 210,
	"./eo": 211,
	"./eo.js": 211,
	"./es": 212,
	"./es-do": 213,
	"./es-do.js": 213,
	"./es-us": 214,
	"./es-us.js": 214,
	"./es.js": 212,
	"./et": 215,
	"./et.js": 215,
	"./eu": 216,
	"./eu.js": 216,
	"./fa": 217,
	"./fa.js": 217,
	"./fi": 218,
	"./fi.js": 218,
	"./fo": 219,
	"./fo.js": 219,
	"./fr": 220,
	"./fr-ca": 221,
	"./fr-ca.js": 221,
	"./fr-ch": 222,
	"./fr-ch.js": 222,
	"./fr.js": 220,
	"./fy": 223,
	"./fy.js": 223,
	"./gd": 224,
	"./gd.js": 224,
	"./gl": 225,
	"./gl.js": 225,
	"./gom-latn": 226,
	"./gom-latn.js": 226,
	"./gu": 227,
	"./gu.js": 227,
	"./he": 228,
	"./he.js": 228,
	"./hi": 229,
	"./hi.js": 229,
	"./hr": 230,
	"./hr.js": 230,
	"./hu": 231,
	"./hu.js": 231,
	"./hy-am": 232,
	"./hy-am.js": 232,
	"./id": 233,
	"./id.js": 233,
	"./is": 234,
	"./is.js": 234,
	"./it": 235,
	"./it.js": 235,
	"./ja": 236,
	"./ja.js": 236,
	"./jv": 237,
	"./jv.js": 237,
	"./ka": 238,
	"./ka.js": 238,
	"./kk": 239,
	"./kk.js": 239,
	"./km": 240,
	"./km.js": 240,
	"./kn": 241,
	"./kn.js": 241,
	"./ko": 242,
	"./ko.js": 242,
	"./ky": 243,
	"./ky.js": 243,
	"./lb": 244,
	"./lb.js": 244,
	"./lo": 245,
	"./lo.js": 245,
	"./lt": 246,
	"./lt.js": 246,
	"./lv": 247,
	"./lv.js": 247,
	"./me": 248,
	"./me.js": 248,
	"./mi": 249,
	"./mi.js": 249,
	"./mk": 250,
	"./mk.js": 250,
	"./ml": 251,
	"./ml.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 253,
	"./ms-my": 254,
	"./ms-my.js": 254,
	"./ms.js": 253,
	"./my": 255,
	"./my.js": 255,
	"./nb": 256,
	"./nb.js": 256,
	"./ne": 257,
	"./ne.js": 257,
	"./nl": 258,
	"./nl-be": 259,
	"./nl-be.js": 259,
	"./nl.js": 258,
	"./nn": 260,
	"./nn.js": 260,
	"./pa-in": 261,
	"./pa-in.js": 261,
	"./pl": 262,
	"./pl.js": 262,
	"./pt": 263,
	"./pt-br": 264,
	"./pt-br.js": 264,
	"./pt.js": 263,
	"./ro": 265,
	"./ro.js": 265,
	"./ru": 266,
	"./ru.js": 266,
	"./sd": 267,
	"./sd.js": 267,
	"./se": 268,
	"./se.js": 268,
	"./si": 269,
	"./si.js": 269,
	"./sk": 270,
	"./sk.js": 270,
	"./sl": 271,
	"./sl.js": 271,
	"./sq": 272,
	"./sq.js": 272,
	"./sr": 273,
	"./sr-cyrl": 274,
	"./sr-cyrl.js": 274,
	"./sr.js": 273,
	"./ss": 275,
	"./ss.js": 275,
	"./sv": 276,
	"./sv.js": 276,
	"./sw": 277,
	"./sw.js": 277,
	"./ta": 278,
	"./ta.js": 278,
	"./te": 279,
	"./te.js": 279,
	"./tet": 280,
	"./tet.js": 280,
	"./th": 281,
	"./th.js": 281,
	"./tl-ph": 282,
	"./tl-ph.js": 282,
	"./tlh": 283,
	"./tlh.js": 283,
	"./tr": 284,
	"./tr.js": 284,
	"./tzl": 285,
	"./tzl.js": 285,
	"./tzm": 286,
	"./tzm-latn": 287,
	"./tzm-latn.js": 287,
	"./tzm.js": 286,
	"./uk": 288,
	"./uk.js": 288,
	"./ur": 289,
	"./ur.js": 289,
	"./uz": 290,
	"./uz-latn": 291,
	"./uz-latn.js": 291,
	"./uz.js": 290,
	"./vi": 292,
	"./vi.js": 292,
	"./x-pseudo": 293,
	"./x-pseudo.js": 293,
	"./yo": 294,
	"./yo.js": 294,
	"./zh-cn": 295,
	"./zh-cn.js": 295,
	"./zh-hk": 296,
	"./zh-hk.js": 296,
	"./zh-tw": 297,
	"./zh-tw.js": 297
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
webpackContext.id = 408;

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data_user_data__ = __webpack_require__(18);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-invited',template:/*ion-inline-start:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/invited/invited.html"*/'<!--\n  Generated template for the InvitedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Invitar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-searchbar\n    [(ngModel)]="value"\n    (ionChange)="getItems($event.value)"\n    [showCancelButton]="shouldShowCancel"\n    placeholder="Buscar">\n  </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list #clientsList>\n      <ion-item-group>\n        <ion-item (click)="closeLupa(user)" *ngFor="let user of usersList">\n          <ion-label>\n          {{user.Usu_Nomb}}\n          </ion-label>\n          <ion-icon name=\'person\' item-start></ion-icon>\n        </ion-item>\n      </ion-item-group>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/omarstevenperezbeltran/Documents/GitHub/CRMSeven/src/pages/invited/invited.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_seven_seven__["a" /* SevenProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], InvitedPage);
    return InvitedPage;
}());

//# sourceMappingURL=invited.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map