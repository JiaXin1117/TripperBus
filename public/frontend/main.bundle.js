webpackJsonp([1,5],{

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(456);


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(_router) {
        this._router = _router;
        this._options = {
            logInPath: "\login"
        };
    }
    AuthService.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser'))
            return true;
        else {
            this._router.navigate([this._options.logInPath]);
            return false;
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/auth.service.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAreasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminAreasComponent = (function () {
    function AdminAreasComponent() {
    }
    AdminAreasComponent.prototype.ngOnInit = function () {
    };
    AdminAreasComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-areas',
            template: __webpack_require__(824),
            styles: [__webpack_require__(788)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminAreasComponent);
    return AdminAreasComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-areas.component.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCouponsCampaignsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminCouponsCampaignsComponent = (function () {
    function AdminCouponsCampaignsComponent() {
    }
    AdminCouponsCampaignsComponent.prototype.ngOnInit = function () {
    };
    AdminCouponsCampaignsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-coupons-campaigns',
            template: __webpack_require__(825),
            styles: [__webpack_require__(789)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminCouponsCampaignsComponent);
    return AdminCouponsCampaignsComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-coupons-campaigns.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCouponsCompaniesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminCouponsCompaniesComponent = (function () {
    function AdminCouponsCompaniesComponent() {
    }
    AdminCouponsCompaniesComponent.prototype.ngOnInit = function () {
    };
    AdminCouponsCompaniesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-coupons-companies',
            template: __webpack_require__(826),
            styles: [__webpack_require__(790)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminCouponsCompaniesComponent);
    return AdminCouponsCompaniesComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-coupons-companies.component.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCouponsTypesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminCouponsTypesComponent = (function () {
    function AdminCouponsTypesComponent() {
    }
    AdminCouponsTypesComponent.prototype.ngOnInit = function () {
    };
    AdminCouponsTypesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-coupons-types',
            template: __webpack_require__(827),
            styles: [__webpack_require__(791)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminCouponsTypesComponent);
    return AdminCouponsTypesComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-coupons-types.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCouponsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminCouponsComponent = (function () {
    function AdminCouponsComponent() {
    }
    AdminCouponsComponent.prototype.ngOnInit = function () {
    };
    AdminCouponsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-coupons',
            template: __webpack_require__(828),
            styles: [__webpack_require__(792)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminCouponsComponent);
    return AdminCouponsComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-coupons.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminCustomersComponent = (function () {
    function AdminCustomersComponent() {
    }
    AdminCustomersComponent.prototype.ngOnInit = function () {
    };
    AdminCustomersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-customers',
            template: __webpack_require__(829),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminCustomersComponent);
    return AdminCustomersComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-customers.component.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminMainComponent = (function () {
    function AdminMainComponent() {
        this.choose_date = undefined;
    }
    AdminMainComponent.prototype.ngOnInit = function () {
        this.setDatePickers();
    };
    AdminMainComponent.prototype.setDatePickers = function () {
        var me = this;
        jQuery("#choose_date").datepicker({
            onSelect: function (dateStr) {
                var selectedDate = new Date(dateStr);
                me.choose_date = selectedDate;
                jQuery("#return_date").datepicker("option", { minDate: selectedDate });
            }
        });
        jQuery("#return_date").datepicker();
        /*jQuery( "#choose_date" ).datepicker();
        jQuery( "#return_date" ).datepicker();*/
    };
    AdminMainComponent.prototype.onPressGoButton = function () {
        if (this.choose_date != undefined) {
            var selectedDate = this.choose_date;
            var today = new Date();
            if (selectedDate.getTime() < today.getTime()) {
                alert("Date chosen is on the past");
            }
        }
    };
    AdminMainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-main',
            template: __webpack_require__(832),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminMainComponent);
    return AdminMainComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-main.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminPagesComponent = (function () {
    function AdminPagesComponent() {
    }
    AdminPagesComponent.prototype.ngOnInit = function () {
    };
    AdminPagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-pages',
            template: __webpack_require__(833),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminPagesComponent);
    return AdminPagesComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-pages.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminRatesComponent = (function () {
    function AdminRatesComponent() {
    }
    AdminRatesComponent.prototype.ngOnInit = function () {
    };
    AdminRatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-rates',
            template: __webpack_require__(834),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminRatesComponent);
    return AdminRatesComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-rates.component.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSchedulesEditexistingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminSchedulesEditexistingComponent = (function () {
    function AdminSchedulesEditexistingComponent(_route, _scheduleService, _router, _httpService) {
        this._route = _route;
        this._scheduleService = _scheduleService;
        this._router = _router;
        this._httpService = _httpService;
        this.inputParams = {
            date: "",
            button_type: "",
            area_id: "",
            schedule_type: ""
        };
        this.headerInfos = {
            after_on: "",
            dow: "",
            date: "",
            city: "",
        };
        this.addModalHeaderInfos = {
            after_on: "",
            dow: "",
            date: "",
            city: "",
        };
        this.urls = {
            retrieve_schedule_by_date_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_by_date",
            retrieve_all_stops_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_stops",
            save_all_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/saveall_existing_schedule",
            add_schedule_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/add_existing_schedule",
        };
        this.groups = [];
        this.arr_stops = [];
        this.arr_hours = [];
        this.arr_mins = [];
        this.arr_prices = [];
        this.adding_stops = [];
        this.adding_hours = [];
        this.adding_mins = [];
        this.adding_prices = [];
    }
    AdminSchedulesEditexistingComponent.prototype.ngOnInit = function () {
        this.structTimeArray();
        this.receiveParamsFromRoute();
        this.getAllStopsInfo();
        this.showHeaderInfos();
    };
    AdminSchedulesEditexistingComponent.prototype.receiveParamsFromRoute = function () {
        this.inputParams.date = this._route.snapshot.params['sel_date'];
        this.inputParams.button_type = this._route.snapshot.params['button_type'];
        this.inputParams.area_id = this._route.snapshot.params['area_id'];
        this.inputParams.schedule_type = this._route.snapshot.params['schedule_type'];
    };
    AdminSchedulesEditexistingComponent.prototype.popupAddScheduleModal = function () {
        jQuery("#add_schedule_modal").modal('show');
    };
    AdminSchedulesEditexistingComponent.prototype.showHeaderInfos = function () {
        var me = this;
        var url = this.urls.retrieve_schedule_by_date_url + "?date=" + me.inputParams.date;
        this._httpService.sendGetRequestWithParams(url)
            .subscribe(function (data) {
            var response = data;
            if (response['state'] == 'success') {
                var dayInfos = response['data'];
                // Get latest schedule date for weekly schedule.
                if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                    // Collect weekly dates for this date.
                    var temp_dates = [];
                    for (var i = 0; i < Object.keys(dayInfos).length; i++) {
                        var item = dayInfos[i];
                        if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY && item['area_id'] == me.inputParams.area_id) {
                            temp_dates.push(item['date']);
                        }
                    }
                    me.latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates);
                }
                // Page Header.
                me.setHeaderInfoForPage(true);
                // Add Modal Header.
                me.setAddModalHeaderInfoForPage(true);
                // Collect group ids.
                var group_ids = me._scheduleService.collectGroupIDs(dayInfos);
                if (Object.keys(group_ids).length == 0) {
                    console.log("No group id");
                    return;
                }
                var grouped_items = [];
                for (var i = 0; i < Object.keys(group_ids).length; i++) {
                    var temp = [];
                    for (var j = 0; j < Object.keys(dayInfos).length; j++) {
                        var item = dayInfos[j];
                        if (group_ids[i] == item['group_id'] && item['area_id'] == me.inputParams.area_id
                            && item['w_h'] == me.inputParams.schedule_type) {
                            if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                if (item['date'] != me.latest_date)
                                    continue;
                            }
                            temp.push(item);
                        }
                    }
                    if (Object.keys(temp).length == 0) {
                        continue;
                    }
                    temp.sort(function (a, b) {
                        if (a['time'] > b['time'])
                            return 1;
                        else {
                            return -1;
                        }
                    });
                    grouped_items.push(temp);
                }
                if (Object.keys(grouped_items).length != 0) {
                    grouped_items.sort(function (a, b) {
                        if (a[0]['time'] > b[0]['time'])
                            return 1;
                        else {
                            return -1;
                        }
                    });
                    me.groups = grouped_items;
                }
            }
            else {
                // Page Header.
                me.setHeaderInfoForPage(false);
                // Add Modal Header.
                me.setAddModalHeaderInfoForPage(false);
            }
        });
    };
    AdminSchedulesEditexistingComponent.prototype.setHeaderInfoForPage = function (param_isSuccess) {
        var me = this;
        if (param_isSuccess == true) {
            // Get header related infos for edit existing.
            if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_HOLIDAY) {
                me.headerInfos.after_on = "on";
            }
            else {
                me.headerInfos.after_on = "after";
            }
            if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_HOLIDAY) {
                me.headerInfos.date = me.inputParams.date;
            }
            else {
                if (me.latest_date == "" || me.latest_date == undefined) {
                    me.headerInfos.date = me.inputParams.date;
                }
                else {
                    me.headerInfos.date = me.latest_date;
                }
            }
            me.headerInfos.dow = me._scheduleService.convertDayOfWeekFormat(new Date(me.inputParams.date).getDay());
            me.headerInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
        }
        else {
            me.headerInfos.after_on = "after";
            me.headerInfos.date = me.inputParams.date;
            me.headerInfos.dow = me._scheduleService.convertDayOfWeekFormat(new Date(me.inputParams.date).getDay());
            me.headerInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
        }
    };
    AdminSchedulesEditexistingComponent.prototype.setAddModalHeaderInfoForPage = function (param_isSuccess) {
        var me = this;
        if (param_isSuccess == true) {
            if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
                me.addModalHeaderInfos.after_on = "on";
            }
            else {
                me.addModalHeaderInfos.after_on = "after";
            }
            if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
                me.addModalHeaderInfos.date = me.inputParams.date;
            }
            else if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_NEW) {
                me.addModalHeaderInfos.date = me.inputParams.date;
            }
            else {
                if (me.latest_date == "" || me.latest_date == undefined) {
                    me.addModalHeaderInfos.date = me.inputParams.date;
                }
                else {
                    me.addModalHeaderInfos.date = me.latest_date;
                }
            }
            me.addModalHeaderInfos.dow = me._scheduleService.convertDayOfWeekFormat(new Date(me.inputParams.date).getDay());
            me.addModalHeaderInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
        }
        else {
            me.addModalHeaderInfos.after_on = "after";
            me.addModalHeaderInfos.date = me.inputParams.date;
            me.addModalHeaderInfos.dow = me._scheduleService.convertDayOfWeekFormat(new Date(me.inputParams.date).getDay());
            me.addModalHeaderInfos.city = me._scheduleService.getCityName(me.inputParams.area_id);
        }
    };
    AdminSchedulesEditexistingComponent.prototype.onSaveAll = function () {
        var me = this;
        this._httpService.sendPostJSON(me.urls.save_all_url, me.groups)
            .subscribe(function (data) {
            jQuery("#confirm_saveall_modal").modal('show');
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AdminSchedulesEditexistingComponent.prototype.getAllStopsInfo = function () {
        var me = this;
        var stops_url = this.urls.retrieve_all_stops_url;
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(function (data) {
            var temp = [];
            for (var i = 0; i < Object.keys(data['data']).length; i++) {
                var item = data['data'][i];
                if (item['area_id'] == me.inputParams.area_id) {
                    temp.push(item['short']);
                }
            }
            me.arr_stops = temp;
        });
    };
    AdminSchedulesEditexistingComponent.prototype.structTimeArray = function () {
        var me = this;
        for (var i = 0; i < 24; i++) {
            var temp = {};
            if (i < 10) {
                if (i == 0) {
                    temp['text'] = "12 AM";
                }
                else {
                    temp['text'] = i + " AM";
                }
                temp['value'] = "0" + i;
            }
            else {
                if (i < 12) {
                    temp['text'] = i + " AM";
                }
                else if (i == 12) {
                    temp['text'] = "12 PM";
                }
                else if (i > 12) {
                    var idx = i - 12;
                    temp['text'] = idx + " PM";
                }
                temp['value'] = i;
            }
            me.arr_hours.push(temp);
        }
        for (var i = 0; i < 60; i += 5) {
            var temp = void 0;
            if (i < 10) {
                temp = "0" + i;
            }
            else {
                temp = i;
            }
            me.arr_mins.push(temp);
        }
        for (var i = 0; i <= 50; i += 0.5) {
            var temp = i.toFixed(2);
            me.arr_prices.push(temp);
        }
        for (var i = 0; i < 3; i++) {
            me.adding_stops[i] = "";
            me.adding_hours[i] = "";
            me.adding_mins[i] = "";
            me.adding_prices[i] = "";
        }
    };
    AdminSchedulesEditexistingComponent.prototype.onAddSchedule = function () {
        var me = this;
        var insert_request = [];
        for (var i = 0; i < Object.keys(me.adding_stops).length; i++) {
            if (me.adding_stops[i] != "" && me.adding_hours[i] != "" && me.adding_mins[i] != "" && me.adding_prices[i] != "") {
                var temp = {};
                temp['stop'] = me.adding_stops[i];
                temp['hour'] = me.adding_hours[i];
                temp['min'] = me.adding_mins[i];
                // Set date_from value.
                if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_EDIT_EXISTING) {
                    if (me.inputParams.schedule_type == me._scheduleService.w_hType.TYPE_HOLIDAY) {
                        temp['date_from'] = me.inputParams.date;
                        ;
                    }
                    else {
                        if (me.latest_date == "" || me.latest_date == undefined) {
                            temp['date_from'] = me.inputParams.date;
                        }
                        else {
                            temp['date_from'] = me.latest_date;
                        }
                    }
                }
                else {
                    temp['date_from'] = me.inputParams.date;
                }
                // Set day of week for adding date.
                var date_temp = new Date(me.inputParams.date);
                temp['dow'] = date_temp.getDay();
                temp['area_id'] = me.inputParams.area_id;
                if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL) {
                    temp['w_h'] = me._scheduleService.w_hType.TYPE_HOLIDAY;
                }
                else if (me.inputParams.button_type == me._scheduleService.buttonType.TYPE_GENERATE_NEW) {
                    temp['w_h'] = me._scheduleService.w_hType.TYPE_WEEKLY;
                }
                else {
                    temp['w_h'] = me.inputParams.schedule_type;
                }
                insert_request[i] = temp;
            }
        }
        console.log(insert_request);
        this._httpService.sendPostJSON(me.urls.add_schedule_url, insert_request)
            .subscribe(function (data) {
            me.refreshCurrentPage(me.inputParams.button_type);
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
        jQuery("#add_schedule_modal").modal('hide');
    };
    AdminSchedulesEditexistingComponent.prototype.refreshCurrentPage = function (param_btnType) {
        var link;
        var me = this;
        if (param_btnType == me._scheduleService.buttonType.TYPE_EDIT_EXISTING) {
            link = ['/admin/schedules_edit', me.inputParams.date, me._scheduleService.buttonType.TYPE_EDIT_EXISTING,
                me.inputParams.area_id, me.inputParams.schedule_type];
            me._router.navigate(link);
        }
        else if (param_btnType == me._scheduleService.buttonType.TYPE_GENERATE_NEW) {
            link = ['/admin/schedules_edit', me.inputParams.date, me._scheduleService.buttonType.TYPE_GENERATE_NEW,
                me.inputParams.area_id, me._scheduleService.w_hType.TYPE_WEEKLY];
            me._router.navigate(link);
        }
        else {
            link = ['/admin/schedules_edit', me.inputParams.date, me._scheduleService.buttonType.TYPE_GENERATE_SPECIAL,
                me.inputParams.area_id, me._scheduleService.w_hType.TYPE_HOLIDAY];
            me._router.navigate(link);
        }
        setTimeout(window.location.reload(), 500);
    };
    AdminSchedulesEditexistingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-schedules-editexisting',
            template: __webpack_require__(836),
            styles: [__webpack_require__(800)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__["a" /* HttpService */]) === 'function' && _d) || Object])
    ], AdminSchedulesEditexistingComponent);
    return AdminSchedulesEditexistingComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-schedules-editexisting.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSchedulesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminSchedulesComponent = (function () {
    function AdminSchedulesComponent(_httpService, _router, _scheduleService) {
        this._httpService = _httpService;
        this._router = _router;
        this._scheduleService = _scheduleService;
        this.urls = {
            retrieve_schedule_by_month_url: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_by_month",
            retrieve_schedule_by_date_url: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_by_date"
        };
        this.calendarInfo = {
            cur_date_str: "",
            cur_year: "",
            cur_month: ""
        };
        this.selected_date = "";
        this.sorted_groups = [];
        this.month_firstday_dow = [];
        this.dayinfos_in_month_newyork = [];
        this.dayinfos_in_month_ba = [];
    }
    AdminSchedulesComponent.prototype.ngOnInit = function () {
        this.initiate();
        this.setCurentDateForCalendar();
        this.addDaysToCalendar();
    };
    AdminSchedulesComponent.prototype.initiate = function () {
        var me = this;
    };
    AdminSchedulesComponent.prototype.onEditSchedule = function (param_areaId) {
        this.hideModal();
        var link = ['/admin/schedules_edit', this.selected_date, this._scheduleService.buttonType.TYPE_EDIT_EXISTING,
            param_areaId, this.sorted_groups_schedule_type];
        this._router.navigate(link);
    };
    AdminSchedulesComponent.prototype.onGenNewSchedule = function (param_areaId) {
        this.hideModal();
        var link = ['/admin/schedules_edit', this.selected_date, this._scheduleService.buttonType.TYPE_GENERATE_NEW,
            param_areaId, this.sorted_groups_schedule_type];
        this._router.navigate(link);
    };
    AdminSchedulesComponent.prototype.onGenSpecialSchedule = function (param_areaId) {
        this.hideModal();
        var link = ['/admin/schedules_edit', this.selected_date, this._scheduleService.buttonType.TYPE_GENERATE_SPECIAL,
            param_areaId, this.sorted_groups_schedule_type];
        this._router.navigate(link);
    };
    AdminSchedulesComponent.prototype.addDaysInDateRange = function (firstDay, lastDay, areaType) {
        var _this = this;
        var me = this;
        if (firstDay.getDate() == 1) {
            var dow = firstDay.getDay();
            me.month_firstday_dow = [];
            for (var i = 0; i < dow; i++) {
                me.month_firstday_dow[i] = i;
            }
        }
        var url_month = this.calendarInfo.cur_month + 1;
        var url = this.urls.retrieve_schedule_by_month_url + "?year=" + this.calendarInfo.cur_year + "&month=" + url_month;
        this._httpService.sendGetRequestWithParams(url)
            .subscribe(function (data) {
            var response = data;
            if (areaType == me._scheduleService.areaType.TYPE_NEWYORK) {
                me.dayinfos_in_month_newyork = [];
            }
            else {
                me.dayinfos_in_month_ba = [];
            }
            if (response['state'] == 'success') {
                while (firstDay <= lastDay) {
                    var firstDay_converted = _this.convertDate(firstDay);
                    var items_for_this_date = [];
                    for (var i = 0; i < Object.keys(response['data']).length; i++) {
                        var item = response['data'][i];
                        if (item['date'] == firstDay_converted && item['area_id'] == areaType) {
                            items_for_this_date.push(item);
                        }
                    }
                    if (Object.keys(items_for_this_date).length == 0) {
                        me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY, 0);
                        var newDate_1 = firstDay.setDate(firstDay.getDate() + 1);
                        firstDay = new Date(newDate_1);
                        continue;
                    }
                    var group_ids = [];
                    for (var i = 0; i < Object.keys(items_for_this_date).length; i++) {
                        var item = items_for_this_date[i];
                        if (group_ids.indexOf(item['group_id']) == -1) {
                            group_ids.push(item['group_id']);
                        }
                    }
                    //********************** Get grouped holiday items. *********************************
                    var grouped_items = [];
                    for (var i = 0; i < Object.keys(group_ids).length; i++) {
                        var temp = [];
                        for (var j = 0; j < Object.keys(items_for_this_date).length; j++) {
                            var item = items_for_this_date[j];
                            if (group_ids[i] == item['group_id'] && item['w_h'] == me._scheduleService.w_hType.TYPE_HOLIDAY
                                && item['date'] == firstDay_converted) {
                                temp.push(item);
                            }
                        }
                        if (Object.keys(temp).length != 0) {
                            grouped_items.push(temp);
                        }
                    }
                    if (Object.keys(grouped_items).length != 0) {
                        me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_HOLIDAY, Object.keys(grouped_items).length);
                    }
                    else {
                        //**************** Get grouped weekly items. **************************************
                        // Collect weekly dates for this date.
                        var temp_dates = [];
                        for (var j = 0; j < Object.keys(items_for_this_date).length; j++) {
                            var item = items_for_this_date[j];
                            if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                temp_dates.push(item['schedule_date']);
                            }
                        }
                        // Get latest date for weekly schedule.
                        var latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates);
                        grouped_items = [];
                        for (var i = 0; i < Object.keys(group_ids).length; i++) {
                            var temp = [];
                            for (var j = 0; j < Object.keys(items_for_this_date).length; j++) {
                                var item = items_for_this_date[j];
                                if (group_ids[i] == item['group_id'] && item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY
                                    && item['schedule_date'] == latest_date) {
                                    temp.push(item);
                                }
                            }
                            if (Object.keys(temp).length != 0) {
                                grouped_items.push(temp);
                            }
                        }
                        if (Object.keys(grouped_items).length == 0) {
                            me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY, 0);
                            var newDate_2 = firstDay.setDate(firstDay.getDate() + 1);
                            firstDay = new Date(newDate_2);
                            continue;
                        }
                        else {
                            if (firstDay_converted == latest_date) {
                                me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY_NEW, Object.keys(grouped_items).length);
                            }
                            else {
                                me.setDayInfo(areaType, me._scheduleService.w_hType.TYPE_WEEKLY, Object.keys(grouped_items).length);
                            }
                        }
                    }
                    var newDate = firstDay.setDate(firstDay.getDate() + 1);
                    firstDay = new Date(newDate);
                }
            }
        });
    };
    AdminSchedulesComponent.prototype.setDayInfo = function (areaType, isHoliday, busCnt) {
        var me = this;
        var temp_day = {};
        temp_day['isHoliday'] = isHoliday;
        temp_day['bus_cnt'] = busCnt;
        if (areaType == me._scheduleService.areaType.TYPE_NEWYORK) {
            me.dayinfos_in_month_newyork.push(temp_day);
        }
        else {
            me.dayinfos_in_month_ba.push(temp_day);
        }
    };
    AdminSchedulesComponent.prototype.onClickEachDate = function (selected_date, areaType, scheduleType) {
        var me = this;
        me.sorted_groups_schedule_type = scheduleType;
        me.sorted_groups = [];
        var cur_month_temp = me.calendarInfo.cur_month + 1;
        if (cur_month_temp < 10) {
            cur_month_temp = "0" + cur_month_temp;
        }
        if (selected_date < 10) {
            selected_date = "0" + selected_date;
        }
        var url = this.urls.retrieve_schedule_by_date_url + "?date=" + me.calendarInfo.cur_year + "-" + cur_month_temp + "-" + selected_date;
        me.selected_date = me.calendarInfo.cur_year + "-" + cur_month_temp + "-" + selected_date;
        this._httpService.sendGetRequestWithParams(url)
            .subscribe(function (data) {
            var response = data;
            if (response['state'] == 'success') {
                var group_ids = [];
                for (var i = 0; i < Object.keys(response['data']).length; i++) {
                    var item = response['data'][i];
                    if (group_ids.indexOf(item['group_id']) == -1) {
                        group_ids.push(item['group_id']);
                    }
                }
                // Get latest schedule date for weekly schedule.
                var latest_date = void 0;
                if (scheduleType == me._scheduleService.w_hType.TYPE_WEEKLY) {
                    var temp_dates = [];
                    for (var j = 0; j < Object.keys(response['data']).length; j++) {
                        var item = response['data'][j];
                        if (item['w_h'] == me._scheduleService.w_hType.TYPE_WEEKLY && item['area_id'] == areaType) {
                            temp_dates.push(item['date']);
                        }
                    }
                    latest_date = me._scheduleService.getLatestWeeklyDate(temp_dates);
                }
                var grouped_items = [];
                for (var i = 0; i < Object.keys(group_ids).length; i++) {
                    var temp = [];
                    for (var j = 0; j < Object.keys(response['data']).length; j++) {
                        var item = response['data'][j];
                        if (group_ids[i] == item['group_id'] && item['area_id'] == areaType && item['w_h'] == scheduleType) {
                            if (scheduleType == me._scheduleService.w_hType.TYPE_WEEKLY) {
                                if (item['date'] != latest_date)
                                    continue;
                            }
                            temp.push(item);
                        }
                    }
                    if (Object.keys(temp).length == 0) {
                        continue;
                    }
                    temp.sort(function (a, b) {
                        if (a['time'] > b['time'])
                            return 1;
                        else {
                            return -1;
                        }
                    });
                    grouped_items.push(temp);
                }
                if (Object.keys(grouped_items).length == 0) {
                    me.sorted_groups = [];
                    me.showModalForDate(areaType);
                    return;
                }
                grouped_items.sort(function (a, b) {
                    if (a[0]['time'] > b[0]['time'])
                        return 1;
                    else {
                        return -1;
                    }
                });
                me.sorted_groups = grouped_items;
                me.showModalForDate(areaType);
            }
            else {
                me.showModalForDate(areaType);
            }
        });
    };
    AdminSchedulesComponent.prototype.showModalForDate = function (areaType) {
        var me = this;
        if (areaType == me._scheduleService.areaType.TYPE_NEWYORK) {
            jQuery("#schedule_per_day_modal_NY").modal('show');
        }
        else {
            jQuery("#schedule_per_day_modal_BA").modal('show');
        }
    };
    AdminSchedulesComponent.prototype.compareTime = function (a, b) {
        if (a['time'] > b['time'])
            return 1;
        else {
            return -1;
        }
    };
    // Convert date to "2017-03-02" type.
    AdminSchedulesComponent.prototype.convertDate = function (d) {
        return [
            d.getFullYear(),
            ('0' + (d.getMonth() + 1)).slice(-2),
            ('0' + d.getDate()).slice(-2)
        ].join('-');
    };
    AdminSchedulesComponent.prototype.setCurentDateForCalendar = function () {
        var d = new Date();
        this.calendarInfo.cur_year = d.getFullYear();
        this.calendarInfo.cur_month = d.getMonth();
        this.calendarInfo.cur_date_str = this._scheduleService.convertMonthFormat(this.calendarInfo.cur_month) + " " + this.calendarInfo.cur_year;
    };
    AdminSchedulesComponent.prototype.showModal = function () {
        //jQuery("#schedule_per_day_modal").modal('show');
    };
    AdminSchedulesComponent.prototype.hideModal = function () {
        jQuery("#schedule_per_day_modal_NY").modal('hide');
        jQuery("#schedule_per_day_modal_BA").modal('hide');
    };
    AdminSchedulesComponent.prototype.addDaysToCalendar = function () {
        var me = this;
        var firstDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month, 1);
        var lastDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month + 1, 0);
        this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_NEWYORK);
        firstDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month, 1);
        lastDay = new Date(me.calendarInfo.cur_year, me.calendarInfo.cur_month + 1, 0);
        this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_BA);
    };
    AdminSchedulesComponent.prototype.prevMonth = function () {
        var me = this;
        if ((this.calendarInfo.cur_month - 1) == -1) {
            this.calendarInfo.cur_month = 11;
            this.calendarInfo.cur_year -= 1;
        }
        else {
            this.calendarInfo.cur_month -= 1;
        }
        this.calendarInfo.cur_date_str = this._scheduleService.convertMonthFormat(this.calendarInfo.cur_month) + " " + this.calendarInfo.cur_year;
        var firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1);
        var lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0);
        this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_NEWYORK);
        firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1);
        lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0);
        this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_BA);
    };
    AdminSchedulesComponent.prototype.nextMonth = function () {
        var me = this;
        if ((me.calendarInfo.cur_month + 1) == 12) {
            this.calendarInfo.cur_month = 0;
            this.calendarInfo.cur_year += 1;
        }
        else {
            this.calendarInfo.cur_month += 1;
        }
        this.calendarInfo.cur_date_str = this._scheduleService.convertMonthFormat(this.calendarInfo.cur_month) + " " + this.calendarInfo.cur_year;
        var firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1);
        var lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0);
        this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_NEWYORK);
        firstDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month, 1);
        lastDay = new Date(this.calendarInfo.cur_year, this.calendarInfo.cur_month + 1, 0);
        this.addDaysInDateRange(firstDay, lastDay, me._scheduleService.areaType.TYPE_BA);
    };
    AdminSchedulesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-schedules',
            template: __webpack_require__(839),
            styles: [__webpack_require__(803)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__["a" /* HttpService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */]) === 'function' && _c) || Object])
    ], AdminSchedulesComponent);
    return AdminSchedulesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-schedules.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSettingsComponent = (function () {
    function AdminSettingsComponent() {
    }
    AdminSettingsComponent.prototype.ngOnInit = function () {
    };
    AdminSettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-settings',
            template: __webpack_require__(840),
            styles: [__webpack_require__(804)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminSettingsComponent);
    return AdminSettingsComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-settings.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminStopsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminStopsComponent = (function () {
    function AdminStopsComponent() {
    }
    AdminStopsComponent.prototype.ngOnInit = function () {
    };
    AdminStopsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-stops',
            template: __webpack_require__(842),
            styles: [__webpack_require__(806)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminStopsComponent);
    return AdminStopsComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-stops.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminUsersComponent = (function () {
    function AdminUsersComponent() {
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
    };
    AdminUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-users',
            template: __webpack_require__(843),
            styles: [__webpack_require__(807)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-users.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_component__ = __webpack_require__(597);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_component__["a"]; });

//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/index.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(237);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(_httpService, _authService, router, route) {
        this._httpService = _httpService;
        this._authService = _authService;
        this.router = router;
        this.route = route;
        this.email = "";
        this.password = "";
        this.alert_visible = "none";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onPostLogin = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/auth/login";
        var formParams = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* URLSearchParams */]();
        formParams.set('email', this.email);
        formParams.set('password', this.password);
        var userInfo = {};
        userInfo['email'] = this.email;
        userInfo['password'] = this.password;
        this._httpService.sendPostRequestWithParams(url, formParams.toString())
            .subscribe(function (data) {
            var loginResult = data;
            if (loginResult['state'] == 'success') {
                _this.alert_visible = "none";
                localStorage.setItem("currentUser", JSON.stringify(userInfo));
                _this.router.navigate(['/admin']);
            }
            else {
                _this.alert_visible = "inherit";
                localStorage.removeItem("currentUser");
                _this.router.navigate(['/login']);
            }
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(846),
            styles: [__webpack_require__(810)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__["a" /* HttpService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/login.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this._options = {
            logInPath: "/login"
        };
        this.logout();
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this._router.navigate([this._options.logInPath]);
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__(847),
            styles: [__webpack_require__(811)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/logout.component.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainIndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainIndexComponent = (function () {
    function MainIndexComponent() {
    }
    MainIndexComponent.prototype.ngOnInit = function () {
    };
    MainIndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-main-index',
            template: __webpack_require__(850),
            styles: [__webpack_require__(814)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainIndexComponent);
    return MainIndexComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/main-index.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 455;


/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(600);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/main.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminFooterComponent = (function () {
    function AdminFooterComponent() {
    }
    AdminFooterComponent.prototype.ngOnInit = function () {
    };
    AdminFooterComponent.prototype.onResize = function (event) {
        jQuery(".footer-main").css("bottom", "0px");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AdminFooterComponent.prototype, "onResize", null);
    AdminFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-footer',
            template: __webpack_require__(830),
            styles: [__webpack_require__(794)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminFooterComponent);
    return AdminFooterComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-footer.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHeaderComponent = (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-header',
            template: __webpack_require__(831),
            styles: [__webpack_require__(795)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-header.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminScheduleEditBusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminScheduleEditBusComponent = (function () {
    function AdminScheduleEditBusComponent(_httpService, _scheduleService) {
        this._httpService = _httpService;
        this._scheduleService = _scheduleService;
        this.arr_stops = [];
        this.arr_hours = [];
        this.arr_mins = [];
        this.selected_group = [];
        this.selected_stops = [];
        this.selected_hours = [];
        this.selected_mins = [];
        this.isDisabled = false;
        this.isHidden = false;
        this.urls = {
            update_url: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/update_existing_schedule",
            remove_url: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/remove_existing_schedule",
            disable_url: __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/disable_existing_schedule",
        };
    }
    AdminScheduleEditBusComponent.prototype.ngOnInit = function () {
        this.structTimeArray();
        this.initiateFields();
        this.checkGroupDisability();
    };
    AdminScheduleEditBusComponent.prototype.getClass = function () {
        if (this.selected_group_disabled) {
            return "alert-disabled";
        }
        else {
            return "alert-enabled";
        }
    };
    AdminScheduleEditBusComponent.prototype.checkGroupDisability = function () {
        var me = this;
        if (me.selected_group[0]['open'] == me._scheduleService.scheduleDisabilty.TYPE_DISABLED) {
            me.selected_group_disabled = true;
        }
        else {
            me.selected_group_disabled = false;
        }
    };
    AdminScheduleEditBusComponent.prototype.structTimeArray = function () {
        var me = this;
        for (var i = 0; i < 24; i++) {
            var temp = {};
            if (i < 10) {
                if (i == 0) {
                    temp['text'] = "12 AM";
                }
                else {
                    temp['text'] = i + " AM";
                }
                temp['value'] = "0" + i;
            }
            else {
                if (i < 12) {
                    temp['text'] = i + " AM";
                }
                else if (i == 12) {
                    temp['text'] = "12 PM";
                }
                else if (i > 12) {
                    var idx = i - 12;
                    temp['text'] = idx + " PM";
                }
                temp['value'] = i;
            }
            me.arr_hours.push(temp);
        }
        for (var i = 0; i < 60; i += 5) {
            var temp = void 0;
            if (i < 10) {
                temp = "0" + i;
            }
            else {
                temp = i;
            }
            me.arr_mins.push(temp);
        }
    };
    AdminScheduleEditBusComponent.prototype.initiateFields = function () {
        var me = this;
        for (var i = 0; i < Object.keys(me.selected_group).length; i++) {
            var item = me.selected_group[i];
            me.selected_stops[i] = item['stop_area'];
            me.selected_hours[i] = item['time'].substring(0, 2);
            me.selected_mins[i] = item['time'].substring(3, 5);
        }
    };
    Object.defineProperty(AdminScheduleEditBusComponent.prototype, "stops", {
        set: function (param_stops) {
            this.arr_stops = param_stops;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminScheduleEditBusComponent.prototype, "group", {
        set: function (param_group) {
            this.selected_group = param_group;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminScheduleEditBusComponent.prototype, "group_idx", {
        set: function (param_group_idx) {
            this.selected_group_idx = param_group_idx;
        },
        enumerable: true,
        configurable: true
    });
    /*public onSave() {
        let me = this;
        
        let update_request = [];
        for (let i=0; i<Object.keys(me.selected_group).length; i++) {
            let group_item = me.selected_group[i];
            
            let temp = {};
            temp['time_id'] = group_item['time_id'];
            temp['stop'] = me.selected_stops[i];
            temp['hour'] = me.selected_hours[i];
            temp['min'] = me.selected_mins[i];
            
            update_request[i] = temp;
        }
        
        this._httpService.sendPostJSON(me.urls.update_url, update_request)
            .subscribe(
                data => {
                    
                },
                error => alert(error),
                () => console.log('Finished')
            );
        
    }*/
    AdminScheduleEditBusComponent.prototype.onRemove = function () {
        var me = this;
        var remove_request = [];
        for (var i = 0; i < Object.keys(me.selected_group).length; i++) {
            var group_item = me.selected_group[i];
            var temp = {};
            temp['time_id'] = group_item['time_id'];
            remove_request[i] = temp;
        }
        this._httpService.sendPostJSON(me.urls.remove_url, remove_request)
            .subscribe(function (data) {
            me.isHidden = true;
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AdminScheduleEditBusComponent.prototype.onDisable = function () {
        var me = this;
        var disable_request = [];
        for (var i = 0; i < Object.keys(me.selected_group).length; i++) {
            var group_item = me.selected_group[i];
            var temp = {};
            temp['time_id'] = group_item['time_id'];
            disable_request[i] = temp;
        }
        this._httpService.sendPostJSON(me.urls.disable_url, disable_request)
            .subscribe(function (data) {
            me.isDisabled = true;
            me.selected_group_disabled = true;
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AdminScheduleEditBusComponent.prototype.onReenable = function () {
        var me = this;
        var reenable_request = [];
        for (var i = 0; i < Object.keys(me.selected_group).length; i++) {
            var group_item = me.selected_group[i];
            var temp = {};
            temp['time_id'] = group_item['time_id'];
            temp['isEnabled'] = me._scheduleService.scheduleDisabilty.TYPE_ENABLED;
            reenable_request[i] = temp;
        }
        this._httpService.sendPostJSON(me.urls.disable_url, reenable_request)
            .subscribe(function (data) {
            me.isDisabled = false;
            me.selected_group_disabled = false;
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AdminScheduleEditBusComponent.prototype.onChangeStopsSelect = function ($event, idx) {
        var me = this;
        me.selected_group[idx]['stop_area'] = $event;
    };
    AdminScheduleEditBusComponent.prototype.onChangeHoursSelect = function ($event, idx) {
        var me = this;
        var temp;
        temp = $event + ":" + me.selected_group[idx]['time'].substring(3);
        me.selected_group[idx]['time'] = temp;
    };
    AdminScheduleEditBusComponent.prototype.onChangeMinsSelect = function ($event, idx) {
        var me = this;
        var temp;
        temp = me.selected_group[idx]['time'].substring(0, 2) + ":" + $event + ":" + me.selected_group[idx]['time'].substring(6);
        me.selected_group[idx]['time'] = temp;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], AdminScheduleEditBusComponent.prototype, "stops", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], AdminScheduleEditBusComponent.prototype, "group", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], AdminScheduleEditBusComponent.prototype, "group_idx", null);
    AdminScheduleEditBusComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-schedule-edit-bus',
            template: __webpack_require__(835),
            styles: [__webpack_require__(799)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_http_service_http_service__["a" /* HttpService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */]) === 'function' && _b) || Object])
    ], AdminScheduleEditBusComponent);
    return AdminScheduleEditBusComponent;
    var _a, _b;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-schedule-edit-bus.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSchedulesGennewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminSchedulesGennewComponent = (function () {
    function AdminSchedulesGennewComponent(_route, _scheduleService, _httpService) {
        this._route = _route;
        this._scheduleService = _scheduleService;
        this._httpService = _httpService;
        this.sel_date = "";
        this.selected_dow = "";
        this.selected_schedule_type = "";
        this.selected_date_from = "";
        this.selected_stop = "";
        this.urls = {
            retrieve_schedule_by_date_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_by_date",
            retrieve_all_stops_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_stops",
            save_all_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/saveall_existing_schedule",
            add_schedule_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/add_existing_schedule",
        };
        this.groups = [];
        this.stops = [];
        this.adding_stops = [];
        this.adding_hours = [];
        this.adding_mins = [];
        this.adding_prices = [];
        this.arr_stops = [];
        this.arr_hours = [];
        this.arr_mins = [];
        this.arr_prices = [];
    }
    AdminSchedulesGennewComponent.prototype.ngOnInit = function () {
        this.receiveParamsFromRoute();
        this.structTimeArray();
        this.getAllStopsInfo();
        this.showHeaderInfos();
    };
    AdminSchedulesGennewComponent.prototype.showModal = function () {
        jQuery("#gen_new_schedule_modal").modal('show');
    };
    AdminSchedulesGennewComponent.prototype.hideModal = function () {
        jQuery("#gen_new_schedule_modal").modal('hide');
    };
    AdminSchedulesGennewComponent.prototype.receiveParamsFromRoute = function () {
        this.sel_date = this._route.snapshot.params['sel_date'];
    };
    AdminSchedulesGennewComponent.prototype.structTimeArray = function () {
        var me = this;
        for (var i = 0; i < 24; i++) {
            var temp = void 0;
            if (i < 10) {
                temp = "0" + i;
            }
            else {
                temp = i;
            }
            me.arr_hours.push(temp);
        }
        for (var i = 0; i < 60; i += 5) {
            var temp = void 0;
            if (i < 10) {
                temp = "0" + i;
            }
            else {
                temp = i;
            }
            me.arr_mins.push(temp);
        }
        for (var i = 0; i <= 50; i += 0.5) {
            var temp = i.toFixed(2);
            me.arr_prices.push(temp);
        }
        for (var i = 0; i < 3; i++) {
            me.adding_stops[i] = "";
            me.adding_hours[i] = "";
            me.adding_mins[i] = "";
            me.adding_prices[i] = "";
        }
    };
    AdminSchedulesGennewComponent.prototype.getAllStopsInfo = function () {
        var me = this;
        var stops_url = this.urls.retrieve_all_stops_url;
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(function (data) {
            me.arr_stops = data['data'];
        });
    };
    AdminSchedulesGennewComponent.prototype.showHeaderInfos = function () {
        var _this = this;
        var me = this;
        var stops_url = this.urls.retrieve_all_stops_url;
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(function (data) {
            me.stops = data['data'];
            var url = _this.urls.retrieve_schedule_by_date_url + "?date=" + me.sel_date;
            _this._httpService.sendGetRequestWithParams(url)
                .subscribe(function (data) {
                var response = data;
                if (response['state'] == 'success') {
                    //********  Show header infos ************
                    var data_1 = response['data'][0];
                    console.log(data_1);
                    _this.selected_dow = _this._scheduleService.convertDayOfWeekFormat(data_1['dow']);
                    if (data_1['schedule_type'] == 1) {
                        _this.selected_schedule_type = 'after';
                    }
                    else {
                        _this.selected_schedule_type = 'on';
                    }
                    _this.selected_date_from = data_1['from_date'];
                    _this.selected_stop = data_1['stop_area'];
                    //********  Show header infos ended ***********
                    //*********  Edit informations ***********
                    var group_ids = [];
                    for (var i = 0; i < Object.keys(response['data']).length; i++) {
                        var item = response['data'][i];
                        if (group_ids.indexOf(item['group_id']) == -1) {
                            group_ids.push(item['group_id']);
                        }
                    }
                    var idx = 0, grouped_items = [];
                    for (var i = 0; i < Object.keys(group_ids).length; i++) {
                        grouped_items[idx] = [];
                        for (var j = 0; j < Object.keys(response['data']).length; j++) {
                            var item = response['data'][j];
                            if (group_ids[i] == item['group_id']) {
                                grouped_items[idx].push(item);
                            }
                        }
                        idx++;
                    }
                    me.groups = grouped_items;
                    _this.showModal();
                }
            });
        });
    };
    AdminSchedulesGennewComponent.prototype.onAddSchedule = function () {
        var me = this;
        var insert_request = [];
        for (var i = 0; i < Object.keys(me.adding_stops).length; i++) {
            if (me.adding_stops[i] != "" && me.adding_hours[i] != "" && me.adding_mins[i] != "" && me.adding_prices[i] != "") {
                var temp = {};
                temp['stop'] = me.adding_stops[i];
                temp['hour'] = me.adding_hours[i];
                temp['min'] = me.adding_mins[i];
                temp['date_from'] = me.sel_date;
                temp['dow'] = me._scheduleService.convertWeekToNumber(me.selected_dow);
                insert_request[i] = temp;
            }
        }
        this._httpService.sendPostJSON(me.urls.add_schedule_url, insert_request)
            .subscribe(function (data) {
            window.location.reload();
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
        me.hideModal();
    };
    AdminSchedulesGennewComponent.prototype.onSaveAll = function () {
        var me = this;
        this._httpService.sendPostJSON(me.urls.save_all_url, me.groups)
            .subscribe(function (data) {
            jQuery("#confirm_saveall_modal").modal('hide');
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
    };
    AdminSchedulesGennewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-schedules-gennew',
            template: __webpack_require__(837),
            styles: [__webpack_require__(801)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__["a" /* HttpService */]) === 'function' && _c) || Object])
    ], AdminSchedulesGennewComponent);
    return AdminSchedulesGennewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-schedules-gennew.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSchedulesGenspecialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminSchedulesGenspecialComponent = (function () {
    function AdminSchedulesGenspecialComponent(_route, _scheduleService, _httpService) {
        this._route = _route;
        this._scheduleService = _scheduleService;
        this._httpService = _httpService;
        this.sel_date = "";
        this.selected_dow = "";
        this.selected_schedule_type = "";
        this.selected_date_from = "";
        this.selected_stop = "";
        this.urls = {
            retrieve_schedule_by_date_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_by_date",
            retrieve_all_stops_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/retrieve_stops",
            save_all_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/saveall_existing_schedule",
            add_schedule_url: __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* BACKEND_SERVER_URL */] + "api/admin/schedule/add_existing_schedule",
        };
        this.groups = [];
        this.stops = [];
        this.adding_stops = [];
        this.adding_hours = [];
        this.adding_mins = [];
        this.adding_prices = [];
        this.arr_stops = [];
        this.arr_hours = [];
        this.arr_mins = [];
        this.arr_prices = [];
    }
    AdminSchedulesGenspecialComponent.prototype.ngOnInit = function () {
        this.receiveParamsFromRoute();
        this.structTimeArray();
        this.getAllStopsInfo();
        this.showHeaderInfos();
    };
    AdminSchedulesGenspecialComponent.prototype.showModal = function () {
        jQuery("#gen_special_schedule_modal").modal('show');
    };
    AdminSchedulesGenspecialComponent.prototype.hideModal = function () {
        jQuery("#gen_special_schedule_modal").modal('hide');
    };
    AdminSchedulesGenspecialComponent.prototype.receiveParamsFromRoute = function () {
        this.sel_date = this._route.snapshot.params['sel_date'];
    };
    AdminSchedulesGenspecialComponent.prototype.structTimeArray = function () {
        var me = this;
        for (var i = 0; i < 24; i++) {
            var temp = void 0;
            if (i < 10) {
                temp = "0" + i;
            }
            else {
                temp = i;
            }
            me.arr_hours.push(temp);
        }
        for (var i = 0; i < 60; i += 5) {
            var temp = void 0;
            if (i < 10) {
                temp = "0" + i;
            }
            else {
                temp = i;
            }
            me.arr_mins.push(temp);
        }
        for (var i = 0; i <= 50; i += 0.5) {
            var temp = i.toFixed(2);
            me.arr_prices.push(temp);
        }
        for (var i = 0; i < 3; i++) {
            me.adding_stops[i] = "";
            me.adding_hours[i] = "";
            me.adding_mins[i] = "";
            me.adding_prices[i] = "";
        }
    };
    AdminSchedulesGenspecialComponent.prototype.getAllStopsInfo = function () {
        var me = this;
        var stops_url = this.urls.retrieve_all_stops_url;
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(function (data) {
            me.arr_stops = data['data'];
        });
    };
    AdminSchedulesGenspecialComponent.prototype.showHeaderInfos = function () {
        var _this = this;
        var me = this;
        var stops_url = this.urls.retrieve_all_stops_url;
        this._httpService.sendGetRequestWithParams(stops_url)
            .subscribe(function (data) {
            me.stops = data['data'];
            var url = _this.urls.retrieve_schedule_by_date_url + "?date=" + me.sel_date;
            _this._httpService.sendGetRequestWithParams(url)
                .subscribe(function (data) {
                var response = data;
                if (response['state'] == 'success') {
                    //********  Show header infos ************
                    var data_1 = response['data'][0];
                    console.log(data_1);
                    _this.selected_dow = _this._scheduleService.convertDayOfWeekFormat(data_1['dow']);
                    if (data_1['schedule_type'] == 1) {
                        _this.selected_schedule_type = 'after';
                    }
                    else {
                        _this.selected_schedule_type = 'on';
                    }
                    _this.selected_date_from = data_1['from_date'];
                    _this.selected_stop = data_1['stop_area'];
                    //********  Show header infos ended ***********
                    //*********  Edit informations ***********
                    var group_ids = [];
                    for (var i = 0; i < Object.keys(response['data']).length; i++) {
                        var item = response['data'][i];
                        if (group_ids.indexOf(item['group_id']) == -1) {
                            group_ids.push(item['group_id']);
                        }
                    }
                    var idx = 0, grouped_items = [];
                    for (var i = 0; i < Object.keys(group_ids).length; i++) {
                        grouped_items[idx] = [];
                        for (var j = 0; j < Object.keys(response['data']).length; j++) {
                            var item = response['data'][j];
                            if (group_ids[i] == item['group_id']) {
                                grouped_items[idx].push(item);
                            }
                        }
                        idx++;
                    }
                    me.groups = grouped_items;
                    _this.showModal();
                }
            });
        });
    };
    AdminSchedulesGenspecialComponent.prototype.onAddSchedule = function () {
        var me = this;
        var insert_request = [];
        for (var i = 0; i < Object.keys(me.adding_stops).length; i++) {
            if (me.adding_stops[i] != "" && me.adding_hours[i] != "" && me.adding_mins[i] != "" && me.adding_prices[i] != "") {
                var temp = {};
                temp['stop'] = me.adding_stops[i];
                temp['hour'] = me.adding_hours[i];
                temp['min'] = me.adding_mins[i];
                temp['date_from'] = me.sel_date;
                temp['dow'] = me._scheduleService.convertWeekToNumber(me.selected_dow);
                insert_request[i] = temp;
            }
        }
        this._httpService.sendPostJSON(me.urls.add_schedule_url, insert_request)
            .subscribe(function (data) {
            window.location.reload();
        }, function (error) { return alert(error); }, function () { return console.log('Finished'); });
        me.hideModal();
    };
    AdminSchedulesGenspecialComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-schedules-genspecial',
            template: __webpack_require__(838),
            styles: [__webpack_require__(802)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_schedule_service_schedule_service__["a" /* ScheduleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__["a" /* HttpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_http_service_http_service__["a" /* HttpService */]) === 'function' && _c) || Object])
    ], AdminSchedulesGenspecialComponent);
    return AdminSchedulesGenspecialComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-schedules-genspecial.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSidebarComponent = (function () {
    function AdminSidebarComponent() {
        this.defaultData = [
            {
                text: 'Coupons',
                icon: 'fa fa-tags',
                href: 'javascript:void(0)',
                enableLinks: true,
                nodes: [
                    {
                        text: 'Coupons',
                        href: '/#/admin/coupons',
                        enableLinks: true,
                        icon: 'fa fa-tags',
                    },
                    {
                        text: 'Campaigns',
                        href: '/#/admin/coupons-campaigns',
                        enableLinks: true,
                        icon: 'fa fa-tags',
                    },
                    {
                        text: 'Companies',
                        href: '/#/admin/coupons-companies',
                        enableLinks: true,
                        icon: 'fa fa-tags',
                    },
                    {
                        text: 'Types',
                        href: '/#/admin/coupons-types',
                        enableLinks: true,
                        icon: 'fa fa-tags',
                    }
                ]
            }
        ];
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
        this.setTreeView();
    };
    AdminSidebarComponent.prototype.onResize = function (event) {
    };
    AdminSidebarComponent.prototype.setTreeView = function () {
        var me = this;
        jQuery("#treeview-coupons").click(function () {
            if (jQuery("#admin-sidebar-coupons-details").css("display") == 'none') {
                jQuery("#admin-sidebar-coupons-details").slideDown();
                jQuery(".fa-angle-left").css('display', 'none');
                jQuery(".fa-angle-down").css('display', 'inherit');
                // Update Sidebar Height.
                var plus_height = jQuery("#admin-sidebar-coupons-details-ul").height();
                jQuery("#admin_sidebar").height(jQuery("#admin_sidebar").height() + plus_height);
            }
            else {
                jQuery("#admin-sidebar-coupons-details").slideUp();
                jQuery(".fa-angle-left").css('display', 'inherit');
                jQuery(".fa-angle-down").css('display', 'none');
                // Update Sidebar Height.
                jQuery("#admin_sidebar").height(jQuery("#admin_sidebar").height() - jQuery("#admin-sidebar-coupons-details-ul").height());
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AdminSidebarComponent.prototype, "onResize", null);
    AdminSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin-sidebar',
            template: __webpack_require__(841),
            styles: [__webpack_require__(805)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin-sidebar.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(100, 1000);
        timer.subscribe(this.setDimensions);
    };
    AdminComponent.prototype.onResize = function (event) {
        this.setDimensions();
    };
    AdminComponent.prototype.setDimensions = function () {
        jQuery(".admin-left").height(jQuery('.admin-right').height());
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AdminComponent.prototype, "onResize", null);
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__(844),
            styles: [__webpack_require__(808)],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/admin.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_main_admin_main_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_schedules_admin_schedules_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_stops_admin_stops_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_rates_admin_rates_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_areas_admin_areas_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_users_admin_users_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_customers_admin_customers_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_admin_pages_admin_pages_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_settings_admin_settings_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_admin_coupons_admin_coupons_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_coupons_campaigns_admin_coupons_campaigns_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_coupons_companies_admin_coupons_companies_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_coupons_types_admin_coupons_types_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_login_login_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_main_index_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_logout_logout_component__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_admin_schedules_admin_schedules_editexisting_admin_schedules_editexisting_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service_auth_service__ = __webpack_require__(177);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var routes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_20__services_auth_service_auth_service__["a" /* AuthService */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_main_admin_main_component__["a" /* AdminMainComponent */] },
            { path: 'schedules', component: __WEBPACK_IMPORTED_MODULE_4__admin_admin_schedules_admin_schedules_component__["a" /* AdminSchedulesComponent */] },
            { path: 'schedules_edit/:sel_date/:button_type/:area_id/:schedule_type', component: __WEBPACK_IMPORTED_MODULE_19__admin_admin_schedules_admin_schedules_editexisting_admin_schedules_editexisting_component__["a" /* AdminSchedulesEditexistingComponent */] },
            /*{ path: 'schedules_gennew/:sel_date',      component: AdminSchedulesGennewComponent },
            { path: 'schedules_genspecial/:sel_date',      component: AdminSchedulesGenspecialComponent },*/
            { path: 'stops', component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_stops_admin_stops_component__["a" /* AdminStopsComponent */] },
            { path: 'rates', component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_rates_admin_rates_component__["a" /* AdminRatesComponent */] },
            { path: 'areas', component: __WEBPACK_IMPORTED_MODULE_7__admin_admin_areas_admin_areas_component__["a" /* AdminAreasComponent */] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_8__admin_admin_users_admin_users_component__["a" /* AdminUsersComponent */] },
            { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_customers_admin_customers_component__["a" /* AdminCustomersComponent */] },
            { path: 'pages', component: __WEBPACK_IMPORTED_MODULE_10__admin_admin_pages_admin_pages_component__["a" /* AdminPagesComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__admin_admin_settings_admin_settings_component__["a" /* AdminSettingsComponent */] },
            { path: 'coupons', component: __WEBPACK_IMPORTED_MODULE_12__admin_admin_coupons_admin_coupons_component__["a" /* AdminCouponsComponent */] },
            { path: 'coupons-campaigns', component: __WEBPACK_IMPORTED_MODULE_13__admin_admin_coupons_campaigns_admin_coupons_campaigns_component__["a" /* AdminCouponsCampaignsComponent */] },
            { path: 'coupons-companies', component: __WEBPACK_IMPORTED_MODULE_14__admin_admin_coupons_companies_admin_coupons_companies_component__["a" /* AdminCouponsCompaniesComponent */] },
            { path: 'coupons-types', component: __WEBPACK_IMPORTED_MODULE_15__admin_admin_coupons_types_admin_coupons_types_component__["a" /* AdminCouponsTypesComponent */] },
            { path: '**', redirectTo: 'login' }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_17__main_main_index_component__["a" /* MainIndexComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__main_login_login_component__["a" /* LoginComponent */] },
            { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_18__main_logout_logout_component__["a" /* LogoutComponent */] },
            { path: '**', redirectTo: 'login' }
        ]
    },
    { path: '**', redirectTo: 'login' }];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/app-routing.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.onResize = function (event) {
        jQuery("html").css('min-height', '100vh');
        jQuery("body").css('min-height', '100vh');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(845),
            styles: [__webpack_require__(809)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/app.component.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_admin_header_admin_header_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_sidebar_admin_sidebar_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_admin_main_admin_main_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_schedules_admin_schedules_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_admin_stops_admin_stops_component__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_rates_admin_rates_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_areas_admin_areas_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_users_admin_users_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__admin_admin_customers_admin_customers_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_admin_pages_admin_pages_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_admin_settings_admin_settings_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_admin_coupons_admin_coupons_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_admin_coupons_campaigns_admin_coupons_campaigns_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_admin_coupons_companies_admin_coupons_companies_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_admin_coupons_types_admin_coupons_types_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_admin_footer_admin_footer_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__main_login_login_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_http_service_http_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_auth_service_auth_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_schedule_service_schedule_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__main_main_header_main_header_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__main_main_index_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__main_main_footer_main_footer_component__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admin_admin_schedules_admin_schedules_editexisting_admin_schedules_editexisting_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__admin_admin_schedules_admin_schedules_gennew_admin_schedules_gennew_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__admin_admin_schedules_admin_schedules_genspecial_admin_schedules_genspecial_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_admin_schedules_admin_schedules_editexisting_admin_schedule_edit_bus_admin_schedule_edit_bus_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__main_logout_logout_component__ = __webpack_require__(385);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__admin__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_admin_main_admin_main_component__["a" /* AdminMainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__admin_admin_schedules_admin_schedules_component__["a" /* AdminSchedulesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__admin_admin_stops_admin_stops_component__["a" /* AdminStopsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_admin_rates_admin_rates_component__["a" /* AdminRatesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_admin_areas_admin_areas_component__["a" /* AdminAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_admin_users_admin_users_component__["a" /* AdminUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__admin_admin_customers_admin_customers_component__["a" /* AdminCustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_17__admin_admin_pages_admin_pages_component__["a" /* AdminPagesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_admin_settings_admin_settings_component__["a" /* AdminSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__admin_admin_coupons_admin_coupons_component__["a" /* AdminCouponsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__admin_admin_coupons_campaigns_admin_coupons_campaigns_component__["a" /* AdminCouponsCampaignsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_admin_coupons_companies_admin_coupons_companies_component__["a" /* AdminCouponsCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_admin_coupons_types_admin_coupons_types_component__["a" /* AdminCouponsTypesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__main_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__main_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__main_main_index_component__["a" /* MainIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_30__main_main_footer_main_footer_component__["a" /* MainFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__admin_admin_schedules_admin_schedules_editexisting_admin_schedules_editexisting_component__["a" /* AdminSchedulesEditexistingComponent */],
                __WEBPACK_IMPORTED_MODULE_32__admin_admin_schedules_admin_schedules_gennew_admin_schedules_gennew_component__["a" /* AdminSchedulesGennewComponent */],
                __WEBPACK_IMPORTED_MODULE_33__admin_admin_schedules_admin_schedules_genspecial_admin_schedules_genspecial_component__["a" /* AdminSchedulesGenspecialComponent */],
                __WEBPACK_IMPORTED_MODULE_35__main_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_34__admin_admin_schedules_admin_schedules_editexisting_admin_schedule_edit_bus_admin_schedule_edit_bus_component__["a" /* AdminScheduleEditBusComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__services_http_service_http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_26__services_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_27__services_schedule_service_schedule_service__["a" /* ScheduleService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__admin_admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_admin_sidebar_admin_sidebar_component__["a" /* AdminSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_admin_main_admin_main_component__["a" /* AdminMainComponent */],
                __WEBPACK_IMPORTED_MODULE_11__admin_admin_schedules_admin_schedules_component__["a" /* AdminSchedulesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__admin_admin_stops_admin_stops_component__["a" /* AdminStopsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__admin_admin_rates_admin_rates_component__["a" /* AdminRatesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_admin_areas_admin_areas_component__["a" /* AdminAreasComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_admin_users_admin_users_component__["a" /* AdminUsersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__admin_admin_customers_admin_customers_component__["a" /* AdminCustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_17__admin_admin_pages_admin_pages_component__["a" /* AdminPagesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_admin_settings_admin_settings_component__["a" /* AdminSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__admin_admin_coupons_admin_coupons_component__["a" /* AdminCouponsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__admin_admin_coupons_campaigns_admin_coupons_campaigns_component__["a" /* AdminCouponsCampaignsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_admin_coupons_companies_admin_coupons_companies_component__["a" /* AdminCouponsCompaniesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_admin_coupons_types_admin_coupons_types_component__["a" /* AdminCouponsTypesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_admin_footer_admin_footer_component__["a" /* AdminFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24__main_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__main_main_header_main_header_component__["a" /* MainHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__main_main_index_component__["a" /* MainIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_30__main_main_footer_main_footer_component__["a" /* MainFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__admin_admin_schedules_admin_schedules_editexisting_admin_schedules_editexisting_component__["a" /* AdminSchedulesEditexistingComponent */],
                __WEBPACK_IMPORTED_MODULE_32__admin_admin_schedules_admin_schedules_gennew_admin_schedules_gennew_component__["a" /* AdminSchedulesGennewComponent */],
                __WEBPACK_IMPORTED_MODULE_33__admin_admin_schedules_admin_schedules_genspecial_admin_schedules_genspecial_component__["a" /* AdminSchedulesGenspecialComponent */],
                __WEBPACK_IMPORTED_MODULE_35__main_logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_34__admin_admin_schedules_admin_schedules_editexisting_admin_schedule_edit_bus_admin_schedule_edit_bus_component__["a" /* AdminScheduleEditBusComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/app.module.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainFooterComponent = (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () {
    };
    MainFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-main-footer',
            template: __webpack_require__(848),
            styles: [__webpack_require__(812)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainFooterComponent);
    return MainFooterComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/main-footer.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainHeaderComponent = (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent.prototype.ngOnInit = function () {
    };
    MainHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-main-header',
            template: __webpack_require__(849),
            styles: [__webpack_require__(813)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/main-header.component.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__(851),
            styles: [__webpack_require__(815)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/page-not-found.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    baseHref: '/TripperBus_Backend/frontend/'
};
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/environment.js.map

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-areas-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-areas-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-areas-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-coupons-campaigns-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-coupons-campaigns-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-coupons-campaigns-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-coupons-companies-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-coupons-companies-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-coupons-companies-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-coupons-types-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-coupons-types-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-coupons-types-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-coupons-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-coupons-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-coupons-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-customers-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-customers-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-customers-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = ".footer-main {\r\n    bottom: 0px;\r\n    width: calc(100vw - 220px);\r\n    padding: 15px;\r\n    color: #444;\r\n    border-top: 1px solid #d2d6de;\r\n    display: inline-block;\r\n    position: fixed;\r\n    margin-left: 220px;\r\n    z-index: 999;\r\n}"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = ".admin-header {\r\n    background-color: #3c8dbc;\r\n}\r\n.admin-header-icon-bar-custom {\r\n    background-color: white;\r\n}\r\n\r\n.admin-header-account {\r\n    color: white;\r\n    background-color: transparent !important;\r\n    height: 49px;\r\n}\r\n.admin-header-account:hover, .admin-header-account:focus {\r\n    background-color: rgba(0,0,0,0.1) !important;\r\n}\r\n\r\n.admin-header-user-img {\r\n    height: 25px;\r\n}\r\n\r\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = ".admin-main-panel {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.admin-main-content-header {\r\n    background: transparent;\r\n    position: relative;\r\n    padding: 15px 15px 0 15px;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n.admin-main-form-control-custom {\r\n    width: 100% !important;\r\n    margin-bottom: 15px;\r\n}"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-pages-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-pages-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-pages-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-rates-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-rates-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-rates-rate-select {\r\n    width: 30%;\r\n    margin: 0px 35%;\r\n    min-width: 100px;\r\n}"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = ".alert-enabled {\r\n    background-color: #00a65a !important;\r\n}\r\n\r\n.alert-disabled {\r\n    background-color: orange !important;\r\n}\r\n\r\nh3, h5 {\r\n    color: white !important;\r\n}"

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.sendPostRequestWithParams = function (url, params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(url, params, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    HttpService.prototype.sendGetRequestWithParams = function (url) {
        return this._http.get(url)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.sendPostJSON = function (url, json_data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this._http.post(url, JSON.stringify(json_data), { headers: headers });
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], HttpService);
    return HttpService;
    var _a;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/http.service.js.map

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-schedule-edit-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-schedule-edit-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-schedule-edit-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-schedule-gennew-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-schedule-gennew-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-schedule-gennew-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-schedules-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-schedules-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.btn-calendar-prev-next {\r\n    width: 95px;\r\n}\r\n\r\n.seven-cols.weekdays .col-md-1 {\r\n    float: left;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    display: inline-block;\r\n    width: 14.285714285714285714285714285714%;\r\n}\r\n\r\n.seven-cols .col-md-1 {\r\n    display: inline-block;\r\n    width: 14.285714285714285714285714285714%;\r\n}\r\n\r\n.seven-cols .col-md-1.fix-height {\r\n    min-height: 120px;\r\n    padding: 5px;\r\n    text-align: center;\r\n}\r\n\r\n.seven-cols h3 {\r\n    cursor: pointer;\r\n}\r\n\r\n.seven-cols p {\r\n    cursor: context-menu;\r\n}\r\n\r\n.calendar_day_holiday {\r\n    color: red;\r\n}\r\n\r\n.calendar_day_new_schedule {\r\n    color: orange;\r\n}"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-settings-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-settings-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-settings-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = ".admin-sidebar {\r\n    min-height: 0px !important;\r\n    top: 0px !important;\r\n    background-color: #222d32;\r\n}\r\n\r\n.admin-sidebar-aside {\r\n    color: #b8c7ce;\r\n}\r\n\r\n.admin-sidebar-form-custom {\r\n    border-radius: 2px;\r\n    border: 0px solid #555;\r\n    margin: 10px 10px;\r\n    width: 180px;\r\n}\r\n\r\n.sidebar-menu span {\r\n    color: #b8c7ce;\r\n}\r\n.sidebar-menu i {\r\n    color: #b8c7ce;\r\n}\r\n\r\n.admin-sidebar-search-input {\r\n    background-color: #374850;\r\n    border: 1px solid transparent;\r\n}\r\n\r\n.admin-sidebar-search-btn {\r\n    color: #999;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 2px;\r\n    border-bottom-right-radius: 2px;\r\n    border-bottom-left-radius: 0;\r\n    background-color: #374850;\r\n}\r\n\r\n.sidebar-menu .sidebar-menu-li:hover {\r\n    background-color: #333;\r\n}\r\n.sidebar-menu .sidebar-menu-li:hover span, .sidebar-menu .sidebar-menu-li:hover i {\r\n    color: white !important;\r\n}\r\n\r\n.admin-sidebar-router-active {\r\n    background-color: #333;\r\n}\r\n.admin-sidebar-router-active span, .admin-sidebar-router-active i{\r\n    color: white !important;\r\n}\r\n\r\n#admin-sidebar-coupons-details > ul > li > a {\r\n    padding: 5px 5px 5px 0px;\r\n    display: block;\r\n}\r\n#admin-sidebar-coupons-details > ul {\r\n    list-style: none;\r\n}\r\n\r\n#admin-sidebar-coupons-details ul li:hover {\r\n    background-color: #333;\r\n}\r\n#admin-sidebar-coupons-details ul li:hover span, #admin-sidebar-coupons-details ul li:hover i {\r\n    color: white !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-stops-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-stops-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-stops-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "\r\n.admin-users-content-header-custom {\r\n    position: relative;\r\n}\r\n\r\n.admin-users-breadcrumb-custom {\r\n    float: right;\r\n    background: transparent;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    padding: 7px 5px;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 10px;\r\n    border-radius: 2px;\r\n}\r\n\r\n.admin-users-main-panel-custom {\r\n    border-top: 3px solid #3c8dbc;\r\n}\r\n\r\n.panel-heading {\r\n    text-transform: initial;\r\n}\r\n\r\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = ".admin-root {\r\n    font-family: 'open_sansregular', sans-serif, Arial !important;\r\n    font-size: 13px;\r\n    line-height: 1.42857143;\r\n    color: #333;\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.admin-left {\r\n    width: 220px; \r\n    min-height: calc(100vh - 50px);\r\n    background-color: #222d32;\r\n    float: left;\r\n    position: absolute;\r\n}\r\n\r\n.admin-right {\r\n    float: left;\r\n    position: absolute;\r\n    width: calc(100% - 220px);\r\n    margin-left: 220px;\r\n    min-height: calc(100vh - 50px);\r\n}\r\n\r\n.admin-right-content {\r\n    padding: 15px 15px;\r\n}\r\n\r\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = ".login-panel-heading-custom {\r\n    background: rgba(63, 177, 181, 0.95);\r\n    border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.login-panel-heading-h3 {\r\n    color: white;\r\n    font-size: 1.8em;\r\n    font-weight: 200;\r\n}\r\n\r\n.login-panel-custom {\r\n    width: 60%;\r\n    margin-left: 20%;\r\n    margin-top: 100px;\r\n}\r\n\r\n.login-form-firstline {\r\n    padding: 15px 0px;\r\n}\r\n\r\n.login-form-group-custom {\r\n    width: 49%;\r\n}\r\n.login-form-group-custom input {\r\n    height: 45px;\r\n    border: 1px solid #3fb9be;\r\n    font-weight: 600;\r\n}\r\n\r\n.login-form-secondline {\r\n    padding: 15px 0px;\r\n    border-top: #e7e7e7 1px solid;\r\n}\r\n\r\n.login-btn {\r\n    background: #3d94d1;\r\n    text-transform: uppercase;\r\n    font-size: .7em;\r\n    height: 40px;\r\n    width: 90px;\r\n}\r\n.login-btn:hover {\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.main-login-alert {\r\n    display: none;\r\n}"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "footer {\r\n    background: #282d31;\r\n    border-top: 4px solid #e34f2e;\r\n    display: block;\r\n}\r\n\r\n.footer_in {\r\n    padding: 0 15px;\r\n}\r\n\r\n.footer_cnt {\r\n    padding: 54px 0 45px 0;\r\n    margin: 0 -15px;\r\n}\r\n\r\n.links.link_travel {\r\n    width: 23.5%;\r\n}\r\n\r\n.links {\r\n    padding: 0 15px;\r\n    float: left;\r\n    display: inline-block;\r\n}\r\n\r\n.links.link_abt {\r\n    width: 27.5%;\r\n}\r\n\r\n.links.link_service {\r\n    width: 22.5%;\r\n}\r\n\r\n.links.link_cantact {\r\n    width: 26.5%;\r\n}\r\n\r\n.copy {\r\n    padding: 35px 0 35px 0;\r\n    border-top: 1px solid #393f43;\r\n}\r\n\r\n.links h4 {\r\n    padding: 0 0 7px 0;\r\n}\r\nh4 {\r\n    padding: 0 0 0 0;\r\n    margin: 0 0 0 0;\r\n    font-family: \"ProximaNova-Bold\";\r\n    font-size: 16px;\r\n    line-height: 18px;\r\n    font-weight: normal;\r\n    color: #ffffff;\r\n}\r\n\r\n.links ul li a {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: \"ProximaNova-Regular\";\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-weight: normal;\r\n    color: #909293;\r\n    transition: all ease-in-out 0.5s;\r\n    -moz-transition: all ease-in-out 0.5s;\r\n    -ms-transition: all ease-in-out 0.5s;\r\n    -o-transition: all ease-in-out 0.5s;\r\n    -webkit-transition: all ease-in-out 0.5s;\r\n}\r\n\r\n.links ul li {\r\n    padding: 7px 0 7px 0;\r\n}\r\n\r\n.links ul {\r\n    padding-left: 0px;\r\n}\r\n\r\n.links ul li span {\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: \"ProximaNova-Regular\";\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-weight: normal;\r\n    color: #c7c8c8;\r\n}\r\n\r\n.links.link_cantact ul li a {\r\n    font-family: \"ProximaNova-Bold\";\r\n    color: #ffb300;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.links.link_cantact .socialicons {\r\n    padding: 38px 0 0 0;\r\n}\r\n\r\n.links.link_cantact .socialicons li {\r\n    padding: 0 17px 0 0px;\r\n    display: inline-block;\r\n}\r\n\r\n.links.link_cantact .socialicons i {\r\n    font-size: 21px; \r\n    color: #c7c8c8;\r\n}\r\n\r\n.copy .footer_logo {\r\n    padding: 0 20px 0 0;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.copy p {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 13px;\r\n    line-height: 24px;\r\n    color: #909193;\r\n}\r\n\r\n.flt_rt {\r\n    float: right;\r\n    display: inline;\r\n}\r\n\r\nimg.main-footer-logo-img {\r\n    margin-top: -10px;\r\n}"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "nav.main-header-nav ul.menu-right li {\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    padding: 33px 0px;\r\n}\r\n\r\nnav.main-header-nav ul.menu-right li a {\r\n    font-family: \"ProximaNova-Semibold\";\r\n    font-size: 13px;\r\n    line-height: 15px;\r\n    font-weight: normal;\r\n    padding: 0 0 0 21px;\r\n    color: white;\r\n}\r\n\r\nnav.main-header-nav ul.menu-right {\r\n    padding: 1px 5px;\r\n    float: right;\r\n}\r\n\r\n.fl {\r\n    float: left;\r\n}\r\n\r\nnav.main-header-nav {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    height: 90px;\r\n    z-index: 999;\r\n    font-size: .8em;\r\n    -webkit-transition: all 500ms ease-in-out;\r\n    transition: all 500ms ease-in-out;\r\n    margin-left: 10%;\r\n    border-bottom: 1px solid white;\r\n    width: 80%;\r\n}\r\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = ".main-root {\r\n    padding: 25px 10%;\r\n    /*background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0) 80%), \r\n                        url(\"./assets/img/3-newyork.jpg\") !important;\r\n    background-size: cover;*/\r\n    min-height: 100vh !important;\r\n}"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-areas-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-crop\"></i> Areas\n    </h1>\n    <ol class=\"breadcrumb admin-areas-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Areas</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-areas-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Areas\n            <a href=\"http://tripperbus.infinixsoft.com/admin/areas/create\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Area</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Area Name</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr>\n                    <td><span class=\"userName\">2</span></td>\n                    <td><span class=\"userName\">Washington DC</span></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/areas/2/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"2\"><span class=\"fa fa-trash\"></span> Delete</a>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-coupons-campaigns-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-tags\"></i> Campaigns\n    </h1>\n    <ol class=\"breadcrumb admin-coupons-campaigns-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\" style=\"color: black;\"><i class=\"fa fa-tags\"></i> Coupons</li>\n        <li class=\"active\">Campaigns</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-coupons-campaigns-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Campaigns\n            <a href=\"http://tripperbus.infinixsoft.com/admin/users/create?role=1\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Campaigns</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Campaign</th>\n                    <th>Start</th>\n                    <th>End</th>\n                    <th>Status</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr class=\"rows 1\">\n                    <td><span class=\"userName\">1</span></td>\n                    <td><span class=\"userName\">Christmas 2016</span></td>\n                    <td><span class=\"userName\">2016-12-01</span></td>\n                    <td><span class=\"userName\">2016-11-25</span></td>\n                    <td><span class=\"fa fa-times\"></span>\n                    </td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/codes-campaigns/1/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n\n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"1\"><span class=\"fa fa-trash\"></span> Delete</a>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-coupons-companies-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-tags\"></i> Companies\n    </h1>\n    <ol class=\"breadcrumb admin-coupons-companies-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\" style=\"color: black;\"><i class=\"fa fa-tags\"></i> Coupons</li>\n        <li class=\"active\">Companies</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-coupons-companies-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Companies\n            <a href=\"http://tripperbus.infinixsoft.com/admin/users/create?role=1\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Companies</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Company</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr class=\"rows 1\">\n                    <td><span class=\"userName\">1</span></td>\n                    <td><span class=\"userName\">TripperBus</span></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/codes-companies/1/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"1\"><span class=\"fa fa-trash\"></span> Delete</a>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-coupons-types-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-tags\"></i> Types\n    </h1>\n    <ol class=\"breadcrumb admin-coupons-types-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\" style=\"color: black;\"><i class=\"fa fa-tags\"></i> Coupons</li>\n        <li class=\"active\">Types</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-coupons-types-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Types\n            <a href=\"http://tripperbus.infinixsoft.com/admin/users/create?role=1\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Types</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Type</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr class=\"rows 1\">\n                    <td><span class=\"userName\">1</span></td>\n                    <td><span class=\"userName\">price</span></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/codes-types/1/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"1\"><span class=\"fa fa-trash\"></span> Delete</a>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-coupons-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-tags\"></i> Coupons\n    </h1>\n    <ol class=\"breadcrumb admin-coupons-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Coupons</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-coupons-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Coupons\n            <a href=\"http://tripperbus.infinixsoft.com/admin/users/create?role=1\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Coupons</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Code</th>\n                    <th>Amount</th>\n                    <th>Type</th>\n                    <th>Company / Campaign</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr class=\"rows 2\">\n                    <td><span class=\"userName\">2</span></td>\n                    <td><span class=\"userName\">VWMS0W3Y</span></td>\n                    <td><span class=\"userName\">25</span></td>\n                    <td><span class=\"label label-info\">price</span></td>\n                    <td><span class=\"userName\">TripperBus / Christmas 2016\n                    <span class=\"fa fa-times\"></span>\n                    </span></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/codes/2/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n\n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"2\"><span class=\"fa fa-trash\"></span> Delete</a>\n\n                        </div>\n                    </td>\n                </tr>\n                <tr class=\"rows 1\">\n                    <td><span class=\"userName\">1</span></td>\n                    <td><span class=\"userName\">FMLXF8HJ</span></td>\n                    <td><span class=\"userName\">25</span></td>\n                    <td><span class=\"label label-info\">percentage</span></td>\n                    <td><span class=\"userName\">TripperBus / Christmas 2016\n                    <span class=\"fa fa-times\"></span>\n                    </span></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/codes/1/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n\n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"1\"><span class=\"fa fa-trash\"></span> Delete</a>\n\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-customers-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-group\"></i> Customers\n    </h1>\n    <ol class=\"breadcrumb admin-customers-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Customers</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-customers-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Customers\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Created</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr class=\"rows 6\">\n                    <td><span class=\"userName\">6</span></td>\n                    <td><span class=\"userName\">juanperez</span></td>\n                    <td><span class=\"userName\">juan@perez.com</span></td>\n                    <td>\n                        <span class=\"label label-success\">\n                            2016-09-27 20:07:01\n                        </span>\n                    </td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/users/6/edit?role=2\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n                            <a href=\"#delete\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"6\"><span class=\"fa fa-trash\"></span> Delete</a>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-main\">\n    <div class=\"pull-left hidden-xs\">\n        <strong>Copyright © 2017 <a href=\"https://tripperbus.com\">Tripper Bus</a>.</strong> All rights reserved.\n    </div>\n    <div class=\"pull-right hidden-xs\">\n        <b>Version</b> 0.1.1\n    </div>\n</div>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<header class=\"header admin-header\">\n    <a href=\"#\" class=\"logo\" style=\"color: white;\">\n        TripperBus\n    </a>\n    <nav class=\"navbar navbar-static-top \" role=\"navigation\">\n        <div class=\"navbar-right\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"dropdown user user-menu\">\n                    <a href=\"#\" class=\"dropdown-toggle admin-header-account\" data-toggle=\"dropdown\" style=\"\">\n                        <img src=\"./assets/common/img/dummy.png\" class=\"admin-header-user-img\" alt=\"User Image\"/>\n                        <span>Administrator<i class=\"caret\"></i></span>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-custom dropdown-menu-right\">\n                        <li>\n                            <a routerLink='/logout'><i class=\"fa fa-ban fa-fw pull-right\"></i> Logout</a>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</header>"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"admin-main-content-header\">\n    <h1>\n        <i class=\"fa fa-desktop\"></i> Control Panel Main Page\n    </h1>\n</section>\n\n<section class=\"panel admin-main-panel\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-pencil-square\"></span> To book a reservation or for any other date-specific process\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <form class=\"form-inline\" role=\"form\">\n            <div class=\"top30\">\n                <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                    <div class=\"form-group admin-main-form-control-custom\">\n                        <label>Outbound date:</label>\n                        <input type=\"text\" class=\"form-control\" value=\"\" name=\"choose_date\" id=\"choose_date\">\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                    <div class=\"form-group\">\n                        <label>Leaving from:</label>\n                        <select class=\"form-control admin-main-form-control-custom\" name=\"leaving_city\">\n                            <option value=\"newyork\">New York</option>\n                            <option value=\"bethesda_arlington\">Bethesda/Arlington</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                    <div class=\"form-group admin-main-form-control-custom\">\n                        <label>Return date:</label>\n                        <input type=\"text\" class=\"form-control\" value=\"\" name=\"return_date\" id=\"return_date\">  (optional)\n                    </div>\t\n                </div>\n                <div class=\"col-xs-12 col-sm-3 col-md-3\">\n                    <div class=\"form-group\">\n                        <label>Open next page in:</label>\n                        <select class=\"form-control admin-main-form-control-custom\" name=\"page_mode\">\n                            <option value=\"1\" selected=\"\">Regular Mode</option>\n                            <option value=\"2\">Bus Edit Mode</option>\n                            <option value=\"3\">Move People Mode</option>\n                        </select>\n                    </div>\t            \n                </div>\n                <div class=\"clearfix\"></div>\n                <div class=\"col-xs-12 text-center\">\n                    <div class=\"form-group\">\n                        <input type=\"button\" (click)=\"onPressGoButton()\" class=\"btn btn-green btn-lg promin_select sm-expandable\" name=\"submit\" value=\"Go\">\n                    </div>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n        </form>\n    </div>\n</section>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-pages-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-image\"></i> Pages\n    </h1>\n    <ol class=\"breadcrumb admin-pages-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Pages</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-pages-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Pages\n            <a href=\"http://tripperbus.infinixsoft.com/admin/users/create?role=1\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Page</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Title</th>\n                    <th>Enabled</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr>\n                    <td><span class=\"userName\">1</span></td>\n                    <td><span class=\"userName\">test</span></td>\n                    <td><span class=\"userName\">1</span></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/pages/1/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"1\"><span class=\"fa fa-trash\"></span> Delete</a>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-rates-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-ticket\"></i> Rates\n    </h1>\n    <ol class=\"breadcrumb admin-rates-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Rates</li>\n    </ol>\n</section>\n\n<section class=\"panel general\">\n    <header class=\"panel-heading tab-bg-dark-navy-blue\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\">\n                <a data-toggle=\"tab\" href=\"#home\">From New York City</a>\n            </li>\n            <li class=\"\">\n                <a data-toggle=\"tab\" href=\"#about\">From Washington DC</a>\n            </li>\n        </ul>\n    </header>\n    <div class=\"panel-body\">\n        <div class=\"tab-content\">\n            <div id=\"home\" class=\"tab-pane active\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped text-center\">\n                            <tbody>\n                                <tr>\n                                    <th>Segment</th>\n                                    <th>Rate</th>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <span>New York </span> &nbsp;\n                                        <span class=\"fa fa-arrow-right\"></span>&nbsp;\n                                        <span>Bethesda </span>\n                                        <div class=\"clearfix\"></div>\n                                        <span class=\"fa fa-circle\"></span>\n                                        <span class=\"fa fa-ellipsis-h\"></span>\n                                        <span class=\"fa fa-circle\"></span>\n                                        <span class=\"fa fa-ellipsis-h\"></span>\n                                        <span class=\"fa fa-circle-o\"></span>\n                                    </td>\n                                    <td>\n                                        <select class=\"form-control admin-rates-rate-select\" name=\"prices[1][1][3][]\">\n                                            <option value=\"1.00\">1.00</option>\n                                            <option value=\"1.50\">1.50</option>\n                                            <option value=\"2.00\">2.00</option>\n                                            <option value=\"2.50\">2.50</option>\n                                            <option value=\"3.00\">3.00</option>\n                                            <option value=\"3.50\">3.50</option>\n                                            <option value=\"4.00\">4.00</option>\n                                            <option value=\"4.50\">4.50</option>\n                                            <option value=\"5.00\">5.00</option>\n                                            <option value=\"5.50\">5.50</option>\n                                            <option value=\"6.00\">6.00</option>\n                                            <option value=\"6.50\">6.50</option>\n                                            <option value=\"7.00\">7.00</option>\n                                            <option value=\"7.50\">7.50</option>\n                                            <option value=\"8.00\">8.00</option>\n                                            <option value=\"8.50\">8.50</option>\n                                            <option value=\"9.00\">9.00</option>\n                                            <option value=\"9.50\">9.50</option>\n                                            <option value=\"10.00\">10.00</option>\n                                            <option value=\"10.50\">10.50</option>\n                                            <option value=\"11.00\">11.00</option>\n                                            <option value=\"11.50\">11.50</option>\n                                            <option value=\"12.00\">12.00</option>\n                                            <option value=\"12.50\">12.50</option>\n                                            <option value=\"13.00\">13.00</option>\n                                            <option value=\"13.50\">13.50</option>\n                                            <option value=\"14.00\">14.00</option>\n                                            <option value=\"14.50\">14.50</option>\n                                            <option value=\"15.00\">15.00</option>\n                                            <option value=\"15.50\">15.50</option>\n                                            <option value=\"16.00\">16.00</option>\n                                            <option value=\"16.50\">16.50</option>\n                                            <option value=\"17.00\">17.00</option>\n                                            <option value=\"17.50\">17.50</option>\n                                            <option value=\"18.00\">18.00</option>\n                                            <option value=\"18.50\">18.50</option>\n                                            <option value=\"19.00\">19.00</option>\n                                            <option value=\"19.50\">19.50</option>\n                                            <option value=\"20.00\">20.00</option>\n                                            <option value=\"20.50\">20.50</option>\n                                            <option value=\"21.00\">21.00</option>\n                                            <option value=\"21.50\">21.50</option>\n                                            <option value=\"22.00\">22.00</option>\n                                            <option value=\"22.50\">22.50</option>\n                                            <option value=\"23.00\">23.00</option>\n                                            <option value=\"23.50\">23.50</option>\n                                            <option value=\"24.00\">24.00</option>\n                                            <option value=\"24.50\">24.50</option>\n                                            <option value=\"25.00\">25.00</option>\n                                            <option value=\"25.50\">25.50</option>\n                                            <option value=\"26.00\">26.00</option>\n                                            <option value=\"26.50\">26.50</option>\n                                            <option value=\"27.00\" selected=\"\">27.00</option>\n                                            <option value=\"27.50\">27.50</option>\n                                            <option value=\"28.00\">28.00</option>\n                                            <option value=\"28.50\">28.50</option>\n                                            <option value=\"29.00\">29.00</option>\n                                            <option value=\"29.50\">29.50</option>\n                                            <option value=\"30.00\">30.00</option>\n                                            <option value=\"30.50\">30.50</option>\n                                            <option value=\"31.00\">31.00</option>\n                                            <option value=\"31.50\">31.50</option>\n                                            <option value=\"32.00\">32.00</option>\n                                            <option value=\"32.50\">32.50</option>\n                                            <option value=\"33.00\">33.00</option>\n                                            <option value=\"33.50\">33.50</option>\n                                            <option value=\"34.00\">34.00</option>\n                                            <option value=\"34.50\">34.50</option>\n                                            <option value=\"35.00\">35.00</option>\n                                            <option value=\"35.50\">35.50</option>\n                                            <option value=\"36.00\">36.00</option>\n                                            <option value=\"36.50\">36.50</option>\n                                            <option value=\"37.00\">37.00</option>\n                                            <option value=\"37.50\">37.50</option>\n                                            <option value=\"38.00\">38.00</option>\n                                            <option value=\"38.50\">38.50</option>\n                                            <option value=\"39.00\">39.00</option>\n                                            <option value=\"39.50\">39.50</option>\n                                            <option value=\"40.00\">40.00</option>\n                                            <option value=\"40.50\">40.50</option>\n                                            <option value=\"41.00\">41.00</option>\n                                            <option value=\"41.50\">41.50</option>\n                                            <option value=\"42.00\">42.00</option>\n                                            <option value=\"42.50\">42.50</option>\n                                            <option value=\"43.00\">43.00</option>\n                                            <option value=\"43.50\">43.50</option>\n                                            <option value=\"44.00\">44.00</option>\n                                            <option value=\"44.50\">44.50</option>\n                                            <option value=\"45.00\">45.00</option>\n                                            <option value=\"45.50\">45.50</option>\n                                            <option value=\"46.00\">46.00</option>\n                                            <option value=\"46.50\">46.50</option>\n                                            <option value=\"47.00\">47.00</option>\n                                            <option value=\"47.50\">47.50</option>\n                                            <option value=\"48.00\">48.00</option>\n                                            <option value=\"48.50\">48.50</option>\n                                            <option value=\"49.00\">49.00</option>\n                                            <option value=\"49.50\">49.50</option>\n                                            <option value=\"50.00\">50.00</option>\n                                        </select>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <span>New York </span> &nbsp;\n                                        <span class=\"fa fa-arrow-right\"></span>&nbsp;\n                                        <span>Arlington </span>\n                                        <div class=\"clearfix\"></div>\n                                        <span class=\"fa fa-circle\"></span>\n                                        <span class=\"fa fa-ellipsis-h\"></span>\n                                        <span class=\"fa fa-circle-o\"></span>\n                                        <span class=\"fa fa-ellipsis-h\"></span>\n                                        <span class=\"fa fa-circle\"></span>\n                                    </td>\n                                    <td>\n                                        <select class=\"form-control admin-rates-rate-select\" name=\"prices[1][1][2][]\">\n                                            <option value=\"1.00\">1.00</option>\n                                            <option value=\"1.50\">1.50</option>\n                                            <option value=\"2.00\">2.00</option>\n                                            <option value=\"2.50\">2.50</option>\n                                            <option value=\"3.00\">3.00</option>\n                                            <option value=\"3.50\">3.50</option>\n                                            <option value=\"4.00\">4.00</option>\n                                            <option value=\"4.50\">4.50</option>\n                                            <option value=\"5.00\">5.00</option>\n                                            <option value=\"5.50\">5.50</option>\n                                            <option value=\"6.00\">6.00</option>\n                                            <option value=\"6.50\">6.50</option>\n                                            <option value=\"7.00\">7.00</option>\n                                            <option value=\"7.50\">7.50</option>\n                                            <option value=\"8.00\">8.00</option>\n                                            <option value=\"8.50\">8.50</option>\n                                            <option value=\"9.00\">9.00</option>\n                                            <option value=\"9.50\">9.50</option>\n                                            <option value=\"10.00\">10.00</option>\n                                            <option value=\"10.50\">10.50</option>\n                                            <option value=\"11.00\">11.00</option>\n                                            <option value=\"11.50\">11.50</option>\n                                            <option value=\"12.00\">12.00</option>\n                                            <option value=\"12.50\">12.50</option>\n                                            <option value=\"13.00\">13.00</option>\n                                            <option value=\"13.50\">13.50</option>\n                                            <option value=\"14.00\">14.00</option>\n                                            <option value=\"14.50\">14.50</option>\n                                            <option value=\"15.00\">15.00</option>\n                                            <option value=\"15.50\">15.50</option>\n                                            <option value=\"16.00\">16.00</option>\n                                            <option value=\"16.50\">16.50</option>\n                                            <option value=\"17.00\">17.00</option>\n                                            <option value=\"17.50\">17.50</option>\n                                            <option value=\"18.00\">18.00</option>\n                                            <option value=\"18.50\">18.50</option>\n                                            <option value=\"19.00\">19.00</option>\n                                            <option value=\"19.50\">19.50</option>\n                                            <option value=\"20.00\">20.00</option>\n                                            <option value=\"20.50\">20.50</option>\n                                            <option value=\"21.00\">21.00</option>\n                                            <option value=\"21.50\" selected=\"\">21.50</option>\n                                            <option value=\"22.00\">22.00</option>\n                                            <option value=\"22.50\">22.50</option>\n                                            <option value=\"23.00\">23.00</option>\n                                            <option value=\"23.50\">23.50</option>\n                                            <option value=\"24.00\">24.00</option>\n                                            <option value=\"24.50\">24.50</option>\n                                            <option value=\"25.00\">25.00</option>\n                                            <option value=\"25.50\">25.50</option>\n                                            <option value=\"26.00\">26.00</option>\n                                            <option value=\"26.50\">26.50</option>\n                                            <option value=\"27.00\">27.00</option>\n                                            <option value=\"27.50\">27.50</option>\n                                            <option value=\"28.00\">28.00</option>\n                                            <option value=\"28.50\">28.50</option>\n                                            <option value=\"29.00\">29.00</option>\n                                            <option value=\"29.50\">29.50</option>\n                                            <option value=\"30.00\">30.00</option>\n                                            <option value=\"30.50\">30.50</option>\n                                            <option value=\"31.00\">31.00</option>\n                                            <option value=\"31.50\">31.50</option>\n                                            <option value=\"32.00\">32.00</option>\n                                            <option value=\"32.50\">32.50</option>\n                                            <option value=\"33.00\">33.00</option>\n                                            <option value=\"33.50\">33.50</option>\n                                            <option value=\"34.00\">34.00</option>\n                                            <option value=\"34.50\">34.50</option>\n                                            <option value=\"35.00\">35.00</option>\n                                            <option value=\"35.50\">35.50</option>\n                                            <option value=\"36.00\">36.00</option>\n                                            <option value=\"36.50\">36.50</option>\n                                            <option value=\"37.00\">37.00</option>\n                                            <option value=\"37.50\">37.50</option>\n                                            <option value=\"38.00\">38.00</option>\n                                            <option value=\"38.50\">38.50</option>\n                                            <option value=\"39.00\">39.00</option>\n                                            <option value=\"39.50\">39.50</option>\n                                            <option value=\"40.00\">40.00</option>\n                                            <option value=\"40.50\">40.50</option>\n                                            <option value=\"41.00\">41.00</option>\n                                            <option value=\"41.50\">41.50</option>\n                                            <option value=\"42.00\">42.00</option>\n                                            <option value=\"42.50\">42.50</option>\n                                            <option value=\"43.00\">43.00</option>\n                                            <option value=\"43.50\">43.50</option>\n                                            <option value=\"44.00\">44.00</option>\n                                            <option value=\"44.50\">44.50</option>\n                                            <option value=\"45.00\">45.00</option>\n                                            <option value=\"45.50\">45.50</option>\n                                            <option value=\"46.00\">46.00</option>\n                                            <option value=\"46.50\">46.50</option>\n                                            <option value=\"47.00\">47.00</option>\n                                            <option value=\"47.50\">47.50</option>\n                                            <option value=\"48.00\">48.00</option>\n                                            <option value=\"48.50\">48.50</option>\n                                            <option value=\"49.00\">49.00</option>\n                                            <option value=\"49.50\">49.50</option>\n                                            <option value=\"50.00\">50.00</option>\n                                        </select>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <span>Bethesda </span> &nbsp;\n                                        <span class=\"fa fa-arrow-right\"></span>&nbsp;\n                                        <span>Arlington </span>\n                                        <div class=\"clearfix\"></div>\n                                        <span class=\"fa fa-circle-o\"></span>\n                                        <span class=\"fa fa-ellipsis-h\"></span>\n                                        <span class=\"fa fa-circle\"></span>\n                                        <span class=\"fa fa-ellipsis-h\"></span>\n                                        <span class=\"fa fa-circle\"></span>\n                                    </td>\n                                    <td>\n                                        <select class=\"form-control admin-rates-rate-select\" name=\"prices[1][3][2][]\">\n                                            <option value=\"1.00\">1.00</option>\n                                            <option value=\"1.50\">1.50</option>\n                                            <option value=\"2.00\">2.00</option>\n                                            <option value=\"2.50\">2.50</option>\n                                            <option value=\"3.00\">3.00</option>\n                                            <option value=\"3.50\">3.50</option>\n                                            <option value=\"4.00\">4.00</option>\n                                            <option value=\"4.50\">4.50</option>\n                                            <option value=\"5.00\" selected=\"\">5.00</option>\n                                            <option value=\"5.50\">5.50</option>\n                                            <option value=\"6.00\">6.00</option>\n                                            <option value=\"6.50\">6.50</option>\n                                            <option value=\"7.00\">7.00</option>\n                                            <option value=\"7.50\">7.50</option>\n                                            <option value=\"8.00\">8.00</option>\n                                            <option value=\"8.50\">8.50</option>\n                                            <option value=\"9.00\">9.00</option>\n                                            <option value=\"9.50\">9.50</option>\n                                            <option value=\"10.00\">10.00</option>\n                                            <option value=\"10.50\">10.50</option>\n                                            <option value=\"11.00\">11.00</option>\n                                            <option value=\"11.50\">11.50</option>\n                                            <option value=\"12.00\">12.00</option>\n                                            <option value=\"12.50\">12.50</option>\n                                            <option value=\"13.00\">13.00</option>\n                                            <option value=\"13.50\">13.50</option>\n                                            <option value=\"14.00\">14.00</option>\n                                            <option value=\"14.50\">14.50</option>\n                                            <option value=\"15.00\">15.00</option>\n                                            <option value=\"15.50\">15.50</option>\n                                            <option value=\"16.00\">16.00</option>\n                                            <option value=\"16.50\">16.50</option>\n                                            <option value=\"17.00\">17.00</option>\n                                            <option value=\"17.50\">17.50</option>\n                                            <option value=\"18.00\">18.00</option>\n                                            <option value=\"18.50\">18.50</option>\n                                            <option value=\"19.00\">19.00</option>\n                                            <option value=\"19.50\">19.50</option>\n                                            <option value=\"20.00\">20.00</option>\n                                            <option value=\"20.50\">20.50</option>\n                                            <option value=\"21.00\">21.00</option>\n                                            <option value=\"21.50\">21.50</option>\n                                            <option value=\"22.00\">22.00</option>\n                                            <option value=\"22.50\">22.50</option>\n                                            <option value=\"23.00\">23.00</option>\n                                            <option value=\"23.50\">23.50</option>\n                                            <option value=\"24.00\">24.00</option>\n                                            <option value=\"24.50\">24.50</option>\n                                            <option value=\"25.00\">25.00</option>\n                                            <option value=\"25.50\">25.50</option>\n                                            <option value=\"26.00\">26.00</option>\n                                            <option value=\"26.50\">26.50</option>\n                                            <option value=\"27.00\">27.00</option>\n                                            <option value=\"27.50\">27.50</option>\n                                            <option value=\"28.00\">28.00</option>\n                                            <option value=\"28.50\">28.50</option>\n                                            <option value=\"29.00\">29.00</option>\n                                            <option value=\"29.50\">29.50</option>\n                                            <option value=\"30.00\">30.00</option>\n                                            <option value=\"30.50\">30.50</option>\n                                            <option value=\"31.00\">31.00</option>\n                                            <option value=\"31.50\">31.50</option>\n                                            <option value=\"32.00\">32.00</option>\n                                            <option value=\"32.50\">32.50</option>\n                                            <option value=\"33.00\">33.00</option>\n                                            <option value=\"33.50\">33.50</option>\n                                            <option value=\"34.00\">34.00</option>\n                                            <option value=\"34.50\">34.50</option>\n                                            <option value=\"35.00\">35.00</option>\n                                            <option value=\"35.50\">35.50</option>\n                                            <option value=\"36.00\">36.00</option>\n                                            <option value=\"36.50\">36.50</option>\n                                            <option value=\"37.00\">37.00</option>\n                                            <option value=\"37.50\">37.50</option>\n                                            <option value=\"38.00\">38.00</option>\n                                            <option value=\"38.50\">38.50</option>\n                                            <option value=\"39.00\">39.00</option>\n                                            <option value=\"39.50\">39.50</option>\n                                            <option value=\"40.00\">40.00</option>\n                                            <option value=\"40.50\">40.50</option>\n                                            <option value=\"41.00\">41.00</option>\n                                            <option value=\"41.50\">41.50</option>\n                                            <option value=\"42.00\">42.00</option>\n                                            <option value=\"42.50\">42.50</option>\n                                            <option value=\"43.00\">43.00</option>\n                                            <option value=\"43.50\">43.50</option>\n                                            <option value=\"44.00\">44.00</option>\n                                            <option value=\"44.50\">44.50</option>\n                                            <option value=\"45.00\">45.00</option>\n                                            <option value=\"45.50\">45.50</option>\n                                            <option value=\"46.00\">46.00</option>\n                                            <option value=\"46.50\">46.50</option>\n                                            <option value=\"47.00\">47.00</option>\n                                            <option value=\"47.50\">47.50</option>\n                                            <option value=\"48.00\">48.00</option>\n                                            <option value=\"48.50\">48.50</option>\n                                            <option value=\"49.00\">49.00</option>\n                                            <option value=\"49.50\">49.50</option>\n                                            <option value=\"50.00\">50.00</option>\n                                        </select>\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"clearfix\"></div>\n                        <div class=\"text-center\">\n                            <button class=\"btn btn-lg btn-success\" type=\"submit\"><span class=\"fa fa-check\"></span> Update All</button>\n                        </div>\n                        <div class=\"group-control\">&nbsp;</div> \n                    </div>\n            </div>\n            <div id=\"about\" class=\"tab-pane\">About</div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-md-4\" [hidden]=\"isHidden\">\n    \n    <div class=\"alert\" [ngClass]=\"getClass()\">\n            <h3 class=\"text-center\">BUS #{{selected_group_idx + 1}}</h3>\n\n            <div class=\"row\">\n                <div class=\"col-sm-5\">\n                    <h5 class=\"text-center\">Stop</h5>\n                </div>\n                <div class=\"col-sm-4\">\n                    <h5 class=\"text-center\">Hour</h5>\n                </div>\n                <div class=\"col-sm-3\">\n                    <h5 class=\"text-center\">Min</h5>\n                </div>\n            </div>\n            \n            <div id='detailed_info'>\n                <div class=\"row\" *ngFor = \"let group_item of selected_group; let i = index;\" >\n                    <div class=\"col-sm-5\">\n                        <select class=\"form-control\" [(ngModel)]=\"selected_stops[i]\" (ngModelChange)=\"onChangeStopsSelect($event, i)\" [disabled]=\"isDisabled\">\n                            <option *ngFor=\"let stop of arr_stops;\">{{stop}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <select class=\"form-control \" [(ngModel)]=\"selected_hours[i]\" (ngModelChange)=\"onChangeHoursSelect($event, i)\" [disabled]=\"isDisabled\">\n                            <option *ngFor=\"let hour of arr_hours\" value=\"{{hour['value']}}\">{{hour['text']}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <select class=\"form-control\" [(ngModel)]=\"selected_mins[i]\" (ngModelChange)=\"onChangeMinsSelect($event, i)\" [disabled]=\"isDisabled\">\n                            <option *ngFor=\"let min of arr_mins;\">{{min}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-xs-12 text-center\" style='padding-top: 15px;'>\n                    <button class=\"btn btn-sm btn-danger\" (click)=\"onRemove()\">Remove</button>\n                    <button *ngIf=\"!selected_group_disabled\" class=\"btn btn-sm btn-warning\" (click)=\"onDisable()\">Disable</button>\n                    <button *ngIf=\"selected_group_disabled\" class=\"btn btn-sm btn-warning\" style=\"background-color: green;\" (click)=\"onReenable()\">Re-enable</button>\n                </div>\n            </div>\n    </div>\n</div>\n\n<!--div id=\"confirm_remove_modal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Delete</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Are you sure you want to delete this?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"onRemove()\">Delete</button> \n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div id=\"confirm_disable_modal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Disable</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Are you sure you want to disable this?</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-danger\" (click)=\"onDisable()\">Disable</button> \n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            </div>\n        </div>\n\n    </div>\n</div -->\n"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-schedule-edit-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-clock-o\"></i> Schedule Times\n    </h1>\n    <ol class=\"breadcrumb admin-schedule-edit-breadcrumb-custom\">\n        <li><a routerLink=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li><a routerLink=\"/admin/schedules\"><i class=\"fa fa-clock-o\"></i> Schedule Times</a></li>\n        <li class=\"active\" id=\"li_header_detail\">{{ headerInfos.dow }} {{ headerInfos.after_on }} {{ headerInfos.date }} from {{ headerInfos.city }}</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-schedule-edit-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-pencil-square\"></span>\n            <span id=\"box_title_span\" *ngIf=\"inputParams.schedule_type == _scheduleService.w_hType.TYPE_WEEKLY\">Every {{ headerInfos.dow }} {{ headerInfos.after_on }} {{ headerInfos.date }} from  {{ headerInfos.city }}</span>\n            <span id=\"box_title_span\" *ngIf=\"inputParams.schedule_type == _scheduleService.w_hType.TYPE_HOLIDAY\">Holiday schedule on {{ headerInfos.date }} from  {{ headerInfos.city }}</span>\n            <a href=\"javascript:void(0)\" class=\"btn btn-xs btn-primary pull-right open-modal\" (click)=\"popupAddScheduleModal()\"><span class=\"fa fa-plus\"></span> Schedule</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <div *ngFor = \"let group of groups; let i = index;\">\n            <app-admin-schedule-edit-bus [group]=\"group\" [stops]=\"arr_stops\" [group_idx]=\"i\"></app-admin-schedule-edit-bus>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center form-group\">\n                <button class=\"btn btn-success btn-lg\" (click)=\"onSaveAll()\"><span class=\"fa fa-check\"></span> Save All </button>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<div id=\"add_schedule_modal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">\n                <span *ngIf=\"inputParams.button_type != _scheduleService.buttonType.TYPE_GENERATE_SPECIAL\">\n                    Generate Schedule {{ addModalHeaderInfos.after_on }} {{ addModalHeaderInfos.date }} from  {{ addModalHeaderInfos.city }}\n                </span>\n                <span *ngIf=\"inputParams.button_type == _scheduleService.buttonType.TYPE_GENERATE_SPECIAL\">\n                    Create Holiday Schedule on {{ addModalHeaderInfos.date }} from  {{ addModalHeaderInfos.city }}\n                </span>\n            </h4>\n        </div>\n      <div class=\"modal-body\">\n            <table class=\"table table-borderless text-center\">\n                <tbody>\n                    <tr>\n                        <th>Stop</th>\n                        <th>Hour</th>\n                        <th>Min</th>\n                        <th>Price</th>\n                    </tr>\n                    <tr>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_stops[0]\">\n                                <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_hours[0]\">\n                                <option *ngFor=\"let hour of arr_hours\" value=\"{{hour['value']}}\">{{hour['text']}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_mins[0]\">\n                                <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_prices[0]\">\n                                <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                            </select>\n                        </td>\n                    </tr>\n                    \n                    <tr>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_stops[1]\">\n                                <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_hours[1]\">\n                                <option *ngFor=\"let hour of arr_hours\" value=\"{{hour['value']}}\">{{hour['text']}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_mins[1]\">\n                                <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_prices[1]\">\n                                <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                            </select>\n                        </td>\n                    </tr>\n                    \n                    <tr>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_stops[2]\">\n                                <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_hours[2]\">\n                                <option *ngFor=\"let hour of arr_hours\" value=\"{{hour['value']}}\">{{hour['text']}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_mins[2]\">\n                                <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                            </select>\n                        </td>\n                        <td>\n                            <select class=\"form-control\" [(ngModel)]=\"adding_prices[2]\">\n                                <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                            </select>\n                        </td>\n                    </tr>\n                    \n                </tbody>\n            </table>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-warning pull-left\" data-dismiss=\"modal\">Close</button>\n            <button class=\"btn btn-success\" (click)=\"onAddSchedule()\">Add Schedule</button>\n        </div>\n    </div>\n\n  </div>\n</div>\n\n\n<div id=\"confirm_saveall_modal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Confirmations</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Successfully saved all bus reservations.</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">OK</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<!--div id=\"gen_new_schedule_modal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">\n                    <span>\n                        Generate New Schedule from {{ inputParams.date }}\n                    </span>\n                </h4>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-borderless text-center\">\n                    <tbody>\n                        <tr>\n                            <th>Stop</th>\n                            <th>Hour</th>\n                            <th>Min</th>\n                            <th>Price</th>\n                        </tr>\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[0]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[0]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[0]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[0]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[1]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[1]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[1]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[1]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[2]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[2]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[2]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[2]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            \n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-warning pull-left\" data-dismiss=\"modal\">Close</button>\n                <button class=\"btn btn-success\" (click)=\"onGenNewSchedule()\">Add Schedule</button>\n            </div>\n            \n        </div>\n\n    </div>\n</div>\n\n\n<div id=\"gen_special_schedule_modal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">\n                    <span>\n                        Generate Holiday Schedule on {{ inputParams.date }}\n                    </span>\n                </h4>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-borderless text-center\">\n                    <tbody>\n                        <tr>\n                            <th>Stop</th>\n                            <th>Hour</th>\n                            <th>Min</th>\n                            <th>Price</th>\n                        </tr>\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[0]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[0]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[0]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[0]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[1]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[1]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[1]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[1]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[2]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[2]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[2]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[2]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            \n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-warning pull-left\" data-dismiss=\"modal\">Close</button>\n                <button class=\"btn btn-success\" (click)=\"onGenSpecialSchedule()\">Add Schedule</button>\n            </div>\n            \n        </div>\n\n    </div>\n</div -->\n\n\n\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-schedule-gennew-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-clock-o\"></i> Schedule Times\n    </h1>\n    <ol class=\"breadcrumb admin-schedule-gennew-breadcrumb-custom\">\n        <li><a routerLink=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li><a routerLink=\"/admin/schedules\"><i class=\"fa fa-clock-o\"></i> Schedule Times</a></li>\n        <li class=\"active\" id=\"li_header_detail\">{{ selected_dow }} {{ selected_schedule_type }} {{ selected_date_from }} from {{ selected_stop }}</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-schedule-gennew-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-pencil-square\">\n                Every {{ selected_dow }} {{ selected_schedule_type }} {{ selected_date_from }} from {{ selected_stop }}\n            </span>\n            <a href=\"javascript:void(0)\" class=\"btn btn-xs btn-primary pull-right open-modal\" (click)=\"showModal()\"><span class=\"fa fa-plus\"></span> Schedule</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <div *ngFor = \"let group of groups; let i = index;\">\n            <app-admin-schedule-edit-bus [group]=\"group\" [stops]=\"stops\" [group_idx]=\"i\"></app-admin-schedule-edit-bus>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center form-group\">\n                <button class=\"btn btn-success btn-lg\" (click)=\"onSaveAll()\"><span class=\"fa fa-check\"></span> Save All </button>\n            </div>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-schedule-gennew-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-clock-o\"></i> Schedule Times\n    </h1>\n    <ol class=\"breadcrumb admin-schedule-gennew-breadcrumb-custom\">\n        <li><a routerLink=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li><a routerLink=\"/admin/schedules\"><i class=\"fa fa-clock-o\"></i> Schedule Times</a></li>\n        <li class=\"active\" id=\"li_header_detail\">{{ selected_dow }} {{ selected_schedule_type }} {{ selected_date_from }} from {{ selected_stop }}</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-schedule-genspecial-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-pencil-square\">\n                Every {{ selected_dow }} {{ selected_schedule_type }} {{ selected_date_from }} from {{ selected_stop }}\n            </span>\n            <a href=\"javascript:void(0)\" class=\"btn btn-xs btn-primary pull-right open-modal\" (click)=\"showModal()\"><span class=\"fa fa-plus\"></span> Schedule</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <div *ngFor = \"let group of groups; let i = index;\">\n            <app-admin-schedule-edit-bus [group]=\"group\" [stops]=\"stops\" [group_idx]=\"i\"></app-admin-schedule-edit-bus>\n        </div>\n        \n        <div class=\"row\">\n            <div class=\"col-sm-12 text-center form-group\">\n                <button class=\"btn btn-success btn-lg\" (click)=\"onSaveAll()\"><span class=\"fa fa-check\"></span> Save All </button>\n            </div>\n        </div>\n    </div>\n</section>\n\n<div id=\"gen_special_schedule_modal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">\n                    <span>\n                        Add Holiday Schedule on {{ sel_date }}\n                    </span>\n                </h4>\n            </div>\n            <div class=\"modal-body\">\n                <table class=\"table table-borderless text-center\">\n                    <tbody>\n                        <tr>\n                            <th>Stop</th>\n                            <th>Hour</th>\n                            <th>Min</th>\n                            <th>Price</th>\n                        </tr>\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[0]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[0]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[0]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[0]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[1]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[1]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[1]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[1]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                        <tr>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_stops[2]\">\n                                    <option *ngFor=\"let stop of arr_stops\" value=\"{{stop}}\">{{stop}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_hours[2]\">\n                                    <option *ngFor=\"let hour of arr_hours\" value=\"{{hour}}\">{{hour}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_mins[2]\">\n                                    <option *ngFor=\"let min of arr_mins\" value=\"{{min}}\">{{min}}</option>\n                                </select>\n                            </td>\n                            <td>\n                                <select class=\"form-control\" [(ngModel)]=\"adding_prices[2]\">\n                                    <option *ngFor=\"let price of arr_prices\" value=\"{{price}}\">{{price}}</option>\n                                </select>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            \n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-warning pull-left\" data-dismiss=\"modal\">Close</button>\n                <button class=\"btn btn-success\" (click)=\"onAddSchedule()\">Add Schedule</button>\n            </div>\n            \n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-schedules-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-calendar-o\"></i> Schedules\n    </h1>\n    <ol class=\"breadcrumb admin-schedules-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Schedules</li>\n    </ol>\n</section>\n\n<section class=\"panel general\">\n    <header class=\"panel-heading tab-bg-dark-navy-blue\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\">\n                <a data-toggle=\"tab\" href=\"#newyork\">From New York City</a>\n            </li>\n            <li class=\"\">\n                <a data-toggle=\"tab\" href=\"#bethesda\">From Bethesda/Arlington</a>\n            </li>\n        </ul>\n    </header>\n    <div class=\"panel-body\">\n        <div class=\"tab-content\">\n            <div id=\"newyork\" class=\"tab-pane active\">\n                <div class=\"h4 row\">\n                    <div class=\"col-xs-3 col-sm-3 col-md-3 text-left\">\n                        <a class=\"btn btn-info btn-calendar-prev-next\" href=\"javascript:void(0)\" (click)=\"prevMonth()\">« Previous</a> \n                    </div>\n                    <div class=\"col-xs-6 col-md-6 text-center small\">\n                        <b>\n                            <font color=\"red\">Special schedule.</font>\n                            <br>\n                            <font color=\"orange\"> New weekly schedule takes effect</font>\n                        </b>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-3 col-md-3 text-right\">\n                        <a class=\"btn btn-info btn-calendar-prev-next\" href=\"javascript:void(0)\" (click)=\"nextMonth()\">Next »</a> \n                    </div>\n                </div>\n                \n                <h2 class=\"text-center\" id=\"h2_year_month\">{{calendarInfo.cur_date_str}}</h2> \n                <div class=\"col-xs-12 hidden-xs\">\n                    <div class=\"row seven-cols weekdays\">\n                        <div class=\"col-md-1\">Sun</div>\n                        <div class=\"col-md-1\">Mon</div>\n                        <div class=\"col-md-1\">Tue</div>\n                        <div class=\"col-md-1\">Wed</div>\n                        <div class=\"col-md-1\">Thu</div>\n                        <div class=\"col-md-1\">Fri</div>\n                        <div class=\"col-md-1\">Sat</div>\n                    </div>\n                </div>\n                \n                <div class=\"col-xs-12 hidden-xs\">\n                    <div class=\"row seven-cols\">\n                        <div *ngFor=\"let item of month_firstday_dow\" class='col-md-1 fix-height' style='min-height: 0px;'></div>\n                        \n                        <div *ngFor=\"let item of dayinfos_in_month_newyork; let i=index;\" class='col-md-1 fix-height'>\n                            <div *ngIf=\"item['isHoliday'] == _scheduleService.w_hType.TYPE_HOLIDAY\">\n                                <div *ngIf=\"item['bus_cnt'] == 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_HOLIDAY)\" class='calendar_day_holiday'>{{i+1}}</h3><p class='calendar_day_holiday'>{{item['bus_cnt']}} bus</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] > 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_HOLIDAY)\" class='calendar_day_holiday'>{{i+1}}</h3><p class='calendar_day_holiday'>{{item['bus_cnt']}} buses</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item['isHoliday'] == _scheduleService.w_hType.TYPE_WEEKLY\">\n                                <div *ngIf=\"item['bus_cnt'] == 0\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_WEEKLY)\" >{{i+1}}</h3><p>0 bus</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] > 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_WEEKLY)\" >{{i+1}}</h3><p>{{item['bus_cnt']}} buses</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] == 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_WEEKLY)\" >{{i+1}}</h3><p>{{item['bus_cnt']}} bus</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item['isHoliday'] == _scheduleService.w_hType.TYPE_WEEKLY_NEW\">\n                                <div *ngIf=\"item['bus_cnt'] == 0\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_WEEKLY)\"  class='calendar_day_new_schedule'>{{i+1}}</h3><p class='calendar_day_new_schedule'>0 bus</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] > 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_WEEKLY)\" class='calendar_day_new_schedule'>{{i+1}}</h3><p class='calendar_day_new_schedule'>{{item['bus_cnt']}} buses</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] == 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_NEWYORK, _scheduleService.w_hType.TYPE_WEEKLY)\" class='calendar_day_new_schedule'>{{i+1}}</h3><p class='calendar_day_new_schedule'>{{item['bus_cnt']}} bus</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n            <div id=\"bethesda\" class=\"tab-pane\">\n                <div class=\"h4 row\">\n                    <div class=\"col-xs-3 col-sm-3 col-md-3 text-left\">\n                        <a class=\"btn btn-info btn-calendar-prev-next\" href=\"javascript:void(0)\" (click)=\"prevMonth()\">« Previous</a> \n                    </div>\n                    <div class=\"col-xs-6 col-md-6 text-center small\">\n                        <b>\n                            <font color=\"red\">Special schedule.</font>\n                            <br>\n                            <font color=\"orange\"> New weekly schedule takes effect</font>\n                        </b>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-3 col-md-3 text-right\">\n                        <a class=\"btn btn-info btn-calendar-prev-next\" href=\"javascript:void(0)\" (click)=\"nextMonth()\">Next »</a> \n                    </div>\n                </div>\n                \n                <h2 class=\"text-center\" id=\"h2_year_month\">{{calendarInfo.cur_date_str}}</h2> \n                <div class=\"col-xs-12 hidden-xs\">\n                    <div class=\"row seven-cols weekdays\">\n                        <div class=\"col-md-1\">Sun</div>\n                        <div class=\"col-md-1\">Mon</div>\n                        <div class=\"col-md-1\">Tue</div>\n                        <div class=\"col-md-1\">Wed</div>\n                        <div class=\"col-md-1\">Thu</div>\n                        <div class=\"col-md-1\">Fri</div>\n                        <div class=\"col-md-1\">Sat</div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 hidden-xs\">\n                    <div class=\"row seven-cols\">\n                        <div *ngFor=\"let item of month_firstday_dow\" class='col-md-1 fix-height' style='min-height: 0px;'></div>\n\n                        <div *ngFor=\"let item of dayinfos_in_month_ba; let i=index;\" class='col-md-1 fix-height'>\n                            <div *ngIf=\"item['isHoliday'] == _scheduleService.w_hType.TYPE_HOLIDAY\">\n                                <div *ngIf=\"item['bus_cnt'] == 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_HOLIDAY)\" class='calendar_day_holiday'>{{i+1}}</h3><p class='calendar_day_holiday'>{{item['bus_cnt']}} bus</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] > 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_HOLIDAY)\" class='calendar_day_holiday'>{{i+1}}</h3><p class='calendar_day_holiday'>{{item['bus_cnt']}} buses</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item['isHoliday'] == _scheduleService.w_hType.TYPE_WEEKLY\">\n                                <div *ngIf=\"item['bus_cnt'] == 0\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_WEEKLY)\" >{{i+1}}</h3><p>0 bus</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] > 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_WEEKLY)\" >{{i+1}}</h3><p>{{item['bus_cnt']}} buses</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] == 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_WEEKLY)\" >{{i+1}}</h3><p>{{item['bus_cnt']}} bus</p>\n                                </div>\n                            </div>\n                            <div *ngIf=\"item['isHoliday'] == _scheduleService.w_hType.TYPE_WEEKLY_NEW\">\n                                <div *ngIf=\"item['bus_cnt'] == 0\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_WEEKLY)\"  class='calendar_day_new_schedule'>{{i+1}}</h3><p class='calendar_day_new_schedule'>0 bus</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] > 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_WEEKLY)\" class='calendar_day_new_schedule'>{{i+1}}</h3><p class='calendar_day_new_schedule'>{{item['bus_cnt']}} buses</p>\n                                </div>\n                                <div *ngIf=\"item['bus_cnt'] == 1\">\n                                    <h3 (click)=\"onClickEachDate($event.target.innerText, _scheduleService.areaType.TYPE_BA, _scheduleService.w_hType.TYPE_WEEKLY)\" class='calendar_day_new_schedule'>{{i+1}}</h3><p class='calendar_day_new_schedule'>{{item['bus_cnt']}} bus</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<div class=\"modal fade\" id=\"schedule_per_day_modal_NY\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Schedule</h4>\n            </div>\n            <div class=\"modal-body\">\n                <a class=\"btn btn-success\" (click)=\"onEditSchedule(_scheduleService.areaType.TYPE_NEWYORK)\" > Edit exisiting</a>\n                <a class=\"btn btn-info\" (click)=\"onGenNewSchedule(_scheduleService.areaType.TYPE_NEWYORK)\" > Generate New</a>\n                <a class=\"btn btn-info\" *ngIf=\"sorted_groups_schedule_type == _scheduleService.w_hType.TYPE_WEEKLY\" (click)=\"onGenSpecialSchedule(_scheduleService.areaType.TYPE_NEWYORK)\"> Create Holiday</a>\n                \n                <h3>Current Schedule:</h3>\n                <div id='schedule_infos'>\n                    <div *ngFor=\"let group of sorted_groups; let i=index;\">\n                        <p><strong>Bus #{{i+1}}:</strong></p>\n                        <div *ngFor=\"let item of group;\">\n                            <p>{{item['time']}} from {{item[\"stop_area\"]}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n      \n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"schedule_per_day_modal_BA\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Schedule</h4>\n            </div>\n            <div class=\"modal-body\">\n                <a class=\"btn btn-success\" (click)=\"onEditSchedule(_scheduleService.areaType.TYPE_BA)\" > Edit exisiting</a>\n                <a class=\"btn btn-info\" (click)=\"onGenNewSchedule(_scheduleService.areaType.TYPE_BA)\" > Generate New</a>\n                <a class=\"btn btn-info\" *ngIf=\"sorted_groups_schedule_type == _scheduleService.w_hType.TYPE_WEEKLY\" (click)=\"onGenSpecialSchedule(_scheduleService.areaType.TYPE_BA)\"> Create Holiday</a>\n                \n                <h3>Current Schedule:</h3>\n                <div id='schedule_infos'>\n                    <div *ngFor=\"let group of sorted_groups; let i=index;\">\n                        <p><strong>Bus #{{i+1}}:</strong></p>\n                        <div *ngFor=\"let item of group;\">\n                            <p>{{item['time']}} from {{item[\"stop_area\"]}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>  \n      \n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-settings-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-cog\"></i> Settings\n    </h1>\n    <ol class=\"breadcrumb admin-settings-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Settings</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-settings-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-pencil-square\"></span> Settings\n            <a href=\"http://tripperbus.infinixsoft.com/admin/users/create?role=1\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Settings</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <div class=\"col-xs-12\">\n            <h1><span class=\"icon-settings\"></span> Site Settings</h1>\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Company Name:</label>\n                        <input type=\"text\" name=\"company_name\" class=\"form-control\" value=\"Tripper Bus\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Company Email:</label>\n                        <input type=\"text\" name=\"company_email\" class=\"form-control\" value=\"info@tripperbus.com\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Email From:</label>\n                        <input type=\"text\" name=\"email_from\" class=\"form-control\" value=\"Tripper Bus Reservations\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Reservation Footer:</label>\n                        <textarea name=\"reservation_footer\" class=\"form-control\" rows=\"20\">Please be at the bus stop at least 15 minutes before travel time, otherwise your seat may be assigned to another passenger.\n&lt;b&gt;Your seat is ONLY GUARANTEED for the pickup location you have specified when booking your ticket.&lt;/b&gt;\nThis ticket is non refundable. However, you may reschedule or put your  ticket on hold up until 12:00 am midnight prior to travel. Use the Edit My Trip feature on our website to do this. Alternatively, you may contact us at 1-718-834-9214 during business hours or email us at info@tripperbus.com. If you do not change the reservation before that time and don\\\\\\'t travel, your ticket will be forfeited.\n\n&lt;b&gt;Please note&lt;/b&gt;: On Saturdays, please call the following number for inquiries only: 703.339.0333\n\n\nPlease Note: We are not responsible for damaged, lost, or stolen packages during loading or unloading.\n\nTransportation provided by Q.T. Transport MC#453103\n\nFrom all of us at Tripper Bus - Have a safe trip!! </textarea>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Email Footer:</label>\n                        <textarea name=\"email_footers\" class=\"form-control\" rows=\"20\">Sincerely,\n\nThe Tripper Bus Company. \n\n_______________________________________________\n\n&lt;b&gt;Please note&lt;/b&gt;: On Saturdays, please call the following number for inquiries only: 703.339.0333\n\nWhen traveling with us, please be at the bus stop at least 15 minutes before travel time.\n\nPlease Note: your seat is ONLY GUARANTEED for the pickup location you have specified when booking your ticket.\n\nTo change or cancel any reservation, use the Edit My Trip feature on our website. Alternatively, you may call us toll-free at 1-718-834-9214. One of our reps will gladly help.\n\nSign-up &amp; become a member of our Rewards Program today!\nRemember : For every 8 one-way ticket or 4 round trip tickets you purchase under your account, you will receive a free one-way ticket next time you book with us!\n\nPlease Note: We are not responsible for damaged, lost, or stolen packages during loading or unloading.</textarea>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Allowed Advance Days:</label>\n                        <div class=\"text-info\">Number of days in advance you allow customers to reserve</div>\n                        <input type=\"text\" name=\"advance_reserve\" class=\"form-control\" value=\"60\" size=\"3\" maxlength=\"3\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Maximum Reserve:</label>\n                        <div class=\"text-info\">Maximum seats customers may reserve per each reservation</div>\n                        <input type=\"text\" name=\"max_reserve\" class=\"form-control\" value=\"49\" size=\"2\" maxlength=\"2\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Default Maximum Capacity:</label>\n                        <div class=\"text-info\">When adding new buses, this will be the changeable default</div>\n                        <input type=\"text\" name=\"default_max_cap\" class=\"form-control\" value=\"57\" size=\"3\" maxlength=\"3\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Customer Reservation Deadline:</label>\n                        <div class=\"text-info\">Minutes before a schedule time customers can no longer reserve</div>\n                        <input type=\"text\" name=\"reserve_deadline\" class=\"form-control\" value=\"30\" size=\"3\" maxlength=\"3\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Email customer notes to admin email:</label>\n                        <div class=\"text-info\">If selected, notes customers write when they reserve are emailed to admin's email</div>\n                        <select name=\"email_notes_ta\" size=\"1\">\n                            <option selected=\"\" value=\"1\">Yes</option>\n                            <option value=\"2\">No</option>\n                        </select>\n                    </div>\n                </div>\n            </div>    \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Marquee Scroll:</label>\n                        <div class=\"text-info\">The text on top of every page upper right sight that scrolls - (Limit: 500 characters)</div>\n                        <textarea name=\"marquee\" class=\"form-control\" rows=\"20\">Our new website - what do you say to it?</textarea>\n                    </div>\n                </div>\n            </div>      \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Special Announcement:</label>\n                        <div class=\"text-info\">If this is not empty, it will apear on home page  &amp; first reservation page as special announcement in a red box</div>\n                        <textarea name=\"special_announcement\" class=\"form-control\" rows=\"20\"></textarea>\n                    </div>\n                </div>\n            </div>      \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Reservation Fee When Booking Reservation:</label>\n                        <div class=\"text-info\">This is the reservation fee per seat when booking the reservation initially, both through the website or admin</div>\n                        <input type=\"text\" name=\"reservation_initial_fee\" class=\"form-control\" value=\"1.25\" size=\"8\" maxlength=\"5\">\n                    </div>\n                </div>\n            </div>   \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Reservation Fee - (Rescheduling):</label>\n                        <div class=\"text-info\">This is the reservation fee per whole group when modifying existing reservations both through the website or admin</div>\n                        <input type=\"text\" name=\"reservation_reschedule_fee\" class=\"form-control\" value=\"1.00\" size=\"8\" maxlength=\"5\">\n                    </div>\n                </div>\n            </div>  \n\n            <h3>Messages</h3>\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Important Message:</label>\n                        <div class=\"text-info\">If this is not empty, it will apear on all reservation pages as special announcement in red lettering</div>\n                        <textarea name=\"important_message\" class=\"form-control\" rows=\"20\"></textarea>\n                    </div>\n                </div>\n            </div>  \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Error Message:</label>\n                        <div class=\"text-info\">If this is not empty, it will apear on all reservation pages as error message in red lettering when something maybe goes wrong. </div>\n                        <textarea name=\"error_message\" class=\"form-control\" rows=\"20\">Something happened on the way of processing this section. Please try again later.</textarea>\n                    </div>\n                </div>\n            </div> \n\n            <!-- h3>Payment Gateway</h3>\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Payment Gateway (Production):</label>\n                        <div class=\"text-info\">URL pointing to third party payment gateway service when transactions are meant to be real</div>\n                        <textarea name=\"payment_auth_net_url\" class=\"form-control\" rows=\"2\">https://secure.authorize.net/gateway/transact.dll</textarea>\n                    </div>\n                </div>\n            </div>  \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Payment Gateway (Testing):</label>\n                        <div class=\"text-info\">URL pointing to third party payment gateway service when transactions are meant to be tested</div>\n                        <textarea name=\"payment_auth_test_url\" class=\"form-control\" rows=\"2\">https://test.authorize.net/gateway/transact.dll</textarea>\n                    </div>\n                </div>\n            </div>  \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Payment Gateway XL Key:</label>\n                        <div class=\"text-info\">Please be very careful with this information</div>\n                        <input type=\"text\" name=\"payment_auth_key_x_l\" class=\"form-control\" value=\"839K8uarKj3r\">\n                    </div>\n                </div>\n            </div>  \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Payment Gateway XT Key:</label>\n                        <div class=\"text-info\">Please be very careful with this information</div>\n                        <input type=\"text\" name=\"payment_auth_key_x_t\" class=\"form-control\" value=\"48c79Gc2Uh2gT28B\">\n                    </div>\n                </div>\n            </div>  \n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Gateway Payment Test Mode:</label>\n                        <div class=\"checkbox switch\">\n                            <input type=\"checkbox\" name=\"payment_auth_test\" checked=\"\" value=\"1\">\n                            <span class=\"cs-place\">\n                                <span class=\"cs-handler\"></span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n\n\n            <div class=\"col-xs-12\">\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <label>Take site offline:</label>\n                        <div class=\"checkbox switch\">\n                            <input type=\"checkbox\" name=\"working_on_site\" value=\"1\">\n                            <span class=\"cs-place\">\n                                <span class=\"cs-handler\"></span>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n            </div -->  \n            <div class=\"form-group\">\n                <button type=\"submit\" class=\"btn btn-green btn-lg\" value=\"Guardar\">Update</button>\n            </div>                  \n        </div>\n    </div>\n</section>"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<aside class=\"left-side sidebar-offcanvas admin-sidebar-aside admin-sidebar\">\n    <section class=\"sidebar\">\n        <!-- Sidebar user panel -->\n        <div class=\"user-panel\">\n            <div class=\"pull-left image\">\n                <img src=\"./assets/common/img/dummy.png\" class=\"img-circle\" alt=\"User Image\">\n            </div>\n            <div class=\"pull-left info\">\n                <p>Administrator</p>\n                <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n            </div>\n        </div>\n        <!-- search form -->\n        <form action=\"#\" method=\"get\" class=\"sidebar-form admin-sidebar-form-custom\">\n            <div class=\"input-group\">\n                <input type=\"text\" name=\"q\" class=\"form-control admin-sidebar-search-input\" placeholder=\"Search...\" >\n                <span class=\"input-group-btn\">\n                    <button type=\"submit\" name=\"seach\" id=\"search-btn\" class=\"btn btn-flat admin-sidebar-search-btn\"><i class=\"fa fa-search\"></i></button>\n                </span>\n            </div>\n        </form>\n        <!-- sidebar menu: : style can be found in sidebar.less -->\n        <ul class=\"sidebar-menu\">\n            <li class=\"sidebar-menu-li\">\n                <a routerLink='/admin/schedules' routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-calendar-o\"></i> <span>Schedules</span>\n                </a>\n            </li>\n            <li class=\"sidebar-menu-li\">\n                <a routerLink=\"/admin/stops\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-bus\"></i> <span>Stops</span>\n                </a>\n            </li>\n            <li class=\"sidebar-menu-li\">\n                <a routerLink=\"/admin/rates\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-ticket\"></i> <span>Rates</span>\n                </a>\n            </li>\n            <li class=\"sidebar-menu-li\">\n                <a routerLink=\"/admin/areas\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-crop\"></i> <span>Areas</span>\n                </a>\n            </li>\n            <li class=\"sidebar-menu-li\">\n                <a routerLink=\"/admin/users\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-user\"></i> <span>Users</span>\n                </a>\n            </li>\n            <li class=\"sidebar-menu-li\">\n                <a routerLink=\"/admin/customers\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-group\"></i> <span>Customers</span>\n                </a>\n            </li>\n            <li class=\"sidebar-menu-li\">\n                <a routerLink=\"/admin/pages\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-image\"></i> <span>Pages</span>\n                </a>\n            </li>\n            <li class=\"\">\n                <a href=\"javascript:void(0);\" id=\"treeview-coupons\">\n                    <i class=\"fa fa-tags\"></i> <span>Coupons</span> <i class=\"fa fa-angle-left pull-right\"></i> <i class=\"fa fa-angle-down pull-right\" style=\"display: none;\"></i>\n                </a>\n                <div id=\"admin-sidebar-coupons-details\" style=\"display: none;\">\n                    <ul id=\"admin-sidebar-coupons-details-ul\">\n                        <li>\n                            <a routerLink=\"/admin/coupons\" routerLinkActive=\"admin-sidebar-router-active\">\n                                <i class=\"fa fa-tags\"></i> <span>Coupons</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/admin/coupons-campaigns\" routerLinkActive=\"admin-sidebar-router-active\">\n                                <i class=\"fa fa-tags\"></i> <span>Campaigns</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/admin/coupons-companies\" routerLinkActive=\"admin-sidebar-router-active\">\n                                <i class=\"fa fa-tags\"></i> <span>Companies</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/admin/coupons-types\" routerLinkActive=\"admin-sidebar-router-active\">\n                                <i class=\"fa fa-tags\"></i> <span>Types</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </li>\n            <li class=\"admin-sidebar-settings-li sidebar-menu-li\">\n                <a routerLink=\"/admin/settings\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-cog\"></i> <span>Settings</span>\n                </a>\n            </li>\n            <li class=\"sidebar-menu-li\">\n                <a routerLink=\"/admin/reports\" routerLinkActive=\"admin-sidebar-router-active\">\n                    <i class=\"fa fa-line-chart\"></i> <span>Reports</span>\n                </a>\n            </li>\n        </ul>\n    </section>\n    <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-stops-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-bus\"></i> Stops\n    </h1>\n    <ol class=\"breadcrumb admin-stops-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Stops</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-stops-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Stops\n            <a href=\"http://tripperbus.infinixsoft.com/admin/stops/create\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Stop</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Order</th>\n                    <th>Admin Address</th>\n                    <th>City</th>\n                    <th>Area</th>\n                    <th>Status</th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><span>1</span></td>\n                    <td><span>1</span></td>\n                    <td><span>New York</span></td>\n                    <td>New York, NY 10001</td>\n                    <td>New York City </td>\n                    <td><span class=\"label label-success\">ACTIVE</span></td>\n                    <td>\n                        <div class=\"btn-group\">\n                            <a href=\"http://tripperbus.infinixsoft.com/admin/stops/1/edit\" class=\"btn btn-xs btn-success\"><span class=\"fa fa-pencil\"></span> Edit</a>  \n                            <a href=\"#\" class=\"btn btn-xs btn-danger btn-select\" data-toggle=\"modal\" data-target=\"#delete-modal\" data-id=\"1\"><span class=\"fa fa-trash\"></span> Delete</a>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header admin-users-content-header-custom\">\n    <h1>\n        <i class=\"fa fa-user\"></i> Users\n    </h1>\n    <ol class=\"breadcrumb admin-users-breadcrumb-custom\">\n        <li><a href=\"/admin\"><i class=\"fa fa-dashboard\"></i> Main</a></li>\n        <li class=\"active\">Users</li>\n    </ol>\n</section>\n\n<section class=\"panel admin-main-panel admin-users-main-panel-custom\">\n    <header class=\"panel-heading\">\n        <h3 class=\"box-title\">\n            <span class=\"fa fa-list-alt\"></span> Users\n            <a href=\"http://tripperbus.infinixsoft.com/admin/users/create?role=1\" class=\"btn btn-xs btn-primary pull-right\"><span class=\"fa fa-plus\"></span> Add User</a>\n        </h3>\n    </header>\n    <div class=\"panel-body\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Created</th>\n                    <th width=\"200\">&nbsp;</th>\n                </tr>\n            </thead>\n            <tbody class=\"table\">\n                <tr>\n                    <td><span class=\"userName\">1</span></td>\n                    <td><span class=\"userName\">admin</span></td>\n                    <td><span class=\"userName\">admin@tripperbus.com</span></td>\n                    <td>\n                        <span class=\"label label-success\">\n                            2016-09-07 02:57:58\n                        </span>\n                    </td>\n                    <td>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-root\">\n    <app-admin-header></app-admin-header>\n    <div class=\"admin-left\">\n        <app-admin-sidebar></app-admin-sidebar>\n    </div>\n    <div class=\"admin-right\">\n        <div class=\"admin-right-content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <app-admin-footer></app-admin-footer>\n</div>\n\n"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = "\n\n<section class=\"panel login-panel-custom\">\n    <header class=\"panel-heading login-panel-heading-custom\">\n        <h3 class=\"login-panel-heading-h3\">Login to TripperBus</h3>\n    </header>\n    <div class=\"panel-body\">\n        <div class=\"form-inline\">\n            \n            <div class=\"alert alert-block alert-danger\" [style.display] = \"alert_visible\">\n                <strong>Log in fail!</strong> Please try again.\n            </div>\n            \n            <div class=\"login-form-firstline\">\n                <div class=\"form-group login-form-group-custom\">\n                    <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Enter email\">\n                </div>\n                <div class=\"form-group login-form-group-custom\" style=\"float: right;\">\n                    <label class=\"sr-only\" for=\"exampleInputPassword2\">Password</label>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\">\n                </div>\n            </div>\n\n            <div class=\"login-form-secondline\">\n                <!--div class=\"checkbox\" style=\"float: left;\">\n                    <label>\n                        <input type=\"checkbox\"> Remember me\n                    </label>\n                    <div style=\"padding: 5px 0px;\">\n                        <a class=\"\" href=\"http://tripperbus.infinixsoft.com/password/reset\" style=\"color: #2bbbc1; text-decoration: underline;\">Forgot Your Password?</a>\n                        <a class=\"\" href=\"http://tripperbus.infinixsoft.com/register\" style=\"color: #2bbbc1; text-decoration: underline;\">Register</a>\n                    </div>\n                </div-->\n                <button (click)=\"onPostLogin()\" class=\"btn btn-success login-btn\" style=\"float: right;\">LOG ME IN</button>\n            </div>\n        </div>\n        \n    </div>\n</section>"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container\">\n        <div class=\"footer_in\">\n            <div class=\"footer_cnt clearfix\">\n                <div class=\"links link_travel\">\n                    <h4>Travel Information</h4>\n                    <ul>\n                        <li><a href=\"/locations\">Travel Information</a></li>\n                        <li><a href=\"/parking-locations\">Parking Locations</a></li>\n                        <li><a href=\"/pickup-locations\">Pickup Locations</a></li>\n                        <li><a href=\"/travel-maps\">Travel Maps</a></li>\n                        <li><a href=\"/hotels\">Hotels</a></li>\n                    </ul>\n                </div>\n                <div class=\"links link_abt\">\n                    <h4>More About Tripper Bus</h4>\n                    <ul>\n                        <li><a href=\"/about\">About Us</a></li>\n                        <li><a href=\"/our-advantage\">Our Advantage</a></li>\n                        <li><a href=\"/buses\">Tripper Buses</a></li>\n                        <li><a href=\"/resources\">Free Resources </a></li>\n                        <li><a href=\"/press\">Media Center </a></li>\n                    </ul>\n                </div>\n                <div class=\"links link_service\">\n                    <h4>Customer Service</h4>\n                    <ul>\n                        <li><a href=\"/contact-us\">Contact Us</a></li>\n                        <li><a href=\"/faq\">FAQs</a></li>\n                        <li><a href=\"/guarantee\">100% Guarantee</a></li>\n                        <li><a href=\"/terms-of-service\">Terms of Service</a></li>\n                        <li><a href=\"/privacy-policy\">Privacy Policy </a></li>\n                    </ul>\n                </div>\n                <div class=\"links link_cantact\">\n                    <h4>Contact Us</h4>\n                    <ul>\n                        <li><span>Phone:</span> <a href=\"tel:18778263874\">1-877-826-3874</a></li>\n                        <li><span>Email:</span> <a href=\"mailto:info@tripperbus.com\">info@tripperbus.com</a></li>\n                    </ul>\n                    <ul class=\"socialicons\">\n                        <li>\n                            <a href=\"https://twitter.com/tripperbus\" target=\"_blank\">\n                                <i class=\"fa fa-twitter\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://www.facebook.com/TripperBus\" target=\"_blank\">\n                                <i class=\"fa fa-facebook\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://plus.google.com/+TripperbusNYCtoDC\" target=\"_blank\">\n                                <i class=\"fa fa-google-plus\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://www.instagram.com/tripperbus\" target=\"_blank\">\n                                <i class=\"fa fa-instagram\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>                    \n            </div>\n            <div class=\"copy\">\n                <div class=\"footer_logo\">\n                    <a href=\"#\">\n                        <img class=\"main-footer-logo-img\" src=\"./assets/img/trippberbus_footer_logo.png\" width=\"80\" height=\"21\" alt=\" logo\">\n                    </a>\n                </div>\n                <p>Copyright ⓒ 2017 TripperBus.</p>     \n                <p class=\"flt_rt\">All rights reserved.</p>               \n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-header-nav\"> \n    <a href=\"#\" class=\"logo\" style=\"color: white;\">\n            <h1 class=\"fl logo\"><img src=\"./assets/img/tripperbus_logo.png\" width=\"120\" height=\"45\"></h1>\n    </a>\n    <ul class=\"fl menu-right\">\n            <li>\n                <a href=\"/reserve\" class=\"\">Reserve</a>\n            </li>\n            <li>\n                <a href=\"/locations\" class=\"\">Locations</a>\n            </li>\n            <li>\n                <a href=\"/about\" class=\"\">About</a>\n            </li>\n            <li>\n                <a href=\"/offers\" class=\"\">Offers in the city</a>\n            </li>\n            <li class=\"more-menu\">\n                <a class=\"more\">More</a>\n            </li>\n            <li class=\"mobile-only\">\n                <a href=\"/edit-ticket\">Edit my ticket</a>\n            </li>\n            <li class=\"customer-login-btn mobile-only\">\n                <a href=\"/login\">Return Customer Log In</a>\n            </li>\n    </ul>\n</nav>"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-root\">\n    <!--app-main-header></app-main-header -->\n    <div class=\"main-content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n<!-- app-main-footer></app-main-footer -->\n"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>"

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKEND_SERVER_URL; });
//export const BACKEND_SERVER_URL = "http://localhost/TripperBus_Backend/";
var BACKEND_SERVER_URL = "http://54.214.196.171/TripperBus/public/";
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/config.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleService = (function () {
    function ScheduleService() {
        this.buttonType = {
            TYPE_EDIT_EXISTING: 0,
            TYPE_GENERATE_NEW: 1,
            TYPE_GENERATE_SPECIAL: 2
        };
        this.w_hType = {
            TYPE_HOLIDAY: 0,
            TYPE_WEEKLY: 1,
            TYPE_WEEKLY_NEW: 2,
        };
        this.scheduleDisabilty = {
            TYPE_ENABLED: 1,
            TYPE_DISABLED: 0,
        };
        this.areaType = {
            TYPE_NEWYORK: 1,
            TYPE_BA: 2,
        };
    }
    ScheduleService.prototype.convertMonthFormat = function (m) {
        var month = new Array();
        month[0] = "JANUARY";
        month[1] = "FEBRUARY";
        month[2] = "MARCH";
        month[3] = "APRIL";
        month[4] = "MAY";
        month[5] = "JUNE";
        month[6] = "JULY";
        month[7] = "AGUEST";
        month[8] = "SEPTEMBER";
        month[9] = "OCTOBER";
        month[10] = "NOVEMBER";
        month[11] = "DECEMBER";
        return month[m];
    };
    ScheduleService.prototype.convertDayOfWeekFormat = function (w) {
        var dow = new Array();
        dow[0] = "Sunday";
        dow[1] = "Monday";
        dow[2] = "Tuesday";
        dow[3] = "Wednesday";
        dow[4] = "Thursday";
        dow[5] = "Friday";
        dow[6] = "Saturday";
        return dow[w];
    };
    ScheduleService.prototype.convertWeekToNumber = function (w) {
        var dow = new Array();
        dow["Sunday"] = 0;
        dow["Monday"] = 1;
        dow["Tuesday"] = 2;
        dow["Wednesday"] = 3;
        dow["Thursday"] = 4;
        dow["Friday"] = 5;
        dow["Saturday"] = 6;
        return dow[w];
    };
    ScheduleService.prototype.getLatestWeeklyDate = function (param_dateArray) {
        var max = param_dateArray[0];
        for (var i = 0; i < Object.keys(param_dateArray).length; i++) {
            var item = param_dateArray[i];
            var ts = new Date(item).getTime();
            var ts_max = new Date(max).getTime();
            if (ts_max < ts) {
                max = item;
            }
        }
        return max;
    };
    ScheduleService.prototype.getCityName = function (w) {
        var city = new Array();
        city[1] = "New York";
        city[2] = "BETHESDA/ARLINGTON";
        return city[w];
    };
    ScheduleService.prototype.collectGroupIDs = function (infoArray) {
        var group_ids = [];
        for (var i = 0; i < Object.keys(infoArray).length; i++) {
            var item = infoArray[i];
            if (group_ids.indexOf(item['group_id']) == -1) {
                group_ids.push(item['group_id']);
            }
        }
        return group_ids;
    };
    ScheduleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ScheduleService);
    return ScheduleService;
}());
//# sourceMappingURL=E:/CurrentProjects/TripperBus/FrontEnd/dev/src/schedule.service.js.map

/***/ })

},[1143]);
//# sourceMappingURL=main.bundle.map